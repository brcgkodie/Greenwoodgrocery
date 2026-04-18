import React from "react";

const S = { size: 20, color: "currentColor", strokeWidth: 2 };

export function PigIcon({ size = S.size, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth={S.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="13" rx="8" ry="6" />
        <circle cx="10" cy="11" r="0.8" fill="currentColor" />
        <circle cx="14" cy="11" r="0.8" fill="currentColor" />
        <ellipse cx="12" cy="15" rx="2.5" ry="1.5" />
        <circle cx="10.5" cy="15" r="0.5" fill="currentColor" />
        <circle cx="13.5" cy="15" r="0.5" fill="currentColor" />
        <path d="M5 10 Q3 7 5 7" />
        <path d="M19 10 Q21 7 19 7" />
      </g>
    </svg>
  );
}

export function BirdIcon({ size = S.size, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth={S.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4 Q8 6 6 10 Q4 14 6 18 L12 20 L18 18 Q20 14 18 10 Q16 6 12 4Z" />
        <circle cx="10" cy="10" r="0.8" fill="currentColor" />
        <path d="M14 9 L18 7 L16 10" />
        <path d="M8 16 L10 20" />
        <path d="M14 16 L16 20" />
      </g>
    </svg>
  );
}

export function CowIcon({ size = S.size, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth={S.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="14" rx="7" ry="5" />
        <circle cx="10" cy="12" r="0.8" fill="currentColor" />
        <circle cx="14" cy="12" r="0.8" fill="currentColor" />
        <ellipse cx="12" cy="16" rx="3" ry="2" />
        <path d="M5 11 Q3 6 6 7" />
        <path d="M19 11 Q21 6 18 7" />
      </g>
    </svg>
  );
}

export function FishIcon({ size = S.size, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth={S.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12 Q6 6 14 6 Q20 6 22 12 Q20 18 14 18 Q6 18 2 12Z" />
        <circle cx="17" cy="11" r="1" fill="currentColor" />
        <path d="M2 12 L0 8 L0 16 Z" fill="none" />
        <path d="M10 9 Q12 12 10 15" opacity="0.5" />
      </g>
    </svg>
  );
}

export function LeafIcon({ size = S.size, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth={S.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 20 Q4 12 8 6 Q12 2 18 4 Q20 8 18 14 Q14 20 6 20Z" />
        <path d="M6 20 Q10 14 18 4" />
        <path d="M10 14 Q8 12 10 10" opacity="0.5" />
        <path d="M13 12 Q12 10 14 8" opacity="0.5" />
      </g>
    </svg>
  );
}

export function EggIcon({ size = S.size, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth={S.strokeWidth} strokeLinecap="round">
        <path d="M12 3 Q6 8 6 15 Q6 21 12 21 Q18 21 18 15 Q18 8 12 3Z" />
      </g>
    </svg>
  );
}

export function StarIcon({ size = S.size, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth={S.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 L14.5 9 L21 9.5 L16 14 L17.5 21 L12 17.5 L6.5 21 L8 14 L3 9.5 L9.5 9 Z" />
      </g>
    </svg>
  );
}

const CATEGORY_ICONS = {
  pork: PigIcon,
  poultry: BirdIcon,
  beef: CowIcon,
  fish: FishIcon,
  veg: LeafIcon,
  egg: EggIcon,
  kids: StarIcon,
};

export function CategoryIcon({ category, ...props }) {
  const Icon = CATEGORY_ICONS[category];
  return Icon ? <Icon {...props} /> : null;
}
