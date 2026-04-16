import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, X, Menu as MenuIcon, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext";
import IMAGES from "../../data/images";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/menu", label: "Menu" },
    { to: "/our-story", label: "Our Story" },
    { to: "/visit", label: "Visit" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf6ed]/95 backdrop-blur-md shadow-sm shadow-[#1f3a2b]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={IMAGES.logo}
            alt="Greenwood Gourmet Grocery"
            className="h-8 sm:h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[13px] tracking-wide text-[#1f3a2b]/70">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-[#1f3a2b] transition-colors ${
                location.pathname === link.to ? "text-[#1f3a2b] font-medium" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://greenwoodva.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b4226] hover:text-[#d4a017] transition-colors flex items-center gap-1"
          >
            Order Online <ExternalLink size={11} />
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openCart}
            className="relative flex items-center gap-2 bg-[#1f3a2b] text-[#faf6ed] px-4 py-2.5 rounded-full text-sm hover:bg-[#0f2419] transition-colors"
          >
            <ShoppingBag size={15} />
            <span className="hidden sm:inline text-[13px]">Cart</span>
            <AnimatePresence>
              {cart.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="bg-[#d4a017] text-[#1f3a2b] rounded-full w-5 h-5 flex items-center justify-center text-[11px] font-bold"
                >
                  {cart.length}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#1f3a2b]/70 hover:text-[#1f3a2b] p-1"
          >
            {mobileOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-[#1f3a2b]/8 bg-[#faf6ed]"
          >
            <nav className="flex flex-col px-5 py-6 gap-5 text-[15px] text-[#1f3a2b]/80">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="hover:text-[#1f3a2b]"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://greenwoodva.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b4226] flex items-center gap-1"
              >
                Order Online <ExternalLink size={12} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
