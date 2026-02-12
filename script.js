// Language translations
const translations = {
    en: {
        // Login Section
        loginTitle: "Login to AI People Reader™",
        loginBtn: "Login",
        loginUsernameLabel: "User Name",
        loginPasswordLabel: "Password",
        loginError: "Invalid username or password!",
        loginRequired: "Please login first to access the upload page!",
        newUserMessage: "Don't have an account?",
        createAccountLink: "Create one here",
        
        // Navigation
        navHome: "Home",
        navAccount: "Create Account",
        navUpload: "Upload Video",
        navTutorial: "Online Tutorial",
        
        // Home Section
        homeTitle: "Movement in Communication",
        homeDescription1: "In presentations, what speakers often overlook is their body movement and hand gestures that accompany speech. These can communicate nervousness, hesitation, lack of confidence, or untrustworthiness. In addition, habitual movements may make the speaker appear distracting, irritating, or difficult to follow.",
        homeDescription2: "In a good presentation, engagement — the ability to connect with the audience — is the most important factor. Therefore, body and hand movements are factors that must be studied in order to make a presentation interesting, natural, and engaging. However, because most people cannot see themselves while presenting, it is necessary to receive structured, principle-based guidance.",
        homeSubtitle: "Access the Movement Analysis Tool",
        homeInstruction: "Please complete the payment before uploading your video for analysis.",
        qrTitle: "Scan QR Code to Pay",
        qrInstruction: "After payment, upload your confirmation slip on the right.",
        uploadConfirmTitle: "Upload Payment Confirmation",
        uploadSlipBtn: "Upload Slip",
        fileFormat: "Accepted formats: JPG, PNG",
        amountLabel: "Payment Amount (THB):",
        amountPlaceholder: "Enter amount",
        verifyBtn: "Verify Payment",
        createAccountBtn: "⬇️ Scroll Down to Create Account ⬇️",
        
        // Account Section
        accountTitle: "Create Your Account",
        usernameLabel: "User Name",
        passwordLabel: "Password",
        confirmPasswordLabel: "Confirm Password",
        createAccountSubmit: "Create Account",
        accountSuccessTitle: "Account Created Successfully!",
        accountWelcome: "Welcome",
        videoQuotaMsg: "Now you can upload 3 videos for this account to see your progress.",
        uploadNowBtn: "Upload Videos Now",
        
        // Upload Section
        uploadTitle: "Log in to access online videos tutorial and upload video for analysis",
        uploadUsernameLabel: "User Name",
        uploadPasswordLabel: "Password",
        uploadLoginBtn: "Log in to access Videos",
        uploadVideoBtn: "Go to the upload video page",
        uploadAuthError: "Please enter username and password!",
        uploadAuthSuccess: "✓ Login successful! You can now watch tutorial videos and access the upload page.",
        uploadAuthFailed: "✗ Invalid username or password! Please try again.",
        uploadPageDenied: "✗ Please login first to access the upload page!",
        videoAccessDenied: "Please login in the \"Upload Video\" section to access tutorial videos!",
        
        // Tutorial Section
        tutorialTitle: "Online Tutorial",
        introduction: "Introduction",
        lesson: "Lesson",
        playBtn: "▶ Play",
        
        // Footer
        footerText: "© 2026 AI People Reader™. All rights reserved.",
        
        // Messages
        paymentVerified: "✓ Payment verified! Amount is correct (500 THB). You can now create your account.",
        paymentFailed: "✗ Payment verification failed! Expected amount: 500 THB, but you entered:",
        paymentFailedSuffix: "THB. Please check your payment slip.",
        uploadSlipFirst: "Please upload payment slip first!",
        enterAmount: "Please enter the payment amount!",
        paymentRequired: "Please upload payment slip, verify amount is 500 THB before creating account!",
        usernameShort: "Username must be at least 3 characters long",
        passwordShort: "Password must be at least 4 characters long",
        passwordMismatch: "Passwords do not match",
        accountCreatedMsg: "Account created successfully for",
        paymentVerifiedMsg: "Payment verified:",
        videoLimitReached: "You have reached your video upload limit (3 videos maximum)",
        createAccountFirst: "Please create an account before uploading videos!",
        videoUploaded: "uploaded successfully!",
        videosRemainingMsg: "video(s) remaining."
    },
    th: {
        // Login Section
        loginTitle: "เข้าสู่ระบบ AI People Reader™",
        loginBtn: "เข้าสู่ระบบ",
        loginUsernameLabel: "ชื่อผู้ใช้",
        loginPasswordLabel: "รหัสผ่าน",
        loginError: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!",
        loginRequired: "กรุณาเข้าสู่ระบบก่อนเพื่อเข้าถึงหน้าอัปโหลด!",
        newUserMessage: "ยังไม่มีบัญชี?",
        createAccountLink: "สร้างบัญชีที่นี่",
        
        // Navigation
        navHome: "หน้าแรก",
        navAccount: "สร้างบัญชี",
        navUpload: "อัปโหลดวิดีโอ",
        navTutorial: "บทเรียนออนไลน์",
        
        // Home Section
        homeTitle: "การเคลื่อนไหวในการสื่อสาร",
        homeDescription1: "การนำเสนอผ่านอวัจนภาษา ในการนำเสนอนั้นสิ่งที่ผู้พูดมักมองข้ามคือการเคลื่อนไหวของตัวและภาษามือที่มาประกอบคำพูด สิ่งเหล่านี้สามารถสื่อสารถึงความตื่นเต้น ลังเล ไม่มั่นใจ ไม่น่าเชื่อถือ นอกจากนั้นการเคลื่อนไหวที่ติดเป็นนิสัยยังอาจทำให้ดูน่ารำคาญ และไม่น่าติดตาม",
        homeDescription2: "ในการนำเสนอที่ดีนั้น engagement หรือการเข้าถึงผู้ฟังสำคัญที่สุด การเคลื่อนไหวของตัวและมือจึงเป็นสิ่งที่จำเป็นต้องศึกษา เพื่อให้การนำเสนอดูน่าสนใจ เป็นธรรมชาติ และน่าติดตาม แต่เพราะคนส่วนใหญ่ไม่เห็นตัวเองในขณะที่นำเสนอ จึงจำเป็นที่จะต้องได้รับการชี้แนะแบบมีหลักการ",
        homeSubtitle: "เข้าสู่เครื่องมือวิเคราะห์การเคลื่อนไหว",
        homeInstruction: "กรุณาชำระเงินก่อนอัปโหลดวิดีโอของคุณเพื่อการวิเคราะห์",
        qrTitle: "สแกน QR Code เพื่อชำระเงิน",
        qrInstruction: "หลังจากชำระเงิน กรุณาอัปโหลดสลิปยืนยันการชำระเงินทางด้านขวา",
        uploadConfirmTitle: "อัปโหลดสลิปยืนยันการชำระเงิน",
        uploadSlipBtn: "อัปโหลดสลิป",
        fileFormat: "รูปแบบที่รองรับ: JPG, PNG",
        amountLabel: "จำนวนเงินที่ชำระ (บาท):",
        amountPlaceholder: "ใส่จำนวนเงิน",
        verifyBtn: "ตรวจสอบการชำระเงิน",
        createAccountBtn: "⬇️ เลื่อนลงเพื่อสร้างบัญชี ⬇️",
        
        // Account Section
        accountTitle: "สร้างบัญชีของคุณ",
        usernameLabel: "ชื่อผู้ใช้",
        passwordLabel: "รหัสผ่าน",
        confirmPasswordLabel: "ยืนยันรหัสผ่าน",
        createAccountSubmit: "สร้างบัญชี",
        accountSuccessTitle: "สร้างบัญชีสำเร็จ!",
        accountWelcome: "ยินดีต้อนรับ",
        videoQuotaMsg: "ตอนนี้คุณสามารถอัปโหลด 3 วิดีโอสำหรับบัญชีนี้เพื่อดูความคืบหน้าของคุณ",
        uploadNowBtn: "อัปโหลดวิดีโอเลย",
        
        // Upload Section
        uploadTitle: "เข้าสู่ระบบเพื่อเข้าถึงบทเรียนวิดีโอออนไลน์และอัปโหลดวิดีโอเพื่อการวิเคราะห์",
        uploadUsernameLabel: "ชื่อผู้ใช้",
        uploadPasswordLabel: "รหัสผ่าน",
        uploadLoginBtn: "เข้าสู่ระบบเพื่อเข้าถึงวิดีโอ",
        uploadVideoBtn: "ไปที่หน้าอัปโหลดวิดีโอ",
        uploadAuthError: "กรุณาใส่ชื่อผู้ใช้และรหัสผ่าน!",
        uploadAuthSuccess: "✓ เข้าสู่ระบบสำเร็จ! คุณสามารถดูวิดีโอบทเรียนและเข้าถึงหน้าอัปโหลดได้แล้ว",
        uploadAuthFailed: "✗ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง! กรุณาลองอีกครั้ง",
        uploadPageDenied: "✗ กรุณาเข้าสู่ระบบก่อนเพื่อเข้าถึงหน้าอัปโหลด!",
        videoAccessDenied: "กรุณาเข้าสู่ระบบในส่วน \"อัปโหลดวิดีโอ\" เพื่อเข้าถึงวิดีโอบทเรียน!",
        
        // Tutorial Section
        tutorialTitle: "บทเรียนออนไลน์",
        introduction: "บทนำ",
        lesson: "บทเรียน",
        playBtn: "▶ เล่น",
        
        // Footer
        footerText: "© 2026 AI People Reader™ สงวนลิขสิทธิ์",
        
        // Messages
        paymentVerified: "✓ ตรวจสอบการชำระเงินสำเร็จ! จำนวนเงินถูกต้อง (500 บาท) คุณสามารถสร้างบัญชีได้แล้ว",
        paymentFailed: "✗ การตรวจสอบการชำระเงินล้มเหลว! จำนวนเงินที่คาดหวัง: 500 บาท แต่คุณใส่:",
        paymentFailedSuffix: "บาท กรุณาตรวจสอบสลิปการชำระเงินของคุณ",
        uploadSlipFirst: "กรุณาอัปโหลดสลิปการชำระเงินก่อน!",
        enterAmount: "กรุณาใส่จำนวนเงินที่ชำระ!",
        paymentRequired: "กรุณาอัปโหลดสลิปการชำระเงิน ตรวจสอบจำนวนเงิน 500 บาท ก่อนสร้างบัญชี!",
        usernameShort: "ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร",
        passwordShort: "รหัสผ่านต้องมีอย่างน้อย 4 ตัวอักษร",
        passwordMismatch: "รหัสผ่านไม่ตรงกัน",
        accountCreatedMsg: "สร้างบัญชีสำเร็จสำหรับ",
        paymentVerifiedMsg: "ตรวจสอบการชำระเงิน:",
        videoLimitReached: "คุณอัปโหลดวิดีโอครบจำนวนที่กำหนดแล้ว (สูงสุด 3 วิดีโอ)",
        createAccountFirst: "กรุณาสร้างบัญชีก่อนอัปโหลดวิดีโอ!",
        videoUploaded: "อัปโหลดสำเร็จ!",
        videosRemainingMsg: "วิดีโอที่เหลือ"
    }
};

