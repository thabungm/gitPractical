// Here && is the binary logical operator
const currentHour = 12;
if (currentHour >= 0 && currentHour < 12) {
  console.log('Good Morning!');
} else if (currentHour >= 12 && currentHour < 16) {
  console.log('Good Afternoon!');
} else if (currentHour >= 16 && currentHour < 20) {
  console.log('Good Evening!');
} else {
  console.log('Good Night!');
}

const truthyValue = 100; // non-zero integers, non-empty strings,
const falsyValue = null; //
const logicalEndResult = truthyValue && falsyValue;
console.log(logicalEndResult);

const logicalOrResult = truthyValue || falsyValue;
console.log(logicalOrResult);
