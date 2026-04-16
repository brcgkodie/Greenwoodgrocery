import React, { useEffect } from "react";
import { motion } from "framer-motion";
import IMAGES from "../data/images";
import FadeIn from "../components/shared/FadeIn";

export default function StoryPage() {
  useEffect(() => {
    document.title = "Our Story | Greenwood Gourmet Grocery";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#faf6ed]">
      {/* Hero banner */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={IMAGES.storyInterior}
          alt="Inside Greenwood Gourmet Grocery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f3a2b]/30 to-[#1f3a2b]/70" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-10 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-[#faf6ed] text-4xl md:text-6xl"
            >
              Our Story
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-4">
            <FadeIn>
              <div className="font-serif text-[#6b4226] text-lg italic mb-6">
                "Keep it local."
              </div>
              <div className="space-y-4 text-sm text-[#1f3a2b]/50">
                <div>
                  <div className="text-[10px] tracking-[0.15em] uppercase text-[#1f3a2b]/30 mb-1">
                    Established
                  </div>
                  <div className="text-[#1f3a2b]">1999</div>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.15em] uppercase text-[#1f3a2b]/30 mb-1">
                    Location
                  </div>
                  <div className="text-[#1f3a2b]">Route 250, Crozet, VA</div>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.15em] uppercase text-[#1f3a2b]/30 mb-1">
                    Known for
                  </div>
                  <div className="text-[#1f3a2b]">Heritage breed sandwiches, craft beer & wine, local provisions</div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <FadeIn>
              <div className="space-y-6 text-[#1f3a2b]/70 text-base leading-relaxed">
                <p className="text-lg text-[#1f3a2b]/80">
                  Built upon the foundation of a traditional roadside fruit stand,
                  Greenwood Gourmet Grocery has served the Crozet and Albemarle County
                  community since 1999.
                </p>
                <p>
                  What started as a place to grab fresh produce from local farms has
                  grown into a beloved destination for handmade sandwiches, specialty
                  groceries, and one of the region's best beer and wine selections.
                </p>
                <p>
                  Albemarle County and the surrounding Blue Ridge hills are home to
                  world-class farms, orchards, vineyards, and breweries. We're proud
                  to support those producers. Inside, you'll find an epicurean's
                  dream: specialty items, fresh dairy, hundreds of beers and wines,
                  each one with our stamp of approval.
                </p>
                <p>
                  Outside, a view of the mountains and the feeling that you've found
                  something worth coming back for.
                </p>
              </div>
            </FadeIn>

            {/* Photo grid */}
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-3 mt-12">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={IMAGES.produce}
                    alt="Local produce"
                    className="w-full h-48 md:h-56 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={IMAGES.wine}
                    alt="Wine selection"
                    className="w-full h-48 md:h-56 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-12 pt-8 border-t border-[#1f3a2b]/10">
                <p className="font-serif italic text-[#6b4226]/70 text-xl leading-relaxed">
                  Keep it local. Sandwiches made to order, every day from open until
                  4pm. We hope you'll stop by.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