// Initialize user system with Admin account
function initializeUserSystem() {
    let users = localStorage.getItem('users');
    if (!users) {
        // Create initial admin account
        const initialUsers = {
            'Admin': '0108'
        };
        localStorage.setItem('users', JSON.stringify(initialUsers));
    }
    
    // Initialize payment amount (default 1500 THB)
    let paymentAmount = localStorage.getItem('requiredPaymentAmount');
    if (!paymentAmount) {
        localStorage.setItem('requiredPaymentAmount', '1500');
    }
}

// Call initialization on script load
initializeUserSystem();

// Get required payment amount
function getRequiredPaymentAmount() {
    return parseInt(localStorage.getItem('requiredPaymentAmount') || '1500');
}

// Current user session
let currentUser = sessionStorage.getItem('currentUser') || null;

// Current language (default: English)
let currentLanguage = localStorage.getItem('language') || 'en';

// Toggle language function
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'th' : 'en';
    localStorage.setItem('language', currentLanguage);
    updateLanguage();
}

// Update all text on the page
function updateLanguage() {
    const t = translations[currentLanguage];
    
    // Update language toggle button
    document.getElementById('currentLang').textContent = currentLanguage.toUpperCase();
    document.getElementById('otherLang').textContent = currentLanguage === 'en' ? 'TH' : 'EN';
    
    // Update Login section
    const loginTitle = document.querySelector('#loginSection .section-title');
    if (loginTitle) {
        loginTitle.textContent = t.loginTitle;
    }
    const loginUsernameLabel = document.querySelector('label[for="loginUsername"]');
    if (loginUsernameLabel) {
        loginUsernameLabel.textContent = t.loginUsernameLabel;
    }
    const loginPasswordLabel = document.querySelector('label[for="loginPassword"]');
    if (loginPasswordLabel) {
        loginPasswordLabel.textContent = t.loginPasswordLabel;
    }
    const loginBtn = document.querySelector('#loginForm button[type="submit"]');
    if (loginBtn) {
        loginBtn.textContent = t.loginBtn;
    }
    const newUserText = document.getElementById('newUserText');
    if (newUserText) {
        const createLink = document.getElementById('createAccountLink');
        newUserText.innerHTML = `${t.newUserMessage} <a href="#" id="createAccountLink" class="create-account-link">${t.createAccountLink}</a>`;
        // Re-attach event listener after updating innerHTML
        document.getElementById('createAccountLink')?.addEventListener('click', handleCreateAccountClick);
    }
    
    // Update navigation
    document.querySelector('a[href="#home"]').textContent = t.navHome;
    document.querySelector('a[href="#account"]').textContent = t.navAccount;
    document.querySelector('a[href="#upload"]').textContent = t.navUpload;
    document.querySelector('a[href="#tutorials"]').textContent = t.navTutorial;
    
    // Update Home section
    document.querySelector('#home .section-title').textContent = t.homeTitle;
    const descriptionParas = document.querySelectorAll('#home .description-text p');
    if (descriptionParas.length >= 2) {
        descriptionParas[0].textContent = t.homeDescription1;
        descriptionParas[1].textContent = t.homeDescription2;
    }
    document.querySelector('#home .section-subtitle').textContent = t.homeSubtitle;
    document.querySelector('#home .instruction-text').textContent = t.homeInstruction;
    document.querySelectorAll('.card-title')[0].textContent = t.qrTitle;
    document.querySelector('.card-instruction').textContent = t.qrInstruction;
    document.querySelectorAll('.card-title')[1].textContent = t.uploadConfirmTitle;
    // Update the upload slip button specifically (not the login button)
    const uploadSlipBtn = document.querySelector('.upload-area .btn-primary');
    if (uploadSlipBtn) {
        uploadSlipBtn.textContent = t.uploadSlipBtn;
    }
    document.querySelector('.file-format').textContent = t.fileFormat;
    document.querySelector('label[for="paymentAmount"]').textContent = t.amountLabel;
    document.getElementById('paymentAmount').placeholder = t.amountPlaceholder;
    document.getElementById('verifyPaymentBtn').textContent = t.verifyBtn;
    document.getElementById('createAccountBtn').textContent = t.createAccountBtn;
    
    // Update Account section
    document.querySelector('#account .section-title').textContent = t.accountTitle;
    document.querySelector('label[for="username"]').textContent = t.usernameLabel;
    document.querySelector('label[for="password"]').textContent = t.passwordLabel;
    document.querySelector('label[for="confirmPassword"]').textContent = t.confirmPasswordLabel;
    document.querySelector('#createAccountForm button[type="submit"]').textContent = t.createAccountSubmit;
    
    const successTitle = document.querySelector('#accountCreatedMessage h3');
    if (successTitle) {
        successTitle.textContent = t.accountSuccessTitle;
    }
    const videoQuota = document.querySelector('.video-quota');
    if (videoQuota) {
        videoQuota.innerHTML = t.videoQuotaMsg;
    }
    const uploadNowBtn = document.querySelector('#accountCreatedMessage .btn-primary');
    if (uploadNowBtn) {
        uploadNowBtn.textContent = t.uploadNowBtn;
    }
    
    // Update Upload section
    document.querySelector('#upload .section-title').textContent = t.uploadTitle;
    const uploadUsernameLabel = document.querySelector('label[for="uploadUsername"]');
    if (uploadUsernameLabel) {
        uploadUsernameLabel.textContent = t.uploadUsernameLabel;
    }
    const uploadPasswordLabel = document.querySelector('label[for="uploadPassword"]');
    if (uploadPasswordLabel) {
        uploadPasswordLabel.textContent = t.uploadPasswordLabel;
    }
    const uploadLoginBtn = document.querySelector('.upload-auth-form .btn-secondary');
    if (uploadLoginBtn) {
        uploadLoginBtn.textContent = t.uploadLoginBtn;
    }
    const uploadBtn = document.querySelector('.btn-upload');
    if (uploadBtn) {
        uploadBtn.textContent = t.uploadVideoBtn;
    }
    const uploadUsernameInput = document.getElementById('uploadUsername');
    if (uploadUsernameInput) {
        uploadUsernameInput.placeholder = currentLanguage === 'en' ? 'Enter your username' : 'ใส่ชื่อผู้ใช้ของคุณ';
    }
    const uploadPasswordInput = document.getElementById('uploadPassword');
    if (uploadPasswordInput) {
        uploadPasswordInput.placeholder = currentLanguage === 'en' ? 'Enter your password' : 'ใส่รหัสผ่านของคุณ';
    }
    
    // Update Tutorial section
    document.querySelector('#tutorials .section-title').textContent = t.tutorialTitle;
    document.querySelectorAll('.tutorial-title').forEach((title, index) => {
        // First 2 are Introduction videos
        if (index < 2) {
            title.textContent = `${t.introduction} ${index + 1}`;
        } else {
            // Rest are Lesson videos (Lesson 1-5)
            title.textContent = `${t.lesson} ${index - 1}`;
        }
    });
    document.querySelectorAll('#tutorials .btn-secondary').forEach(btn => {
        btn.textContent = t.playBtn;
    });
    
    // Update Footer
    document.querySelector('.footer p').textContent = t.footerText;
}

