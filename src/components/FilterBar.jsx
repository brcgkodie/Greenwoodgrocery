import React from "react";
import { FILTERS } from "../data/sandwiches";

export default function FilterBar({ active, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
      {FILTERS.map((f) => (
        <button
          key={f.id}
          onClick={() => onChange(f.id)}
          className={`shrink-0 px-4 py-2 rounded-lg text-xs tracking-wide transition-all border ${
            active === f.id
              ? "bg-forest text-cream border-forest"
              : "bg-parchment/50 text-forest/70 border-walnut/20 hover:border-forest/40"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
