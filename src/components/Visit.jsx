import React from "react";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

export default function Visit() {
  return (
    <section id="visit" className="border-t border-forest/10">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="font-hand text-gold text-2xl mb-2">come see us</div>
        <h2 className="font-serif text-forest text-4xl md:text-5xl mb-12">Find us.</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Address */}
          <div className="card-rustic p-6">
            <div className="flex items-center gap-2 text-gold mb-3">
              <MapPin size={16} />
              <div className="text-[10px] tracking-[0.2em] uppercase font-semibold">Address</div>
            </div>
            <div className="font-serif text-forest text-xl leading-snug">
              6701 Rockfish<br />Gap Turnpike
            </div>
            <div className="text-forest/70 mt-1">Crozet, VA 22932</div>
            <div className="text-sm text-forest/50 mt-2 italic">
              On Route 250, half-mile west of I-64 exit 107.
            </div>
          </div>

          {/* Hours */}
          <div className="card-rustic p-6">
            <div className="flex items-center gap-2 text-gold mb-3">
              <Clock size={16} />
              <div className="text-[10px] tracking-[0.2em] uppercase font-semibold">Hours</div>
            </div>
            <div className="space-y-1 text-forest/80 text-sm">
              <div className="flex justify-between">
                <span>Mon &ndash; Tue</span>
                <span className="italic text-forest/40">Closed</span>
              </div>
              <div className="flex justify-between">
                <span>Wed &ndash; Thu</span><span>10a &ndash; 5p</span>
              </div>
              <div className="flex justify-between">
                <span>Fri &ndash; Sat</span><span>10a &ndash; 6p</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span><span>10a &ndash; 5p</span>
              </div>
            </div>
            <div className="font-hand text-forest/50 text-base mt-3">
              Sandwiches made to order until 4pm.
            </div>
          </div>

          {/* Contact */}
          <div className="card-rustic p-6">
            <div className="flex items-center gap-2 text-gold mb-3">
              <Phone size={16} />
              <div className="text-[10px] tracking-[0.2em] uppercase font-semibold">Reach us</div>
            </div>
            <a
              href="tel:5404566431"
              className="font-serif text-forest text-xl block hover:text-gold transition-colors"
            >
              (540) 456-6431
            </a>
            <a
              href="https://instagram.com/greenwoodgrocery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-forest/60 mt-3 hover:text-gold transition-colors"
            >
              <Instagram size={14} /> @greenwoodgrocery
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden border border-walnut/15">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-78.715%2C38.063%2C-78.695%2C38.073&layer=mapnik&marker=38.068%2C-78.705"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            title="Greenwood Gourmet Grocery location"
          />
        </div>
      </div>
    </section>
  );
}
