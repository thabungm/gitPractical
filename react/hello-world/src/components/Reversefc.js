import { useState } from 'react';

const Reversefc = () => {
  const [message, setMessage] = useState('hello'); // ['hello', function() {}]

  return (
    <div>
      <h3>Functional component</h3>
      <div>
        <input
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>
      <div>{message.split('').reverse().join('')}</div>
    </div>
  );
};

export default Reversefc;
