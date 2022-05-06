import './scss/main.scss';

// fetch data from API

// const url =
//   'https://www.binance.com/bapi/asset/v1/public/asset-service/product/currency';

// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let currencies = data.data;
//     console.log(currencies);
//     // console.log(currencies.data);

//     currencies.map((item) => {
//       console.log(item);
//     });
//   })
//   .catch(function (error) {
//     console.log(error, 'error');
//   });

const fetchCurrenciesData = async () => {
  try {
    const res = await fetch(
      'https://www.binance.com/bapi/asset/v1/public/asset-service/product/currency'
    );
    const json = await res.json();
    // console.log(json.data);
    return json.data;
  } catch (err) {
    console.log(error, 'error');
  }
};

const mapCurrencies = async () => {
  const currenciesData = await fetchCurrenciesData();
  console.log(currenciesData);
};

mapCurrencies();

// code for burger menu
const openButton = document.querySelector('.header__button-open-nav');
const closeButton = document.querySelector('.sidebar__button-close-nav');
const nav = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('.navigation__item');
const body = document.querySelector('body');

openButton.addEventListener('click', () => {
  nav.classList.add('navigation-open');
  body.classList.add('disable-scroll');
});

closeButton.addEventListener('click', () => {
  nav.classList.remove('navigation-open');
  body.classList.remove('disable-scroll');
});

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    nav.classList.remove('navigation-open');
    body.classList.remove('disable-scroll');
  });
});
