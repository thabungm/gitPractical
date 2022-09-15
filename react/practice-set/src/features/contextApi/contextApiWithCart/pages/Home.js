import ClearCart from '../components/ClearCart';
import ProductList from '../components/ProductList';
import CartIcon from '../components/CartIcon';
import '../styles.css';
const Home = () => {
  return (
    <>
      <nav className='navigation'>
        <ul className='navigation'>
          <li>Home</li>
          <li>About Us</li>
          <li>
            <CartIcon />
          </li>
        </ul>
        <ClearCart />
      </nav>
      <div>
        <ProductList />
      </div>
    </>
  );
};

export default Home;