// Initialize language on page load
window.addEventListener('DOMContentLoaded', function() {
    updateLanguage();
});

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
    const t = translations[currentLanguage];
    // Check payment verification when trying to access account section
    if (sectionId === 'account') {
        const paymentVerified = sessionStorage.getItem('paymentVerified');
        if (paymentVerified !== 'true') {
            showMessage(t.paymentRequired, 'error');
            return;
        }
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Highlight the account form temporarily
        if (sectionId === 'account') {
            const accountForm = document.getElementById('createAccountForm');
            if (accountForm) {
                accountForm.style.border = '3px solid #28a745';
                accountForm.style.boxShadow = '0 0 20px rgba(40, 167, 69, 0.5)';
                setTimeout(() => {
                    accountForm.style.border = '';
                    accountForm.style.boxShadow = '';
                }, 5000);
            }
        }
        
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
    const t = translations[currentLanguage];
    const amountInput = document.getElementById('paymentAmount');
    const amount = parseFloat(amountInput.value);
    const createAccountBtn = document.getElementById('createAccountBtn');
    const paymentStatus = document.getElementById('paymentStatus');
    const slipPreview = document.getElementById('slipPreview');
    const requiredAmount = getRequiredPaymentAmount();
    
    // Check if slip is uploaded
    const slipFile = document.getElementById('paymentSlip').files[0];
    if (!slipFile) {
        paymentStatus.textContent = t.uploadSlipFirst;
        paymentStatus.className = 'payment-status error';
        return;
    }
    
    // Check if amount is entered
    if (!amount || isNaN(amount)) {
        paymentStatus.textContent = t.enterAmount;
        paymentStatus.className = 'payment-status error';
        return;
    }
    
    // Verify if amount matches required amount
    if (amount === requiredAmount) {
        const successMsg = currentLanguage === 'en' 
            ? `✓ Payment verified! Amount is correct (${requiredAmount} THB). You can now create your account.`
            : `✓ ตรวจสอบการชำระเงินสำเร็จ! จำนวนเงินถูกต้อง (${requiredAmount} บาท) คุณสามารถสร้างบัญชีได้แล้ว`;
        paymentStatus.textContent = successMsg;
        paymentStatus.className = 'payment-status success';
        createAccountBtn.disabled = false;
        createAccountBtn.style.backgroundColor = '#28a745';
        createAccountBtn.style.animation = 'pulse 2s infinite';
        
        // Store verification status
        sessionStorage.setItem('paymentVerified', 'true');
        
        showMessage(successMsg, 'success');
        
        // Auto-scroll to account section after 2 seconds
        setTimeout(() => {
            scrollToSection('account');
            showMessage(currentLanguage === 'en' 
                ? 'Please fill in your account information below ⬇️' 
                : 'กรุณากรอกข้อมูลบัญชีของคุณด้านล่าง ⬇️', 'success');
        }, 2000);
    } else {
        const errorMsg = currentLanguage === 'en'
            ? `✗ Payment verification failed! Expected amount: ${requiredAmount} THB, but you entered: ${amount} THB. Please check your payment slip.`
            : `✗ การตรวจสอบการชำระเงินล้มเหลว! จำนวนเงินที่คาดหวัง: ${requiredAmount} บาท แต่คุณใส่: ${amount} บาท กรุณาตรวจสอบสลิปการชำระเงินของคุณ`;
        paymentStatus.textContent = errorMsg;
        paymentStatus.className = 'payment-status error';
        createAccountBtn.disabled = true;
        
        sessionStorage.setItem('paymentVerified', 'false');
        
        showMessage(errorMsg, 'error');
    }
}

