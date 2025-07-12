document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only smooth scroll if it's an internal link (e.g., #products)
            if (href.startsWith('#')) {
                e.preventDefault(); // Prevent default jump

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - (document.querySelector('header').offsetHeight + 20), // Adjust for sticky header + some padding
                        behavior: 'smooth'
                    });
                }
            }
            // For external links or "#", let default behavior happen
        });
    });

    // Animate hero content on load (if not already handled by CSS animations)
    // This part is largely covered by the CSS animations I provided, but
    // if you want more JS control or different effects, you can enable/modify this.
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0'; // Start hidden if JS handles animation
        heroContent.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100); // Small delay to ensure CSS is rendered first
    }


    // Example: Product Quick View Modal (Conceptual)
    // This would require more HTML for the modal itself, but here's the JS logic.
    document.querySelectorAll('.product .btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Check if the button is for "View Details" and not "Shop Now" in hero
            if (this.textContent === 'View Details') {
                e.preventDefault(); // Stop default link behavior
                const productName = this.previousElementSibling.previousElementSibling.textContent; // Gets <h3>
                const productPrice = this.previousElementSibling.textContent; // Gets <p>

                // In a real scenario, you'd fetch more product details from a data source
                // and populate a modal here.
                console.log(`User wants to view details for: ${productName} (${productPrice})`);
                alert(`Quick View: \nProduct: ${productName}\nPrice: ${productPrice}\n\n(A full modal would open here!)`);

                // Example of opening a modal (assuming you have one in HTML)
                // const modal = document.getElementById('product-modal');
                // const modalContent = document.getElementById('modal-content');
                // modalContent.innerHTML = `<h3>${productName}</h3><p>${productPrice}</p><p>More details...</p>`;
                // modal.style.display = 'block';
            }
        });
    });

    // Back to Top Button (Optional but useful for long pages)
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show after scrolling 300px down
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
});