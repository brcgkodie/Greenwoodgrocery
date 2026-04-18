import React from "react";

export default function MountainRidge({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1440 240"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Back ridge */}
      <path
        d="M0 240 L0 180 Q60 140 120 155 Q200 120 280 135 Q340 105 420 125 Q500 90 580 110 Q660 80 740 100 Q820 70 900 95 Q980 65 1060 85 Q1140 60 1220 80 Q1300 55 1380 75 L1440 70 L1440 240 Z"
        fill="#1f3a2b"
        opacity="0.06"
      />
      {/* Middle ridge */}
      <path
        d="M0 240 L0 195 Q80 160 160 175 Q240 145 320 160 Q400 130 480 150 Q560 120 640 140 Q720 105 800 130 Q880 100 960 125 Q1040 95 1120 115 Q1200 90 1280 110 Q1360 85 1440 100 L1440 240 Z"
        fill="#1f3a2b"
        opacity="0.10"
      />
      {/* Foreground ridge */}
      <path
        d="M0 240 L0 210 Q100 185 180 195 Q260 170 340 185 Q420 160 500 175 Q580 150 660 168 Q740 148 820 165 Q900 145 980 162 Q1060 142 1140 158 Q1220 140 1300 155 Q1380 138 1440 148 L1440 240 Z"
        fill="#1f3a2b"
        opacity="0.16"
      />
      {/* Cross-hatch texture on foreground */}
      <g stroke="#1f3a2b" strokeWidth="0.5" opacity="0.06">
        {Array.from({ length: 30 }, (_, i) => {
          const x = i * 48 + 10;
          const y1 = 195 + Math.sin(i * 0.8) * 8;
          const y2 = y1 + 12;
          return (
            <line key={`h-${i}`} x1={x} y1={y1} x2={x + 8} y2={y2} />
          );
        })}
      </g>
    </svg>
  );
}
