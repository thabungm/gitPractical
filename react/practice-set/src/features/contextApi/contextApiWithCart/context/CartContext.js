import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
  cartItems: [],
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  const getFromLocalStorage = () => {
    const items = JSON.parse(localStorage.getItem('cartItems'));
    return items;
  };
  useEffect(() => {
    const items = getFromLocalStorage();
    setCartItems([...items]);
  }, []);
  //  addItemToCart
  const addItemToCart = (product) => {
    product.count = 1;
    cartItems.push(product);
    setCartItems([...cartItems]);
    saveToLocalStorage(cartItems);
  };

  // increment
  const increment = (product) => {
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
      }
    });

    setCartItems([...cartItems]);
    saveToLocalStorage(cartItems);
  };

  //decrement
  const decrement = (product) => {
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count--;
      }
    });
    setCartItems([...cartItems]);
    saveToLocalStorage(cartItems);
  };

  const clearCart = () => {
    setCartItems([]);
    saveToLocalStorage(cartItems);
  };
  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, increment, decrement, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
