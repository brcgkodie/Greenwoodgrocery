import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ExternalLink, Clock, Phone } from "lucide-react";
import { motion } from "framer-motion";
import IMAGES from "../../data/images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Mobile: full-bleed video */}
      <div className="md:hidden relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={IMAGES.hero}
          className="w-full h-[65vw] object-cover"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f3a2b]/20 via-transparent to-[#faf6ed]" />
      </div>

      {/* Desktop: asymmetric layout with video bleeding wider */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-6 pb-0 md:pt-20 md:pb-0">
        <div className="grid md:grid-cols-12 gap-6 md:gap-0 items-start">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6 md:pr-12 md:pt-8 relative z-10"
          >
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#6b4226]/60 mb-5">
              Crozet, Virginia &middot; Est. 1999
            </div>
            <h1 className="font-serif text-[#1f3a2b] text-[2.5rem] sm:text-5xl md:text-[3.5rem] lg:text-[4rem] leading-[0.92] tracking-tight">
              Local provisions,
              <br />
              <span className="italic text-[#6b4226]">handpicked goods,</span>
              <br />
              on Route 250.
            </h1>
            <p className="mt-6 md:mt-8 max-w-md text-[#1f3a2b]/60 text-[15px] leading-relaxed">
              A country grocery built on the foundation of a roadside fruit stand.
              Made-to-order sandwiches, hundreds of craft beers and wines, fresh
              coffee, and locally sourced provisions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/menu"
                className="bg-[#1f3a2b] text-[#faf6ed] px-6 py-3.5 rounded-full text-sm tracking-wide hover:bg-[#0f2419] transition-colors inline-flex items-center gap-2"
              >
                See the menu <ChevronDown size={15} />
              </Link>
              <a
                href="https://greenwoodva.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#1f3a2b]/20 text-[#1f3a2b] px-6 py-3.5 rounded-full text-sm tracking-wide hover:border-[#1f3a2b]/50 transition-colors inline-flex items-center gap-2"
              >
                Order online <ExternalLink size={13} />
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-2.5">
              <div className="flex items-center gap-2 text-[11px] text-[#1f3a2b]/45 border border-[#1f3a2b]/10 rounded-full px-4 py-2">
                <Clock size={12} />
                <span>Wed-Sun from 10am</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#1f3a2b]/45 border border-[#1f3a2b]/10 rounded-full px-4 py-2">
                <Phone size={12} />
                <a href="tel:5404566431" className="hover:text-[#1f3a2b]">
                  (540) 456-6431
                </a>
              </div>
            </div>
          </motion.div>

          {/* Video column -- bleeds past container on the right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block md:col-span-6 relative -mr-8 lg:-mr-16"
          >
            <div className="relative rounded-l-2xl overflow-hidden shadow-2xl shadow-[#1f3a2b]/20">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={IMAGES.hero}
                className="w-full h-[480px] lg:h-[540px] object-cover"
              >
                <source src="/images/hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#1f3a2b]/10" />

              {/* "Since 1999" badge overlapping the edge */}
              <div className="absolute -left-4 top-8 bg-[#d4a017] text-[#1f3a2b] px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-medium shadow-lg">
                Since 1999
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Organic divider instead of border-t */}
      <div className="mt-16 md:mt-24">
        <svg viewBox="0 0 1440 40" className="w-full text-[#1f3a2b]/[0.06]" preserveAspectRatio="none">
          <path d="M0,20 Q360,0 720,20 T1440,20 V40 H0 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
