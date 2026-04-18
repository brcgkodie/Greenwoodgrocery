import React from "react";
import HandDivider from "../assets/HandDivider";

export default function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-cream">
      <div className="max-w-6xl mx-auto px-5">
        <HandDivider className="w-full h-2 mt-2" color="#d4a017" />
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-serif italic text-forest/50 text-sm">
            Greenwood Gourmet Grocery &middot; Crozet, Virginia
          </div>
          <div className="font-hand text-forest/35 text-lg">
            A country provisions store &middot; since 1999
          </div>
        </div>
      </div>
    </footer>
  );
}
