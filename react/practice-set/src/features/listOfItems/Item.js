import '../../App.css';

const Item = ({ name, username }) => {
  return (
    <div className='itemClass'>
      <h3>{name}</h3>
      <div>{username}</div>
    </div>
  );
};

export default Item;
