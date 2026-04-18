import React from "react";
import { SHOP_CATEGORIES } from "../data/shop";
import { WineIcon, CheeseIcon, BreadIcon, BasketIcon, JarIcon } from "../assets/ShopIcons";
import WheatSprig from "../assets/WheatSprig";

const ICONS = {
  "beer-wine": WineIcon,
  cheese: CheeseIcon,
  bakery: BreadIcon,
  produce: BasketIcon,
  pantry: JarIcon,
};

export default function ShopSection() {
  return (
    <section id="shop" className="chalkboard text-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28 relative z-10">
        <div className="font-hand text-gold text-2xl mb-2">what's in the shop</div>
        <h2 className="font-serif text-cream text-4xl md:text-5xl mb-4 leading-tight">
          More than sandwiches.
        </h2>
        <p className="text-cream/60 text-base max-w-xl mb-12">
          A hand-picked grocery where every item earns its shelf. Roadtrippers
          and regulars alike find something worth the stop.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SHOP_CATEGORIES.map((cat) => {
            const Icon = ICONS[cat.id];
            return (
              <div
                key={cat.id}
                className="bg-cream/5 border border-cream/10 rounded-lg p-5 hover:bg-cream/10 transition-colors"
              >
                {Icon && <Icon size={40} className="mb-4" />}
                <h3 className="font-serif text-cream text-lg mb-2">{cat.name}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <WheatSprig
        className="absolute -bottom-4 right-12 w-14 opacity-15 hidden md:block rotate-180"
        color="#f5efe0"
      />
    </section>
  );
}
