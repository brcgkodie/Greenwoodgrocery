import React, { useState } from "react";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BREADS, MODS, fmt } from "../../config/constants";
import { useCart } from "../../context/CartContext";

export default function ConfigDrawer() {
  const { configuring: sandwich, cancelConfig, addItem } = useCart();
  const [bread, setBread] = useState(BREADS[0]);
  const [mods, setMods] = useState([]);

  const toggleMod = (id) => {
    setMods((m) => (m.includes(id) ? m.filter((x) => x !== id) : [...m, id]));
  };

  const handleConfirm = () => {
    addItem({ ...sandwich, bread, mods });
    setBread(BREADS[0]);
    setMods([]);
  };

  return (
    <AnimatePresence>
      {sandwich && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" onClick={cancelConfig}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#1f3a2b]/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 350 }}
            className="relative bg-[#faf6ed] w-full sm:max-w-md sm:rounded-2xl rounded-t-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-[#1f3a2b]/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={cancelConfig} className="absolute top-4 right-4 text-[#1f3a2b]/50 hover:text-[#1f3a2b]">
              <X size={20} />
            </button>
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#6b4226]/60 mb-2">Customize</div>
            <h2 className="font-serif text-[#1f3a2b] text-3xl mb-1">{sandwich.name}</h2>
            <p className="font-serif italic text-[#1f3a2b]/50 text-sm mb-6">{sandwich.desc}</p>

            <div className="mb-6">
              <div className="text-xs tracking-[0.15em] uppercase text-[#1f3a2b]/50 mb-3">Bread</div>
              <div className="grid grid-cols-2 gap-2">
                {BREADS.map((b) => (
                  <button
                    key={b}
                    onClick={() => setBread(b)}
                    className={`text-sm py-2.5 px-3 rounded-lg border text-left transition-all ${
                      bread === b
                        ? "bg-[#1f3a2b] text-[#faf6ed] border-[#1f3a2b]"
                        : "border-[#1f3a2b]/20 text-[#1f3a2b]/70 hover:border-[#1f3a2b]/50"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="text-xs tracking-[0.15em] uppercase text-[#1f3a2b]/50 mb-3">Modifications</div>
              <div className="flex flex-wrap gap-2">
                {MODS.map((m) => {
                  const on = mods.includes(m.id);
                  return (
                    <button
                      key={m.id}
                      onClick={() => toggleMod(m.id)}
                      className={`text-xs px-3 py-2 rounded-full border transition-all flex items-center gap-1.5 ${
                        on
                          ? "bg-[#d4a017] text-[#1f3a2b] border-[#d4a017]"
                          : "border-[#1f3a2b]/20 text-[#1f3a2b]/60 hover:border-[#1f3a2b]/50"
                      }`}
                    >
                      {on && <Check size={12} />}
                      {m.label}
                    </button>
                  );
                })}
              </div>
              <div className="text-[11px] italic text-[#1f3a2b]/40 mt-3">
                We can remove items, sub mayo or mustard, or add lettuce/tomato. No other substitutions, please.
              </div>
            </div>

            <button
              onClick={handleConfirm}
              className="w-full bg-[#1f3a2b] text-[#faf6ed] py-4 rounded-full text-sm tracking-wide hover:bg-[#0f2419] transition-colors"
            >
              Add to order &middot; {fmt(sandwich.price)}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
