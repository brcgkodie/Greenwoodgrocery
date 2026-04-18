import React from "react";
import { motion } from "framer-motion";
import IMAGES from "../../data/images";

export default function Story() {
  return (
    <section id="story" className="relative bg-[#1f3a2b] text-[#faf6ed] overflow-hidden">
      {/* Full-bleed interior photo with text overlaid */}
      <div className="relative min-h-[500px] md:min-h-[600px]">
        <img
          src={IMAGES.storyInterior}
          alt="Inside Greenwood Gourmet Grocery"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f3a2b]/90 via-[#1f3a2b]/70 to-[#1f3a2b]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-8">
                A grocery,
                <br />a deli,
                <br />
                <span className="italic text-[#d4a017]">an institution.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4 text-[#faf6ed]/75 text-[15px] leading-relaxed"
            >
              <p>
                Built upon the foundation of a traditional roadside fruit stand,
                Greenwood Gourmet Grocery has served the Crozet and Albemarle County
                community since 1999.
              </p>
              <p>
                What started as a place to grab fresh produce from local farms has
                grown into a beloved destination for handmade sandwiches, specialty
                groceries, and one of the region's best beer and wine selections.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif italic text-[#d4a017]/80 text-lg mt-8"
            >
              Keep it local. Sandwiches made to order, every day from open until 4pm.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
