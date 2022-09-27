import { Link, Outlet } from 'react-router-dom';
import CartIcon from '../components/CartIcon';
import ClearCart from '../components/ClearCart';

const Layout = () => {
  return (
    <div>
      <header>
        <nav className='navigation'>
          <ul className='navigation'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>About Us</li>
            <li>
              <Link to='/cart-items'>View Cart Items</Link>
            </li>
            <li>
              <CartIcon />
            </li>
          </ul>
          <ClearCart />
        </nav>
      </header>
      <Outlet />
      <footer>Footer placeholder</footer>
    </div>
  );
};

export default Layout;
