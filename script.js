// Smooth scrolling for navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Smooth scroll to section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }
}

// Payment slip upload handler
document.getElementById('paymentSlip')?.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const fileSize = (file.size / 1024 / 1024).toFixed(2); // Size in MB
        const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
        
        if (!validTypes.includes(file.type)) {
            showMessage('Please upload a valid file format (JPG, PNG, or PDF)', 'error');
            this.value = '';
            return;
        }
        
        if (file.size > 10 * 1024 * 1024) { // 10MB limit
            showMessage('File size should be less than 10MB', 'error');
            this.value = '';
            return;
        }
        
        showMessage(`Payment slip "${file.name}" (${fileSize}MB) uploaded successfully!`, 'success');
        
        // In a real application, you would upload the file to a server here
        console.log('Payment slip uploaded:', file.name);
    }
});

// Video upload handlers
document.getElementById('insertVideo')?.addEventListener('change', handleVideoUpload);
document.getElementById('uploadVideo')?.addEventListener('change', handleVideoUpload);

function handleVideoUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const fileSize = (file.size / 1024 / 1024).toFixed(2); // Size in MB
        
        if (!file.type.startsWith('video/')) {
            showMessage('Please upload a valid video file', 'error');
            this.value = '';
            return;
        }
        
        if (file.size > 500 * 1024 * 1024) { // 500MB limit
            showMessage('Video size should be less than 500MB', 'error');
            this.value = '';
            return;
        }
        
        showMessage(`Video "${file.name}" (${fileSize}MB) uploaded successfully!`, 'success');
        
        // In a real application, you would upload the video to a server here
        console.log('Video uploaded:', file.name);
    }
}

// Create account form handler
document.getElementById('createAccountForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validation
    if (username.length < 3) {
        showMessage('Username must be at least 3 characters long', 'error');
        return;
    }
    
    if (password.length < 8) {
        showMessage('Password must be at least 8 characters long', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }
    
    // Success
    showMessage(`Account created successfully for ${username}!`, 'success');
    
    // Clear form
    this.reset();
    
    // In a real application, you would send this data to a server
    console.log('Account created:', { username, password: '***' });
    
    // Scroll to upload section after a delay
    setTimeout(() => {
        scrollToSection('upload');
    }, 2000);
});

// Tutorial video play buttons
document.querySelectorAll('.tutorial-card .btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.tutorial-card');
        const title = card.querySelector('.tutorial-title').textContent.trim();
        
        showMessage(`Playing: ${title}`, 'success');
        
        // In a real application, this would open a video player modal
        console.log('Playing tutorial:', title);
    });
});

// Click on video placeholder to play
document.querySelectorAll('.video-placeholder').forEach(placeholder => {
    placeholder.addEventListener('click', function() {
        const card = this.closest('.tutorial-card');
        const playButton = card.querySelector('.btn-secondary');
        if (playButton) {
            playButton.click();
        }
    });
});

// Helper function to show messages
function showMessage(text, type) {
    // Remove any existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const message = document.createElement('div');
    message.className = `message message-${type}`;
    message.textContent = text;
    
    // Insert at the top of the current section
    const activeSection = document.querySelector('.section');
    if (activeSection) {
        activeSection.querySelector('.container').insertBefore(
            message, 
            activeSection.querySelector('.container').firstChild
        );
        
        // Scroll to message
        message.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Remove message after 5 seconds
        setTimeout(() => {
            message.style.transition = 'opacity 0.5s ease';
            message.style.opacity = '0';
            setTimeout(() => message.remove(), 500);
        }, 5000);
    }
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and tutorial cards
document.querySelectorAll('.card, .tutorial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Update active nav link on scroll
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
        const sections = document.querySelectorAll('.section');
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, 100);
});

// Form input validation feedback
const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            this.style.borderColor = '#dc3545';
        } else {
            this.style.borderColor = '#28a745';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = '#a0826d';
    });
});

console.log('People Reader™ - Training Online Portal loaded successfully!');

