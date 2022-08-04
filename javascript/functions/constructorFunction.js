function Product(productName, productPrice, productQuantity) {
  this.name = productName;
  this.price = productPrice;
  this.quantity = productQuantity;

  this.buy = function (buyQuantity) {
    if (buyQuantity > this.quantity) {
      console.log('Sorry! out of stock');
      return;
    }
    console.log(`Buy ${buyQuantity} ${this.name}`);
    const bill = buyQuantity * this.price;
    console.log(`Total bill: ${bill}`);
    console.log(`Qty before buy:${this.quantity}`);
    this.quantity = this.quantity - buyQuantity;
    console.log(`Qty after buy:${this.quantity}`);

    // this.quantity -= buyQuantity;
  };
}

const orange = new Product('Orange', 2, 10);
orange.buy(2);

const apple = new Product('Apple', 4, 10);
apple.buy(4);