// Video upload handlers removed - now redirects to external page

function handleVideoUpload(e) {
    const t = translations[currentLanguage];
    const file = e.target.files[0];
    if (file) {
        // Check if account is created
        const accountCreated = sessionStorage.getItem('accountCreated');
        if (accountCreated !== 'true') {
            showMessage(t.createAccountFirst, 'error');
            this.value = '';
            scrollToSection('account');
            return;
        }
        
        // Check remaining video quota
        let videosRemaining = parseInt(sessionStorage.getItem('videoUploadsRemaining') || '3');
        if (videosRemaining <= 0) {
            showMessage(t.videoLimitReached, 'error');
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
        
        showMessage(`${file.name} (${fileSize}MB) ${t.videoUploaded} ${videosRemaining} ${t.videosRemainingMsg}`, 'success');
        
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
    const t = translations[currentLanguage];
    const listElement = document.getElementById('uploadedVideosList');
    if (listElement) {
        const videoItem = document.createElement('div');
        videoItem.className = 'uploaded-video-item';
        
        const videoName = document.createElement('span');
        videoName.className = 'video-name';
        videoName.textContent = `${filename} (${filesize}MB)`;
        
        const videoStatus = document.createElement('span');
        videoStatus.className = 'video-status';
        videoStatus.textContent = t.videoStatus;
        
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

// Create account form handler is now in the authentication section below

// Videos are now embedded YouTube iframes - no additional JavaScript needed for playback

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

// ==================== AUTHENTICATION SYSTEM ====================

// Handle create account link click from login page (not needed anymore but keeping for compatibility)
function handleCreateAccountClick(e) {
    e.preventDefault();
    
    // Navigate to account section
    scrollToSection('account');
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#account') {
            link.classList.add('active');
        }
    });
}

// Attach event listener to create account link
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('createAccountLink')?.addEventListener('click', handleCreateAccountClick);
});

