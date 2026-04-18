import React, { createContext, useContext, useReducer, useEffect, useState, useCallback } from "react";
import {
  isShopifyConfigured,
  fetchAllProducts,
  createCheckout,
  fetchCheckout,
  addLineItem,
  removeLineItem,
  updateLineItem,
} from "../lib/shopify";
import { SANDWICHES } from "../data/sandwiches";

const ShopifyContext = createContext(null);

const CHECKOUT_KEY = "greenwood_checkout_id";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existing = state.find((i) => i.id === action.item.id);
      if (existing) {
        return state.map((i) => (i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...state, { ...action.item, qty: 1, lineId: Date.now() }];
    }
    case "REMOVE":
      return state.filter((i) => i.lineId !== action.lineId);
    case "UPDATE_QTY":
      return action.qty <= 0
        ? state.filter((i) => i.lineId !== action.lineId)
        : state.map((i) => (i.lineId === action.lineId ? { ...i, qty: action.qty } : i));
    case "SET":
      return action.items;
    default:
      return state;
  }
}

export function ShopifyProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const [isShopifyActive, setIsShopifyActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [localCart, dispatchLocal] = useReducer(cartReducer, [], () => {
    try {
      const saved = localStorage.getItem("greenwood_local_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("greenwood_local_cart", JSON.stringify(localCart));
  }, [localCart]);

  useEffect(() => {
    async function init() {
      if (!isShopifyConfigured) {
        setIsLoading(false);
        return;
      }
      try {
        const prods = await fetchAllProducts();
        setProducts(prods);

        const savedId = localStorage.getItem(CHECKOUT_KEY);
        let co = savedId ? await fetchCheckout(savedId) : null;
        if (!co || co.completedAt) {
          co = await createCheckout();
          localStorage.setItem(CHECKOUT_KEY, co.id);
        }
        setCheckout(co);
        setIsShopifyActive(true);
      } catch (e) {
        console.warn("Shopify init failed, using local cart:", e);
      }
      setIsLoading(false);
    }
    init();
  }, []);

  const findVariantId = useCallback(
    (sandwich) => {
      if (!products) return null;
      const match = products.find(
        (p) => p.handle === sandwich.shopifyHandle || p.title.toLowerCase() === sandwich.name.toLowerCase()
      );
      return match?.variants?.[0]?.id || null;
    },
    [products]
  );

  const addToCart = useCallback(
    async (sandwich) => {
      if (isShopifyActive && checkout) {
        const variantId = findVariantId(sandwich);
        if (variantId) {
          const updated = await addLineItem(checkout.id, variantId);
          if (updated) setCheckout(updated);
          return;
        }
      }
      dispatchLocal({ type: "ADD", item: sandwich });
    },
    [isShopifyActive, checkout, findVariantId]
  );

  const removeFromCart = useCallback(
    async (lineId, shopifyLineItemId) => {
      if (isShopifyActive && checkout && shopifyLineItemId) {
        const updated = await removeLineItem(checkout.id, shopifyLineItemId);
        if (updated) setCheckout(updated);
        return;
      }
      dispatchLocal({ type: "REMOVE", lineId });
    },
    [isShopifyActive, checkout]
  );

  const updateQuantity = useCallback(
    async (lineId, qty, shopifyLineItemId) => {
      if (isShopifyActive && checkout && shopifyLineItemId) {
        const updated = await updateLineItem(checkout.id, shopifyLineItemId, qty);
        if (updated) setCheckout(updated);
        return;
      }
      dispatchLocal({ type: "UPDATE_QTY", lineId, qty });
    },
    [isShopifyActive, checkout]
  );

  const cartItems = isShopifyActive && checkout
    ? checkout.lineItems.map((li) => ({
        lineId: li.id,
        shopifyLineItemId: li.id,
        name: li.title,
        price: parseFloat(li.variant.price.amount || li.variant.price),
        qty: li.quantity,
      }))
    : localCart;

  const cartCount = cartItems.reduce((sum, i) => sum + (i.qty || 1), 0);
  const cartTotal = cartItems.reduce((sum, i) => sum + i.price * (i.qty || 1), 0);

  const getCheckoutUrl = useCallback(() => {
    if (isShopifyActive && checkout) return checkout.webUrl;
    return null;
  }, [isShopifyActive, checkout]);

  return (
    <ShopifyContext.Provider
      value={{
        isShopifyActive,
        isLoading,
        products,
        cartItems,
        cartCount,
        cartTotal,
        cartOpen,
        setCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCheckoutUrl,
      }}
    >
      {children}
    </ShopifyContext.Provider>
  );
}

export const useShopify = () => useContext(ShopifyContext);
