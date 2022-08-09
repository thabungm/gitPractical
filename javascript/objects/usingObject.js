const order = {
  orderId: 'abc-123',
  product: 'Mango',
  orderStatus: 'PLACED',
};
// property descriptor
/* const result = Object.getOwnPropertyDescriptor(order, 'orderId');
console.log(result);
for (let property in order) {
  console.log(property);
} */

Object.defineProperty(order, 'orderId', {
  writable: false,
  //   enumerable: false,
  configurable: false,
});
// order.orderId;
for (let property in order) {
  console.log(property);
}
order.orderId = 'xyz';

console.log(order);

/* const customer = { customerName: 'Mike' };
// Merging object
const updatedOrder = { ...order, ...customer };
console.log(updatedOrder); */
/* const order1 = Object.assign({}, order);
order1.orderStatus = 'CLOSED'; */
/* const order1 = { ...order, orderStatus: 'CLOSED' };
// order1.orderStatus = 'CLOSED';
console.log(order1); */

/* const apple = {
  name: 'Apple',
  costPrice: 5,
  customer: { name: 'Mike', contact: 'ABC-123' },
}; */

// //
// const {
//   customer: { name: customerName, contact },
//   ...remainingProperty
// } = apple;
// console.log(customerName, contact);
// console.log(remainingProperty);

/* // Mutations
// add/removing/updating property
const product1 = apple;
product1.costPrice = 6;
console.log(apple); */
