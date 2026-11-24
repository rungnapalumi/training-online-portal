# People Reader™ - Training Online Portal

A modern, responsive web application for online training and video analysis with the Movement Analysis Tool. **Protected with server-side authentication** to ensure only authorized client organizations can access the content.

## Features

- 🔒 **Secure Authentication** - Server-side session-based login protecting all content
- 💳 **Payment System** - QR code payment and confirmation upload
- 🎓 **Online Tutorials** - Video lessons for recording and uploading
- 👤 **Account Creation** - User registration system
- 📹 **Video Upload** - Upload videos for movement analysis
- 📱 **Responsive Design** - Works on all devices
- 🏢 **Multi-Organization Support** - Each client organization has unique credentials

## Technologies Used

- Node.js + Express (Backend with authentication)
- express-session (Secure session management)
- HTML5, CSS3, JavaScript (Frontend)
- Libre Baskerville Font

## 🔐 Authentication Configuration

This portal requires authentication. Credentials are managed via environment variables.

### Required Environment Variables

#### `PORTAL_USERS` (Required)
JSON object mapping organization names to passwords. Supports usernames with spaces.

**Format:**
```json
{"The Mall":"SecurePassword123","Client Two":"AnotherPass456","Third Org":"Pass789"}
```

**Important:**
- Use valid JSON format with double quotes
- Usernames can contain spaces and special characters
- Passwords can contain spaces and special characters
- Username matching is **case-sensitive** and **exact** (spaces matter)
- Do NOT commit real passwords to the repository

#### `SESSION_SECRET` (Optional but Recommended)
Secret key for signing session cookies. If not set, a random secret is generated on each server restart (sessions won't persist across restarts).

**On Render:** Set to `generateValue: true` in `render.yaml` (already configured)

### Setting Environment Variables on Render

1. Go to your service in the [Render Dashboard](https://dashboard.render.com)
2. Navigate to **Environment** tab
3. Add `PORTAL_USERS` with your JSON credentials:
   ```json
   {"The Mall":"YourSecurePasswordHere"}
   ```
4. Click **Save Changes**
5. The service will automatically redeploy

### Adding More Organizations

To add more client organizations, update the `PORTAL_USERS` environment variable:

```json
{
  "The Mall":"password1",
  "New Client Org":"password2",
  "Another Company":"password3"
}
```

After updating, save and redeploy the service.

## How to Run

### Production (Render)
Deploys automatically via `render.yaml`. Set `PORTAL_USERS` environment variable in Render Dashboard.

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set environment variables:**
   ```bash
   export PORTAL_USERS='{"The Mall":"testpass123"}'
   ```
   
   Or create a `.env` file (do NOT commit this):
   ```bash
   PORTAL_USERS={"The Mall":"testpass123"}
   SESSION_SECRET=your-local-secret-key
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Access the portal:**
   Open http://localhost:3000 in your browser

5. **Login with:**
   - Organization Name: `The Mall` (or your configured username)
   - Password: `testpass123` (or your configured password)

### Development Fallback
If no credentials are configured, the server uses `admin`/`admin` for local testing (shows a warning).

## Sections

1. **Movement in Communication** - Payment and confirmation upload
2. **Online Tutorial** - Instructional videos and lessons
3. **Create Your Account** - User registration
4. **Upload Your Video** - Video submission for analysis

## Design

The website features a modern, clean design with:
- Serif typography using Libre Baskerville
- Warm color palette (beige, tan, brown)
- Smooth animations and transitions
- Card-based layouts
- Interactive elements with hover effects

## 🔒 Security Features

- **Server-side authentication** - All routes and assets protected by session middleware
- **Secure session management** - HTTP-only cookies, configurable secure flag for HTTPS
- **Timing-safe password comparison** - Prevents timing attacks
- **Environment-based credentials** - No passwords in source code
- **Session secrets** - Cryptographically secure session signing
- **24-hour session lifetime** - Automatic session expiration
- **Redirect protection** - Unauthenticated requests redirect to login page
- **Organization name display** - Shows logged-in organization in header

### What Changed from Static Site?

**Before:** Static HTML site with client-side JavaScript "authentication" that could be bypassed by viewing page source or disabling JavaScript.

**After:** Node.js Express server with true server-side authentication. All requests are validated server-side before serving any content. Even direct URL access to images, videos, or other assets requires an authenticated session.

## License

© 2026 People Reader™. All rights reserved.



