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
    // Check payment verification when trying to access account section
    if (sectionId === 'account') {
        const paymentVerified = sessionStorage.getItem('paymentVerified');
        if (paymentVerified !== 'true') {
            showMessage('Please upload payment slip, verify amount is 500 THB before creating account!', 'error');
            return;
        }
    }
    
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

// Payment slip upload handler with image preview
document.getElementById('paymentSlip')?.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const fileSize = (file.size / 1024 / 1024).toFixed(2); // Size in MB
        const validTypes = ['image/jpeg', 'image/png'];
        
        if (!validTypes.includes(file.type)) {
            showMessage('Please upload a valid file format (JPG or PNG)', 'error');
            this.value = '';
            return;
        }
        
        if (file.size > 10 * 1024 * 1024) { // 10MB limit
            showMessage('File size should be less than 10MB', 'error');
            this.value = '';
            return;
        }
        
        // Show image preview
        const reader = new FileReader();
        reader.onload = function(event) {
            const previewImage = document.getElementById('previewImage');
            const slipPreview = document.getElementById('slipPreview');
            
            previewImage.src = event.target.result;
            slipPreview.style.display = 'block';
            
            showMessage(`Payment slip "${file.name}" (${fileSize}MB) uploaded successfully! Please enter the payment amount and verify.`, 'success');
        };
        reader.readAsDataURL(file);
        
        // In a real application, you would upload the file to a server here
        console.log('Payment slip uploaded:', file.name);
    }
});

// Payment verification function
function verifyPayment() {
    const amountInput = document.getElementById('paymentAmount');
    const amount = parseFloat(amountInput.value);
    const createAccountBtn = document.getElementById('createAccountBtn');
    const paymentStatus = document.getElementById('paymentStatus');
    const slipPreview = document.getElementById('slipPreview');
    
    // Check if slip is uploaded
    const slipFile = document.getElementById('paymentSlip').files[0];
    if (!slipFile) {
        paymentStatus.textContent = 'Please upload payment slip first!';
        paymentStatus.className = 'payment-status error';
        return;
    }
    
    // Check if amount is entered
    if (!amount || isNaN(amount)) {
        paymentStatus.textContent = 'Please enter the payment amount!';
        paymentStatus.className = 'payment-status error';
        return;
    }
    
    // Verify if amount is exactly 500
    if (amount === 500) {
        paymentStatus.textContent = '✓ Payment verified! Amount is correct (500 THB). You can now create your account.';
        paymentStatus.className = 'payment-status success';
        createAccountBtn.disabled = false;
        
        // Store verification status
        sessionStorage.setItem('paymentVerified', 'true');
        
        showMessage('Payment verified successfully! You can now create your account.', 'success');
    } else {
        paymentStatus.textContent = `✗ Payment verification failed! Expected amount: 500 THB, but you entered: ${amount} THB. Please check your payment slip.`;
        paymentStatus.className = 'payment-status error';
        createAccountBtn.disabled = true;
        
        sessionStorage.setItem('paymentVerified', 'false');
        
        showMessage('Payment amount does not match. Please verify the amount is 500 THB.', 'error');
    }
}

// Video upload handlers
document.getElementById('insertVideo')?.addEventListener('change', handleVideoUpload);
document.getElementById('uploadVideo')?.addEventListener('change', handleVideoUpload);

function handleVideoUpload(e) {
    const file = e.target.files[0];
    if (file) {
        // Check if account is created
        const accountCreated = sessionStorage.getItem('accountCreated');
        if (accountCreated !== 'true') {
            showMessage('Please create an account before uploading videos!', 'error');
            this.value = '';
            scrollToSection('account');
            return;
        }
        
        // Check remaining video quota
        let videosRemaining = parseInt(sessionStorage.getItem('videoUploadsRemaining') || '3');
        if (videosRemaining <= 0) {
            showMessage('You have reached your video upload limit (3 videos maximum)', 'error');
            this.value = '';
            return;
        }
        
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
        
        // Decrease video quota
        videosRemaining--;
        sessionStorage.setItem('videoUploadsRemaining', videosRemaining.toString());
        
        // Update display
        updateVideoQuotaDisplay();
        
        // Add to uploaded videos list
        addUploadedVideoToList(file.name, fileSize);
        
        showMessage(`Video "${file.name}" (${fileSize}MB) uploaded successfully! ${videosRemaining} video(s) remaining.`, 'success');
        
        // In a real application, you would upload the video to a server here
        console.log('Video uploaded:', file.name, 'Remaining quota:', videosRemaining);
        
        // Clear input
        this.value = '';
    }
}

// Update video quota display
function updateVideoQuotaDisplay() {
    const videosRemaining = parseInt(sessionStorage.getItem('videoUploadsRemaining') || '3');
    const displayElement = document.getElementById('videosRemaining');
    if (displayElement) {
        displayElement.textContent = videosRemaining;
        
        // Change color based on remaining videos
        if (videosRemaining === 0) {
            displayElement.style.color = '#dc3545';
        } else if (videosRemaining === 1) {
            displayElement.style.color = '#ffc107';
        } else {
            displayElement.style.color = '#a0826d';
        }
    }
}

// Add uploaded video to list
function addUploadedVideoToList(filename, filesize) {
    const listElement = document.getElementById('uploadedVideosList');
    if (listElement) {
        const videoItem = document.createElement('div');
        videoItem.className = 'uploaded-video-item';
        
        const videoName = document.createElement('span');
        videoName.className = 'video-name';
        videoName.textContent = `${filename} (${filesize}MB)`;
        
        const videoStatus = document.createElement('span');
        videoStatus.className = 'video-status';
        videoStatus.textContent = '✓ Uploaded';
        
        videoItem.appendChild(videoName);
        videoItem.appendChild(videoStatus);
        
        listElement.appendChild(videoItem);
    }
}

// Initialize video quota display on page load
window.addEventListener('load', function() {
    updateVideoQuotaDisplay();
});

// Password toggle function
function togglePassword(inputId, button) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '🙈';
    } else {
        input.type = 'password';
        button.textContent = '👁️';
    }
}

// Create account form handler
document.getElementById('createAccountForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Check if payment is verified
    const paymentVerified = sessionStorage.getItem('paymentVerified');
    if (paymentVerified !== 'true') {
        showMessage('Please complete and verify payment (500 THB) before creating an account!', 'error');
        scrollToSection('home');
        return;
    }
    
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
    
    // Success - Show success message
    const messageDiv = document.getElementById('accountCreatedMessage');
    const usernameDisplay = messageDiv.querySelector('.account-username');
    
    usernameDisplay.textContent = `Welcome, ${username}!`;
    
    // Hide form inputs and submit button
    const formGroups = this.querySelectorAll('.form-group');
    const submitButton = this.querySelector('button[type="submit"]');
    
    formGroups.forEach(group => group.style.display = 'none');
    submitButton.style.display = 'none';
    
    // Show success message
    messageDiv.style.display = 'block';
    
    // Store account info
    sessionStorage.setItem('accountCreated', 'true');
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('videoUploadsRemaining', '3');
    
    // In a real application, you would send this data to a server
    console.log('Account created:', { username, password: '***', paymentVerified: true, videoQuota: 3 });
    
    // Scroll to show the message
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

