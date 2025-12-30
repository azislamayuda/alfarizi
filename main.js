document.addEventListener('DOMContentLoaded', () => {
    const followBtn = document.getElementById('followBtn');
    
    if (followBtn) {
        followBtn.addEventListener('click', () => {
            if (followBtn.classList.contains('active')) {
                followBtn.classList.remove('active');
                followBtn.textContent = 'Follow';
            } else {
                followBtn.classList.add('active');
                followBtn.textContent = 'Following';
            }
        });
    }

    // Optional: Add a subtle parallax scroll effect for the hero text if needed
    // The hero image itself is fixed via CSS
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && window.innerWidth < 992) {
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            if (scrollPos < 400) {
                heroTitle.style.transform = `translateY(${scrollPos * 0.5}px)`;
                heroTitle.style.opacity = 1 - (scrollPos / 300);
            }
        });
    }
});
