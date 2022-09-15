import { useContext } from 'react';
import { ColorContext } from './ColorContext';
import './parent.style.css';
const ParentComponent = () => {
  const { color } = useContext(ColorContext);

  return <div className='colorName'>Here--> {color}</div>;
};

export default ParentComponent;
