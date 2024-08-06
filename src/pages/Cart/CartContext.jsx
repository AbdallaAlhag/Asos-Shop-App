import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext(CartContext);
};

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedSize.id === item.selectedSize.id // Check both id and size.id
      );

      let newCartItems = [];
      if (existingItemIndex >= 0) {
        newCartItems = [...prevItems];
        newCartItems[existingItemIndex].quantity += 1;
      } else {
        newCartItems = [...prevItems, { ...item, quantity: 1 }];
      }
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => {
      const newCartItems = prevItems.filter(
        (cartItem) =>
          !(cartItem.id === item.id &&
          cartItem.selectedSize.brandSize === item.selectedSize.brandSize)
      );
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const incrementItemInCart = (item) => {
    setCartItems((prevItems) => {
      prevItems;
      const existingItemIndex = prevItems.findIndex(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedSize.id === item.selectedSize.id
      );
      if (existingItemIndex === -1) return prevItems; // Item not found

      const newCartItems = prevItems.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const decrementItemInCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedSize.id === item.selectedSize.id
      );
      if (existingItemIndex === -1) return prevItems; // Item not found

      const newCartItems = prevItems.map((cartItem, index) =>
        index === existingItemIndex && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );

      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        incrementItemInCart,
        decrementItemInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
