import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const AddCartButton = ({ product }) => {
  const { cartItems, increment, addItemToCart } = useContext(CartContext);
  const handleOnClick = () => {
    if (cartItems.some((item) => item.id == product.id)) {
      return increment(product);
    }
    return addItemToCart(product);
  };

  return (
    <button onClick={handleOnClick} className='addCartButton'>
      Add
    </button>
  );
};

/*
list of items in cart
  Apple: 1 + 1
  Mango: 1


 */
export default AddCartButton;
