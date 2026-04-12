import React, { useState, useMemo, useEffect } from "react";
import { ShoppingBag, X, MapPin, Clock, Phone, Instagram, ChevronDown, Check, Wine, Coffee, Leaf, ExternalLink, ShoppingCart, Menu as MenuIcon } from "lucide-react";

// ----- IMAGES -----
const IMAGES = {
  logo: "https://images.squarespace-cdn.com/content/v1/53ef7f3be4b0880c7d4fbb28/1408315939180-OZKE1CUAPS3001CTTPB6/green.png",
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
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#faf6ed]/90 border-b border-[#1f3a2b]/10">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={IMAGES.logo} alt="Greenwood Gourmet Grocery" className="h-10 w-auto" />
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
        <div className="md:hidden border-t border-[#1f3a2b]/10 bg-[#faf6ed]/95 backdrop-blur-md">
          <nav className="flex flex-col px-5 py-4 gap-4 text-sm text-[#1f3a2b]/80">
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
    <section className="relative overflow-hidden border-b border-[#1f3a2b]/10">
      <div className="max-w-6xl mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-7">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#1f3a2b]/60 mb-6">
              Keep it local &middot; since 1999
            </div>
            <h1 className="font-serif text-[#1f3a2b] text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Sandwiches,<br />
              <span className="italic text-[#d4a017]">made to order,</span><br />
              on Route 250.
            </h1>
            <p className="mt-8 max-w-xl text-[#1f3a2b]/75 text-base md:text-lg leading-relaxed">
              A gourmet grocery on the road between Charlottesville and the Blue Ridge.
              Heritage sandwiches, hundreds of craft beers and wines, locally sourced
              provisions, fresh coffee, and pastries baked daily.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="bg-[#1f3a2b] text-[#faf6ed] px-7 py-4 rounded-full text-sm tracking-wide hover:bg-[#0f2419] transition-colors inline-flex items-center gap-2"
              >
                See the menu <ChevronDown size={16} />
              </a>
              <a
                href="https://greenwoodva.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#1f3a2b]/30 text-[#1f3a2b] px-7 py-4 rounded-full text-sm tracking-wide hover:border-[#1f3a2b] transition-colors inline-flex items-center gap-2"
              >
                Order online <ExternalLink size={14} />
              </a>
            </div>

            {/* Quick info pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-xs text-[#1f3a2b]/60 border border-[#1f3a2b]/15 rounded-full px-4 py-2">
                <Clock size={13} />
                <span>Mon-Fri 9a-7p &middot; Sat 9a-6p &middot; Sun 10a-6p</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1f3a2b]/60 border border-[#1f3a2b]/15 rounded-full px-4 py-2">
                <Phone size={13} />
                <a href="tel:5404566431" className="hover:text-[#1f3a2b]">(540) 456-6431</a>
              </div>
            </div>
          </div>

          {/* Logo & info card */}
          <div className="md:col-span-5 relative flex items-center justify-center">
            <div className="bg-[#1f3a2b] rounded-2xl p-10 md:p-12 text-center shadow-2xl shadow-[#1f3a2b]/20 w-full">
              <img
                src={IMAGES.logo}
                alt="Greenwood Gourmet Grocery"
                className="w-40 md:w-48 mx-auto mb-8 brightness-0 invert opacity-90"
              />
              <div className="space-y-4 text-[#faf6ed]/80 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <MapPin size={14} className="text-[#d4a017]" />
                  <span>6701 Rockfish Gap Tpk, Crozet, VA</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock size={14} className="text-[#d4a017]" />
                  <span>Open today &middot; Mon-Fri 9a-7p</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone size={14} className="text-[#d4a017]" />
                  <a href="tel:5404566431" className="hover:text-[#d4a017] transition-colors">(540) 456-6431</a>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-[#faf6ed]/15">
                <a
                  href="https://greenwoodva.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4a017] text-sm hover:text-[#faf6ed] transition-colors flex items-center justify-center gap-1.5"
                >
                  Order online at greenwoodva.shop <ExternalLink size={12} />
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
    <div className="group border-b border-[#1f3a2b]/15 py-7 first:pt-0">
      <div className="flex gap-5">
        {s.img && (
          <div className="shrink-0 hidden sm:block">
            <img
              src={s.img}
              alt={s.name}
              className="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover border border-[#1f3a2b]/10"
              loading="lazy"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-4 mb-2">
            <div className="flex items-baseline gap-3">
              <h3 className="font-serif text-[#1f3a2b] text-2xl md:text-3xl tracking-tight">
                {s.name}
              </h3>
              {s.veg && (
                <span className="text-[9px] tracking-[0.15em] uppercase text-[#d4a017] border border-[#d4a017]/50 px-1.5 py-0.5 rounded">
                  veg
                </span>
              )}
            </div>
            <div className="flex-1 border-b border-dotted border-[#1f3a2b]/25 mb-1.5 hidden sm:block" />
            <div className="font-serif text-[#1f3a2b] text-xl">{fmt(s.price)}</div>
          </div>
          <p className="font-serif italic text-[#1f3a2b]/70 text-base leading-snug max-w-xl mb-4">
            {s.desc}
          </p>
          <button
            onClick={() => onAdd(s)}
            className="text-xs tracking-[0.15em] uppercase text-[#1f3a2b] border-b border-[#1f3a2b] pb-0.5 hover:text-[#d4a017] hover:border-[#d4a017] transition-colors"
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
    <section id="provisions" className="border-t border-[#1f3a2b]/10 bg-[#f4efe3]">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
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
    <section id="story" className="border-t border-[#1f3a2b]/10 bg-[#1f3a2b] text-[#faf6ed]">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-12 gap-12">
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

function Visit() {
  return (
    <section id="visit" className="border-t border-[#1f3a2b]/10">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
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
                <span>Monday - Friday</span>
                <span className="font-medium text-[#1f3a2b]">9am - 7pm</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium text-[#1f3a2b]">9am - 6pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-[#1f3a2b]">10am - 6pm</span>
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
    <footer className="border-t border-[#1f3a2b]/10 bg-[#1f3a2b] text-[#faf6ed]">
      <div className="max-w-6xl mx-auto px-5 py-12">
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

      <section id="menu" className="border-t border-[#1f3a2b]/10">
        <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
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
      <Visit />
      <Footer />

      <ConfigDrawer sandwich={configuring} onClose={() => setConfiguring(null)} onConfirm={handleConfirm} />
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onRemove={handleRemove} />
    </div>
  );
}
