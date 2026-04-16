import React from "react";
import { Wine, Coffee, Leaf, ShoppingCart, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import IMAGES from "../../data/images";
import FadeIn from "../shared/FadeIn";

export default function Provisions() {
  return (
    <section id="provisions" className="relative bg-[#f4efe3] overflow-hidden">
      {/* Asymmetric photo collage -- NOT uniform cards */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-3 sm:gap-4 pt-12 md:pt-20">
          {/* Large image left */}
          <FadeIn className="col-span-12 md:col-span-7 relative rounded-xl overflow-hidden">
            <img
              src={IMAGES.produce}
              alt="Fresh local produce at Greenwood Grocery"
              className="w-full h-72 md:h-[420px] object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1f3a2b]/80 to-transparent p-6 pt-16">
              <div className="flex items-center gap-2 text-[#d4a017] mb-1">
                <Leaf size={14} />
              </div>
              <h3 className="font-serif text-[#faf6ed] text-2xl">Local Produce</h3>
              <p className="text-[#faf6ed]/70 text-sm mt-1">
                Fresh from Albemarle County farms
              </p>
            </div>
          </FadeIn>

          {/* Two stacked images right */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-3 sm:gap-4">
            <FadeIn delay={0.1} className="relative rounded-xl overflow-hidden flex-1">
              <img
                src={IMAGES.wine}
                alt="Virginia wine selection"
                className="w-full h-48 md:h-[200px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1f3a2b]/80 to-transparent p-5 pt-12">
                <div className="flex items-center gap-2 text-[#d4a017] mb-1">
                  <Wine size={14} />
                </div>
                <h3 className="font-serif text-[#faf6ed] text-xl">Beer & Wine</h3>
                <p className="text-[#faf6ed]/70 text-xs mt-0.5">
                  Hundreds of craft selections
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative rounded-xl overflow-hidden flex-1">
              <img
                src={IMAGES.pie}
                alt="House-made baked goods"
                className="w-full h-48 md:h-[200px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1f3a2b]/80 to-transparent p-5 pt-12">
                <div className="flex items-center gap-2 text-[#d4a017] mb-1">
                  <Coffee size={14} />
                </div>
                <h3 className="font-serif text-[#faf6ed] text-xl">Coffee & Pastries</h3>
                <p className="text-[#faf6ed]/70 text-xs mt-0.5">Fresh-brewed daily</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Text section below -- different rhythm than other sections */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <FadeIn className="md:col-span-5">
            <h2 className="font-serif text-[#1f3a2b] text-3xl md:text-4xl leading-tight">
              More than sandwiches.
              <br />
              <span className="italic text-[#6b4226]">A country provisions store.</span>
            </h2>
          </FadeIn>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-8">
            <FadeIn delay={0.1} className="group">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1f3a2b]/[0.07] flex items-center justify-center text-[#1f3a2b]/60 group-hover:bg-[#1f3a2b] group-hover:text-[#faf6ed] transition-all duration-300">
                  <Leaf size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-[#1f3a2b] text-lg mb-1.5">Specialty Goods</h3>
                  <p className="text-[#1f3a2b]/55 text-sm leading-relaxed">
                    Artisan cheeses, fresh dairy, and a curated selection of pantry staples
                    from trusted sources.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="group">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1f3a2b]/[0.07] flex items-center justify-center text-[#1f3a2b]/60 group-hover:bg-[#1f3a2b] group-hover:text-[#faf6ed] transition-all duration-300">
                  <ShoppingCart size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-[#1f3a2b] text-lg mb-1.5">
                    Box Lunches & Catering
                  </h3>
                  <p className="text-[#1f3a2b]/55 text-sm leading-relaxed">
                    Picnic at the nearby wineries? We prepare box lunches and platters.
                    Call ahead to order.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://greenwoodva.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1f3a2b] text-[#faf6ed] px-7 py-3.5 rounded-full text-sm tracking-wide hover:bg-[#0f2419] transition-colors inline-flex items-center gap-2"
            >
              Browse our online shop <ExternalLink size={14} />
            </a>
            <span className="text-sm text-[#1f3a2b]/40 italic">
              Order ahead for pickup
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
