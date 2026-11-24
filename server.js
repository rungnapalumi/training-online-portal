const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

// Trust proxy for secure cookies behind Render's proxy
app.set('trust proxy', 1);

// User roles configuration - define what each user can access
const USER_ROLES = {
  'Admin': {
    role: 'admin',
    allowedPages: ['all'], // Can access everything
    redirectAfterLogin: '/'
  },
  'The Mall': {
    role: 'tutorial-only',
    allowedPages: ['/tutorials', '/tutorials.html'],
    redirectAfterLogin: '/tutorials'
  }
};

// Default role for users not in USER_ROLES
const DEFAULT_ROLE = {
  role: 'tutorial-only',
  allowedPages: ['/tutorials', '/tutorials.html'],
  redirectAfterLogin: '/tutorials'
};

function getUserRole(username) {
  return USER_ROLES[username] || DEFAULT_ROLE;
}

// Parse environment variables for authorized users
// Format: PORTAL_USERS={"The Mall":"password123","Client Name":"pass456"}
function parseAuthorizedUsers() {
  const users = new Map();
  
  // Primary format: JSON object with username:password pairs
  const usersEnv = process.env.PORTAL_USERS;
  if (usersEnv) {
    try {
      const usersObj = JSON.parse(usersEnv);
      Object.entries(usersObj).forEach(([username, password]) => {
        if (username && password) {
          // Store with exact username (preserving spaces and case)
          users.set(username, password);
        }
      });
      console.log(`✓ Loaded ${users.size} authorized user(s) from PORTAL_USERS`);
    } catch (err) {
      console.error('ERROR: Failed to parse PORTAL_USERS as JSON:', err.message);
      console.error('Expected format: {"Username One":"password1","Username Two":"password2"}');
      process.exit(1);
    }
  }
  
  // Fallback: single user format for simple deployments
  const singleUser = process.env.PORTAL_USERNAME;
  const singlePass = process.env.PORTAL_PASSWORD;
  
  if (singleUser && singlePass && users.size === 0) {
    users.set(singleUser, singlePass);
    console.log(`✓ Loaded single user from PORTAL_USERNAME/PORTAL_PASSWORD`);
  }
  
  // Development fallback only if NO credentials configured
  if (users.size === 0) {
    console.warn('⚠️  WARNING: No credentials configured. Using default admin/admin for DEVELOPMENT ONLY');
    console.warn('⚠️  Set PORTAL_USERS environment variable for production');
    users.set('admin', 'admin');
  }
  
  return users;
}

const authorizedUsers = parseAuthorizedUsers();

// Secure password comparison to prevent timing attacks
function secureCompare(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    return false;
  }
  
  const bufferA = Buffer.from(a);
  const bufferB = Buffer.from(b);
  
  if (bufferA.length !== bufferB.length) {
    return false;
  }
  
  return crypto.timingSafeEqual(bufferA, bufferB);
}

// Validate credentials
function validateCredentials(username, password) {
  if (!username || !password) {
    return false;
  }
  
  const storedPassword = authorizedUsers.get(username);
  if (!storedPassword) {
    return false;
  }
  
  return secureCompare(password, storedPassword);
}

// Session configuration
const sessionSecret = process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex');
if (!process.env.SESSION_SECRET) {
  console.warn('WARNING: SESSION_SECRET not set. Using random secret (sessions will not persist across restarts)');
}

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Authentication middleware
function requireAuth(req, res, next) {
  if (req.session && req.session.authenticated) {
    return next();
  }
  
  // For API/AJAX requests, return 401
  if (req.xhr || req.headers.accept?.includes('application/json')) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  
  // For page requests, redirect to login
  res.redirect('/login');
}

