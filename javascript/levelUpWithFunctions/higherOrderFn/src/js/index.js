import { renderRows, renderTotal, renderCurrencySelector } from './view';
import cart from './cart.json';
import currencyRates from './currencyRates.json';

document
  .querySelector('select[name="currency-picker"]')
  .addEventListener('change', function (event) {
    console.log('init calculation', event.target.value);

    const modifiedRenderRow = currencyConvert(event.target.value, renderRows);
    modifiedRenderRow(cart);

    const modifiedCurrencyConvert = currencyConvert(
      event.target.value,
      renderTotal
    );
    modifiedCurrencyConvert(cart);
  });

const currencyConvert = (currency, fn) => {
  function modifiedFunction(cart) {
    const newCartItems = cart.map(function (item) {
      return {
        ...item,
        cost: item.cost * currency,
      };
    });
    fn(newCartItems);
  }

  return modifiedFunction;
};

renderCurrencySelector(currencyRates);
renderRows(cart);
renderTotal(cart);
