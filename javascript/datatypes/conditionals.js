// const products = [
//   { name: 'Earphone', price: 100 },
//   { name: 'Laptop', price: 700, discount: 0 },
// ];
/*
 for each product, print discount 
 if there is a discount field
  else 
print default discount of 2 dollars
*/
// console.log('discount:', products[0].discount || 2);
// console.log('discount:', products[1].discount || 2);

const person = 'Sarah';
const age = 20;
// const message = 'Hello ' + person + ', how are you ' + '   ' + '';
// template literals
const message = `Hello ${person},     how are you?


Text after newline.
`; //
console.log(message);

//optional chaining
// const person = {};

// const course1 = {
//   name: 'MERN',
//   contact: {
//     helpline: 'ABC-123',
//   },
// };

// const course2 = {
//   name: 'Javascript',
// };

// if (course2.contact) {
//   console.log(course2.contact.helpline);
// }
// console.log(course2.contact.helpline);
// console.log(course2?.contact?.helpline);
// if (person.address) {
//   console.log(person.address.pin);
// }

// console.log(person?.address?.pin);

// const conditionLeft = false;
// const conditionRight = 'hello';
// const result = conditionRight || conditionLeft;
// console.log(result);

// // const error = true;// non-zero, string, true
// // const errorMessage = 'There is an error';
// // const value = error && errorMessage;
// console.log(errorMessage && errorMessage)
// // can write like below
// if (errorMessage) {
//     console.log(errorMessage)
// }

// console.log(value);

// truthy and falsy
//falsy values

// const condition = 0; //0-> false
// const condition = false;
// const condition = null;
// const condition = undefined;
// const condition = NaN;
// const condition = '';

// truthy values
// const condition = true;
// const condition = 2; // non-zero integers
// const condition = 'Hello';
// if (condition) {
//   console.log('Truthy');
// } else {
//   console.log('Falsy');
// }

// OR operator ||
// const currentHour = 12;
// if (currentHour == 5 || currentHour == 12) {
//   console.log('or condition satisfied');
// } else {
//   console.log('OR not satisfied');
// }

// AND operator &&
// const currentHour = 10;
// if (currentHour >= 0 && currentHour <= 12) {
//   console.log('Good morning');
// } else {
//   console.log('Else condition');
// }

// const score = 20;
/*
if (score == 20) {
  console.log('Matched');
}
*/

//swtich case

// if (score == 20) {
//   console.log('Good');
// } else if (score == 30) {
//   console.log('Better');
// } else if (score == 40) {
//   console.log('Best');
// }
// const score = 200;
// switch (score) {
//   case 20:
//     console.log('Bad');
//     break;
//   case 30:
//     console.log('Good');
//     break;

//   default:
//     console.log('No match');
//     break;
// }

// ternary
// const isWarm = false;
// const result = isWarm ? 'Today is warm' : 'Today is cold';
// console.log(result);

// scores = 10, 20, 30, 40
// bad, good, better, best
// const score = 40;
// if (score == 10) {
//   console.log('bad');
// } else if (score == 20) {
//   console.log('good');
// } else if (score == 30) {
//   console.log('better');
// } else if (score == 40) {
//   console.log('best');
// }

// if else
// const isWarm = false;
// if (isWarm) {
//   console.log('Today is warm');
// } else {
//   console.log('Today is cold');
// }
