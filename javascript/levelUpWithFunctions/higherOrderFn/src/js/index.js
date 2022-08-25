import { renderRows, renderTotal, renderCurrencySelector } from './view';
import cart from './cart.json';
import currencyRates from './currencyRates.json';

document
  .querySelector('select[name="currency-picker"]')
  .addEventListener('change', function (event) {
    console.log('init calculation', event.target.value);

    currencyConvert(event.target.value);
  });

const currencyConvert = (currency) => {
  //   const currencyValue = currencyRates[currency];
  console.log(currency);
  const newCartItems = cart.map(function (item) {
    return {
      ...item,
      cost: item.cost * currency,
    };
  });
  renderRows(newCartItems);
  renderTotal(newCartItems);
};
renderCurrencySelector(currencyRates);
renderRows(cart);
renderTotal(cart);
