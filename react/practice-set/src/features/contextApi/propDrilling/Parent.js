import Child from './Child';

const ParentComponent = (props) => {
  return <Child theme={props.theme} />;
};

export default ParentComponent;
