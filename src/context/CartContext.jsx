import React, { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [configuring, setConfiguring] = useState(null);

  const addItem = useCallback((item) => {
    setCart((c) => [...c, { ...item, lineId: Date.now() }]);
    setConfiguring(null);
  }, []);

  const removeItem = useCallback((lineId) => {
    setCart((c) => c.filter((i) => i.lineId !== lineId));
  }, []);

  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);
  const startConfig = useCallback((sandwich) => setConfiguring(sandwich), []);
  const cancelConfig = useCallback(() => setConfiguring(null), []);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        configuring,
        addItem,
        removeItem,
        openCart,
        closeCart,
        startConfig,
        cancelConfig,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
