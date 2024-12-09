const slides = document.querySelectorAll('.slide');
const caption = document.querySelector('.caption');
const captions = [
  "Fruit Salad & Pancake", "Salad", "Croissant", "Puff-Puff & Chicken", 
  "Kebab", "Cake/Bread", "Bread", "Sausage Roll", "Cake", "Grill Chicken", 
  "Carrot Cake", "Cinnamon Roll"
]; // Update with your captions
let currentIndex = 0;

function updateSlides() {
  slides.forEach((slide, i) => {
    // Remove all the active, prev, next classes
    slide.classList.remove('active', 'prev', 'next');
    
    // Add 'active' class to the current slide
    if (i === currentIndex) {
      slide.classList.add('active');
    } 
    // Add 'prev' class to the previous slide
    else if (i === (currentIndex - 1 + slides.length) % slides.length) {
      slide.classList.add('prev');
    } 
    // Add 'next' class to the next slide
    else if (i === (currentIndex + 1) % slides.length) {
      slide.classList.add('next');
    }
  });

  // Update caption based on the current slide
  caption.textContent = captions[currentIndex];
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlides();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlides();
}

// Initialize the slider
updateSlides();

// Automatically transition slides every 3 seconds
setInterval(nextSlide, 3000);
