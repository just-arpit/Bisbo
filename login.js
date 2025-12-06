// ========== PAGE LOAD ANIMATION ==========
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    console.log('Login page loaded successfully!');
});

// ========== FORM VALIDATION ==========
const loginForm = document.querySelector('.login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.querySelector('.login-btn');

// Prevent default form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
});

// Real-time email validation
emailInput.addEventListener('input', function() {
    const value = this.value;
    
    // Remove any previous error styling
    this.style.borderColor = '#202225';
    
    // Check if email is valid
    if (value.length > 0) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[\d\s\-\+\(\)]+$/;
        
        if (emailPattern.test(value) || phonePattern.test(value)) {
            this.style.borderColor = '#43b581'; // Green for valid
            console.log('Valid email/phone format');
        } else {
            this.style.borderColor = '#f04747'; // Red for invalid
        }
    }
});

// Real-time password validation
passwordInput.addEventListener('input', function() {
    const value = this.value;
    
    // Remove any previous error styling
    this.style.borderColor = '#202225';
    
    // Check password strength
    if (value.length > 0) {
        if (value.length < 6) {
            this.style.borderColor = '#f04747'; // Red for weak
        } else if (value.length >= 6 && value.length < 10) {
            this.style.borderColor = '#faa61a'; // Orange for medium
        } else {
            this.style.borderColor = '#43b581'; // Green for strong
        }
    }
});

// ========== LOGIN BUTTON FUNCTIONALITY ==========
loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Validation
    if (email === '') {
        alert('Please enter your email or phone number!');
        emailInput.focus();
        emailInput.style.borderColor = '#f04747';
        return;
    }
    
    if (password === '') {
        alert('Please enter your password!');
        passwordInput.focus();
        passwordInput.style.borderColor = '#f04747';
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        passwordInput.focus();
        passwordInput.style.borderColor = '#f04747';
        return;
    }
    
    // Show loading state
    const originalText = loginBtn.textContent;
    loginBtn.textContent = 'Logging in...';
    loginBtn.style.opacity = '0.7';
    loginBtn.style.pointerEvents = 'none';
    
    // Simulate login process
    setTimeout(function() {
        console.log('Login attempt:', { email: email, password: '***' });
        alert(`Welcome back! Logging in as ${email} 🎉`);
        
        // Redirect to main page
        window.location.href = 'diss.html';
    }, 1500);
});

// ========== FORGOT PASSWORD LINK ==========
const forgotPasswordLink = document.querySelector('.forgot-password');
forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    
    if (email === '') {
        alert('Please enter your email first to reset your password.');
        emailInput.focus();
    } else {
        alert(`Password reset link would be sent to: ${email}`);
        console.log('Password reset requested for:', email);
    }
});

// ========== REGISTER LINK ==========
const registerLink = document.querySelector('.register-link');
registerLink.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Registration page would open here! 📝');
    console.log('User wants to register');
});

// ========== SHOW/HIDE PASSWORD ==========
// Create a toggle button for password visibility
const passwordToggle = document.createElement('button');
passwordToggle.textContent = '👁️';
passwordToggle.type = 'button';
passwordToggle.style.cssText = `
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #b9bbbe;
    cursor: pointer;
    font-size: 18px;
    padding: 5px;
`;

// Add toggle button to password field
const passwordGroup = passwordInput.parentElement;
passwordGroup.style.position = 'relative';
passwordGroup.appendChild(passwordToggle);

// Toggle password visibility
let passwordVisible = false;
passwordToggle.addEventListener('click', function() {
    passwordVisible = !passwordVisible;
    
    if (passwordVisible) {
        passwordInput.type = 'text';
        passwordToggle.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        passwordToggle.textContent = '👁️';
    }
    
    console.log('Password visibility:', passwordVisible ? 'visible' : 'hidden');
});

// ========== INPUT FOCUS EFFECTS ==========
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.querySelector('label').style.color = '#4a9eff';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.querySelector('label').style.color = '#b9bbbe';
    });
});

// ========== KEYBOARD SHORTCUTS ==========
// Enter key to submit
passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        loginBtn.click();
    }
});

// Escape key to clear form
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        emailInput.value = '';
        passwordInput.value = '';
        emailInput.style.borderColor = '#202225';
        passwordInput.style.borderColor = '#202225';
        console.log('Form cleared');
    }
});

// ========== CHARACTER ANIMATION ==========
const floatingCharacter = document.querySelector('.floating-character');
if (floatingCharacter) {
    // Add mouse move effect
    document.addEventListener('mousemove', function(e) {
        const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
        const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
        
        floatingCharacter.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}

// ========== AUTO-FILL DETECTION ==========
// Detect browser autofill
inputs.forEach(input => {
    input.addEventListener('change', function() {
        if (this.value !== '') {
            console.log('Auto-fill detected for:', this.name);
        }
    });
});

// ========== CONSOLE WELCOME MESSAGE ==========
console.log('%c Welcome to Bisbo Login ', 'background: #4a9eff; color: white; font-size: 18px; padding: 10px;');
console.log('%c Press Enter to login, ESC to clear form ', 'color: #4a9eff; font-size: 12px;');
console.log('%c Made with ❤️ by just-arpit ', 'color: #43b581; font-size: 14px;');

// ========== PAGE TITLE ANIMATION ==========
let titleText = 'Login - Bisbo';
let titleIndex = 0;
let titleInterval;

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        titleInterval = setInterval(function() {
            titleIndex = (titleIndex + 1) % (titleText.length + 1);
            document.title = titleText.substring(0, titleIndex) || 'Login';
        }, 200);
    } else {
        clearInterval(titleInterval);
        document.title = titleText;
    }
});

// ========== LOADING INDICATOR ==========
// Add a subtle loading bar at the top
const loadingBar = document.createElement('div');
loadingBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #4a9eff 0%, #7289DA 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
    z-index: 9999;
`;
document.body.appendChild(loadingBar);

// Simulate loading on page load
window.addEventListener('load', function() {
    loadingBar.style.transform = 'scaleX(1)';
    setTimeout(function() {
        loadingBar.style.opacity = '0';
    }, 500);
});

// ========== REMEMBER ME FUNCTIONALITY ==========
// Create "Remember Me" checkbox
const rememberMeDiv = document.createElement('div');
rememberMeDiv.style.cssText = `
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: -10px;
    margin-bottom: 10px;
`;

const rememberMeCheckbox = document.createElement('input');
rememberMeCheckbox.type = 'checkbox';
rememberMeCheckbox.id = 'remember-me';
rememberMeCheckbox.style.cursor = 'pointer';

const rememberMeLabel = document.createElement('label');
rememberMeLabel.htmlFor = 'remember-me';
rememberMeLabel.textContent = 'Remember me';
rememberMeLabel.style.cssText = `
    color: #b9bbbe;
    font-size: 14px;
    cursor: pointer;
    user-select: none;
`;

rememberMeDiv.appendChild(rememberMeCheckbox);
rememberMeDiv.appendChild(rememberMeLabel);

// Insert after password field
const forgotPassword = document.querySelector('.forgot-password');
forgotPassword.parentNode.insertBefore(rememberMeDiv, forgotPassword);

// Remember me functionality
rememberMeCheckbox.addEventListener('change', function() {
    if (this.checked) {
        console.log('Remember me: enabled');
    } else {
        console.log('Remember me: disabled');
    }
});

console.log('✨ Login page interactive features loaded!');