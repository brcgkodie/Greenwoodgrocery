import React, { useState, useMemo, useEffect } from "react";
import { ShoppingBag, X, MapPin, Clock, Phone, Instagram, ChevronDown, Check, Wine, Coffee, Leaf, ExternalLink, ShoppingCart, Menu as MenuIcon, Star, Quote } from "lucide-react";

// ----- IMAGES -----
const IMAGES = {
  logo: "https://images.squarespace-cdn.com/content/v1/53ef7f3be4b0880c7d4fbb28/1408315939180-OZKE1CUAPS3001CTTPB6/green.png",
  hero: "/images/hero-storefront.jpg",
  storyInterior: "/images/story-interior.jpg",
  produce: "https://images.squarespace-cdn.com/content/v1/53ef7f3be4b0880c7d4fbb28/1507348004603-QN11BZG7PEMTH1J53IOF/IMG_2905.jpg?format=1500w",
  wine: "https://images.squarespace-cdn.com/content/v1/53ef7f3be4b0880c7d4fbb28/1507048394026-SDG6RIPF153VIDJ5V0WL/IMG_5643.JPG?format=1500w",
  pie: "https://images.squarespace-cdn.com/content/v1/53ef7f3be4b0880c7d4fbb28/1503849951972-JC7CAV312NVVN5FJV2WG/IMG_0983.jpg?format=1500w",
  sandwichMenu: "https://images.squarespace-cdn.com/content/v1/53ef7f3be4b0880c7d4fbb28/1726688401523-R6ZCPWVFRDWN8WT6ALCM/Sandwiches2024.png",
  boxLunch: "https://images.squarespace-cdn.com/content/v1/53ef7f3be4b0880c7d4fbb28/1726688396180-SI033NUUYPNOKSD76SPL/BoxLunch2024.png",
};

// ----- DATA (scraped from greenwoodva.shop) -----
const SANDWICHES = [
  { id: "blue-slate", name: "Blue Slate", price: 13.79, category: "turkey", desc: "Smoked all-natural turkey breast with Havarti cheese, lettuce, tomato, and ancho lime mayo on country bread", veg: false, img: "https://greenwoodva.shop/cdn/shop/products/fullsizeoutput_1aa6.jpg?v=1589061065&width=800" },
  { id: "italian", name: "Italian", price: 13.79, category: "pork", desc: "Thinly sliced sopressata and Genoa salami with provolone, diced peppers, lettuce and house-made Italian vinaigrette on baguette", veg: false, img: "https://greenwoodva.shop/cdn/shop/products/image_549ef37a-e99c-48b7-af1c-988dd3e84cf5.jpg?v=1599769940&width=800" },
  { id: "landrance", name: "Landrance", price: 13.79, category: "pork", desc: "Prosciutto, roasted tomatoes, arugula and fresh mozzarella on baguette. Also available as a vegetarian sandwich", veg: false },
  { id: "wessex", name: "Wessex", price: 13.99, category: "pork", desc: "Thinly sliced Edwards' Virginia ham with brie and house-made apple chutney on ciabatta bread", veg: false, img: "https://greenwoodva.shop/cdn/shop/products/3792F63A-FA88-463E-8809-10D8D802D8CD.jpg?v=1599770094&width=800" },
  { id: "devon", name: "Devon", price: 12.99, category: "beef", desc: "All-natural roast beef with horseradish-chive spread and arugula on focaccia", veg: false },
  { id: "araucana", name: "Araucana", price: 10.49, category: "veg", desc: "House-made farm-fresh egg salad with bacon and local tomato on country bread. Also available without bacon", veg: true, img: "https://greenwoodva.shop/cdn/shop/products/fullsizeoutput_1aa4.jpg?v=1589061134&width=800" },
  { id: "brahma", name: "Brahma", price: 12.99, category: "chicken", desc: "House-made curried chicken salad with Farmstead Ferments kraut, romaine and chutney raita on whole wheat bread. Contains almonds", veg: false, img: "https://greenwoodva.shop/cdn/shop/products/image_22a74dba-9534-4bf4-8020-134c876df6ef.jpg?v=1589732241&width=800" },
  { id: "chester", name: "Chester", price: 12.79, category: "pork", desc: "All-natural black forest ham with provolone, spicy-sweet mustard and roasted peppers on focaccia, grilled", veg: false },
  { id: "melrose", name: "Melrose", price: 11.79, category: "veg", desc: "Roasted portobello mushrooms and red onions with house-made pimento cheese and arugula on country bread, grilled", veg: true },
  { id: "galloway", name: "Galloway", price: 12.79, category: "beef", desc: "Pastrami and Swiss with coarse mustard and coleslaw on rye bread, grilled", veg: false, img: "https://greenwoodva.shop/cdn/shop/products/image_8e6c2a63-ae5a-4752-99bf-8ebabbaf11f4.jpg?v=1616601292&width=800" },
  { id: "riviera", name: "Riviera", price: 14.79, category: "fish", desc: "House-made Italian tuna salad with capers, roasted tomatoes and olive oil, with mixed greens on country bread", veg: false, img: "https://greenwoodva.shop/cdn/shop/products/fullsizeoutput_1aa5.jpg?v=1589061191&width=800" },
  { id: "berkshire", name: "Berkshire", price: 14.99, category: "pork", desc: "Roasted Double H Farm pork with pickled fennel, romaine and charred onion-miso mayo on ciabatta", veg: false },
  { id: "cuban", name: "Cuban", price: 13.79, category: "pork", desc: "Mortadella and Swiss with cornichons, hot peppers, pickled onions and roasted garlic mayo on a brioche bun", veg: false },
  { id: "vittoria", name: "Vittoria", price: 11.79, category: "veg", desc: "House-made eggplant caponata and hummus with arugula on focaccia. Contains pine nuts", veg: true },
  { id: "hampshire", name: "Hampshire", price: 13.99, category: "pork", desc: "Pulled Double H Farm pork barbecue with coleslaw on brioche bun", veg: false },
  { id: "kids-turkey", name: "Kid's Turkey", price: 6.50, category: "kids", desc: "Smoked all-natural turkey breast with Havarti cheese and mayonnaise on wheat", veg: false },
  { id: "kids-ham", name: "Kid's Ham", price: 7.50, category: "kids", desc: "All-natural black forest ham with provolone and mayonnaise on wheat", veg: false },
];

