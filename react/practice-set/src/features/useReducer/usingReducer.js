/* */
/* const numbers = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i <= 3; i++) {
  sum = sum + numbers[i];
}
console.log(sum); */

// target: calculate the sum
// const numbers = [10, 20, 30, 40];
/* const reducerFn = (prev, current) => {
  return prev + current;
}; */
/* const result = numbers.reduce((prev, current) => {
  console.log(prev, '+', current);
  prev = prev + current;
  return prev; // 10
}, 0);

console.log(result); */

import { useReducer, useState } from 'react';
// Counter
const initialStateValue = 0;
const callbackReducer = (stateValue, action) => {
  switch (action) {
    case 'increment':
      return stateValue + 1;
    case 'decrement':
      return stateValue - 1;
    case 'reset':
      return initialStateValue;
    default:
      return stateValue;
  }
};

const UseReducerDemo = () => {
  // const [value, setValue] = useState(0);
  // console.log(value)
  // setValue(123)
  // console.log(value)

  const [count, dispatch] = useReducer(callbackReducer, initialStateValue);
  return (
    <div>
      {count}
      <div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
      </div>
    </div>
  );
};

export default UseReducerDemo;
