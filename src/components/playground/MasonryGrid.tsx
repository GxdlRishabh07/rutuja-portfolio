"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const galleryItems = [
  { id: 1, color: "#2B35AF", label: "Dashboard Exploration", height: 280 },
  { id: 2, color: "#6b73d4", label: "Chart Experiments", height: 360 },
  { id: 3, color: "#1e2789", label: "Color Studies", height: 300 },
  { id: 4, color: "#a5abe4", label: "Layout Grids", height: 240 },
  { id: 5, color: "#3d48c4", label: "Typography Tests", height: 320 },
  { id: 6, color: "#4f5ad0", label: "Icon Sets", height: 280 },
  { id: 7, color: "#8890dc", label: "Data Viz Concepts", height: 340 },
  { id: 8, color: "#2B35AF", label: "Wireframes", height: 260 },
  { id: 9, color: "#6b73d4", label: "Motion Studies", height: 300 },
];

export default function MasonryGrid() {
  return (
    <section style={{ position: "relative", minHeight: "100vh" }}>
      <div
        style={{
          position: "sticky",
          top: "50%",
          transform: "translateY(-50%)",
          textAlign: "center",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(80px, 15vw, 200px)",
            color: "var(--color-gray-200)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          Playground
        </h1>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          columns: "3 280px",
          columnGap: "20px",
          padding: "0 var(--container-padding)",
          maxWidth: "var(--container-max)",
          margin: "-80px auto 0",
        }}
      >
        {galleryItems.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 0.06}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              style={{
                breakInside: "avoid",
                marginBottom: "20px",
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: item.color,
                height: `${item.height}px`,
                display: "flex",
                alignItems: "flex-end",
                padding: "20px",
                boxShadow: "var(--shadow-md)",
                cursor: "pointer",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: 600 }}>
                {item.label}
              </span>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
