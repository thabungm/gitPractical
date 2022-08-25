const Row = function (item) {
  return `<div class="cart-row">
              <div class="item">${item.product}</div>
              <div class="quantity">${item.quantity}</div>
              <div class="cost">${item.cost}</div>
          </div>`;
};

export default Row;
