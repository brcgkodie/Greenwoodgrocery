import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fmt } from "../../config/constants";
import { useCart } from "../../context/CartContext";

export default function SandwichCard({ s, index = 0, featured = false }) {
  const { startConfig } = useCart();

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="col-span-2 group"
      >
        <div className="grid md:grid-cols-2 gap-0 bg-[#f4efe3] rounded-xl overflow-hidden">
          {s.img && (
            <motion.div
              className="overflow-hidden"
              whileHover={{ scale: 1.0 }}
            >
              <Link to={`/menu/${s.id}`}>
                <motion.img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-64 md:h-80 object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </motion.div>
          )}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            {s.veg && (
              <span className="text-[9px] tracking-[0.15em] uppercase text-[#7a8c6e] border border-[#7a8c6e]/40 px-2 py-0.5 rounded w-fit mb-3">
                vegetarian
              </span>
            )}
            <Link to={`/menu/${s.id}`}>
              <h3 className="font-serif text-[#1f3a2b] text-3xl md:text-4xl tracking-tight hover:text-[#6b4226] transition-colors">
                {s.name}
              </h3>
            </Link>
            <p className="font-serif italic text-[#1f3a2b]/50 text-base leading-relaxed mt-3 max-w-sm">
              {s.desc}
            </p>
            <div className="mt-6 flex items-center gap-6">
              <span className="font-serif text-[#1f3a2b] text-xl">{fmt(s.price)}</span>
              <button
                onClick={() => startConfig(s)}
                className="text-[11px] tracking-[0.15em] uppercase text-[#1f3a2b]/60 border-b border-[#1f3a2b]/30 pb-0.5 hover:text-[#d4a017] hover:border-[#d4a017] transition-colors"
              >
                Add to order
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group"
    >
      <div className="rounded-lg overflow-hidden bg-white/40 border border-[#1f3a2b]/[0.06] hover:border-[#1f3a2b]/15 hover:shadow-lg hover:shadow-[#1f3a2b]/[0.04] transition-all duration-300">
        {s.img ? (
          <Link to={`/menu/${s.id}`} className="block overflow-hidden">
            <motion.img
              src={s.img}
              alt={s.name}
              className="w-full h-48 sm:h-52 object-cover"
              loading="lazy"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </Link>
        ) : (
          <Link
            to={`/menu/${s.id}`}
            className="block w-full h-48 sm:h-52 bg-gradient-to-br from-[#f4efe3] to-[#e8e0d0] flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif italic text-[#1f3a2b]/15 text-6xl tracking-tight select-none">
                {s.name}
              </span>
            </div>
          </Link>
        )}

        <div className="p-5">
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <Link to={`/menu/${s.id}`}>
              <h3 className="font-serif text-[#1f3a2b] text-xl tracking-tight group-hover:text-[#6b4226] transition-colors">
                {s.name}
              </h3>
            </Link>
            {s.veg && (
              <span className="text-[8px] tracking-[0.12em] uppercase text-[#7a8c6e] border border-[#7a8c6e]/40 px-1.5 py-0.5 rounded shrink-0">
                veg
              </span>
            )}
          </div>
          <p className="font-serif italic text-[#1f3a2b]/45 text-[13px] leading-snug mb-4 line-clamp-2">
            {s.desc}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-serif text-[#1f3a2b]/70 text-base">
              {fmt(s.price)}
            </span>
            <button
              onClick={() => startConfig(s)}
              className="text-[10px] tracking-[0.15em] uppercase text-[#1f3a2b]/50 border-b border-[#1f3a2b]/25 pb-0.5 hover:text-[#d4a017] hover:border-[#d4a017] transition-colors"
            >
              Add to order
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
