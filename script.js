document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    window.addEventListener('scroll', () => {
        let current = '';
        navLinks.forEach((link) => {
            const section = document.querySelector(link.hash);
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = link.hash;
            }
        });
        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.hash === current) {
                link.classList.add('active');
            }
        });
    });
});
