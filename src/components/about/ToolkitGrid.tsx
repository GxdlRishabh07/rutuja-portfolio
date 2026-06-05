"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { toolkit } from "@/data/portfolio";

export default function ToolkitGrid() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 48px)",
              marginBottom: "40px",
            }}
          >
            My Toolkit
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "16px",
          }}
        >
          {toolkit.map((tool, i) => (
            <ScrollReveal key={tool.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  padding: "24px 20px",
                  borderRadius: "16px",
                  backgroundColor: "var(--color-bg-white)",
                  textAlign: "center",
                  boxShadow: "var(--shadow-sm)",
                  cursor: "default",
                }}
              >
                <span style={{ fontSize: "36px", display: "block", marginBottom: "8px" }}>
                  {tool.icon}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--color-text-black)",
                  }}
                >
                  {tool.name}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
