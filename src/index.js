import './scss/main.scss';

console.log('hello from main page');

// code for burger menu
// const closeButton = document.querySelector('.header-nav__button-close-nav');
const openButton = document.querySelector('.header__button-open-nav');
const nav = document.querySelector('.sidebar');
const body = document.querySelector('body');

// closeButton.addEventListener('click', () => {
//   nav.classList.remove('navigation-open');
//   body.classList.remove('disable-scroll');
// });

openButton.addEventListener('click', () => {
  nav.classList.toggle('navigation-open');
  body.classList.toggle('disable-scroll');
  openButton.classList.toggle('header-nav__button-open-nav_rotate');
  overlayDark.classList.toggle('bg-semi-transparent');
});
