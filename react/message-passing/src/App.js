import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ChildComponent from './components/ChildComponent';
// parent to child
function ParentComponent() {
  const messageFromParent = 'Message from Parent';
  // useState('hello'); -> const [message, setMessage] = ['hellow', fn]

  const [message, setMessage] = useState('Good morning');
  // this.setState({message: 'newMessage}) <- class component

  return (
    <div className='ParentComponent'>
      <h3>Parent component</h3>
      {message}
      <ChildComponent
        message={messageFromParent}
        onChangeFn={(value) => {
          console.log(`Inside parent, ${value}`);
          setMessage(value);
        }}
      />
    </div>
  );
}

export default ParentComponent;
