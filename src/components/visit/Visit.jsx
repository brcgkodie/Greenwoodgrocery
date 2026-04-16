import React, { useState, useRef, useEffect } from "react";
import { MapPin, Clock, Phone, Instagram, ShoppingCart, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "../shared/FadeIn";

export default function Visit() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="visit" className="bg-[#faf6ed]">
      {/* Map first -- full width, no heading above */}
      <div ref={mapRef} className="relative h-72 md:h-96 bg-[#e8e0d0]">
        {mapLoaded && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.5!2d-78.7444!3d38.0206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b37f4ed53caaab%3A0x6b7b3b5c3f5b1e80!2sGreenwood%20Gourmet%20Grocery!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Greenwood Gourmet Grocery location"
          />
        )}
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <MapPin size={32} className="text-[#1f3a2b]/20 animate-pulse" />
          </div>
        )}
      </div>

      {/* Info below map -- 3-column but asymmetric */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8">
          {/* Address -- wider column */}
          <FadeIn className="md:col-span-5">
            <div className="flex items-center gap-2 text-[#d4a017] mb-3">
              <MapPin size={16} />
              <div className="text-[10px] tracking-[0.2em] uppercase">Find us</div>
            </div>
            <a
              href="https://maps.google.com/?q=6701+Rockfish+Gap+Turnpike+Crozet+VA+22932"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-[#1f3a2b] text-2xl md:text-3xl leading-snug hover:text-[#6b4226] transition-colors block"
            >
              6701 Rockfish Gap Turnpike
            </a>
            <div className="text-[#1f3a2b]/60 mt-1">Crozet, VA 22932</div>
            <p className="text-sm text-[#1f3a2b]/45 mt-3 leading-relaxed max-w-xs">
              On Route 250, between Charlottesville and the Blue Ridge Parkway.
              Look for the green awning.
            </p>
          </FadeIn>

          {/* Hours */}
          <FadeIn delay={0.1} className="md:col-span-4">
            <div className="flex items-center gap-2 text-[#d4a017] mb-3">
              <Clock size={16} />
              <div className="text-[10px] tracking-[0.2em] uppercase">Hours</div>
            </div>
            <div className="space-y-2 text-[#1f3a2b]/70 text-sm">
              <div className="flex justify-between gap-4">
                <span>Wednesday - Thursday</span>
                <span className="font-medium text-[#1f3a2b]">10am - 5pm</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Friday - Saturday</span>
                <span className="font-medium text-[#1f3a2b]">10am - 6pm</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="font-medium text-[#1f3a2b]">10am - 5pm</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Monday - Tuesday</span>
                <span className="font-medium text-[#1f3a2b]/40 italic">Closed</span>
              </div>
            </div>
            <div className="text-sm text-[#6b4226]/60 mt-3 italic">
              Sandwiches made to order until 4pm daily.
            </div>
          </FadeIn>

          {/* Contact */}
          <FadeIn delay={0.2} className="md:col-span-3">
            <div className="flex items-center gap-2 text-[#d4a017] mb-3">
              <Phone size={16} />
              <div className="text-[10px] tracking-[0.2em] uppercase">Reach us</div>
            </div>
            <a
              href="tel:5404566431"
              className="font-serif text-[#1f3a2b] text-xl block hover:text-[#6b4226] transition-colors"
            >
              (540) 456-6431
            </a>
            <div className="mt-4 space-y-2.5">
              <a
                href="https://instagram.com/greenwoodgourmet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#1f3a2b]/60 hover:text-[#d4a017] transition-colors"
              >
                <Instagram size={14} /> @greenwoodgourmet
              </a>
              <a
                href="https://greenwoodva.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#1f3a2b]/60 hover:text-[#d4a017] transition-colors"
              >
                <ShoppingCart size={14} /> greenwoodva.shop
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
