const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
];
for (let i = 0; i < library.length; i++) {
  console.log(`
    Author:${library[i].author}, Title: ${library[i].title}
    --------------------------------
    `);
}

let cars = [
  {
    color: 'blue',
    type: 'minivan',
    registration: new Date('2017-01-03'),
  },
  {
    color: 'purple',
    type: 'Hatchback',
    registration: new Date('2017-01-03'),
    quantity: 0,
  },
  {
    color: 'red',
    type: 'station wagon',
    registration: new Date('2018-03-03'),
    quantity: 5,
  },
];

for (let i = 0; i < cars.length; i++) {
  console.log(`
   Name: ${cars[i].type},Quantity: ${cars[i].quantity ?? 1}
    `);
}
