// Problem with logical OR ||

const products = [
  { name: 'Earphone', price: 100 },
  { name: 'Laptop', price: 700, discount: 0 },
];

// console.log('Discount amount:', products[1].discount || 5);

// the solution
// null coalescing operator. handles null | undefined
console.log('Discount amount:', products[1].discount ?? 5);
