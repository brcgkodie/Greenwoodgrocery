import React from "react";
import { CategoryIcon } from "../assets/CategoryBadges";
import HandDivider from "../assets/HandDivider";
import { fmt } from "../data/sandwiches";

const CATEGORY_LABELS = {
  pork: "Pork",
  poultry: "Poultry",
  beef: "Beef",
  fish: "Fish",
  veg: "Vegetarian",
  egg: "Egg",
  kids: "Kids",
};

export default function SandwichCard({ sandwich, onAdd }) {
  const s = sandwich;

  return (
    <div className="card-rustic p-5 flex flex-col transition-all duration-200">
      {/* Category badge */}
      <div className="flex items-center gap-2 text-walnut/60 mb-3">
        <CategoryIcon category={s.category} size={16} className="text-walnut/50" />
        <span className="text-[10px] tracking-[0.15em] uppercase">
          {CATEGORY_LABELS[s.category] || s.category}
        </span>
      </div>

      {/* Name + Price */}
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <h3 className="font-serif text-forest text-xl md:text-2xl tracking-tight">
          {s.name}
        </h3>
        <span className="font-serif text-forest text-lg shrink-0">{fmt(s.price)}</span>
      </div>

      <HandDivider className="w-full h-1.5 my-2" />

      {/* Description */}
      <p className="text-forest/70 text-sm italic leading-relaxed flex-1 mb-3">
        {s.desc}
      </p>

      {/* Badges */}
      <div className="flex flex-wrap gap-1.5 mb-3 empty:hidden">
        {s.vegan && (
          <span className="text-[9px] tracking-[0.1em] uppercase text-sage border border-sage/50 px-1.5 py-0.5 rounded bg-sage/10">
            vegan
          </span>
        )}
        {s.veg && !s.vegan && (
          <span className="text-[9px] tracking-[0.1em] uppercase text-sage border border-sage/50 px-1.5 py-0.5 rounded bg-sage/10">
            vegetarian
          </span>
        )}
        {s.vegOption && (
          <span className="text-[9px] tracking-[0.1em] uppercase text-sage/80 border border-sage/30 px-1.5 py-0.5 rounded">
            veg option
          </span>
        )}
        {s.allergens?.map((a) => (
          <span
            key={a}
            className="text-[9px] tracking-[0.1em] uppercase text-walnut/60 border border-walnut/25 px-1.5 py-0.5 rounded"
          >
            contains {a}
          </span>
        ))}
      </div>

      {/* Add button */}
      <button
        onClick={() => onAdd(s)}
        className="text-xs tracking-[0.12em] uppercase text-forest font-semibold border-b-2 border-gold pb-0.5 self-start hover:text-gold transition-colors mt-auto"
      >
        Add to order &rarr;
      </button>
    </div>
  );
}
