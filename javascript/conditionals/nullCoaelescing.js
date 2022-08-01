// Problem with logical OR ||
const products = [
  { name: 'Earphone', price: 100 },
  { name: 'Laptop', price: 700, discount: 0 },
];
/*
we should print discount value of 2 
when 'discount' is absent
*/

console.log('discount value is: ', products[0].discount ?? 2);
console.log('discount value is: ', products[1].discount ?? 2);