// Show main content directly without login
function showMainContentDirectly() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    document.getElementById('mainNav').style.display = 'block';
    document.getElementById('logoutBtn').style.display = 'none';
    document.getElementById('adminPanelBtn').style.display = 'none';
    document.getElementById('userInfo').style.display = 'none';
}

// Check if user is already logged in
function checkAuthStatus() {
    if (currentUser) {
        showMainContent();
    } else {
        showLoginPage();
    }
}

// Show login page
function showLoginPage() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('mainNav').style.display = 'none';
    document.getElementById('logoutBtn').style.display = 'none';
    document.getElementById('adminPanelBtn').style.display = 'none';
    document.getElementById('userInfo').style.display = 'none';
}

// Show main content
function showMainContent() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    document.getElementById('mainNav').style.display = 'block';
    document.getElementById('logoutBtn').style.display = 'inline-block';
    document.getElementById('userInfo').style.display = 'inline-block';
    document.getElementById('userInfo').textContent = `Welcome, ${currentUser}!`;
    
    // Show admin panel button only for Admin
    if (currentUser === 'Admin') {
        document.getElementById('adminPanelBtn').style.display = 'inline-block';
    } else {
        document.getElementById('adminPanelBtn').style.display = 'none';
    }
}

// Login form handler
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    const loginError = document.getElementById('loginError');
    const t = translations[currentLanguage];
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    // Check credentials (case-insensitive username check)
    let foundUsername = null;
    for (let key in users) {
        if (key.toLowerCase() === username.toLowerCase()) {
            foundUsername = key;
            break;
        }
    }
    
    if (foundUsername && users[foundUsername] === password) {
        // Login successful - use the actual stored username (preserves case)
        currentUser = foundUsername;
        sessionStorage.setItem('currentUser', currentUser);
        
        // Clear form
        document.getElementById('loginForm').reset();
        loginError.style.display = 'none';
        
        // Show main content
        showMainContent();
        
        showMessage(`Welcome back, ${currentUser}!`, 'success');
    } else {
        // Login failed
        loginError.textContent = t.loginError;
        loginError.style.display = 'block';
        loginError.style.color = '#dc3545';
        loginError.style.marginTop = '10px';
        loginError.style.textAlign = 'center';
    }
});

