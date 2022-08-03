// ecommerce -> Product
function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;

  this.buy = function (buyCount) {
    if (buyCount > this.quantity) {
      console.log('Sorry! not enough stock!');
      return;
    }
    console.log(`Buy ${buyCount} ${this.name}`);
    const bill = buyCount * this.price;
    this.quantity = this.quantity - buyCount;
    console.log(`The total bill is: ${bill}`);
  };
}

const apple = new Product('Apple', 2, 10);
console.log(apple);

const mango = new Product('Mango', 1.5, 5);
console.log(mango);
console.log('Before stock:', mango.quantity);

mango.buy(2);
console.log('After stock:', mango.quantity);
