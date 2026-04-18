import React, { useState } from "react";
import usePageMeta from "../hooks/usePageMeta";
import Hero from "../components/Hero";
import ShopSection from "../components/ShopSection";
import Story from "../components/Story";
import SandwichCard from "../components/SandwichCard";
import CustomizeDrawer from "../components/CustomizeDrawer";
import { Link } from "react-router-dom";
import { SANDWICHES } from "../data/sandwiches";
import { useShopify } from "../context/ShopifyContext";

const FEATURED = SANDWICHES.filter((s) => ["berkshire", "blue-slate", "beauregard"].includes(s.id));

export default function HomePage() {
  const [configuring, setConfiguring] = useState(null);
  const { addToCart, setCartOpen } = useShopify();

  usePageMeta({
    description:
      "Greenwood Gourmet Grocery in Crozet, VA. Heritage sandwiches made to order, hundreds of craft beers and wines, local produce, and specialty provisions on Route 250 since 1999.",
    path: "/",
  });

  const handleConfirm = (item) => {
    addToCart(item);
    setConfiguring(null);
    setCartOpen(true);
  };

  return (
    <>
      <Hero />

      {/* Featured sandwiches */}
      <section className="border-t border-forest/10">
        <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
          <div className="font-hand text-gold text-2xl mb-2">from the deli</div>
          <h2 className="font-serif text-forest text-4xl md:text-5xl mb-3">
            A few favorites.
          </h2>
          <p className="font-serif italic text-forest/50 text-lg mb-10 max-w-xl">
            18 sandwiches, each named after a heritage breed. All made to order
            on bread we love.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {FEATURED.map((s) => (
              <SandwichCard key={s.id} sandwich={s} onAdd={setConfiguring} />
            ))}
          </div>

          <Link
            to="/menu"
            className="bg-forest text-cream px-7 py-4 rounded-lg text-sm tracking-wide hover:bg-forest/90 transition-colors inline-flex items-center gap-2"
          >
            See the full menu &rarr;
          </Link>
        </div>
      </section>

      <ShopSection />
      <Story />

      {/* Visit teaser */}
      <section className="border-t border-forest/10">
        <div className="max-w-6xl mx-auto px-5 py-20 text-center">
          <div className="font-hand text-gold text-2xl mb-2">come see us</div>
          <h2 className="font-serif text-forest text-3xl md:text-4xl mb-4">
            6701 Rockfish Gap Turnpike, Crozet
          </h2>
          <p className="text-forest/60 mb-6 max-w-md mx-auto">
            On Route 250, half-mile west of I-64 exit 107. Open Wed&ndash;Sun.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/visit"
              className="bg-forest text-cream px-6 py-3 rounded-lg text-sm hover:bg-forest/90 transition-colors"
            >
              Hours &amp; directions
            </Link>
            <a
              href="tel:5404566431"
              className="border border-forest/25 text-forest px-6 py-3 rounded-lg text-sm hover:border-forest transition-colors"
            >
              (540) 456-6431
            </a>
          </div>
        </div>
      </section>

      <CustomizeDrawer
        sandwich={configuring}
        onClose={() => setConfiguring(null)}
        onConfirm={handleConfirm}
      />
    </>
  );
}
