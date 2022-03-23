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

// Jquery modal click
$(document).ready(function () {
  $('.toggle-modal').on('click', function () {
    $('.modal').toggleClass('active');
  });
  // click outside modal
  $('.modal').on('click', function (e) {
    if (e.target === this) {
      $(this).removeClass('active');
    }
  });
});

// Jquery modal navigation mouseover
$(document).ready(function () {
  $('.item-1').mouseenter(function () {
    $('.modal-over-1').toggleClass('active');
  });
  $('.item-1').mouseleave(function () {
    $('.modal-over-1').toggleClass('active');
  });

});

$(document).ready(function () {
  $('.item-2').mouseenter(function () {
    $('.modal-over-2').toggleClass('active');
  });
  $('.item-2').mouseleave(function () {
    $('.modal-over-2').toggleClass('active');
  });
})

$(document).ready(function () {
  $('.item-3').mouseenter(function () {
    $('.modal-over-3').toggleClass('active');
  });
  $('.item-3').mouseleave(function () {
    $('.modal-over-3').toggleClass('active');
  });
})