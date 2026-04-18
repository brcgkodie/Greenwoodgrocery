import React from "react";
import { X, Plus, Minus } from "lucide-react";
import { useShopify } from "../context/ShopifyContext";
import HandDivider from "../assets/HandDivider";
import { fmt } from "../data/sandwiches";

export default function CartDrawer() {
  const {
    cartOpen,
    setCartOpen,
    cartItems,
    cartTotal,
    removeFromCart,
    updateQuantity,
    getCheckoutUrl,
    isShopifyActive,
  } = useShopify();

  if (!cartOpen) return null;

  const checkoutUrl = getCheckoutUrl();

  const handleCheckout = () => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end" onClick={() => setCartOpen(false)}>
      <div className="absolute inset-0 bg-forest/40 backdrop-blur-sm" />
      <div
        className="relative bg-cream w-full sm:max-w-md h-full overflow-y-auto border-l border-forest/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="font-hand text-gold text-xl">pickup basket</div>
              <h2 className="font-serif text-forest text-3xl">Your Order</h2>
            </div>
            <button
              onClick={() => setCartOpen(false)}
              className="text-forest/50 hover:text-forest transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="font-serif italic text-forest/40 text-lg">Your basket is empty.</div>
              <div className="text-sm text-forest/50 mt-2">Pick a sandwich to begin.</div>
            </div>
          ) : (
            <>
              <div className="space-y-0 mb-8">
                {cartItems.map((item) => (
                  <div key={item.lineId} className="py-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-serif text-forest text-lg">{item.name}</h3>
                      <span className="font-serif text-forest">
                        {fmt(item.price * (item.qty || 1))}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.lineId,
                              (item.qty || 1) - 1,
                              item.shopifyLineItemId
                            )
                          }
                          className="w-7 h-7 rounded border border-forest/20 flex items-center justify-center text-forest/60 hover:border-forest transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm text-forest w-6 text-center font-semibold">
                          {item.qty || 1}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.lineId,
                              (item.qty || 1) + 1,
                              item.shopifyLineItemId
                            )
                          }
                          className="w-7 h-7 rounded border border-forest/20 flex items-center justify-center text-forest/60 hover:border-forest transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.lineId, item.shopifyLineItemId)}
                        className="text-[11px] tracking-wide uppercase text-forest/40 hover:text-gold transition-colors"
                      >
                        Remove
                      </button>
                    </div>

                    <HandDivider className="w-full h-1.5 mt-4" />
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t-2 border-forest pt-5 mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="font-serif text-forest text-xl">Total</span>
                  <span className="font-serif text-forest text-2xl">{fmt(cartTotal)}</span>
                </div>
                <div className="font-hand text-forest/50 text-lg mt-1">
                  Pickup at the store · ready in ~20 min
                </div>
              </div>

              {/* Checkout */}
              {isShopifyActive && checkoutUrl ? (
                <button
                  onClick={handleCheckout}
                  className="w-full bg-forest text-cream py-4 rounded-lg text-sm tracking-wide hover:bg-forest/90 transition-colors mb-3"
                >
                  Continue to checkout
                </button>
              ) : (
                <div className="w-full bg-parchment text-forest/60 py-4 rounded-lg text-sm tracking-wide text-center mb-3 italic">
                  Online checkout coming soon
                </div>
              )}
              <a
                href="tel:5404566431"
                className="w-full border border-forest/25 text-forest py-4 rounded-lg text-sm tracking-wide hover:border-forest transition-colors block text-center"
              >
                Call to order · (540) 456-6431
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
