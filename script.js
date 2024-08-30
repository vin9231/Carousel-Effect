// script.js

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
        updateIndicators();
    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    indicators.forEach(indicator => {
        indicator.addEventListener('click', function () {
            currentIndex = parseInt(this.getAttribute('data-slide'));
            updateCarousel();
        });
    });

    updateCarousel(); // Initialize the carousel
});
