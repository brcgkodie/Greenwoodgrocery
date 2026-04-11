import React, { useState, useMemo, useEffect } from "react";
import { ShoppingBag, X, Plus, Minus, MapPin, Clock, Phone, Instagram, ChevronDown, Check } from "lucide-react";

// ----- DATA -----
const SANDWICHES = [
  { id: "blue-slate", name: "Blue Slate", price: 13.79, category: "beef", desc: "Roast beef, Bayley Hazen blue, arugula, red onion jam, horseradish aioli", veg: false },
  { id: "italian", name: "Italian", price: 13.79, category: "pork", desc: "Soppressata, capicola, mortadella, provolone, pepperoncini, oregano vinaigrette", veg: false },
  { id: "landrance", name: "Landrance", price: 13.79, category: "pork", desc: "Country ham, aged cheddar, fig jam, whole grain mustard, butter lettuce", veg: false },
  { id: "wessex", name: "Wessex", price: 13.99, category: "pork", desc: "Slow-roasted porchetta, broccoli rabe, sharp provolone, lemon agrumato", veg: false },
  { id: "devon", name: "Devon", price: 12.99, category: "chicken", desc: "Roasted chicken, brie, apricot preserves, watercress, tarragon mayo", veg: false },
  { id: "araucana", name: "Araucana", price: 10.49, category: "veg", desc: "Farm egg salad, dill, chives, butter lettuce, soft sourdough", veg: true },
  { id: "brahma", name: "Brahma", price: 12.99, category: "chicken", desc: "Curried chicken salad, golden raisins, almonds, baby greens", veg: false },
  { id: "chester", name: "Chester", price: 12.79, category: "beef", desc: "Smoked brisket, smoked gouda, pickled red cabbage, dijonnaise", veg: false },
  { id: "melrose", name: "Melrose", price: 11.79, category: "veg", desc: "Roasted seasonal vegetables, herbed chèvre, basil pesto, ciabatta", veg: true },
  { id: "galloway", name: "Galloway", price: 12.79, category: "beef", desc: "Shaved roast beef, caramelized onion, gruyère, horseradish cream", veg: false },
  { id: "riviera", name: "Riviera", price: 14.79, category: "fish", desc: "Olive oil tuna, niçoise olives, haricots verts, soft egg, lemon", veg: false },
  { id: "berkshire", name: "Berkshire", price: 14.99, category: "pork", desc: "Heritage bacon, fried green tomato, butter lettuce, smoked aioli", veg: false },
  { id: "cuban", name: "Cuban", price: 13.79, category: "pork", desc: "Mojo pork, ham, swiss, pickles, yellow mustard, pressed", veg: false },
  { id: "beauregard", name: "Beauregard", price: 11.99, category: "veg", desc: "Grilled sweet potato, black bean spread, avocado, lime crema", veg: true },
  { id: "vittoria", name: "Vittoria", price: 11.79, category: "veg", desc: "Fresh mozzarella, heirloom tomato, basil, aged balsamic, sea salt", veg: true },
  { id: "hampshire", name: "Hampshire", price: 13.99, category: "pork", desc: "Black forest ham, gruyère, cornichons, dijon butter, baguette", veg: false },
  { id: "kids-turkey", name: "Kid's Turkey", price: 6.50, category: "kids", desc: "Sliced turkey, mild cheddar, soft white bread", veg: false },
  { id: "kids-pbj", name: "Kid's PB&J", price: 6.00, category: "kids", desc: "Peanut butter, strawberry preserves, soft white bread", veg: true },
  { id: "kids-ham", name: "Kid's Ham", price: 7.50, category: "kids", desc: "Sliced ham, mild cheddar, soft white bread", veg: false },
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
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#faf6ed]/85 border-b border-[#1f3a2b]/15">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#1f3a2b] flex items-center justify-center">
            <span className="font-serif text-[#faf6ed] text-lg italic">G</span>
          </div>
          <div className="leading-none">
            <div className="font-serif text-[#1f3a2b] text-lg tracking-tight">Greenwood</div>
            <div className="text-[10px] tracking-[0.2em] text-[#1f3a2b]/60 uppercase mt-0.5">Est. Crozet, VA</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#1f3a2b]/80">
          <a href="#menu" className="hover:text-[#1f3a2b]">Order</a>
          <a href="#story" className="hover:text-[#1f3a2b]">Story</a>
          <a href="#visit" className="hover:text-[#1f3a2b]">Visit</a>
        </nav>
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
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#1f3a2b]/15">
      <div className="max-w-6xl mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="text-[10px] tracking-[0.3em] uppercase text-[#1f3a2b]/60 mb-6">
          A country provisions store · since forever
        </div>
        <h1 className="font-serif text-[#1f3a2b] text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
          Sandwiches,<br />
          <span className="italic text-[#d4a017]">made to order,</span><br />
          on Route 250.
        </h1>
        <p className="mt-8 max-w-xl text-[#1f3a2b]/75 text-base md:text-lg leading-relaxed">
          A hand-picked grocery on the road from Charlottesville to the Blue Ridge.
          Heritage breads, local meats, gourmet everything. Order ahead — we'll
          have it ready when you pull in.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#menu"
            className="bg-[#1f3a2b] text-[#faf6ed] px-7 py-4 rounded-full text-sm tracking-wide hover:bg-[#0f2419] transition-colors inline-flex items-center gap-2"
          >
            See the menu <ChevronDown size={16} />
          </a>
          <a href="#visit" className="text-[#1f3a2b] text-sm underline underline-offset-4 decoration-[#d4a017] decoration-2">
            6701 Rockfish Gap Tpk
          </a>
        </div>
      </div>
      {/* decorative corner mark */}
      <div className="absolute top-8 right-8 hidden md:block opacity-20">
        <div className="font-serif italic text-[#1f3a2b] text-sm">no. 01</div>
        <div className="w-12 h-px bg-[#1f3a2b] mt-1" />
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
        Add to order →
      </button>
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
          Add to order · {fmt(sandwich.price)}
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
                <div className="text-xs text-[#1f3a2b]/60 mt-1">Pickup at the store · ready in ~20 min</div>
              </div>

              <button className="w-full bg-[#1f3a2b] text-[#faf6ed] py-4 rounded-full text-sm tracking-wide hover:bg-[#0f2419] transition-colors mb-3">
                Continue to checkout
              </button>
              <button className="w-full border border-[#1f3a2b]/30 text-[#1f3a2b] py-4 rounded-full text-sm tracking-wide hover:border-[#1f3a2b] transition-colors">
                Or call to order · (540) 456-6431
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Story() {
  return (
    <section id="story" className="border-t border-[#1f3a2b]/15 bg-[#1f3a2b] text-[#faf6ed]">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#d4a017] mb-4">Chapter 02</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">A grocery, a deli, an institution.</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-5 text-[#faf6ed]/80 text-base leading-relaxed">
          <p>
            Albemarle County and the surrounding hills have been known for generations to harbor world-class farms,
            orchards, and makers of hand-crafted goods. We are proud to be a part of that community.
          </p>
          <p>
            Inside, you'll find an Epicurean dream — specialty items, fresh dairy, hundreds of beers and wines, each
            with our stamp of approval. Outside, picnic tables, a small stage for summer music, and a view of the
            mountains.
          </p>
          <p className="font-serif italic text-[#d4a017] text-lg pt-2">
            Sandwiches made to order, every day from open until 4pm.
          </p>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="border-t border-[#1f3a2b]/15">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="text-[10px] tracking-[0.3em] uppercase text-[#1f3a2b]/60 mb-4">Chapter 03</div>
        <h2 className="font-serif text-[#1f3a2b] text-4xl md:text-5xl mb-12">Find us.</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 text-[#d4a017] mb-3">
              <MapPin size={16} />
              <div className="text-[10px] tracking-[0.2em] uppercase">Address</div>
            </div>
            <div className="font-serif text-[#1f3a2b] text-xl leading-snug">
              6701 Rockfish<br />Gap Turnpike
            </div>
            <div className="text-[#1f3a2b]/70 mt-1">Crozet, VA 22932</div>
            <div className="text-sm text-[#1f3a2b]/60 mt-2 italic">
              On Route 250, a half-mile west of I-64 exit 107.
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-[#d4a017] mb-3">
              <Clock size={16} />
              <div className="text-[10px] tracking-[0.2em] uppercase">Hours</div>
            </div>
            <div className="space-y-1 text-[#1f3a2b]/80 text-sm">
              <div className="flex justify-between"><span>Mon – Tue</span><span className="italic text-[#1f3a2b]/50">Closed</span></div>
              <div className="flex justify-between"><span>Wed – Thu</span><span>10a – 5p</span></div>
              <div className="flex justify-between"><span>Fri – Sat</span><span>10a – 6p</span></div>
              <div className="flex justify-between"><span>Sunday</span><span>10a – 5p</span></div>
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
            <a href="tel:5404566431" className="font-serif text-[#1f3a2b] text-xl block hover:text-[#d4a017]">
              (540) 456-6431
            </a>
            <a
              href="https://instagram.com/greenwoodgrocery"
              className="inline-flex items-center gap-2 text-sm text-[#1f3a2b]/70 mt-3 hover:text-[#d4a017]"
            >
              <Instagram size={14} /> @greenwoodgrocery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1f3a2b]/15 bg-[#faf6ed]">
      <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-serif italic text-[#1f3a2b]/60 text-sm">
          Greenwood Grocery · Crozet, Virginia
        </div>
        <div className="text-[10px] tracking-[0.2em] uppercase text-[#1f3a2b]/40">
          A country provisions store
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

      <section id="menu" className="border-t border-[#1f3a2b]/15">
        <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
          <div className="flex items-baseline justify-between mb-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#1f3a2b]/60">Chapter 01</div>
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
        </div>
      </section>

      <Story />
      <Visit />
      <Footer />

      <ConfigDrawer sandwich={configuring} onClose={() => setConfiguring(null)} onConfirm={handleConfirm} />
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onRemove={handleRemove} />
    </div>
  );
}
