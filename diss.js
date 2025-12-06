// ========== PAGE LOAD ANIMATION ==========
// Smooth page load with fade-in effect
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    console.log('Page loaded successfully!');
});

// ========== SMOOTH SCROLLING ==========
// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== SCROLL TO TOP BUTTON ==========
// Create a "Back to Top" button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #4a9eff;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(74, 158, 255, 0.4);
`;
document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to top when button is clicked
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect for scroll button
scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#3d8de6';
    this.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#4a9eff';
    this.style.transform = 'scale(1)';
});

// ========== MOBILE MENU TOGGLE ==========
// Add mobile menu functionality (for future mobile menu)
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.innerHTML = '☰';
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.style.cssText = `
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 28px;
    cursor: pointer;
`;

// ========== LANGUAGE SELECTOR ==========
// Add functionality to language selector
const languageSelect = document.querySelector('.language select');
if (languageSelect) {
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        alert(`Language changed to: ${selectedLanguage}`);
        console.log('Selected language:', selectedLanguage);
    });
}

// ========== DOWNLOAD BUTTON CLICK TRACKING ==========
// Track download button clicks
const downloadButtons = document.querySelectorAll('a[download]');
downloadButtons.forEach(button => {
    button.addEventListener('click', function() {
        console.log('Download button clicked!');
        alert('Thank you for downloading Bisbo! 🎉');
    });
});

// ========== HEADER SCROLL EFFECT ==========
// Add shadow to header on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// ========== FEATURE CARDS ANIMATION ==========
// Animate feature sections when they come into view
const featureSections = document.querySelectorAll('.features');

const observerOptions = {
    threshold: 0.2,
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

// Initially hide feature sections for animation
featureSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ========== SOCIAL MEDIA LINKS ==========
// Add click event to social media icons
const socialIcons = document.querySelectorAll('.social-icons a');
socialIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            alert('Social media link would open here!');
        }
    });
});

// ========== CONSOLE WELCOME MESSAGE ==========
console.log('%c Welcome to Bisbo! ', 'background: #4a9eff; color: white; font-size: 20px; padding: 10px;');
console.log('%c Made with ❤️ by just-arpit ', 'color: #4a9eff; font-size: 14px;');

// ========== VIDEO AUTO-PLAY CHECK ==========
// Ensure videos play automatically
const videos = document.querySelectorAll('video');
videos.forEach(video => {
    video.addEventListener('loadeddata', function() {
        console.log('Video loaded successfully');
    });
});

// ========== BUTTON CLICK EFFECTS ==========
// Add click effect to all buttons
const buttons = document.querySelectorAll('.btn, button');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            width: 100px;
            height: 100px;
            margin-left: -50px;
            margin-top: -50px;
            animation: ripple 0.6s;
            pointer-events: none;
        `;
        
        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from {
            opacity: 1;
            transform: scale(0);
        }
        to {
            opacity: 0;
            transform: scale(4);
        }
    }
`;
document.head.appendChild(style);

// ========== FOOTER YEAR UPDATE ==========
// Update copyright year automatically
const footerNote = document.querySelector('.footer-note');
if (footerNote) {
    const currentYear = new Date().getFullYear();
    footerNote.textContent = `© ${currentYear} Bisbo - Connect Better | Designed by just-arpit`;
}

// ========== PAGE VISIBILITY ==========
// Detect when user switches tabs
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('User left the page');
        document.title = '👋 Come back to Bisbo!';
    } else {
        console.log('User returned to the page');
        document.title = 'Bisbo - Connect and Chat';
    }
});

// ========== KEYBOARD SHORTCUTS ==========
// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to scroll to top
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        console.log('Scrolled to top via keyboard shortcut');
    }
    
    // Ctrl/Cmd + L to go to login
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        window.location.href = 'login.html';
    }
});

console.log('💡 Tip: Press Ctrl/Cmd + K to scroll to top, Ctrl/Cmd + L to go to login page');