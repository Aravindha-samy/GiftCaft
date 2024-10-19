import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // const addToCart = (item) => {
  //   setCartItems(prevItems => {
  //     const existingItem = prevItems.find(i => i.id === item.id);
  //     if (existingItem) {
  //       return prevItems.map(i => 
  //         i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
  //       );
  //     }
  //     return [...prevItems, { ...item, quantity: 1 }];
  //   });
  // };
  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => 
        cartItem.id === item.id && 
        cartItem.color === item.color && 
        cartItem.style === item.style
      );
  
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id && 
          cartItem.color === item.color && 
          cartItem.style === item.style
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevCart, item];
      }
    });
  };
  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
    setCartTotal(cartItems.reduce((total, item) => total + (item.price * item.quantity), 0));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      cartCount, 
      cartTotal, 
      addToCart, 
      removeFromCart, 
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