// ==================== ADMIN PANEL FUNCTIONS ====================

// Open admin panel
function openAdminPanel() {
    if (currentUser !== 'Admin') {
        showMessage('Access denied! Admin only.', 'error');
        return;
    }
    
    // Hide other sections and show admin panel
    document.querySelectorAll('#mainContent > section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById('adminPanel').style.display = 'block';
    
    // Load user list and payment amount
    loadUserList();
    loadPaymentAmountSetting();
}

// Close admin panel
function closeAdminPanel() {
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    
    // Update active nav
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#home') {
            link.classList.add('active');
        }
    });
}

// Load user list
function loadUserList() {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const userListDiv = document.getElementById('userList');
    
    if (Object.keys(users).length === 0) {
        userListDiv.innerHTML = '<p>No users found.</p>';
        return;
    }
    
    let html = '<table class="user-table"><thead><tr><th>Username</th><th>Password</th><th>Actions</th></tr></thead><tbody>';
    
    for (let username in users) {
        const password = users[username];
        const isAdmin = username === 'Admin';
        
        html += `
            <tr>
                <td><strong>${username}</strong></td>
                <td>${password}</td>
                <td>
                    ${!isAdmin ? `<button class="btn btn-danger btn-small" onclick="deleteUser('${username}')">Delete</button>` : '<span style="color: #999;">Admin (Cannot delete)</span>'}
                </td>
            </tr>
        `;
    }
    
    html += '</tbody></table>';
    userListDiv.innerHTML = html;
}

// Delete user (Admin only)
function deleteUser(username) {
    if (currentUser !== 'Admin') {
        showMessage('Access denied! Admin only.', 'error');
        return;
    }
    
    if (username === 'Admin') {
        showMessage('Cannot delete Admin account!', 'error');
        return;
    }
    
    if (confirm(`Are you sure you want to delete user: ${username}?`)) {
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        delete users[username];
        localStorage.setItem('users', JSON.stringify(users));
        
        showMessage(`User "${username}" deleted successfully!`, 'success');
        loadUserList();
    }
}

// Admin create user form
document.getElementById('adminCreateUserForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (currentUser !== 'Admin') {
        showMessage('Access denied! Admin only.', 'error');
        return;
    }
    
    const username = document.getElementById('adminNewUsername').value.trim();
    const password = document.getElementById('adminNewPassword').value;
    
    if (username.length < 3) {
        showMessage('Username must be at least 3 characters long', 'error');
        return;
    }
    
    if (password.length < 4) {
        showMessage('Password must be at least 4 characters long', 'error');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    if (users[username]) {
        showMessage(`Username "${username}" already exists!`, 'error');
        return;
    }
    
    // Add new user
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    
    // Clear form
    this.reset();
    
    showMessage(`User "${username}" created successfully!`, 'success');
    loadUserList();
});

// Load payment amount setting
function loadPaymentAmountSetting() {
    const currentAmount = getRequiredPaymentAmount();
    const input = document.getElementById('requiredPaymentAmount');
    const display = document.getElementById('currentPaymentDisplay');
    
    if (input) {
        input.value = currentAmount;
    }
    
    if (display) {
        display.textContent = `Current required payment amount: ${currentAmount} THB`;
    }
}

