// JavaScript for the blog post slider
const slides = document.querySelectorAll('.blog-slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides[currentSlide].style.display = 'none';
    slides[slideIndex].style.display = 'block';
    currentSlide = slideIndex;
}

function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

// Show the first slide initially
showSlide(currentSlide);

// Automatic slide transition (change slides every 5 seconds)
setInterval(nextSlide, 2000);
