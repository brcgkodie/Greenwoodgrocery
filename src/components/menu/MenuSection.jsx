import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import SANDWICHES from "../../data/sandwiches";
import FilterBar from "./FilterBar";
import SandwichCard from "./SandwichCard";
import FadeIn from "../shared/FadeIn";

export default function MenuSection({ limit, showViewAll = false }) {
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    let items = SANDWICHES;
    if (filter === "veg") items = items.filter((s) => s.veg);
    else if (filter !== "all") items = items.filter((s) => s.category === filter);
    if (limit) items = items.slice(0, limit);
    return items;
  }, [filter, limit]);

  // Feature the first 2 items with images on the full menu
  const featured = !limit && filter === "all" ? filtered.slice(0, 2) : [];
  const regular = !limit && filter === "all" ? filtered.slice(2) : filtered;

  return (
    <section id="menu" className="bg-[#faf6ed]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 md:py-20">
        <FadeIn>
          <div className="flex items-end justify-between gap-4 mb-3">
            <div>
              <h2 className="font-serif text-[#1f3a2b] text-3xl md:text-5xl leading-tight">
                The sandwich list.
              </h2>
              <p className="font-serif italic text-[#1f3a2b]/45 text-base mt-2 max-w-md">
                Each one named after a heritage breed. All made to order on bread we
                love.
              </p>
            </div>
            <div className="font-serif italic text-[#1f3a2b]/30 text-sm hidden md:block">
              {filtered.length} sandwiches
            </div>
          </div>
        </FadeIn>

        <div className="mt-6 mb-8">
          <FilterBar active={filter} onChange={setFilter} />
        </div>

        {/* Featured sandwiches (wide cards) */}
        {featured.length > 0 && (
          <div className="grid grid-cols-1 gap-4 mb-4">
            {featured.map((s, i) => (
              <SandwichCard key={s.id} s={s} index={i} featured />
            ))}
          </div>
        )}

        {/* Regular grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {regular.map((s, i) => (
            <SandwichCard key={s.id} s={s} index={i} />
          ))}
        </div>

        {showViewAll && (
          <FadeIn>
            <div className="mt-10 text-center">
              <Link
                to="/menu"
                className="bg-[#1f3a2b] text-[#faf6ed] px-7 py-3.5 rounded-full text-sm tracking-wide hover:bg-[#0f2419] transition-colors inline-flex items-center gap-2"
              >
                View the full menu
              </Link>
            </div>
          </FadeIn>
        )}

        {!showViewAll && (
          <FadeIn>
            <div className="mt-10 pt-8 border-t border-[#1f3a2b]/10 text-center">
              <p className="text-sm text-[#1f3a2b]/50 mb-4">
                Prefer to order ahead? Skip the line and pick up when you arrive.
              </p>
              <a
                href="https://greenwoodva.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1f3a2b] text-[#faf6ed] px-7 py-3.5 rounded-full text-sm tracking-wide hover:bg-[#0f2419] transition-colors inline-flex items-center gap-2"
              >
                Order online at greenwoodva.shop <ExternalLink size={14} />
              </a>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
