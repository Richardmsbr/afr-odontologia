/**
 * AFR Odontologia Especializada
 * Main JavaScript File
 *
 * Features:
 * - Preloader
 * - Mobile Navigation
 * - Sticky Header
 * - Smooth Scroll
 * - Scroll Animations (AOS-like)
 * - Counter Animation
 * - Lightbox Gallery
 * - Active Nav Link Highlight
 */

(function() {
    'use strict';

    // ========================================
    // DOM Elements
    // ========================================
    const preloader = document.getElementById('preloader');
    const header = document.getElementById('header');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const galeriaZoomBtns = document.querySelectorAll('.galeria-zoom');
    const statNumbers = document.querySelectorAll('.stat-number');
    const aosElements = document.querySelectorAll('[data-aos]');

    // ========================================
    // Preloader
    // ========================================
    function hidePreloader() {
        if (preloader) {
            preloader.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    }

    // Hide preloader when page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(hidePreloader, 500);
    });

    // Fallback: hide preloader after 3 seconds even if images haven't loaded
    setTimeout(hidePreloader, 3000);

    // ========================================
    // Mobile Navigation
    // ========================================
    function toggleNav() {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }

    function closeNav() {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
    }

    // Close nav when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', closeNav);
    });

    // Close nav when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !navToggle.contains(e.target)) {
            closeNav();
        }
    });

    // Close nav on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeNav();
        }
    });

    // ========================================
    // Sticky Header
    // ========================================
    function handleScroll() {
        const scrollY = window.scrollY;

        // Add/remove scrolled class
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();

        // Trigger AOS animations
        animateOnScroll();
    }

    window.addEventListener('scroll', throttle(handleScroll, 100));

    // ========================================
    // Active Navigation Link
    // ========================================
    function updateActiveNavLink() {
        const scrollY = window.scrollY;
        const offset = 150; // Offset for better UX

        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ========================================
    // Smooth Scroll
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Scroll Animations (AOS-like)
    // ========================================
    function animateOnScroll() {
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.85;

        aosElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerPoint) {
                element.classList.add('aos-animate');
            }
        });
    }

    // Initial check for elements already in view
    window.addEventListener('load', function() {
        setTimeout(animateOnScroll, 100);
    });

    // ========================================
    // Counter Animation
    // ========================================
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString('pt-BR');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString('pt-BR');
            }
        }, 16);
    }

    // Intersection Observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    statNumbers.forEach(counter => {
        counterObserver.observe(counter);
    });

    // ========================================
    // Lightbox Gallery
    // ========================================
    function openLightbox(imageSrc) {
        if (lightbox && lightboxImg) {
            lightboxImg.src = imageSrc;
            lightbox.classList.add('active');
            document.body.classList.add('no-scroll');
        }
    }

    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.remove('active');
            document.body.classList.remove('no-scroll');
            setTimeout(() => {
                if (lightboxImg) lightboxImg.src = '';
            }, 300);
        }
    }

    // Open lightbox on gallery item click
    galeriaZoomBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const imageSrc = this.getAttribute('data-image');
            openLightbox(imageSrc);
        });
    });

    // Also open lightbox when clicking on gallery image
    document.querySelectorAll('.galeria-item').forEach(item => {
        item.addEventListener('click', function(e) {
            if (!e.target.closest('.galeria-zoom')) {
                const zoomBtn = this.querySelector('.galeria-zoom');
                if (zoomBtn) {
                    const imageSrc = zoomBtn.getAttribute('data-image');
                    openLightbox(imageSrc);
                }
            }
        });
    });

    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    // Close lightbox on background click
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Close lightbox on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // ========================================
    // Parallax Effect (Hero)
    // ========================================
    const heroImage = document.querySelector('.hero-image-wrapper img');

    if (heroImage && window.innerWidth > 768) {
        window.addEventListener('scroll', throttle(function() {
            const scrollY = window.scrollY;
            const heroSection = document.querySelector('.hero');
            const heroHeight = heroSection ? heroSection.offsetHeight : 0;

            if (scrollY < heroHeight) {
                const translateY = scrollY * 0.3;
                heroImage.style.transform = `translateY(${translateY}px)`;
            }
        }, 16));
    }

    // ========================================
    // Form Validation (if needed in future)
    // ========================================
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });

            if (isValid) {
                // Submit form or show success message
                console.log('Form submitted successfully');
            }
        });
    }

    // ========================================
    // Utility Functions
    // ========================================

    // Throttle function for performance
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Debounce function
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ========================================
    // Lazy Loading Images
    // ========================================
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px'
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ========================================
    // Keyboard Navigation
    // ========================================

    // Skip to main content link (accessibility)
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const main = document.querySelector('main');
            if (main) {
                main.tabIndex = -1;
                main.focus();
            }
        });
    }

    // ========================================
    // Service Worker Registration (PWA ready)
    // ========================================
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // Uncomment when you have a service worker file
            // navigator.serviceWorker.register('/sw.js')
            //     .then(registration => console.log('SW registered'))
            //     .catch(error => console.log('SW registration failed'));
        });
    }

    // ========================================
    // Analytics Events (placeholder)
    // ========================================
    function trackEvent(category, action, label) {
        // Google Analytics 4 or other analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    }

    // Track CTA clicks
    document.querySelectorAll('.btn-primary, .btn-cta, .whatsapp-float').forEach(btn => {
        btn.addEventListener('click', function() {
            const label = this.textContent.trim() || 'WhatsApp Float';
            trackEvent('CTA', 'click', label);
        });
    });

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', debounce(function() {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);

        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;

            // Track at 25%, 50%, 75%, 100%
            if ([25, 50, 75, 100].includes(maxScroll)) {
                trackEvent('Scroll', 'depth', `${maxScroll}%`);
            }
        }
    }, 500));

    // ========================================
    // Initialize
    // ========================================
    function init() {
        // Initial scroll check
        handleScroll();

        // Log initialization
        console.log('%c AFR Odontologia Especializada ',
            'background: linear-gradient(135deg, #0FA968, #1E4B8E); color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;');
        console.log('Website initialized successfully');
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