// Payment amount form handler
document.getElementById('paymentAmountForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (currentUser !== 'Admin') {
        showMessage('Access denied! Admin only.', 'error');
        return;
    }
    
    const newAmount = parseInt(document.getElementById('requiredPaymentAmount').value);
    
    if (!newAmount || newAmount < 0) {
        showMessage('Please enter a valid payment amount!', 'error');
        return;
    }
    
    // Update payment amount
    localStorage.setItem('requiredPaymentAmount', newAmount.toString());
    
    showMessage(`Payment amount updated to ${newAmount} THB successfully!`, 'success');
    loadPaymentAmountSetting();
});

// ==================== UPDATE CREATE ACCOUNT FORM ====================

// Update the existing create account form to also store in users
const originalCreateAccountHandler = document.getElementById('createAccountForm');
if (originalCreateAccountHandler) {
    originalCreateAccountHandler.addEventListener('submit', function(e) {
        e.preventDefault();
        const t = translations[currentLanguage];
        
        // Check if payment is verified
        const paymentVerified = sessionStorage.getItem('paymentVerified');
        if (paymentVerified !== 'true') {
            showMessage(t.paymentRequired, 'error');
            scrollToSection('home');
            return;
        }
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Validation
        if (username.length < 3) {
            showMessage(t.usernameShort, 'error');
            return;
        }
        
        if (password.length < 4) {
            showMessage(t.passwordShort, 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            showMessage(t.passwordMismatch, 'error');
            return;
        }
        
        // Check if username already exists
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        if (users[username]) {
            showMessage('Username already exists! Please choose a different username.', 'error');
            return;
        }
        
        // Add user to system
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        
        // Success - Show success message
        const messageDiv = document.getElementById('accountCreatedMessage');
        const usernameDisplay = messageDiv.querySelector('.account-username');
        
        usernameDisplay.textContent = `${t.accountWelcome}, ${username}!`;
        
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
        
        // Scroll to show the message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}

// ==================== PAGE LOAD ====================

// Check authentication status on page load
window.addEventListener('DOMContentLoaded', function() {
    // Skip login - go directly to main content
    showMainContentDirectly();
    updateLanguage();
});

// Authenticate user for video access (doesn't redirect)
function authenticateUser() {
    const username = document.getElementById('uploadUsername').value.trim();
    const password = document.getElementById('uploadPassword').value;
    const errorMsg = document.getElementById('uploadAuthError');
    
    // Check if fields are filled
    if (!username || !password) {
        errorMsg.textContent = currentLanguage === 'en' 
            ? 'Please enter username and password!'
            : 'กรุณาใส่ชื่อผู้ใช้และรหัสผ่าน!';
        errorMsg.style.display = 'block';
        errorMsg.style.color = '#dc3545';
        return;
    }
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    // Check credentials (case-insensitive username)
    let foundUsername = null;
    for (let key in users) {
        if (key.toLowerCase() === username.toLowerCase()) {
            foundUsername = key;
            break;
        }
    }
    
    if (foundUsername && users[foundUsername] === password) {
        // Authentication successful
        sessionStorage.setItem('videoAccessGranted', 'true');
        sessionStorage.setItem('authenticatedUser', foundUsername);
        
        errorMsg.textContent = currentLanguage === 'en'
            ? '✓ Login successful! You can now watch tutorial videos and access the upload page.'
            : '✓ เข้าสู่ระบบสำเร็จ! คุณสามารถดูวิดีโอบทเรียนและเข้าถึงหน้าอัปโหลดได้แล้ว';
        errorMsg.style.color = '#28a745';
        errorMsg.style.display = 'block';
        
        showMessage(currentLanguage === 'en' 
            ? '✓ Welcome! You can now watch all tutorial videos.' 
            : '✓ ยินดีต้อนรับ! คุณสามารถดูวิดีโอบทเรียนทั้งหมดได้แล้ว', 'success');
    } else {
        // Authentication failed
        errorMsg.textContent = currentLanguage === 'en'
            ? '✗ Invalid username or password! Please try again.'
            : '✗ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง! กรุณาลองอีกครั้ง';
        errorMsg.style.color = '#dc3545';
        errorMsg.style.display = 'block';
        sessionStorage.removeItem('videoAccessGranted');
        sessionStorage.removeItem('authenticatedUser');
    }
}

// Handle Enter key press in password field
function handleUploadPasswordEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        authenticateUser();
    }
}

// Function to navigate to external upload page (checks if authenticated)
function goToUploadPage() {
    const hasAccess = sessionStorage.getItem('videoAccessGranted') === 'true';
    const errorMsg = document.getElementById('uploadAuthError');
    
    if (!hasAccess) {
        errorMsg.textContent = currentLanguage === 'en'
            ? '✗ Please login first to access the upload page!'
            : '✗ กรุณาเข้าสู่ระบบก่อนเพื่อเข้าถึงหน้าอัปโหลด!';
        errorMsg.style.color = '#dc3545';
        errorMsg.style.display = 'block';
        return;
    }
    
    // User is authenticated, redirect to external upload page
    window.location.href = 'https://ai-people-reader-v2.onrender.com/Submit_Job';
}

// Protect tutorial videos - require authentication
function protectTutorialVideos() {
    const videos = document.querySelectorAll('#tutorials video');
    
    videos.forEach(video => {
        // Remove default controls
        video.removeAttribute('controls');
        
        // Add click event to check authentication
        video.addEventListener('click', function(e) {
            e.preventDefault();
            checkVideoAccess(this);
        });
        
        // Prevent play without authentication
        video.addEventListener('play', function(e) {
            const hasAccess = sessionStorage.getItem('videoAccessGranted') === 'true';
            if (!hasAccess) {
                e.preventDefault();
                this.pause();
                showVideoAccessError();
            }
        });
        
        // Add custom play button overlay
        const videoContainer = video.parentElement;
        const playOverlay = document.createElement('div');
        playOverlay.className = 'video-play-overlay';
        playOverlay.innerHTML = '<div class="play-icon">▶</div>';
        playOverlay.onclick = () => checkVideoAccess(video);
        videoContainer.appendChild(playOverlay);
    });
}

// Check video access and play if authenticated
function checkVideoAccess(video) {
    const hasAccess = sessionStorage.getItem('videoAccessGranted') === 'true';
    
    if (hasAccess) {
        // Grant access - add controls and allow playback
        video.setAttribute('controls', 'controls');
        video.play();
        
        // Hide play overlay
        const overlay = video.parentElement.querySelector('.video-play-overlay');
        if (overlay) {
            overlay.style.display = 'none';
        }
    } else {
        showVideoAccessError();
    }
}

// Show error message for video access
function showVideoAccessError() {
    const message = currentLanguage === 'en'
        ? 'Please login in the "Upload Video" section to access tutorial videos!'
        : 'กรุณาเข้าสู่ระบบในส่วน "อัปโหลดวิดีโอ" เพื่อเข้าถึงวิดีโอบทเรียน!';
    
    showMessage(message, 'error');
    
    // Scroll to upload section
    setTimeout(() => {
        scrollToSection('upload');
    }, 1500);
}

// Initialize video protection on page load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        protectTutorialVideos();
    }, 500);
});

