import Row from './Row';

export const renderRows = (cart) => {
  const result = cart.map(Row);
  document.querySelector('.item-rows').innerHTML = result.join('');
};

export const renderTotal = (cart) => {
  let totalCost = 0;
  let totalQuantity = 0;

  cart.forEach(function (item) {
    totalQuantity = totalQuantity + item.quantity;
    totalCost = totalCost + item.quantity * item.cost;
  });

  document.querySelector('.total-quantity').innerText = totalQuantity;
  document.querySelector('.total-cost').innerText = totalCost;
};

export const renderCurrencySelector = function (currencyRates) {
  let options = ``;
  for (let key in currencyRates) {
    const value = currencyRates[key];
    options += `<option value='${value}'>${key}</option>`;
  }
  document.querySelector('select[name="currency-picker"]').innerHTML = options;
};
