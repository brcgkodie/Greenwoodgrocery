import React from "react";

const defaults = { size: 48, color: "#d4a017", strokeWidth: 2.5 };

export function WineIcon({ size = defaults.size, color = defaults.color, className = "" }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth={defaults.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 L16 18 Q14 26 20 30 L20 40" />
        <path d="M28 6 L30 18 Q32 26 26 30 L26 40" />
        <line x1="16" y1="40" x2="30" y2="40" />
        <line x1="15" y1="6" x2="31" y2="6" />
        <path d="M16 18 L30 18" />
        {/* Wine glass */}
        <circle cx="36" cy="16" r="6" />
        <line x1="36" y1="22" x2="36" y2="32" />
        <line x1="32" y1="32" x2="40" y2="32" />
        <path d="M30 14 Q33 10 36 10" opacity="0.5" />
      </g>
    </svg>
  );
}

export function CheeseIcon({ size = defaults.size, color = defaults.color, className = "" }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth={defaults.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 32 L6 20 L38 10 L42 32 Z" />
        <line x1="6" y1="32" x2="42" y2="32" />
        <line x1="6" y1="20" x2="42" y2="32" />
        <circle cx="20" cy="24" r="2" fill={color} opacity="0.3" />
        <circle cx="30" cy="22" r="1.5" fill={color} opacity="0.3" />
        <circle cx="14" cy="27" r="1.5" fill={color} opacity="0.3" />
        <circle cx="34" cy="28" r="2" fill={color} opacity="0.3" />
      </g>
    </svg>
  );
}

export function BreadIcon({ size = defaults.size, color = defaults.color, className = "" }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth={defaults.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 28 Q4 22 8 16 Q12 10 24 10 Q36 10 40 16 Q44 22 40 28 L38 38 L10 38 Z" />
        <path d="M14 18 Q18 14 24 14 Q30 14 34 18" opacity="0.4" />
        <line x1="16" y1="24" x2="16" y2="32" opacity="0.3" />
        <line x1="24" y1="22" x2="24" y2="34" opacity="0.3" />
        <line x1="32" y1="24" x2="32" y2="32" opacity="0.3" />
      </g>
    </svg>
  );
}

export function BasketIcon({ size = defaults.size, color = defaults.color, className = "" }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth={defaults.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22 L12 40 L36 40 L40 22" />
        <line x1="4" y1="22" x2="44" y2="22" />
        <line x1="16" y1="22" x2="16" y2="8" />
        <line x1="32" y1="22" x2="32" y2="8" />
        <line x1="16" y1="8" x2="32" y2="8" />
        <path d="M20 22 L20 36" opacity="0.4" />
        <path d="M28 22 L28 36" opacity="0.4" />
        {/* Produce peeking out */}
        <circle cx="18" cy="18" r="3" opacity="0.4" />
        <circle cx="28" cy="16" r="4" opacity="0.4" />
        <path d="M26 12 Q28 8 30 12" opacity="0.4" />
      </g>
    </svg>
  );
}

export function JarIcon({ size = defaults.size, color = defaults.color, className = "" }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth={defaults.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="14" width="20" height="26" rx="2" />
        <path d="M12 14 L14 10 L34 10 L36 14" />
        <line x1="14" y1="10" x2="14" y2="6" />
        <line x1="34" y1="10" x2="34" y2="6" />
        <line x1="14" y1="6" x2="34" y2="6" />
        <rect x="18" y="22" width="12" height="8" rx="1" opacity="0.3" />
        <line x1="20" y1="26" x2="28" y2="26" opacity="0.3" />
      </g>
    </svg>
  );
}
