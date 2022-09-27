import { CartContextProvider } from './context/CartContext';

import Home from './pages/Home';
import RoutesSetup from './RoutesSetup';
const CartDemo = () => {
  return (
    <CartContextProvider>
      <RoutesSetup />
    </CartContextProvider>
  );
};

export default CartDemo;
