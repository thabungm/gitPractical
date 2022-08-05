// SLICE
/* const numbers = [10, 20, 30, 40, 50];
console.log(numbers.slice(1, 4)); */

/* // SPLICE
numbers.splice(1, 1, 'newValue');
console.log(numbers); */
// const numbers = [1, 2, 3, 4, 5];
/* 
let sum = 0;
for (let i = 0; i < numbers.length; ++i) {
  sum += numbers[i];
}
console.log(sum);
 */

// const result = numbers.reduce(function (sum, current) {
//   sum += current;
//   return sum;
// }, 0);
// console.log(result);

/* const col1 = [1, 2];
const col2 = [3, 4];
// const result = [...col1, ...col2]; // [1,2,3,4]
// console.log(result);
const copyCol1 = [...col1]; // shallow copy
col1.push(3);
console.log(col1);
console.log(copyCol1); */

/* // NESTED array
const numArray = [
  [1, 2],
  [3, 4],
];
console.log(numArray.flat()); // [1,2,3,4] */

/* const [hottestPlanet, ...remaining] = ['Venus', 'Mercury', 'Earth'];
console.log(hottestPlanet);
console.log(remaining); */

/* // Destructuring assignment
const [org, ceo] = ['SpaceX', 'Elon Musk'];
console.log(org);
console.log(ceo);
 */

/* const users = [
  {
    name: 'Artur',
    course: 'HTML',
  },
  {
    name: 'Sergey',
    course: 'css',
  },
  {
    name: 'Poonam',
    course: 'Javascript',
  },
];
console.log(users);
const result = users.map(
  (element) => `I am ${element.name}, learning${element.course}`
);

console.log(result); */

/*
Given:
const users = [
    {
    name:'Artur',
    course:'HTML'
    },
    {
        name:'Sergey',
        course:'css'
    },
    {
        name:'Poonam',
        course:'Javascript'
    }
];

Expected outcome
[
    'My name is $name, learning $course',
    'My name is $name, learning $course',
    'My name is $name, learning $course',
]


*/
/*
const numbers = [1, 2, 3, 4, 5];
// transformed = ['1 is odd', '2 is even']
const transformed = numbers.map((element) => {
  return element % 2 == 0 ? `${element} is even` : `${element} is odd`;
});
console.log(transformed);
*/

const members = ['thabung', 'serge', 'arthur', 'poonam'];
// const members = [ 'serge', 'arthur', 'poonam']
const remaining = members.filter((element) => element != 'thabung'); // callback function
console.log(remaining);

/*
const shapes = ['box', 'circle', 'triangle'];
console.log(shapes.join('*'));
console.log(shapes);
*/
/*
const result = shapes.slice(1, 3);
console.log(result);
*/

/*
const numbers = [20, 1, 40];
// numbers.reverse();
numbers.sort();
console.log(numbers);
*/

// const fruits = new Array();
/*
const fruits = ['Kiwi', 'Apple'];
fruits.push('Mango');

console.log(fruits);

fruits.pop();
console.log(fruits);
*/
