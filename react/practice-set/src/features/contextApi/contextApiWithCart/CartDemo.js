import { CartContextProvider } from './context/CartContext';
import Home from './pages/Home';
const CartDemo = () => {
  return (
    <CartContextProvider>
      <Home />
    </CartContextProvider>
  );
};

export default CartDemo;
