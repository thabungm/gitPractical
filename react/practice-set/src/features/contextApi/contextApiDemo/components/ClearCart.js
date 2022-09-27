import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ClearCart = () => {
  const { clearCart } = useContext(CartContext);
  return <button onClick={clearCart}> X Clear Cart</button>;
};

export default ClearCart;
