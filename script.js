let currentIndex = 0;

function showSlide(index) {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].clientWidth;

  currentIndex = index;

  sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  const slides = document.querySelectorAll('.slide');
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  const slides = document.querySelectorAll('.slide');
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

showSlide(currentIndex);



  