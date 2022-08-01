/*
expression ?operandIfTruthy:operandIfFalsy
*/
const isWarm = false;

if (isWarm) {
  console.log('Today is warm');
} else {
  console.log('Today is cold');
}

const result = isWarm ? 'Today is a warm day!' : 'Today is a cold day!';
console.log(result);
