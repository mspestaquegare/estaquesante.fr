// ================================
// Navigation Mobile Menu
// ================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animate hamburger icon
        hamburger.classList.toggle('active');

        // Close all dropdowns when closing menu
        if (!navMenu.classList.contains('active')) {
            document.querySelectorAll('.nav-item.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}

// Close menu when clicking on a link (but NOT on dropdown toggles)
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Skip if this is a dropdown toggle
        if (link.classList.contains('dropdown-toggle')) {
            return;
        }

        navMenu.classList.remove('active');
        hamburger.classList.remove('active');

        // Close all dropdowns
        document.querySelectorAll('.nav-item.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });
});

// Close menu when clicking on dropdown links
document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 968) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');

            // Close all dropdowns
            document.querySelectorAll('.nav-item.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

// ================================
// Dropdown Menu Toggle (Mobile)
// ================================
// Note: Gestion unifiée dans initDropdownMenus() ci-dessous

// ================================
// Smooth Scrolling with Offset
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// Active Navigation Link on Scroll
// ================================

const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ================================
// Navbar Shadow on Scroll
// ================================

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
});

// ================================
// Intersection Observer for Animations
// ================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll('.service-card, .team-card, .news-card, .info-card, .contact-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ================================
// Team Avatar Color Generation
// ================================

function generateAvatarColor(initials) {
    const colors = [
        'linear-gradient(135deg, #2563eb, #0ea5e9)',
        'linear-gradient(135deg, #7c3aed, #a855f7)',
        'linear-gradient(135deg, #dc2626, #f97316)',
        'linear-gradient(135deg, #059669, #10b981)',
        'linear-gradient(135deg, #0891b2, #06b6d4)',
        'linear-gradient(135deg, #4f46e5, #6366f1)',
    ];

    const charCode = initials.charCodeAt(0);
    const index = charCode % colors.length;
    return colors[index];
}

// Apply random gradient to avatars
const avatars = document.querySelectorAll('.avatar-placeholder');
avatars.forEach(avatar => {
    const initials = avatar.textContent.trim();
    avatar.style.background = generateAvatarColor(initials);
});

// ================================
// Form Validation (if contact form exists)
// ================================

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        // Basic validation
        if (!name || !email || !message) {
            showNotification('Veuillez remplir tous les champs', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Veuillez entrer une adresse email valide', 'error');
            return;
        }

        // Success message
        showNotification('Message envoyé avec succès !', 'success');
        contactForm.reset();
    });
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ================================
// Loading State
// ================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ================================
// Back to Top Button (Optional)
// ================================

const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 999;
`;

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ================================
// Animations Keyframes
// ================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }

    .back-to-top:hover {
        background-color: var(--primary-dark);
        transform: translateY(-3px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
`;

document.head.appendChild(style);

// ================================
// FAQ Accordion - Universal
// ================================

function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                item.classList.toggle('collapsed');
            });
        }
    });
}

// ================================
// Dropdown Menu - Universal
// ================================

function initDropdownMenus() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            // Only handle click on mobile (max-width: 968px)
            if (window.innerWidth <= 968) {
                e.preventDefault();
                e.stopPropagation();

                const dropdown = this.parentElement;

                // Close other dropdowns
                document.querySelectorAll('.nav-item.dropdown').forEach(item => {
                    if (item !== dropdown) {
                        item.classList.remove('active');
                    }
                });

                // Toggle current dropdown
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close dropdowns when clicking outside (mobile only)
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 968) {
            if (!e.target.closest('.nav-item.dropdown')) {
                document.querySelectorAll('.nav-item.dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        }
    });
}

// ================================
// Initialize all components
// ================================

document.addEventListener('DOMContentLoaded', function() {
    initFaqAccordion();
    initDropdownMenus();
    highlightNavigation(); // Initialize active nav on load
});

// ================================
// Console Log
// ================================

console.log('%c Estaque Santé ', 'background: #2563eb; color: white; font-size: 20px; padding: 10px;');
console.log('%c Site web développé avec soin pour votre santé ', 'color: #64748b; font-size: 12px;');
