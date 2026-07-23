document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 2. Mouse Glow Effect for Glass Cards
    const cards = document.querySelectorAll('.glass-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // 3. Stats Counter Animation
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    const animateCounters = () => {
        if (animated) return;
        animated = true;

        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            if (isNaN(target)) return;

            let current = 0;
            const duration = 1500; // ms
            const stepTime = Math.max(Math.floor(duration / target), 20);

            const timer = setInterval(() => {
                current += Math.ceil(target / (duration / stepTime));
                if (current >= target) {
                    stat.textContent = `${target}+`;
                    clearInterval(timer);
                } else {
                    stat.textContent = `${current}+`;
                }
            }, stepTime);
        });
    };

    // Trigger counter animation when stats block is visible
    const statsCard = document.querySelector('.stats-card');
    if (statsCard) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounters();
            }
        }, { threshold: 0.5 });
        statsObserver.observe(statsCard);
    }
});