// ==================== ADMIN LOGIN MODAL ====================

// Show admin login modal
function showAdminLoginModal() {
    document.getElementById('adminLoginModal').style.display = 'flex';
}

// Close admin login modal
function closeAdminLoginModal() {
    document.getElementById('adminLoginModal').style.display = 'none';
    document.getElementById('adminLoginForm').reset();
    document.getElementById('adminLoginError').style.display = 'none';
}

// Handle admin login
function handleAdminLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('adminLoginUsername').value.trim();
    const password = document.getElementById('adminLoginPassword').value;
    const errorMsg = document.getElementById('adminLoginError');
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    // Check credentials (case-insensitive username)
    let foundUsername = null;
    for (let key in users) {
        if (key.toLowerCase() === username.toLowerCase()) {
            foundUsername = key;
            break;
        }
    }
    
    if (foundUsername && users[foundUsername] === password) {
        // Check if it's Admin
        if (foundUsername === 'Admin') {
            // Admin login successful
            currentUser = foundUsername;
            sessionStorage.setItem('currentUser', currentUser);
            sessionStorage.setItem('videoAccessGranted', 'true');
            sessionStorage.setItem('authenticatedUser', foundUsername);
            
            // Update UI
            document.getElementById('adminLoginBtn').style.display = 'none';
            document.getElementById('userInfo').style.display = 'inline-block';
            document.getElementById('userInfo').textContent = `Welcome, ${currentUser}!`;
            document.getElementById('logoutBtn').style.display = 'inline-block';
            document.getElementById('adminPanelBtn').style.display = 'inline-block';
            
            closeAdminLoginModal();
            showMessage('Welcome Admin! You have full access to the system.', 'success');
            
            // Open admin panel automatically
            setTimeout(() => {
                openAdminPanel();
            }, 500);
        } else {
            errorMsg.textContent = 'Admin access only! Regular users cannot access this panel.';
            errorMsg.style.display = 'block';
        }
    } else {
        errorMsg.textContent = 'Invalid username or password!';
        errorMsg.style.display = 'block';
    }
}

// Logout function (updated)
function logout() {
    currentUser = null;
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('videoAccessGranted');
    sessionStorage.removeItem('authenticatedUser');
    
    // Hide admin UI
    document.getElementById('adminLoginBtn').style.display = 'inline-block';
    document.getElementById('userInfo').style.display = 'none';
    document.getElementById('logoutBtn').style.display = 'none';
    document.getElementById('adminPanelBtn').style.display = 'none';
    
    // Close admin panel if open
    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel.style.display === 'block') {
        closeAdminPanel();
    }
    
    showMessage('Logged out successfully!', 'success');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('adminLoginModal');
    if (event.target == modal) {
        closeAdminLoginModal();
    }
}

console.log('AI People Reader™ - Training Online Portal loaded successfully!');

