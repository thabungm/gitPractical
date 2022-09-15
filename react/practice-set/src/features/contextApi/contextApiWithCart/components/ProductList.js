import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { getData } from '../getProducts';
import Product from './Product';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    getData().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className='productListContainer'>
      {products.length > 0 &&
        products.map((product) => {
          const { id } = product;
          return <Product key={id} product={product} />;
        })}
    </div>
  );
};

export default ProductList;