// Login page (public)
app.get('/login', (req, res) => {
  if (req.session && req.session.authenticated) {
    return res.redirect('/');
  }
  
  // Security: Never allow credentials in query params - redirect to clean URL
  if (req.query.username || req.query.password) {
    console.warn('⚠️  Credentials detected in GET query string - redirecting to clean /login');
    return res.redirect('/login');
  }
  
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Login endpoint - handles both JSON (fetch) and form-urlencoded (native submit)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if (validateCredentials(username, password)) {
    req.session.authenticated = true;
    req.session.username = username;
    
    const userRole = getUserRole(username);
    const redirectTo = userRole.redirectAfterLogin;
    
    // Check if request expects JSON (from fetch) or HTML (from form)
    const wantsJson = req.headers.accept?.includes('application/json') || 
                      req.headers['content-type']?.includes('application/json');
    
    if (wantsJson) {
      // JavaScript fetch request - return JSON
      res.json({ 
        success: true, 
        redirectTo: redirectTo
      });
    } else {
      // Native form submission - redirect directly
      res.redirect(redirectTo);
    }
  } else {
    // Check if request expects JSON
    const wantsJson = req.headers.accept?.includes('application/json') || 
                      req.headers['content-type']?.includes('application/json');
    
    if (wantsJson) {
      res.status(401).json({ success: false, error: 'Invalid username or password' });
    } else {
      // Form submission - redirect back to login with error
      // Note: In production, you'd use flash messages or query params
      res.redirect('/login?error=invalid');
    }
  }
});

// Logout endpoint
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ error: 'Logout failed' });
    }
    res.json({ success: true });
  });
});

// Get current user info (requires auth)
app.get('/api/user', (req, res) => {
  if (req.session && req.session.authenticated) {
    const userRole = getUserRole(req.session.username);
    res.json({ 
      authenticated: true, 
      username: req.session.username,
      role: userRole.role,
      allowedPages: userRole.allowedPages
    });
  } else {
    res.status(401).json({ authenticated: false });
  }
});

// Health check endpoint (public)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', authenticated: !!req.session?.authenticated });
});

// Allow static assets for login page (CSS, fonts, images, logo) - PUBLIC
app.use('/styles.css', express.static(path.join(__dirname, 'styles.css')));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/LibreBaskerville-VariableFont_wght.ttf', express.static(path.join(__dirname, 'LibreBaskerville-VariableFont_wght.ttf')));
app.use('/LibreBaskerville-Italic-VariableFont_wght.ttf', express.static(path.join(__dirname, 'LibreBaskerville-Italic-VariableFont_wght.ttf')));
app.use('/brand-logo.png', express.static(path.join(__dirname, 'brand-logo.png')));

// Authorization middleware - check if user has access to requested page
function checkPageAccess(req, res, next) {
  if (!req.session || !req.session.authenticated) {
    return next(); // Let requireAuth handle unauthenticated
  }
  
  const username = req.session.username;
  const userRole = getUserRole(username);
  const requestedPath = req.path;
  
  // Static assets required by allowed pages (e.g. script.js on /tutorials).
  // Restricted users were being redirected to /tutorials when the browser
  // requested these files, so the page received HTML instead of JavaScript
  // and the language toggle did nothing.
  if (/\.(?:js|mjs|css|map|png|jpe?g|gif|svg|webp|ico|woff2?|ttf|otf|eot|mp4|webm|mp3|wav|pdf)$/i.test(requestedPath)) {
    return next();
  }

  // Admin can access everything
  if (userRole.allowedPages.includes('all')) {
    return next();
  }
  
  // Check if requested path is in allowed pages
  const isAllowed = userRole.allowedPages.some(page => {
    return requestedPath === page || requestedPath.startsWith(page);
  });
  
  if (!isAllowed) {
    // Redirect to user's home page
    return res.redirect(userRole.redirectAfterLogin);
  }
  
  next();
}

// Apply authentication and authorization to all protected routes
app.use(requireAuth);
app.use(checkPageAccess);

// Serve remaining static assets (now protected)
app.use(express.static(__dirname, {
  index: false,
  dotfiles: 'deny'
}));

// Protected routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/education.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'education.html'));
});

// Tutorial-only page for restricted users
app.get('/tutorials', (req, res) => {
  res.sendFile(path.join(__dirname, 'tutorials.html'));
});

app.get('/tutorials.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'tutorials.html'));
});

// Catch-all for other HTML files
app.get('/*.html', (req, res) => {
  const filePath = path.join(__dirname, req.path);
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send('Page not found');
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🔒 People Reader Training Portal running on port ${PORT}`);
  console.log(`📝 Authorized users: ${Array.from(authorizedUsers.keys()).join(', ')}`);
  console.log(`🌐 Server bound to 0.0.0.0:${PORT}`);
});
