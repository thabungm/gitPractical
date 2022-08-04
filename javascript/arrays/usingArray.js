const users = [
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

console.log(
  users.map((user) => `My name is ${user.name}, learning ${user.course}`)
);

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
/*
const members = ['thabung', 'serge', 'arthur', 'poonam'];
// const members = [ 'serge', 'arthur', 'poonam']
const remaining = members.filter((element) => element != 'thabung'); // callback function
console.log(remaining);
*/
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
