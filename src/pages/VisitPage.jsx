import React from "react";
import usePageMeta from "../hooks/usePageMeta";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

export default function VisitPage() {
  usePageMeta({
    title: "Visit",
    description:
      "Visit Greenwood Gourmet Grocery at 6701 Rockfish Gap Turnpike, Crozet, VA 22932. Open Wed-Sun. Sandwiches made to order until 4pm. (540) 456-6431.",
    path: "/visit",
  });

  return (
    <>
      <section className="border-b border-forest/10">
        <div className="max-w-6xl mx-auto px-5 pt-16 pb-12 md:pt-20 md:pb-16">
          <div className="font-hand text-gold text-2xl mb-2">come see us</div>
          <h1 className="font-serif text-forest text-5xl md:text-7xl leading-tight mb-4">
            Find us.
          </h1>
          <p className="text-forest/60 text-lg max-w-lg">
            On Route 250, half-mile west of I-64 exit 107. Pull in, grab a
            sandwich, stay awhile.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-5 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Address */}
            <div className="card-rustic p-6">
              <div className="flex items-center gap-2 text-gold mb-3">
                <MapPin size={16} />
                <div className="text-[10px] tracking-[0.2em] uppercase font-semibold">Address</div>
              </div>
              <address className="not-italic">
                <div className="font-serif text-forest text-xl leading-snug">
                  6701 Rockfish<br />Gap Turnpike
                </div>
                <div className="text-forest/70 mt-1">Crozet, VA 22932</div>
              </address>
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=-78.81%2C38.01%2C-78.76%2C38.04&layer=mapnik&marker=38.025%2C-78.785"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              title="Greenwood Gourmet Grocery location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
