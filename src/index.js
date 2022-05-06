import './scss/main.scss';
import mapCurrencies from './js/mapCurrencies';

mapCurrencies();

// code for burger menu
const OPEN_BUTTON = document.querySelector('.header__button-open-nav');
const CLOSE_BUTTON = document.querySelector('.sidebar__button-close-nav');
const NAV = document.querySelector('.sidebar');
const NAV_ITEMS = document.querySelectorAll('.navigation__item');
const BODY = document.querySelector('body');

OPEN_BUTTON.addEventListener('click', () => {
  NAV.classList.add('navigation-open');
  BODY.classList.add('disable-scroll');
});

CLOSE_BUTTON.addEventListener('click', () => {
  NAV.classList.remove('navigation-open');
  BODY.classList.remove('disable-scroll');
});

NAV_ITEMS.forEach((item) => {
  item.addEventListener('click', () => {
    NAV.classList.remove('navigation-open');
    BODY.classList.remove('disable-scroll');
  });
});
