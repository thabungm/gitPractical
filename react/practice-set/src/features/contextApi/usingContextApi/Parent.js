import { useContext } from 'react';
import { ColorContext } from './ColorContext';

const ParentComponent = () => {
  const { color } = useContext(ColorContext);
  return <div>Here--> {color}</div>;
};

export default ParentComponent;
