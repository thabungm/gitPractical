/*
expression ?operandIfTruthy:operandIfFalsy
*/
const isWarm = false;

if (isWarm) {
  console.log('Today is warm');
} else {
  console.log('Today is cold');
}

isWarm
  ? console.log('Today is a warm day!')
  : console.log('Today is a cold day!');
