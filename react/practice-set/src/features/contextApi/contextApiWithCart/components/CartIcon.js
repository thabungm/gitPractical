import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
const CartIcon = () => {
  const { cartItems } = useContext(CartContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(cartItems.length);
  }, [cartItems]); //[apple, ball] --> [apple]

  return (
    <div className='cartIcon'>
      <img width='30px' src='./shopping-cart.png' />
      <div className='cartCount'>{count}</div>
    </div>
  );
};

export default CartIcon;
