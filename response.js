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



// Select all elements with the class 'List' (your price list items)
const listItems = document.querySelectorAll('.List');

// Add the observer for intersection (elements coming into view)
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view'); // Add animation class
        observer.unobserve(entry.target); // Stop observing after entry is visible
      }
    });
  },
  {
    threshold: 0.1, // Adjust as needed (trigger when 10% of the element is in view)
  }
);

// Attach the observer to each list item
listItems.forEach((item) => {
  observer.observe(item);
});








