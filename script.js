// Slider
const slider = document.querySelector('.slider-content');

const sliderImages = document.querySelectorAll('.slider-item img');

const sliderArrowLeft = document.querySelector('.slider-arrow-left');
const sliderArrowRight = document.querySelector('.slider-arrow-right');

let sliderIndex = 0;


function sliderNext() {
  sliderIndex++;
  if (sliderIndex > sliderImages.length - 1) {
    sliderIndex = 0;
  }
  slider.style.transform = `translateX(-${sliderIndex * 25}%)`;
}

function sliderPrev() {
  sliderIndex--;
  if (sliderIndex < 0) {
    sliderIndex = sliderImages.length - 1;
  }
  slider.style.transform = `translateX(-${sliderIndex * 25}%)`;
}

setInterval(() => {
  sliderIndex++;
  if (sliderIndex > sliderImages.length - 1) {
    sliderIndex = 0;
  }
  slider.style.transform = `translateX(-${sliderIndex * 25}%)`;
}, 5500);


// togle menu
const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.toggle-menu');

function toggleMenu() {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
}