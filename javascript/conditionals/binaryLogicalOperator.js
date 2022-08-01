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

const truthyValue = 100;
const falsyValue = null;
const logicalEndResult = truthyValue && falsyValue;
console.log(logicalEndResult);

const logicalOrResult = truthyValue || falsyValue;
console.log(logicalOrResult);

//NULL coalescing operator

// let quantity = 0;
// console.log(`Quantity:${quantity ?? 'N/A'}`);

// optional chaining
let user = {
  name: 'John Mockery',
  age: 21,
  phones: { personal: '667-980-1232', official: '689-200-3452' },
};

console.log(user.phones.personal);
