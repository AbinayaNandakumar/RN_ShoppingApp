import React, { createContext, useState } from 'react';

const CartUserContext = createContext();

const CartUserProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log('Initial cartItems:', cartItems);
  const [shippingAddress, setShippingAddress] = useState({});
  const [deliveryOption, setDeliveryOption] = useState('in-store-pickup');
  const [shippingCost, setShippingCost] = useState(0);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const [addCardDetails, setAddCardDetails] = useState({});


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
  const clearCart = () => {
    setCartItems([]);
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

  const updateShippingAddress = (address) => {
    setShippingAddress(address);
  };

  return (
    <CartUserContext.Provider
      value={{
        cartItems,
        addToCart,removeFromCart,updateQuantity,
        shippingAddress, updateShippingAddress,
        deliveryOption, setDeliveryOption, 
        shippingCost, setShippingCost,
        selectedPaymentOption, setSelectedPaymentOption,
        addCardDetails,setAddCardDetails,clearCart
      }}
    >
      {children}
    </CartUserContext.Provider>
  );
};

export { CartUserProvider, CartUserContext };
