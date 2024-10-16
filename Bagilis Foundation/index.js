const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});














document.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('footer');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            footer.style.transform = 'translateY(100%)'; // Move footer out of view
        } else {
            // Scrolling up
            footer.style.transform = 'translateY(0)'; // Move footer back into view
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});





const footerBackground = document.querySelector('.footer-background');

window.addEventListener('scroll', () => {
    if (window.scrollY < 100) { /* Adjust the value to your needs */
        footerBackground.classList.add('footer-background-scroll');
    } else {
        footerBackground.classList.remove('footer-background-scroll');
    }
});