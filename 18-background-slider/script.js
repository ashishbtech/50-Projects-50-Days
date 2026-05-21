const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

// Initialize the body background on page load
setBgToBody();

function setBgToBody() {
  // Read the inline CSS background-image from the active slide and copy it to the body
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  // Remove the active class from all slides
  slides.forEach((slide) => slide.classList.remove('active'));
  // Apply it only to the currently targeted slide
  slides[activeSlide].classList.add('active');
}

rightBtn.addEventListener('click', () => {
  activeSlide++;

  // Loop back to the beginning if we hit the end
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener('click', () => {
  activeSlide--;

  // Loop to the end if we go backwards past zero
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});