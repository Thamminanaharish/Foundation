document.addEventListener('DOMContentLoaded', () => {
    const visionItems = document.querySelectorAll('.vision-item');
    window.addEventListener('scroll', () => {
        visionItems.forEach(item => {
            if (item.getBoundingClientRect().top < window.innerHeight) {
                item.classList.add('animate');
            }
        });
    });
});
