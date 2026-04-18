import React from "react";

export default function HandDivider({ className = "", color = "#5c3d2e" }) {
  return (
    <svg
      viewBox="0 0 200 6"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 3 Q10 1 20 3 Q30 5 40 3 Q50 1 60 3 Q70 5 80 3 Q90 1 100 3 Q110 5 120 3 Q130 1 140 3 Q150 5 160 3 Q170 1 180 3 Q190 5 200 3"
        fill="none"
        stroke={color}
        strokeWidth="1"
        opacity="0.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
