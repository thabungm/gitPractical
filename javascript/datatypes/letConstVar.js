/*
Given a circle following are the properties
- radius: distance from center to the border(circumference), user will pass value
- diameter: 2 x radius
- perimeter: 2 x 3.41 x radius

Represent the above as an object

*/
/*
const circle = {
  radius: 3,
  diameter: 6,
  permiter: 2 * 1.41 * 3,
};
*/
const circle = {
  radius: 2,
  name: 'Small circle',
  diameter: function () {
    const result = 2 * this.radius;

    console.log('the diameter is: ', result);
  },
  permimeter: function () {
    const result = 2 * 3.41 * this.radius;

    console.log('the perimeter is: ', result);
  },
};

circle.diameter();
circle.permimeter();

// const
/*
const person = {
  name: 'Sarah',
  age: 20,
};

console.log(person);
person.age = 21;
console.log(person);
*/

/*
const firstName = 'Sarah';
console.log(firstName);
firstName = 'Mike';
*/

//let
/*
let age = 20;
if (age >= 20) {
  var age = 21;
  console.log(age);
}
console.log(age);
*/
// if (true) {
//   let testVar;
//   testVar = 1;
// }
// console.log(testVar);
/*
for (let i = 1; i <= 5; ++i) {
  console.log('Hi');
}
console.log(i);
*/

// var
/*
function greeting() {
  var user = 'Sarah';
  console.log('Hi ' + user);
}
console.log(user);
greeting();
*/
/*
for (var i = 1; i <= 5; ++i) {
  console.log('Hi');
}
console.log(i);
*/

/*
var user;
function greeting() {
  console.log('Hi ' + user);
}

user = 'Sarah';

greeting();
*/
