/* */

/* 
// target: calculate the sum
const numbers = [1, 2, 3, 4];
const reducerFn = (prev, current) => {
  return prev + current;
};
numbers.reduce(reducerFn, 0);

*/
import { useReducer } from 'react';
// Counter
const initialStateValue = 0;
const reducer = (stateValue, action) => {
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
  const [count, dispatch] = useReducer(reducer, initialStateValue);
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
