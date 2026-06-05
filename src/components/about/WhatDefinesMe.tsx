"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { whatDefinesMe } from "@/data/portfolio";

const icons = ["💡", "🎯", "🤝", "📚"];

export default function WhatDefinesMe() {
  return (
    <section style={{ padding: "80px 0" }}>
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
            What Defines Me
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {whatDefinesMe.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "var(--shadow-lg)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  padding: "32px 24px",
                  borderRadius: "var(--card-radius)",
                  backgroundColor: "var(--color-bg-white)",
                  boxShadow: "var(--shadow-sm)",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "36px",
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  {icons[i]}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    marginBottom: "8px",
                    color: "var(--color-primary)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--color-gray-500)",
                    lineHeight: 1.5,
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
