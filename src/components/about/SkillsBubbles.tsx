"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { skills } from "@/data/portfolio";

export default function SkillsBubbles() {
  const sizeMap: Record<number, number> = {};
  skills.forEach((_, i) => {
    sizeMap[i] = 80 + Math.random() * 60;
  });

  const colorShades = [
    "#2B35AF",
    "#3d48c4",
    "#4f5ad0",
    "#6b73d4",
    "#8890dc",
    "#a5abe4",
  ];

  return (
    <section
      style={{
        padding: "80px 0",
        backgroundColor: "var(--color-bg-white)",
      }}
    >
      <div className="container">
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 48px)",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Skills
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {skills.map((skill, i) => {
            const size = sizeMap[i];
            const color = colorShades[i % colorShades.length];
            const animDelay = i * 0.3;

            return (
              <ScrollReveal key={skill} delay={i * 0.05}>
                <motion.div
                  className="bubble-float"
                  animate={{
                    y: [0, -10 - Math.random() * 10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4 + Math.random() * 3,
                    delay: animDelay,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: "50%",
                    backgroundColor: color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "default",
                    boxShadow: `0 4px 16px ${color}40`,
                  }}
                  whileHover={{ scale: 1.15 }}
                >
                  <span
                    style={{
                      color: "white",
                      fontSize: `${Math.max(11, size * 0.12)}px`,
                      fontWeight: 600,
                      textAlign: "center",
                      padding: "4px",
                      lineHeight: 1.2,
                    }}
                  >
                    {skill}
                  </span>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
