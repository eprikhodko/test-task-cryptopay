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
    // console.log(currencyData);
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

      const cardRate = document.createElement('p');
      cardRate.classList.add('card__rate');
      cardRate.innerHTML = `${currencyData.rate}`;

      cardCurrency.append(cardCurrencyIcon);
      cardCurrency.append(cardWrapper);
      card.append(cardCurrency);
      card.append(cardRate);

      const cardTitle = document.createElement('h2');
      cardTitle.innerHTML = `${
        currencyData.fullName
          ? currencyData.fullName
          : currencyData.pair.slice(0, -4)
      }`;
      cardTitle.classList.add('card__title');
      cardWrapper.append(cardTitle);

      const cardSubtitle = document.createElement('h3');
      cardSubtitle.innerHTML = `${currencyData.symbol}`;
      cardSubtitle.classList.add('card__subtitle');
      cardWrapper.append(cardSubtitle);

      return card;
    };

    // create currency card
    const card = createCardTemplate();

    return card;
  };

  const setCards = (currencyData) => {
    const card = createCard(currencyData);

    CARDS.append(card);
  };

  // create cards elements
  for (let i = 0; i < currenciesData.length; i += 1) {
    setCards(currenciesData[i]);
  }

  // code for sort by filter
  const SORT_BY = document.querySelector('.sort-by__value');
  const SORT_BY_ARROW_ICON = document.querySelector('.ico_arrow');

  //   .ico_arrow-reverse

  SORT_BY.addEventListener('click', () => {
    SORT_BY_ARROW_ICON.classList.toggle('ico_arrow-reverse');
    const reverseArray = currenciesData.reverse();

    CARDS.innerHTML = '';

    for (let i = 0; i < reverseArray.length; i += 1) {
      setCards(reverseArray[i]);
    }
  });
};

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
