import AddCartButton from './AddCartButton';

const Product = ({ product, showCart = true }) => {
  return (
    <div className='productDetails'>
      <img width={'100px'} src={product.imgUrl} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      {showCart && <AddCartButton product={product} />}
    </div>
  );
};

export default Product;
