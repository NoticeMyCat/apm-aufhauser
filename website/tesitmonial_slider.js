let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

function changeSlide(n) {
    currentSlide += n;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide(currentSlide);
}

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.style.display = index === n ? 'block' : 'none';
    });
}
