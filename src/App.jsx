import React, { useState, useMemo } from "react";
import { ShopifyProvider, useShopify } from "./context/ShopifyContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import SandwichCard from "./components/SandwichCard";
import CartDrawer from "./components/CartDrawer";
import ShopSection from "./components/ShopSection";
import Story from "./components/Story";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import { SANDWICHES, filterSandwiches } from "./data/sandwiches";

function MenuSection() {
  const [filter, setFilter] = useState("all");
  const { addToCart } = useShopify();
  const filtered = useMemo(() => filterSandwiches(SANDWICHES, filter), [filter]);

  return (
    <section id="menu" className="border-t border-forest/10">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="flex items-baseline justify-between mb-3">
          <div className="font-hand text-gold text-2xl">the menu</div>
          <div className="font-serif italic text-forest/35 text-sm hidden md:block">
            {filtered.length} of {SANDWICHES.length}
          </div>
        </div>
        <h2 className="font-serif text-forest text-4xl md:text-6xl mb-3 leading-tight">
          The sandwich list.
        </h2>
        <p className="font-serif italic text-forest/50 text-lg mb-10 max-w-xl">
          Each one named after a heritage breed. All made to order on bread
          we love.
        </p>

        <FilterBar active={filter} onChange={setFilter} />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((s) => (
            <SandwichCard key={s.id} sandwich={s} onAdd={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function GreenwoodSite() {
  return (
    <ShopifyProvider>
      <div className="min-h-screen bg-cream text-forest parchment-grain">
        <Header />
        <Hero />
        <MenuSection />
        <ShopSection />
        <Story />
        <Visit />
        <Footer />
        <CartDrawer />
      </div>
    </ShopifyProvider>
  );
}
