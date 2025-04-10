// splash screen
document.addEventListener("DOMContentLoaded", function() {
  const logo = document.querySelector(".logo");
  logo.classList.add("animate");

  logo.style.transition = "opacity 3s"; 
  logo.style.opacity = 0; 
  setTimeout(function() {
    logo.style.opacity = 1; 
  }, 0);

  setTimeout(function() {
      window.location.href = "home.html"; 
  }, 3000);
});

// Function to animate the counter
function animateCounter(id, start, end, duration) {
  let startTime = null;

  const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Ensure it doesn't exceed 1
      const count = Math.floor(progress * (end - start) + start);
      
      document.getElementById(id).textContent = count + "+"; // Added "+" sign

      if (progress < 1) {
          requestAnimationFrame(animate);
      }
  };

  requestAnimationFrame(animate);
}

// Function to start the animation for all counters
function startAnimation() {
  animateCounter('studentCount', 0, 300 , 2000); 
  animateCounter('branchCount', 0, 20, 2000);  
  animateCounter('courseCount', 0, 4, 2500);    
}

// Start the animation when the page loads
window.onload = startAnimation;

// TESTIMONIAL SLIDER

const slider = document.querySelector('.testimonial-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : 4;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < 4) ? currentIndex + 1 : 0;
    updateSlider();
});
