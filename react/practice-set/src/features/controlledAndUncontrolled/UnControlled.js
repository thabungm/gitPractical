import { useRef } from 'react';

const UnControlled = () => {
  const nameRef = useRef(); // document.querySelector

  const clickButton = () => {
    console.log('value of name', nameRef.current.value);
  };
  return (
    // <form>
    <div className='inputContainer'>
      <input ref={nameRef} type='text' name='name' />
      <button onClick={() => clickButton()}>Button</button>
    </div>
    // </form>
  );
};

export default UnControlled;
