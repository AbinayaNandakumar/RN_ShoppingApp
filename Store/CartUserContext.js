import React, { createContext, useState } from 'react';

const CartUserContext = createContext();

const CartUserProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log('Initial cartItems:', cartItems);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => (item.id) === (product.id));

    if (existingProduct) {
      const newQuantity = existingProduct.quantity + product.quantity;
      const updatedCart = cartItems.map((item) =>
        (item.id) === (product.id) ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems((prevCart) => [...prevCart, product]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => (item.id) !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      const updatedCart = cartItems.map((item) =>
        (item.id) === itemId ? { ...item, quantity } : item
      );
      setCartItems(updatedCart);
    }
  };

  return (
    <CartUserContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartUserContext.Provider>
  );
};

export { CartUserProvider, CartUserContext };
