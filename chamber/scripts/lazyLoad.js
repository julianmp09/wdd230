document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img.lazy');

    const lazyLoad = (image) => {
        const src = image.dataset.src;
        if (!src) return;
        image.src = src; // Load actual image
        image.classList.remove('lazy');
    };

    const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                lazyLoad(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    lazyImages.forEach((img) => {
        intersectionObserver.observe(img);
    });
});
