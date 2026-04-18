import React, { useState, useEffect } from "react";
import { X, Check, Minus, Plus } from "lucide-react";
import { CategoryIcon } from "../assets/CategoryBadges";
import HandDivider from "../assets/HandDivider";
import { fmt } from "../data/sandwiches";

export default function CustomizeDrawer({ sandwich, onClose, onConfirm }) {
  const [included, setIncluded] = useState([]);
  const [qty, setQty] = useState(1);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (sandwich) {
      setIncluded(sandwich.ingredients?.map((_, i) => i) || []);
      setQty(1);
      setNotes("");
    }
  }, [sandwich]);

  if (!sandwich) return null;

  const s = sandwich;
  const toggleIngredient = (idx) => {
    setIncluded((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const removed = s.ingredients
    ?.map((ing, i) => (!included.includes(i) ? ing : null))
    .filter(Boolean) || [];

  const handleAdd = () => {
    onConfirm({
      ...s,
      qty,
      removed,
      notes: notes.trim(),
      lineId: Date.now(),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-forest/40 backdrop-blur-sm" />
      <div
        className="relative bg-cream w-full h-full sm:h-auto sm:max-w-lg sm:max-h-[92vh] sm:rounded-2xl border border-forest/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cream/90 flex items-center justify-center text-forest/60 hover:text-forest z-10"
        >
          <X size={18} />
        </button>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto">
          {/* Image */}
          {s.img && (
            <div className="aspect-[16/9] overflow-hidden sm:rounded-t-2xl">
              <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-center gap-2 text-walnut/60 mb-2">
              <CategoryIcon category={s.category} size={14} className="text-walnut/50" />
              <span className="text-[10px] tracking-[0.15em] uppercase">Customize</span>
            </div>
            <div className="flex items-baseline justify-between gap-3 mb-1">
              <h2 className="font-serif text-forest text-3xl">{s.name}</h2>
              <span className="font-serif text-forest text-xl">{fmt(s.price)}</span>
            </div>
            <p className="text-forest/50 text-sm mb-1">on {s.bread}{s.grilled ? ", grilled" : ""}</p>

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 mb-5 empty:hidden">
              {s.vegan && (
                <span className="text-[9px] tracking-[0.1em] uppercase text-sage border border-sage/50 px-1.5 py-0.5 rounded bg-sage/10">vegan</span>
              )}
              {s.veg && !s.vegan && (
                <span className="text-[9px] tracking-[0.1em] uppercase text-sage border border-sage/50 px-1.5 py-0.5 rounded bg-sage/10">vegetarian</span>
              )}
              {s.vegOption && (
                <span className="text-[9px] tracking-[0.1em] uppercase text-sage/80 border border-sage/30 px-1.5 py-0.5 rounded">veg option</span>
              )}
              {s.allergens?.map((a) => (
                <span key={a} className="text-[9px] tracking-[0.1em] uppercase text-walnut/60 border border-walnut/25 px-1.5 py-0.5 rounded">contains {a}</span>
              ))}
            </div>

            <HandDivider className="w-full h-1.5 mb-5" />

            {/* Ingredients */}
            {s.ingredients && s.ingredients.length > 0 && (
              <div className="mb-6">
                <div className="text-xs tracking-[0.15em] uppercase text-forest/50 mb-3 font-semibold">
                  Ingredients — tap to remove
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.ingredients.map((ing, i) => {
                    const on = included.includes(i);
                    return (
                      <button
                        key={i}
                        onClick={() => toggleIngredient(i)}
                        className={`text-sm px-3 py-2 rounded-lg border transition-all flex items-center gap-1.5 ${
                          on
                            ? "bg-forest text-cream border-forest"
                            : "bg-parchment/50 text-forest/40 border-walnut/15 line-through"
                        }`}
                      >
                        {on && <Check size={12} />}
                        {ing}
                      </button>
                    );
                  })}
                </div>
                {removed.length > 0 && (
                  <div className="text-xs text-gold/80 italic mt-2">
                    Removing: {removed.join(", ")}
                  </div>
                )}
              </div>
            )}

            {/* Notes */}
            <div className="mb-4">
              <div className="text-xs tracking-[0.15em] uppercase text-forest/50 mb-2 font-semibold">
                Special requests
              </div>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Allergies, extra napkins, etc."
                rows={2}
                className="w-full bg-parchment/50 border border-walnut/15 rounded-lg px-3 py-2.5 text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:border-forest/40 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Sticky footer */}
        <div className="sticky bottom-0 bg-cream border-t border-forest/10 px-6 py-4 sm:px-8 sm:py-5 sm:rounded-b-2xl">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-9 h-9 rounded-lg border border-forest/20 flex items-center justify-center text-forest/60 hover:border-forest transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="text-lg text-forest w-8 text-center font-semibold font-serif">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-9 h-9 rounded-lg border border-forest/20 flex items-center justify-center text-forest/60 hover:border-forest transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="flex-1 bg-forest text-cream py-4 rounded-lg text-sm tracking-wide hover:bg-forest/90 transition-colors font-semibold"
            >
              Add to order · {fmt(s.price * qty)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
