import { createContext, useState } from "react";

// Create Context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const AddToCart = (product) => {
    const exists = cartItem.find((item) => item.id === product.id);
    if (exists) {
      alert("Item already in cart");
      return;
    }
    setCartItem([...cartItem, product]);
  };

  return (
    <CartContext.Provider value={{ cartItem, AddToCart }}>
      {children}
    </CartContext.Provider>
  );
};