import { motion } from "framer-motion";
import { FILTERS } from "../../config/constants";

export default function FilterBar({ active, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
      {FILTERS.map((f) => (
        <button
          key={f.id}
          onClick={() => onChange(f.id)}
          className="shrink-0 px-4 py-2 rounded-full text-xs tracking-wide transition-all border relative"
          style={{
            color: active === f.id ? "#faf6ed" : "rgba(31,58,43,0.65)",
            backgroundColor: active === f.id ? "#1f3a2b" : "transparent",
            borderColor: active === f.id ? "#1f3a2b" : "rgba(31,58,43,0.2)",
          }}
        >
          {active === f.id && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-[#1f3a2b] rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ zIndex: -1 }}
            />
          )}
          <span className="relative z-10">{f.label}</span>
        </button>
      ))}
    </div>
  );
}
