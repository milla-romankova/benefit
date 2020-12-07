'use strict';

const slider = document.querySelectorAll('.slider__item');
const points = document.querySelectorAll('.slider__point');
const list = document.querySelector('.slider__points');
const slideRight = document.querySelector('.slider__arrow--right');
const slideleft = document.querySelector('.slider__arrow--left');

/* eslint-disable */

list.addEventListener('click', event => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  for (let i = 0; i < points.length; i++) {
    if (event.target === points[i]) {
      slider[i].classList.add('slider__item--block');
      points[i].classList.add('slider__point--block');
    } else {
      slider[i].classList.remove('slider__item--block');
      points[i].classList.remove('slider__point--block');
    }
  }
});

slideRight.addEventListener('click', function() {
  for (let i = 0; i < slider.length; i++) {
    if (slider[i].classList.contains('slider__item--block')
      && (i < slider.length - 1)) {
      slider[i].classList.remove('slider__item--block', 'animate__slideInRight');
      slider[i + 1].classList.add('slider__item--block', 'animate__slideInRight');
      points[i + 1].classList.add('slider__point--block');
      points[i].classList.remove('slider__point--block');
      break;
    }

    if (slider[i].classList.contains('slider__item--block')
    && (i === slider.length - 1)) {
      slider[i].classList.remove('slider__item--block', 'animate__slideInRight');
      slider[0].classList.add('slider__item--block', 'animate__slideInRight');
      points[0].classList.add('slider__point--block');
      points[i].classList.remove('slider__point--block');
      break;
    }
  }
});

slideleft.addEventListener('click', function() {
  for (let i = 0; i < slider.length; i++) {
    if (slider[i].classList.contains('slider__item--block')
      && (i > 0)) {
      slider[i].classList.remove('slider__item--block', 'animate__slideInLeft');
      slider[i - 1].classList.remove('animate__slideInRight');
      slider[i - 1].classList.add('slider__item--block', 'animate__slideInLeft');
      points[i - 1].classList.add('slider__point--block');
      points[i].classList.remove('slider__point--block');
      break;
    }

    if (slider[i].classList.contains('slider__item--block')
    && (i === 0)) {
      slider[i].classList.remove('slider__item--block', 'animate__slideInLeft');
      slider[slider.length - 1].classList.remove('animate__slideInRight');
      slider[slider.length - 1].classList.add('slider__item--block', 'animate__slideInLeft');
      points[slider.length - 1].classList.add('slider__point--block');
      points[i].classList.remove('slider__point--block');
      break;
    }
  }
});

const burger = document.querySelector('.nav__burgers');
const nav = document.querySelector('.nav__list');

burger.addEventListener('click', event => {
  burger.children[0].classList.toggle('nav__burger--toggle');
  burger.children[1].classList.toggle('nav__burger--toggle');

  if (event.target === burger.children[0]) {
    nav.classList.remove('animate__slideOutLeft');
    nav.classList.add('nav__list--toggle', 'animate__slideInLeft');
  } else {
    nav.classList.remove('animate__slideInLeft');
    nav.classList.add('animate__slideOutLeft');
  }
});

$(document).ready(function() {
  $('.popular__cards').slick({
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1250,
        settings: 'unslick',
      },
    ],
  });
});
