import React from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import IMAGES from "../../data/images";

export default function Footer() {
  return (
    <footer className="bg-[#1f3a2b] text-[#faf6ed]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="mb-4">
              <img
                src={IMAGES.logo}
                alt="Greenwood Gourmet Grocery"
                className="h-10 w-auto brightness-0 invert opacity-70"
              />
            </div>
            <p className="text-sm text-[#faf6ed]/50 leading-relaxed max-w-xs">
              A country provisions store on Route 250, serving Crozet and
              Albemarle County since 1999.
            </p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#faf6ed]/30 mb-3">
              Explore
            </div>
            <nav className="flex flex-col gap-2.5 text-sm text-[#faf6ed]/60">
              <Link to="/menu" className="hover:text-[#d4a017] transition-colors">
                Sandwich Menu
              </Link>
              <Link to="/our-story" className="hover:text-[#d4a017] transition-colors">
                Our Story
              </Link>
              <Link to="/visit" className="hover:text-[#d4a017] transition-colors">
                Visit Us
              </Link>
              <a
                href="https://greenwoodva.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d4a017] transition-colors"
              >
                Order Online
              </a>
            </nav>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#faf6ed]/30 mb-3">
              Contact
            </div>
            <div className="flex flex-col gap-2.5 text-sm text-[#faf6ed]/60">
              <a href="tel:5404566431" className="hover:text-[#d4a017] transition-colors">
                (540) 456-6431
              </a>
              <span>6701 Rockfish Gap Tpk</span>
              <span>Crozet, VA 22932</span>
              <a
                href="https://instagram.com/greenwoodgourmet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d4a017] transition-colors flex items-center gap-1.5"
              >
                <Instagram size={13} /> @greenwoodgourmet
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-[#faf6ed]/[0.07] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-[11px] text-[#faf6ed]/30">
            &copy; {new Date().getFullYear()} Greenwood Gourmet Grocery
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#faf6ed]/20">
            Keep it local
          </div>
        </div>
      </div>
    </footer>
  );
}
