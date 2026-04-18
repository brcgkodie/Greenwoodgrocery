import React from "react";

export default function WheatSprig({ className = "", color = "#d4a017" }) {
  return (
    <svg
      viewBox="0 0 60 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.5">
        {/* Main stem */}
        <path d="M30 115 Q30 80 30 20" />
        {/* Grain heads - left */}
        <path d="M30 28 Q22 22 18 14" />
        <path d="M30 38 Q20 32 16 24" />
        <path d="M30 48 Q18 42 14 34" />
        <path d="M30 58 Q17 52 13 44" />
        <path d="M30 68 Q18 62 14 54" />
        {/* Grain heads - right */}
        <path d="M30 24 Q38 18 42 10" />
        <path d="M30 34 Q40 28 44 20" />
        <path d="M30 44 Q42 38 46 30" />
        <path d="M30 54 Q43 48 47 40" />
        <path d="M30 64 Q42 58 46 50" />
        {/* Small grain dots */}
        <circle cx="17" cy="13" r="1.5" fill={color} stroke="none" />
        <circle cx="43" cy="9" r="1.5" fill={color} stroke="none" />
        <circle cx="15" cy="23" r="1.5" fill={color} stroke="none" />
        <circle cx="45" cy="19" r="1.5" fill={color} stroke="none" />
        <circle cx="13" cy="33" r="1.5" fill={color} stroke="none" />
        <circle cx="47" cy="29" r="1.5" fill={color} stroke="none" />
      </g>
    </svg>
  );
}
