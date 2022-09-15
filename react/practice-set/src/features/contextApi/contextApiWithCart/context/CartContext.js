import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
  cartItems: [],
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  //  addItemToCart
  const addItemToCart = (product) => {
    product.count = 1;
    cartItems.push(product);
    setCartItems([...cartItems]);
  };

  // increment
  const increment = (product) => {
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        product.count++;
      }
    });

    setCartItems([...cartItems]);
  };

  //decrement
  const decrement = (product) => {
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        product.count--;
      }
    });
    setCartItems([...cartItems]);
  };

  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, increment, decrement, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
