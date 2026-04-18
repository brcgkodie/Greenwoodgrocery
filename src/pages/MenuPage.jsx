import React, { useState, useMemo } from "react";
import usePageMeta from "../hooks/usePageMeta";
import FilterBar from "../components/FilterBar";
import SandwichCard from "../components/SandwichCard";
import CustomizeDrawer from "../components/CustomizeDrawer";
import { SANDWICHES, filterSandwiches } from "../data/sandwiches";
import { useShopify } from "../context/ShopifyContext";
import WheatSprig from "../assets/WheatSprig";

export default function MenuPage() {
  const [filter, setFilter] = useState("all");
  const [configuring, setConfiguring] = useState(null);
  const { addToCart, setCartOpen } = useShopify();
  const filtered = useMemo(() => filterSandwiches(SANDWICHES, filter), [filter]);

  usePageMeta({
    title: "Menu",
    description:
      "Browse our full sandwich menu — 18 heritage-breed sandwiches made to order daily until 4pm. Turkey, beef, pork, fish, and vegetarian options.",
    path: "/menu",
  });

  const handleConfirm = (item) => {
    addToCart(item);
    setConfiguring(null);
    setCartOpen(true);
  };

  return (
    <section className="relative">
      {/* Page header */}
      <div className="border-b border-forest/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 pt-16 pb-12 md:pt-20 md:pb-16">
          <div className="font-hand text-gold text-2xl mb-2">chapter 01</div>
          <h1 className="font-serif text-forest text-5xl md:text-7xl leading-tight mb-4">
            The sandwich list.
          </h1>
          <p className="font-serif italic text-forest/50 text-lg max-w-xl">
            Each one named after a heritage breed. All made to order on bread
            we love. Served daily from open until 4pm.
          </p>
        </div>
        <WheatSprig className="absolute top-8 right-8 w-10 opacity-20 hidden md:block" />
      </div>

      {/* Menu grid */}
      <div className="max-w-6xl mx-auto px-5 py-12 md:py-16">
        <div className="flex items-baseline justify-between mb-6">
          <FilterBar active={filter} onChange={setFilter} />
          <div className="font-serif italic text-forest/35 text-sm hidden md:block ml-4 shrink-0">
            {filtered.length} of {SANDWICHES.length}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((s) => (
            <SandwichCard key={s.id} sandwich={s} onAdd={setConfiguring} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="font-hand text-forest/40 text-xl">
            Sandwiches made to order · open until 4pm
          </p>
          <p className="text-forest/50 text-sm mt-2">
            Call ahead to order: <a href="tel:5404566431" className="underline hover:text-gold">(540) 456-6431</a>
          </p>
        </div>
      </div>

      <CustomizeDrawer
        sandwich={configuring}
        onClose={() => setConfiguring(null)}
        onConfirm={handleConfirm}
      />
    </section>
  );
}
