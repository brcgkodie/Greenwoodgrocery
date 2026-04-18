import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import REVIEWS from "../../data/reviews";

export default function Reviews() {
  return (
    <section className="bg-[#faf6ed] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-24">
        {/* No generic heading -- jump right into the content */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-start">
          {/* Left: big rating + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-72 md:sticky md:top-32 shrink-0"
          >
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < 4 ? "text-[#d4a017] fill-[#d4a017]" : "text-[#d4a017] fill-[#d4a017]/50"}
                />
              ))}
            </div>
            <div className="font-serif text-[#1f3a2b] text-5xl mb-1">4.5</div>
            <div className="text-sm text-[#1f3a2b]/40 mb-6">352 reviews on Google</div>
            <h2 className="font-serif text-[#1f3a2b] text-2xl md:text-3xl leading-tight mb-4">
              Worth the drive.
            </h2>
            <p className="text-[#1f3a2b]/50 text-sm leading-relaxed mb-6">
              From day-trippers on Route 250 to locals who've been coming since '99.
            </p>
            <a
              href="https://maps.google.com/?q=Greenwood+Gourmet+Grocery,+6701+Rockfish+Gap+Turnpike,+Crozet,+VA+22932"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#1f3a2b]/50 hover:text-[#d4a017] transition-colors flex items-center gap-1.5"
            >
              See all reviews on Google <ExternalLink size={11} />
            </a>
          </motion.div>

          {/* Right: staggered review quotes -- varying sizes */}
          <div className="flex-1 space-y-4">
            {REVIEWS.map((r, i) => {
              const isLarge = i === 0;
              const isDark = i === 2;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className={`rounded-xl p-6 ${
                    isDark
                      ? "bg-[#1f3a2b] text-[#faf6ed]"
                      : isLarge
                      ? "bg-[#f4efe3] border border-[#1f3a2b]/[0.06]"
                      : "bg-white/50 border border-[#1f3a2b]/[0.06]"
                  } ${isLarge ? "sm:p-8" : ""}`}
                >
                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(r.rating)].map((_, j) => (
                      <Star
                        key={j}
                        size={11}
                        className={isDark ? "text-[#d4a017] fill-[#d4a017]" : "text-[#d4a017] fill-[#d4a017]"}
                      />
                    ))}
                  </div>
                  <p
                    className={`font-serif italic leading-relaxed ${
                      isDark
                        ? "text-[#faf6ed]/80"
                        : "text-[#1f3a2b]/60"
                    } ${isLarge ? "text-lg md:text-xl" : "text-[15px]"}`}
                  >
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className={`mt-4 pt-3 border-t ${isDark ? "border-[#faf6ed]/10" : "border-[#1f3a2b]/8"} flex items-center justify-between`}>
                    <span className={`text-[13px] ${isDark ? "text-[#faf6ed]/50" : "text-[#1f3a2b]/50"}`}>
                      {r.author}
                    </span>
                    <span className={`text-[9px] tracking-[0.15em] uppercase ${isDark ? "text-[#faf6ed]/30" : "text-[#1f3a2b]/30"}`}>
                      {r.source}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
