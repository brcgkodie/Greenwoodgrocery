import React from "react";
import { Link } from "react-router-dom";
import HandDivider from "../assets/HandDivider";

export default function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-cream">
      <div className="max-w-6xl mx-auto px-5">
        <HandDivider className="w-full h-2 mt-2" color="#d4a017" />
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-serif italic text-forest/50 text-sm">
              Greenwood Gourmet Grocery &middot; Crozet, Virginia
            </div>
            <nav className="flex gap-6 text-sm text-forest/50">
              <Link to="/menu" className="hover:text-forest transition-colors">Menu</Link>
              <Link to="/our-story" className="hover:text-forest transition-colors">Our Story</Link>
              <Link to="/visit" className="hover:text-forest transition-colors">Visit</Link>
            </nav>
            <div className="font-hand text-forest/35 text-lg">
              A country provisions store &middot; since 1999
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
