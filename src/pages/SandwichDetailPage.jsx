import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import SANDWICHES from "../data/sandwiches";
import { BREADS, fmt } from "../config/constants";
import { useCart } from "../context/CartContext";
import SandwichCard from "../components/menu/SandwichCard";

export default function SandwichDetailPage() {
  const { slug } = useParams();
  const { startConfig } = useCart();
  const sandwich = SANDWICHES.find((s) => s.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (sandwich) {
      document.title = `${sandwich.name} | Greenwood Gourmet Grocery`;
    }
  }, [sandwich]);

  if (!sandwich) {
    return (
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 text-center">
        <h1 className="font-serif text-[#1f3a2b] text-3xl mb-4">Sandwich not found</h1>
        <Link to="/menu" className="text-[#6b4226] hover:text-[#d4a017] transition-colors">
          Back to the menu
        </Link>
      </div>
    );
  }

  // Related sandwiches (same category, excluding current)
  const related = SANDWICHES.filter(
    (s) => s.category === sandwich.category && s.id !== sandwich.id
  ).slice(0, 3);

  return (
    <div className="bg-[#faf6ed]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-6 pb-16 md:pt-10 md:pb-24">
        {/* Breadcrumb */}
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-sm text-[#1f3a2b]/50 hover:text-[#1f3a2b] transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to menu
        </Link>

        <div className="grid md:grid-cols-12 gap-8 md:gap-14 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7"
          >
            {sandwich.img ? (
              <div className="rounded-xl overflow-hidden">
                <img
                  src={sandwich.img}
                  alt={sandwich.name}
                  className="w-full h-72 sm:h-96 md:h-[480px] object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-72 sm:h-96 md:h-[480px] rounded-xl bg-gradient-to-br from-[#f4efe3] to-[#e8e0d0] flex items-center justify-center">
                <span className="font-serif italic text-[#1f3a2b]/10 text-7xl tracking-tight">
                  {sandwich.name}
                </span>
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 md:sticky md:top-28"
          >
            {sandwich.veg && (
              <span className="text-[9px] tracking-[0.15em] uppercase text-[#7a8c6e] border border-[#7a8c6e]/40 px-2 py-0.5 rounded inline-block mb-3">
                vegetarian
              </span>
            )}
            <h1 className="font-serif text-[#1f3a2b] text-4xl md:text-5xl tracking-tight mb-2">
              {sandwich.name}
            </h1>
            <div className="font-serif text-[#6b4226] text-2xl mb-6">
              {fmt(sandwich.price)}
            </div>

            <p className="font-serif italic text-[#1f3a2b]/55 text-lg leading-relaxed mb-8">
              {sandwich.desc}
            </p>

            <div className="mb-6">
              <div className="text-[10px] tracking-[0.15em] uppercase text-[#1f3a2b]/40 mb-2">
                Available on
              </div>
              <div className="flex flex-wrap gap-2">
                {BREADS.map((b) => (
                  <span
                    key={b}
                    className="text-xs px-3 py-1.5 rounded-full border border-[#1f3a2b]/15 text-[#1f3a2b]/60"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => startConfig(sandwich)}
              className="w-full bg-[#1f3a2b] text-[#faf6ed] py-4 rounded-full text-sm tracking-wide hover:bg-[#0f2419] transition-colors"
            >
              Add to order &middot; {fmt(sandwich.price)}
            </button>

            <div className="mt-4 text-center text-xs text-[#1f3a2b]/40 italic">
              Sandwiches made to order until 4pm daily
            </div>
          </motion.div>
        </div>

        {/* Related sandwiches */}
        {related.length > 0 && (
          <div className="mt-20">
            <h3 className="font-serif text-[#1f3a2b] text-2xl mb-6">
              More {sandwich.category === "veg" ? "vegetarian" : sandwich.category} sandwiches
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((s, i) => (
                <SandwichCard key={s.id} s={s} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
