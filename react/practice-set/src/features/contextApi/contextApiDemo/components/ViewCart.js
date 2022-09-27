import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Product from './Product';

const ViewCart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div className='productListContainer'>
        {cartItems.map((item) => {
          return <Product showCart={false} product={item} />;
        })}
      </div>
    </>
  );
};

export default ViewCart;
