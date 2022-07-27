/*
Primitive values 
*/
var courseName = 'MERN development';
//Number types
// integer
var century = 100;
/*
Boolean type
 -  Boolean represents a logical entity and can have two values: true and false
*/
var isHelpful = true; // false

/* Float faraction */
var amount = 33.5;
//Null type:
//The main difference between null and undefined is that null
//represents a missing object,
// while undefined represents an uninitialized state.
var emptyBox = null;

//Undefined type
//not been assigned a value
var earthIn2050;
console.log({ earthIn2050 });

//BigInt type
// Limitations with number
var bigInteger = BigInt(Number.MAX_SAFE_INTEGER) + 1000n;
console.log(bigInteger);

var biggerInteger = BigInt(Number.MAX_SAFE_INTEGER) + 1001n;
console.log(biggerInteger);
console.log(bigInteger == biggerInteger);

// exmample mutable vs immutable,

// pass by value
var century = 100;
var centuryCopy = century;

//NaN
var course = {
  name: 'MERN',
  durationInMonths: 3,
  isCompleted: false,
};

console.log(course);
