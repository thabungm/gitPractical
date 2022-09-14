import Grandchild from './GrandChild';

const Child = (props) => {
  return <Grandchild theme={props.theme} />;
};

export default Child;
