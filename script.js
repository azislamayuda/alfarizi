document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, {
        root: null,
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 2. Mouse Glow Effect for Glass Cards (Desktop only)
    const cards = document.querySelectorAll('.glass-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            // Calculate mouse position relative to the card
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Set custom properties for CSS
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        // Hide glow when mouse leaves
        card.addEventListener('mouseleave', () => {
             // We can optionally reset or hide the glow, handled by CSS opacity on hover
        });
    });
});
