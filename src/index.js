import './scss/main.scss';

const CARDS = document.querySelector('.cards');

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
  //   console.log(currenciesData);

  const createCard = (currencyData) => {
    console.log(currencyData);
    const createCardTemplate = () => {
      const card = document.createElement('div');
      card.classList.add('card');

      const cardCurrency = document.createElement('div');
      cardCurrency.classList.add('card__currency');

      const cardCurrencyIcon = document.createElement('span');
      cardCurrencyIcon.classList.add('ico');
      cardCurrencyIcon.classList.add('ico_etherium');

      const cardWrapper = document.createElement('div');
      cardWrapper.classList.add('card__wrapper');

      cardCurrency.appendChild(cardCurrencyIcon);
      cardCurrency.appendChild(cardWrapper);

      const cardTitle = document.createElement('h2');
      cardTitle.innerHTML = `${
        currencyData.fullName
          ? currencyData.fullName
          : currencyData.pair.slice(0, -4)
      }`;
      cardTitle.classList.add('card__title');
      cardWrapper.appendChild(cardTitle);

      const cardSubtitle = document.createElement('h3');
      cardSubtitle.innerHTML = `${
        currencyData.fullName
          ? currencyData.fullName
          : currencyData.pair.slice(0, -4)
      }`;
      cardSubtitle.classList.add('card__subtitle');
      cardWrapper.appendChild(cardSubtitle);

      card.appendChild(cardCurrency);

      return card;
    };

    // create currency card
    const card = createCardTemplate();

    return card;
  };

  const setCards = (currencyData) => {
    const card = createCard(currencyData);

    CARDS.appendChild(card);
  };

  // create cards elements
  for (let i = 0; i < currenciesData.length; i += 1) {
    setCards(currenciesData[i]);
  }
};

console.log(CARDS);

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
