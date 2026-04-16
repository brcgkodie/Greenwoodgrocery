import React from "react";
import { X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MODS, fmt } from "../../config/constants";
import { useCart } from "../../context/CartContext";

export default function CartDrawer() {
  const { cart, cartOpen, closeCart, removeItem } = useCart();

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  return (
    <AnimatePresence>
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" onClick={closeCart}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#1f3a2b]/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="relative bg-[#faf6ed] w-full sm:max-w-md h-full overflow-y-auto border-l border-[#1f3a2b]/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#6b4226]/60">
                    Your order
                  </div>
                  <h2 className="font-serif text-[#1f3a2b] text-3xl">Pickup basket</h2>
                </div>
                <button onClick={closeCart} className="text-[#1f3a2b]/50 hover:text-[#1f3a2b]">
                  <X size={22} />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <div className="font-serif italic text-[#1f3a2b]/40 text-lg">
                    Your basket is empty.
                  </div>
                  <div className="text-sm text-[#1f3a2b]/50 mt-2">
                    Pick a sandwich to begin.
                  </div>
                </div>
              ) : (
                <>
                  <div className="space-y-5 mb-8">
                    {cart.map((item) => (
                      <motion.div
                        key={item.lineId}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="border-b border-[#1f3a2b]/10 pb-5"
                      >
                        <div className="flex justify-between items-baseline mb-1">
                          <h3 className="font-serif text-[#1f3a2b] text-xl">{item.name}</h3>
                          <span className="font-serif text-[#1f3a2b]">{fmt(item.price)}</span>
                        </div>
                        <div className="text-xs text-[#1f3a2b]/50 italic mb-1">
                          on {item.bread}
                        </div>
                        {item.mods.length > 0 && (
                          <div className="text-xs text-[#1f3a2b]/50">
                            {item.mods
                              .map((id) => MODS.find((m) => m.id === id)?.label)
                              .join(" · ")}
                          </div>
                        )}
                        <button
                          onClick={() => removeItem(item.lineId)}
                          className="text-[11px] tracking-wide uppercase text-[#1f3a2b]/40 hover:text-[#b85c38] mt-2"
                        >
                          Remove
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  <div className="border-t border-[#1f3a2b] pt-5 mb-6">
                    <div className="flex justify-between items-baseline">
                      <span className="font-serif text-[#1f3a2b] text-xl">Total</span>
                      <span className="font-serif text-[#1f3a2b] text-2xl">{fmt(total)}</span>
                    </div>
                    <div className="text-xs text-[#1f3a2b]/50 mt-1">
                      Pickup at the store &middot; ready in ~20 min
                    </div>
                  </div>

                  <a
                    href="https://greenwoodva.shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#1f3a2b] text-[#faf6ed] py-4 rounded-full text-sm tracking-wide hover:bg-[#0f2419] transition-colors mb-3 flex items-center justify-center gap-2"
                  >
                    Order on greenwoodva.shop <ExternalLink size={14} />
                  </a>
                  <a
                    href="tel:5404566431"
                    className="w-full border border-[#1f3a2b]/20 text-[#1f3a2b] py-4 rounded-full text-sm tracking-wide hover:border-[#1f3a2b]/50 transition-colors flex items-center justify-center"
                  >
                    Or call to order &middot; (540) 456-6431
                  </a>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
