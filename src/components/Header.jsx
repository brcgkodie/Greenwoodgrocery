import React from "react";
import { ShoppingBag } from "lucide-react";
import { useShopify } from "../context/ShopifyContext";

export default function Header() {
  const { cartCount, setCartOpen } = useShopify();

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/85 border-b border-forest/10">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center">
            <span className="font-serif text-cream text-xl italic">G</span>
          </div>
          <div className="leading-none">
            <div className="font-serif text-forest text-lg tracking-tight">Greenwood Gourmet</div>
            <div className="font-hand text-walnut/70 text-sm mt-0.5">Est. Crozet, VA · 1999</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-forest/70">
          <a href="#menu" className="hover:text-forest transition-colors">Order</a>
          <a href="#shop" className="hover:text-forest transition-colors">Shop</a>
          <a href="#story" className="hover:text-forest transition-colors">Story</a>
          <a href="#visit" className="hover:text-forest transition-colors">Visit</a>
        </nav>

        <button
          onClick={() => setCartOpen(true)}
          className="relative flex items-center gap-2 bg-forest text-cream px-4 py-2.5 rounded-lg text-sm hover:bg-forest/90 transition-colors"
        >
          <ShoppingBag size={16} />
          <span className="hidden sm:inline">Cart</span>
          {cartCount > 0 && (
            <span className="bg-gold text-forest rounded-full w-5 h-5 flex items-center justify-center text-[11px] font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
