document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navigation Bar
    const navbar = document.querySelector('.navbar');
    // Using a more robust check for scroll position to activate the 'scrolled' class
    const initialHeroHeight = document.querySelector('.hero-section').offsetHeight;

    window.addEventListener('scroll', () => {
        // Activate 'scrolled' class when scrolled past a certain point (e.g., 50px or part of hero)
        if (window.scrollY > (initialHeroHeight * 0.1 || 50)) { // 10% of hero height or 50px
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks'); // Targeted by ID now
    const registerBtn = document.getElementById('registerBtn');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');

            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden'; // Disable background scrolling
                if (registerBtn) registerBtn.style.display = 'none'; // Hide the register button
            } else {
                document.body.style.overflow = 'auto'; // Re-enable background scrolling
                // Restore button display based on screen size, assuming it's always visible on desktop
                if (registerBtn && window.innerWidth > 768) {
                    registerBtn.style.display = 'inline-block';
                }
            }
        });
    }

    // Smooth scrolling for navigation links (if you add actual sections)
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only prevent default if it's an internal link, otherwise let it navigate
            if (this.getAttribute('href').startsWith('#') && this.getAttribute('href').length > 1) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }

            // Remove 'active' class from all and add to clicked
            document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }
        });
    });


    // Example for button clicks (replace with actual logic)
    const registerButton = document.getElementById('registerBtn');
    if (registerButton) {
        registerButton.addEventListener('click', () => {
            alert('Register button clicked! (This would lead to a registration form or page)');
            // For a real site: window.location.href = '/register.html';
        });
    }

    const bookTripButton = document.getElementById('bookTripBtn');
    if (bookTripButton) {
        bookTripButton.addEventListener('click', () => {
            alert('Book Your Trip button clicked! (This would lead to a booking page)');
            // For a real site: window.location.href = '/book-trip.html';
        });
    }
});