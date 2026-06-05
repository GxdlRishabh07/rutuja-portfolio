"use client";

import { motion } from "framer-motion";

interface FlowerLogoProps {
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}

export default function FlowerLogo({
  size = 40,
  color = "#0000FF",
  className = "",
  onClick,
}: FlowerLogoProps) {
  const petalCount = 12;
  const petalRx = size * 0.16;
  const petalRy = size * 0.34;
  const petalOffset = size * 0.2;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
      whileHover={{ rotate: 45, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      role="img"
      aria-label="Flower logo"
    >
      {/* 12 Petals */}
      {Array.from({ length: petalCount }).map((_, i) => {
        const angle = (360 / petalCount) * i;
        const cy = size / 2 - petalOffset;
        return (
          <ellipse
            key={i}
            cx={size / 2}
            cy={cy}
            rx={petalRx}
            ry={petalRy}
            fill={color}
            transform={`rotate(${angle} ${size / 2} ${size / 2})`}
          />
        );
      })}

      {/* Center circle */}
      <circle cx={size / 2} cy={size / 2} r={size * 0.13} fill={color} />

      {/* Smiley — Left eye */}
      <circle
        cx={size / 2 - size * 0.038}
        cy={size / 2 - size * 0.028}
        r={size * 0.016}
        fill="white"
      />
      {/* Smiley — Right eye */}
      <circle
        cx={size / 2 + size * 0.038}
        cy={size / 2 - size * 0.028}
        r={size * 0.016}
        fill="white"
      />
      {/* Smiley — Smile */}
      <path
        d={`M ${size / 2 - size * 0.03} ${size / 2 + size * 0.012} Q ${size / 2} ${size / 2 + size * 0.055} ${size / 2 + size * 0.03} ${size / 2 + size * 0.012}`}
        fill="none"
        stroke="white"
        strokeWidth={size * 0.012}
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
