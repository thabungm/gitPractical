import { useState } from 'react';

const ControlledForm = () => {
  //name , email
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form>
      <div className='inputContainer'>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => {
            setName(e.target.value.toUpperCase());
          }}
        />
      </div>
      <div>{name}</div>
    </form>
  );
};

export default ControlledForm;
