import './scss/main.scss';

console.log('hello from main page');

// code for burger menu
const openButton = document.querySelector('.header__button-open-nav');
const closeButton = document.querySelector('.sidebar__button-close-nav');
const nav = document.querySelector('.sidebar');
const body = document.querySelector('body');

openButton.addEventListener('click', () => {
  nav.classList.add('navigation-open');
  body.classList.add('disable-scroll');
});

closeButton.addEventListener('click', () => {
  nav.classList.remove('navigation-open');
  body.classList.remove('disable-scroll');
});