const BREADS = ["Sourdough", "Ciabatta", "Baguette", "Whole Wheat", "Gluten-Free (+$2)"];
const MODS = [
  { id: "no-mayo", label: "No mayo" },
  { id: "no-mustard", label: "No mustard" },
  { id: "no-onion", label: "No onion" },
  { id: "add-lettuce", label: "Add lettuce" },
  { id: "add-tomato", label: "Add tomato" },
  { id: "sub-mayo", label: "Sub plain mayo" },
];

const FILTERS = [
  { id: "all", label: "Everything" },
  { id: "veg", label: "Vegetarian" },
  { id: "turkey", label: "Turkey" },
  { id: "chicken", label: "Chicken" },
  { id: "beef", label: "Beef" },
  { id: "pork", label: "Pork" },
  { id: "fish", label: "Fish" },
  { id: "kids", label: "Kids" },
];

// ----- HELPERS -----
const fmt = (n) => `$${n.toFixed(2)}`;

// ----- COMPONENTS -----
function Header({ cartCount, onCartClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#faf6ed]/90 border-b border-[#1f3a2b]/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={IMAGES.logo} alt="Greenwood Gourmet Grocery" className="h-8 sm:h-10 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#1f3a2b]/80">
          <a href="#menu" className="hover:text-[#1f3a2b] transition-colors">Sandwiches</a>
          <a href="#provisions" className="hover:text-[#1f3a2b] transition-colors">Provisions</a>
          <a href="#story" className="hover:text-[#1f3a2b] transition-colors">Our Story</a>
          <a href="#visit" className="hover:text-[#1f3a2b] transition-colors">Visit</a>
          <a
            href="https://greenwoodva.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d4a017] transition-colors flex items-center gap-1"
          >
            Order Online <ExternalLink size={12} />
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 bg-[#1f3a2b] text-[#faf6ed] px-4 py-2.5 rounded-full text-sm hover:bg-[#0f2419] transition-colors"
          >
            <ShoppingBag size={16} />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="bg-[#d4a017] text-[#1f3a2b] rounded-full w-5 h-5 flex items-center justify-center text-[11px] font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#1f3a2b]/70 hover:text-[#1f3a2b]"
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </div>
      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#1f3a2b]/8 bg-[#faf6ed]/98 backdrop-blur-lg">
          <nav className="flex flex-col px-4 py-5 gap-5 text-[15px] text-[#1f3a2b]/70">
            <a href="#menu" onClick={() => setMobileOpen(false)} className="hover:text-[#1f3a2b]">Sandwiches</a>
            <a href="#provisions" onClick={() => setMobileOpen(false)} className="hover:text-[#1f3a2b]">Provisions</a>
            <a href="#story" onClick={() => setMobileOpen(false)} className="hover:text-[#1f3a2b]">Our Story</a>
            <a href="#visit" onClick={() => setMobileOpen(false)} className="hover:text-[#1f3a2b]">Visit</a>
            <a
              href="https://greenwoodva.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4a017] flex items-center gap-1"
            >
              Order Online <ExternalLink size={12} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Mobile: video above text, full bleed */}
      <div className="md:hidden relative">
        <video autoPlay loop muted playsInline poster={IMAGES.hero} className="w-full h-[56vw] object-cover">
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#faf6ed]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-24 md:pb-32">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-7">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#1f3a2b]/50 mb-5 md:mb-6">
              Keep it local &middot; since 1999
            </div>
            <h1 className="font-serif text-[#1f3a2b] text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] tracking-tight">
              Local provisions,<br />
              <span className="italic text-[#d4a017]">handpicked goods,</span><br />
              on Route 250.
            </h1>
            <p className="mt-6 md:mt-8 max-w-xl text-[#1f3a2b]/65 text-[15px] md:text-lg leading-relaxed">
              A country grocery built on the foundation of a roadside fruit stand.
              Locally sourced provisions, made-to-order sandwiches, hundreds of craft
              beers and wines, fresh coffee, and pastries &mdash; since 1999.
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#menu"
                className="bg-[#1f3a2b] text-[#faf6ed] px-6 py-3.5 md:px-7 md:py-4 rounded-full text-sm tracking-wide hover:bg-[#0f2419] transition-colors inline-flex items-center gap-2"
              >
                See the menu <ChevronDown size={15} />
              </a>
              <a
                href="https://greenwoodva.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#1f3a2b]/20 text-[#1f3a2b] px-6 py-3.5 md:px-7 md:py-4 rounded-full text-sm tracking-wide hover:border-[#1f3a2b]/60 transition-colors inline-flex items-center gap-2"
              >
                Order online <ExternalLink size={13} />
              </a>
            </div>

            {/* Quick info pills */}
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-2.5">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#1f3a2b]/50 border border-[#1f3a2b]/10 rounded-full px-4 py-2">
                <Clock size={12} />
                <span>Wed-Thu & Sun 10a-5p &middot; Fri-Sat 10a-6p</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#1f3a2b]/50 border border-[#1f3a2b]/10 rounded-full px-4 py-2">
                <Phone size={12} />
                <a href="tel:5404566431" className="hover:text-[#1f3a2b]">(540) 456-6431</a>
              </div>
            </div>
          </div>

          {/* Desktop: Storefront video */}
          <div className="hidden md:flex md:col-span-5 relative items-center justify-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#1f3a2b]/15 w-full relative">
              <video autoPlay loop muted playsInline poster={IMAGES.hero} className="w-full h-[420px] object-cover">
                <source src="/images/hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1f3a2b]/80 to-transparent p-6 pt-20">
                <div className="flex items-center gap-2 text-[#faf6ed]/80 text-sm mb-1.5">
                  <MapPin size={13} className="text-[#d4a017]" />
                  <span>6701 Rockfish Gap Tpk, Crozet, VA</span>
                </div>
                <a
                  href="https://greenwoodva.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4a017]/90 text-sm hover:text-[#faf6ed] transition-colors flex items-center gap-1.5"
                >
                  Order online at greenwoodva.shop <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterBar({ active, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
      {FILTERS.map((f) => (
        <button
          key={f.id}
          onClick={() => onChange(f.id)}
          className={`shrink-0 px-4 py-2 rounded-full text-xs tracking-wide transition-all border ${
            active === f.id
              ? "bg-[#1f3a2b] text-[#faf6ed] border-[#1f3a2b]"
              : "bg-transparent text-[#1f3a2b]/70 border-[#1f3a2b]/25 hover:border-[#1f3a2b]"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

function SandwichCard({ s, onAdd }) {
  return (
    <div className="group border-b border-[#1f3a2b]/8 py-6 sm:py-8 first:pt-0">
      <div className="flex gap-4 sm:gap-5">
        {s.img && (
          <div className="shrink-0">
            <img
              src={s.img}
              alt={s.name}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg sm:rounded-xl object-cover border border-[#1f3a2b]/8"
              loading="lazy"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-3 mb-1.5">
            <div className="flex items-baseline gap-2 sm:gap-3 min-w-0">
              <h3 className="font-serif text-[#1f3a2b] text-xl sm:text-2xl md:text-[1.7rem] tracking-tight truncate">
                {s.name}
              </h3>
              {s.veg && (
                <span className="text-[8px] sm:text-[9px] tracking-[0.12em] uppercase text-[#d4a017] border border-[#d4a017]/40 px-1.5 py-0.5 rounded shrink-0">
                  veg
                </span>
              )}
            </div>
            <div className="hidden sm:block flex-1 border-b border-dotted border-[#1f3a2b]/15 mb-1.5" />
            <div className="font-serif text-[#1f3a2b]/80 text-base sm:text-lg shrink-0">{fmt(s.price)}</div>
          </div>
          <p className="font-serif italic text-[#1f3a2b]/55 text-[13px] sm:text-[15px] leading-snug max-w-xl mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
            {s.desc}
          </p>
          <button
            onClick={() => onAdd(s)}
            className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#1f3a2b]/70 border-b border-[#1f3a2b]/40 pb-0.5 hover:text-[#d4a017] hover:border-[#d4a017] transition-colors"
          >
            Add to order
          </button>
        </div>
      </div>
    </div>
  );
}

function ConfigDrawer({ sandwich, onClose, onConfirm }) {
  const [bread, setBread] = useState(BREADS[0]);
  const [mods, setMods] = useState([]);

  if (!sandwich) return null;

  const toggleMod = (id) => {
    setMods((m) => (m.includes(id) ? m.filter((x) => x !== id) : [...m, id]));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-[#1f3a2b]/40 backdrop-blur-sm" />
      <div
        className="relative bg-[#faf6ed] w-full sm:max-w-md sm:rounded-2xl rounded-t-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-[#1f3a2b]/15"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-[#1f3a2b]/60 hover:text-[#1f3a2b]">
          <X size={20} />
        </button>
        <div className="text-[10px] tracking-[0.2em] uppercase text-[#1f3a2b]/60 mb-2">Customize</div>
        <h2 className="font-serif text-[#1f3a2b] text-3xl mb-1">{sandwich.name}</h2>
        <p className="font-serif italic text-[#1f3a2b]/70 text-sm mb-6">{sandwich.desc}</p>

        <div className="mb-6">
          <div className="text-xs tracking-[0.15em] uppercase text-[#1f3a2b]/60 mb-3">Bread</div>
          <div className="grid grid-cols-2 gap-2">
            {BREADS.map((b) => (
              <button
                key={b}
                onClick={() => setBread(b)}
                className={`text-sm py-2.5 px-3 rounded-lg border text-left transition-all ${
                  bread === b
                    ? "bg-[#1f3a2b] text-[#faf6ed] border-[#1f3a2b]"
                    : "border-[#1f3a2b]/25 text-[#1f3a2b]/80 hover:border-[#1f3a2b]"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="text-xs tracking-[0.15em] uppercase text-[#1f3a2b]/60 mb-3">Modifications</div>
          <div className="flex flex-wrap gap-2">
            {MODS.map((m) => {
              const on = mods.includes(m.id);
              return (
                <button
                  key={m.id}
                  onClick={() => toggleMod(m.id)}
                  className={`text-xs px-3 py-2 rounded-full border transition-all flex items-center gap-1.5 ${
                    on
                      ? "bg-[#d4a017] text-[#1f3a2b] border-[#d4a017]"
                      : "border-[#1f3a2b]/25 text-[#1f3a2b]/70 hover:border-[#1f3a2b]"
                  }`}
                >
                  {on && <Check size={12} />}
                  {m.label}
                </button>
              );
            })}
          </div>
          <div className="text-[11px] italic text-[#1f3a2b]/50 mt-3">
            We can remove items, sub mayo or mustard, or add lettuce/tomato. No other substitutions, please.
          </div>
        </div>

        <button
          onClick={() => onConfirm({ ...sandwich, bread, mods, lineId: Date.now() })}
          className="w-full bg-[#1f3a2b] text-[#faf6ed] py-4 rounded-full text-sm tracking-wide hover:bg-[#0f2419] transition-colors"
        >
          Add to order &middot; {fmt(sandwich.price)}
        </button>
      </div>
    </div>
  );
}

function CartDrawer({ open, items, onClose, onRemove }) {
  if (!open) return null;
  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end" onClick={onClose}>
      <div className="absolute inset-0 bg-[#1f3a2b]/40 backdrop-blur-sm" />
      <div
        className="relative bg-[#faf6ed] w-full sm:max-w-md h-full overflow-y-auto border-l border-[#1f3a2b]/15"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#1f3a2b]/60">Your order</div>
              <h2 className="font-serif text-[#1f3a2b] text-3xl">Pickup basket</h2>
            </div>
            <button onClick={onClose} className="text-[#1f3a2b]/60 hover:text-[#1f3a2b]">
              <X size={22} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="font-serif italic text-[#1f3a2b]/50 text-lg">Your basket is empty.</div>
              <div className="text-sm text-[#1f3a2b]/60 mt-2">Pick a sandwich to begin.</div>
            </div>
          ) : (
            <>
              <div className="space-y-5 mb-8">
                {items.map((item) => (
                  <div key={item.lineId} className="border-b border-[#1f3a2b]/15 pb-5">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-serif text-[#1f3a2b] text-xl">{item.name}</h3>
                      <span className="font-serif text-[#1f3a2b]">{fmt(item.price)}</span>
                    </div>
                    <div className="text-xs text-[#1f3a2b]/60 italic mb-1">on {item.bread}</div>
                    {item.mods.length > 0 && (
                      <div className="text-xs text-[#1f3a2b]/60">
                        {item.mods.map((id) => MODS.find((m) => m.id === id)?.label).join(" · ")}
                      </div>
                    )}
                    <button
                      onClick={() => onRemove(item.lineId)}
                      className="text-[11px] tracking-wide uppercase text-[#1f3a2b]/50 hover:text-[#d4a017] mt-2"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#1f3a2b] pt-5 mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="font-serif text-[#1f3a2b] text-xl">Total</span>
                  <span className="font-serif text-[#1f3a2b] text-2xl">{fmt(total)}</span>
                </div>
                <div className="text-xs text-[#1f3a2b]/60 mt-1">Pickup at the store &middot; ready in ~20 min</div>
              </div>

              <a
                href="https://greenwoodva.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1f3a2b] text-[#faf6ed] py-4 rounded-full text-sm tracking-wide hover:bg-[#0f2419] transition-colors mb-3 flex items-center justify-center gap-2"
              >
                Order on greenwoodva.shop <ExternalLink size={14} />
              </a>
              <a
                href="tel:5404566431"
                className="w-full border border-[#1f3a2b]/30 text-[#1f3a2b] py-4 rounded-full text-sm tracking-wide hover:border-[#1f3a2b] transition-colors flex items-center justify-center"
              >
                Or call to order &middot; (540) 456-6431
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Provisions() {
  return (
    <section id="provisions" className="border-t border-[#1f3a2b]/8 bg-[#f4efe3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28">
        <div className="text-[10px] tracking-[0.3em] uppercase text-[#1f3a2b]/60 mb-4">More than a sandwich shop</div>
        <h2 className="font-serif text-[#1f3a2b] text-4xl md:text-5xl mb-4 leading-tight">
          A country provisions store.
        </h2>
        <p className="font-serif italic text-[#1f3a2b]/60 text-lg mb-14 max-w-2xl">
          We started as a roadside fruit stand and grew into your neighborhood grocer. Everything on our shelves
          has earned its place.
        </p>

        {/* Photo grid */}
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          <div className="rounded-2xl overflow-hidden border border-[#1f3a2b]/10 shadow-lg">
            <img src={IMAGES.produce} alt="Fresh local produce at Greenwood Grocery" className="w-full h-52 md:h-64 object-cover" loading="lazy" />
            <div className="bg-[#faf6ed] px-5 py-4">
              <div className="flex items-center gap-2 text-[#d4a017] mb-1"><Leaf size={15} /></div>
              <h3 className="font-serif text-[#1f3a2b] text-lg">Local Produce</h3>
              <p className="text-[#1f3a2b]/60 text-xs mt-1">Fresh from Albemarle County farms</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#1f3a2b]/10 shadow-lg">
            <img src={IMAGES.wine} alt="Virginia wine selection at Greenwood Grocery" className="w-full h-52 md:h-64 object-cover" loading="lazy" />
            <div className="bg-[#faf6ed] px-5 py-4">
              <div className="flex items-center gap-2 text-[#d4a017] mb-1"><Wine size={15} /></div>
              <h3 className="font-serif text-[#1f3a2b] text-lg">Beer & Wine</h3>
              <p className="text-[#1f3a2b]/60 text-xs mt-1">Hundreds of craft selections</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#1f3a2b]/10 shadow-lg">
            <img src={IMAGES.pie} alt="House-made baked goods at Greenwood Grocery" className="w-full h-52 md:h-64 object-cover" loading="lazy" />
            <div className="bg-[#faf6ed] px-5 py-4">
              <div className="flex items-center gap-2 text-[#d4a017] mb-1"><Coffee size={15} /></div>
              <h3 className="font-serif text-[#1f3a2b] text-lg">Coffee & Pastries</h3>
              <p className="text-[#1f3a2b]/60 text-xs mt-1">Fresh-brewed daily</p>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
          <div className="group">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[#1f3a2b]/10 flex items-center justify-center text-[#1f3a2b]/70 group-hover:bg-[#1f3a2b] group-hover:text-[#faf6ed] transition-all duration-300">
                <Leaf size={24} />
              </div>
              <div>
                <h3 className="font-serif text-[#1f3a2b] text-xl mb-2">Specialty Goods</h3>
                <p className="text-[#1f3a2b]/70 text-sm leading-relaxed">Hand-crafted goods from regional artisans, specialty cheeses, fresh dairy, and a carefully curated selection of pantry staples from trusted sources worldwide.</p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[#1f3a2b]/10 flex items-center justify-center text-[#1f3a2b]/70 group-hover:bg-[#1f3a2b] group-hover:text-[#faf6ed] transition-all duration-300">
                <ShoppingCart size={24} />
              </div>
              <div>
                <h3 className="font-serif text-[#1f3a2b] text-xl mb-2">Box Lunches & Catering</h3>
                <p className="text-[#1f3a2b]/70 text-sm leading-relaxed">Planning a gathering, office lunch, or picnic at the nearby wineries? We prepare box lunches and platters. Call ahead to place your order.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[#1f3a2b]/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="https://greenwoodva.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1f3a2b] text-[#faf6ed] px-7 py-4 rounded-full text-sm tracking-wide hover:bg-[#0f2419] transition-colors inline-flex items-center gap-2"
          >
            Browse our online shop <ExternalLink size={14} />
          </a>
          <span className="text-sm text-[#1f3a2b]/50 italic">Order ahead for pickup at the store</span>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="border-t border-[#1f3a2b]/8 bg-[#1f3a2b] text-[#faf6ed]">
      {/* Interior photo banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={IMAGES.storyInterior}
          alt="Inside Greenwood Gourmet Grocery - shelves of artisan goods, craft beer, wine, and local produce"
          className="w-full h-full object-cover opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f3a2b]/30 to-[#1f3a2b]" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28 -mt-16 sm:-mt-20 relative z-10 grid md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-4">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#d4a017] mb-4">Our Story</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">A grocery, a deli, an institution.</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-5 text-[#faf6ed]/80 text-base leading-relaxed">
          <p>
            Built upon the foundation of a traditional roadside fruit stand, Greenwood Gourmet Grocery
            has served the Crozet and Albemarle County community since 1999. What started as a place to
            grab fresh produce from local farms has grown into a beloved destination for handmade
            sandwiches, specialty groceries, and one of the region's best beer and wine selections.
          </p>
          <p>
            Albemarle County and the surrounding Blue Ridge hills are home to world-class farms, orchards,
            vineyards, and breweries. We're proud to support those producers. Inside, you'll find an
            epicurean's dream: specialty items, fresh dairy, hundreds of beers and wines, each one with our
            stamp of approval. Outside, a view of the mountains and the feeling that you've found
            something worth coming back for.
          </p>
          <p className="font-serif italic text-[#d4a017] text-lg pt-2">
            Keep it local. Sandwiches made to order, every day from open until 4pm.
          </p>
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    text: "What a gem, fantastic sandwiches, they are all so good. The perfect bite to bring along for a vineyard day. High quality food items line the shelves throughout the store and some of the region's best wines.",
    author: "Kyle",
    source: "Google",
    rating: 5,
  },
  {
    text: "My husband and I stop by here anytime we are in the area! Best sandwiches ever and we love stopping by to grab snacks and other local goodies for the road!",
    author: "Jessica T.",
    source: "Google",
    rating: 5,
  },
  {
    text: "The area's best kept secret. You can get amazing pots for your plants, local seasonal produce and bread, gifts for the cooking hobbyist in your life, and much more.",
    author: "Reggie L.",
    source: "Google",
    rating: 5,
  },
  {
    text: "The Wessex was one of the best sandwiches I've ever had! Highly recommend.",
    author: "Ally W.",
    source: "Google",
    rating: 5,
  },
  {
    text: "I love the Blue Slate sandwich. It's a 10/10, great size and flavor. The quality is great and everything is so fresh. Tuna salad is great even for non-fans.",
    author: "Tatiana A.",
    source: "Google",
    rating: 4,
  },
];

function Reviews() {
  return (
    <section className="border-t border-[#1f3a2b]/8 bg-[#f4efe3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-3">
          <div>
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#1f3a2b]/50 mb-4">What people say</div>
            <h2 className="font-serif text-[#1f3a2b] text-3xl sm:text-4xl md:text-5xl leading-tight">
              Worth the drive.
            </h2>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-[#d4a017] fill-[#d4a017]" />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-[#1f3a2b]/50">
              4.5 on Google &middot; 352 reviews
            </span>
          </div>
        </div>
        <p className="font-serif italic text-[#1f3a2b]/50 text-base sm:text-lg mb-10 sm:mb-14 max-w-xl">
          From day-trippers on Route 250 to locals who've been coming since '99.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="bg-[#faf6ed] rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-[#1f3a2b]/8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} size={12} className="text-[#d4a017] fill-[#d4a017]" />
                  ))}
                </div>
                <p className="font-serif italic text-[#1f3a2b]/70 text-[14px] sm:text-[15px] leading-relaxed">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>
              <div className="mt-5 pt-3.5 border-t border-[#1f3a2b]/8 flex items-center justify-between">
                <span className="text-[13px] text-[#1f3a2b]/60">{r.author}</span>
                <span className="text-[9px] tracking-[0.15em] uppercase text-[#1f3a2b]/35">{r.source}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-[#1f3a2b]/50">
          <a
            href="https://maps.google.com/?q=Greenwood+Gourmet+Grocery,+6701+Rockfish+Gap+Turnpike,+Crozet,+VA+22932"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d4a017] transition-colors flex items-center gap-1.5"
          >
            See all reviews on Google <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="border-t border-[#1f3a2b]/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28">
        <div className="text-[10px] tracking-[0.3em] uppercase text-[#1f3a2b]/60 mb-4">Plan your visit</div>
        <h2 className="font-serif text-[#1f3a2b] text-4xl md:text-5xl mb-12">Find us.</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 text-[#d4a017] mb-3">
              <MapPin size={16} />
              <div className="text-[10px] tracking-[0.2em] uppercase">Address</div>
            </div>
            <a
              href="https://maps.google.com/?q=6701+Rockfish+Gap+Turnpike+Crozet+VA+22932"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-[#1f3a2b] text-xl leading-snug hover:text-[#d4a017] transition-colors block"
            >
              6701 Rockfish<br />Gap Turnpike
            </a>
            <div className="text-[#1f3a2b]/70 mt-1">Crozet, VA 22932</div>
            <div className="text-sm text-[#1f3a2b]/60 mt-2 italic">
              On Route 250, between Charlottesville and the Blue Ridge Parkway.
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-[#d4a017] mb-3">
              <Clock size={16} />
              <div className="text-[10px] tracking-[0.2em] uppercase">Hours</div>
            </div>
            <div className="space-y-1.5 text-[#1f3a2b]/80 text-sm">
              <div className="flex justify-between">
                <span>Wednesday - Thursday</span>
                <span className="font-medium text-[#1f3a2b]">10am - 5pm</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday</span>
                <span className="font-medium text-[#1f3a2b]">10am - 6pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-[#1f3a2b]">10am - 5pm</span>
              </div>
              <div className="flex justify-between">
                <span>Monday - Tuesday</span>
                <span className="font-medium text-[#1f3a2b]/50 italic">Closed</span>
              </div>
            </div>
            <div className="text-sm text-[#1f3a2b]/60 mt-3 italic">
              Sandwiches made to order until 4pm daily.
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-[#d4a017] mb-3">
              <Phone size={16} />
              <div className="text-[10px] tracking-[0.2em] uppercase">Reach us</div>
            </div>
            <a href="tel:5404566431" className="font-serif text-[#1f3a2b] text-xl block hover:text-[#d4a017] transition-colors">
              (540) 456-6431
            </a>
            <a
              href="https://instagram.com/greenwoodgourmet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#1f3a2b]/70 mt-3 hover:text-[#d4a017] transition-colors"
            >
              <Instagram size={14} /> @greenwoodgourmet
            </a>
            <div className="mt-4">
              <a
                href="https://greenwoodva.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#1f3a2b]/70 hover:text-[#d4a017] transition-colors"
              >
                <ShoppingCart size={14} /> greenwoodva.shop
              </a>
            </div>
          </div>
        </div>

        {/* Map link */}
        <a
          href="https://maps.google.com/?q=Greenwood+Gourmet+Grocery,+6701+Rockfish+Gap+Turnpike,+Crozet,+VA+22932"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-14 block rounded-2xl overflow-hidden border border-[#1f3a2b]/10 h-64 md:h-80 relative group bg-[#1f3a2b]/5 hover:bg-[#1f3a2b]/10 transition-colors"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <MapPin size={40} className="text-[#1f3a2b]/30 group-hover:text-[#d4a017] transition-colors mb-3" />
            <div className="font-serif text-[#1f3a2b] text-xl">6701 Rockfish Gap Turnpike</div>
            <div className="text-[#1f3a2b]/60 text-sm mt-1">Crozet, VA 22932</div>
            <div className="mt-4 text-xs tracking-[0.15em] uppercase text-[#1f3a2b]/50 group-hover:text-[#d4a017] transition-colors flex items-center gap-1.5">
              Open in Google Maps <ExternalLink size={12} />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1f3a2b]/8 bg-[#1f3a2b] text-[#faf6ed]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="mb-4">
              <img src={IMAGES.logo} alt="Greenwood Gourmet Grocery" className="h-10 w-auto brightness-0 invert opacity-80" />
            </div>
            <p className="text-sm text-[#faf6ed]/60 leading-relaxed">
              A country provisions store on Route 250,
              serving Crozet and Albemarle County since 1999.
            </p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#faf6ed]/40 mb-3">Quick links</div>
            <nav className="flex flex-col gap-2 text-sm text-[#faf6ed]/70">
              <a href="#menu" className="hover:text-[#d4a017] transition-colors">Sandwich Menu</a>
              <a href="#provisions" className="hover:text-[#d4a017] transition-colors">Provisions</a>
              <a href="#story" className="hover:text-[#d4a017] transition-colors">Our Story</a>
              <a href="https://greenwoodva.shop" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4a017] transition-colors">Order Online</a>
            </nav>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#faf6ed]/40 mb-3">Contact</div>
            <div className="flex flex-col gap-2 text-sm text-[#faf6ed]/70">
              <a href="tel:5404566431" className="hover:text-[#d4a017] transition-colors">(540) 456-6431</a>
              <span>6701 Rockfish Gap Tpk</span>
              <span>Crozet, VA 22932</span>
              <a href="https://instagram.com/greenwoodgourmet" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4a017] transition-colors flex items-center gap-1.5">
                <Instagram size={13} /> @greenwoodgourmet
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-[#faf6ed]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-[11px] text-[#faf6ed]/40">
            &copy; {new Date().getFullYear()} Greenwood Gourmet Grocery. All rights reserved.
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#faf6ed]/30">
            Keep it local
          </div>
        </div>
      </div>
    </footer>
  );
}

// ----- MAIN -----
export default function GreenwoodSite() {
  const [filter, setFilter] = useState("all");
  const [configuring, setConfiguring] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Inject Google Fonts once
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    const style = document.createElement("style");
    style.textContent = `.font-serif { font-family: 'Fraunces', Georgia, serif; } body, button, input { font-family: 'DM Sans', system-ui, sans-serif; } .scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`;
    document.head.appendChild(style);
  }, []);

  const filtered = useMemo(() => {
    if (filter === "all") return SANDWICHES;
    if (filter === "veg") return SANDWICHES.filter((s) => s.veg);
    return SANDWICHES.filter((s) => s.category === filter);
  }, [filter]);

  const handleAdd = (s) => setConfiguring(s);
  const handleConfirm = (item) => {
    setCart((c) => [...c, item]);
    setConfiguring(null);
  };
  const handleRemove = (lineId) => setCart((c) => c.filter((i) => i.lineId !== lineId));

  return (
    <div className="min-h-screen bg-[#faf6ed] text-[#1f3a2b]">
      <Header cartCount={cart.length} onCartClick={() => setCartOpen(true)} />
      <Hero />

      <section id="menu" className="border-t border-[#1f3a2b]/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28">
          <div className="flex items-baseline justify-between mb-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#1f3a2b]/60">Made to order</div>
            <div className="font-serif italic text-[#1f3a2b]/40 text-sm hidden md:block">
              {filtered.length} of {SANDWICHES.length}
            </div>
          </div>
          <h2 className="font-serif text-[#1f3a2b] text-4xl md:text-6xl mb-3 leading-tight">
            The sandwich list.
          </h2>
          <p className="font-serif italic text-[#1f3a2b]/60 text-lg mb-10 max-w-xl">
            Each one named after a heritage breed. All made to order on bread we love.
          </p>

          <FilterBar active={filter} onChange={setFilter} />

          <div className="mt-8">
            {filtered.map((s) => (
              <SandwichCard key={s.id} s={s} onAdd={handleAdd} />
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[#1f3a2b]/15 text-center">
            <p className="text-sm text-[#1f3a2b]/60 mb-4">
              Prefer to order ahead? Skip the line and pick up when you arrive.
            </p>
            <a
              href="https://greenwoodva.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1f3a2b] text-[#faf6ed] px-7 py-4 rounded-full text-sm tracking-wide hover:bg-[#0f2419] transition-colors inline-flex items-center gap-2"
            >
              Order online at greenwoodva.shop <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      <Provisions />
      <Story />
      <Reviews />
      <Visit />
      <Footer />

      <ConfigDrawer sandwich={configuring} onClose={() => setConfiguring(null)} onConfirm={handleConfirm} />
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onRemove={handleRemove} />
    </div>
  );
}
