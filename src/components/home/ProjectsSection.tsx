"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: "var(--section-gap) 0",
        backgroundColor: "var(--color-bg-cream)",
      }}
    >
      <div className="container">
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5.5vw, 72px)",
              color: "var(--color-text-black)",
              marginBottom: "60px",
              letterSpacing: "-0.03em",
            }}
          >
            Projects
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {projects.map((project, index) => (
            <StickyProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              tags={project.tags}
              slug={project.slug}
              mockupType={project.mockupType}
              index={index}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StickyProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  mockupType: "phone" | "laptop";
  index: number;
  total: number;
}

function StickyProjectCard({
  title,
  description,
  tags,
  slug,
  mockupType,
  index,
  total,
}: StickyProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const mockupColors = ["#E8E5F8", "#E2E8F0", "#E5F0E8", "#F0E8E2"];
  const mockupBg = mockupColors[index % mockupColors.length];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left - 50,
      y: e.clientY - rect.top - 50,
    });
  };

  // Sticky offset so cards stack slightly
  const stickyTop = 80 + index * 12;

  return (
    <ScrollReveal delay={index * 0.1}>
      <a
        ref={cardRef}
        href={`/${slug}`}
        className="project-sticky-card card-hover-zone"
        style={{
          display: "grid",
          gridTemplateColumns: index % 2 === 0 ? "1.2fr 1fr" : "1fr 1.2fr",
          position: "sticky",
          top: `${stickyTop}px`,
          borderRadius: "var(--card-radius)",
          border: "1.5px solid var(--color-primary)",
          overflow: "hidden",
          backgroundColor: "var(--color-bg-white)",
          textDecoration: "none",
          color: "inherit",
          cursor: "none",
          zIndex: total - index,
          boxShadow: `0 ${4 + index * 2}px ${20 + index * 8}px rgba(0,0,0,${0.04 + index * 0.02})`,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Magnetic "View" circle cursor */}
        <motion.div
          className="magnetic-view-btn"
          animate={{
            x: cursorPos.x,
            y: cursorPos.y,
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          style={{ position: "absolute", pointerEvents: "none", zIndex: 10 }}
        >
          View
        </motion.div>

        {/* Content — conditional order for alternating layout */}
        {index % 2 === 0 ? (
          <>
            <CardText title={title} description={description} tags={tags} />
            <CardMockup title={title} mockupType={mockupType} bg={mockupBg} />
          </>
        ) : (
          <>
            <CardMockup title={title} mockupType={mockupType} bg={mockupBg} />
            <CardText title={title} description={description} tags={tags} />
          </>
        )}

        <style jsx>{`
          @media (max-width: 768px) {
            a {
              grid-template-columns: 1fr !important;
              position: relative !important;
              cursor: pointer !important;
            }
          }
        `}</style>
      </a>
    </ScrollReveal>
  );
}

function CardText({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div
      style={{
        padding: "52px 44px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(28px, 3.5vw, 52px)",
          color: "var(--color-text-black)",
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
        }}
      >
        {title}
      </h3>
      <p
        className="font-serif"
        style={{
          fontSize: "clamp(16px, 1.4vw, 20px)",
          color: "var(--color-gray-500)",
          lineHeight: 1.55,
        }}
      >
        {description}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "5px 14px",
              borderRadius: "var(--pill-radius)",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--color-primary)",
              backgroundColor: "rgba(0, 0, 255, 0.06)",
              letterSpacing: "0.02em",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function CardMockup({
  title,
  mockupType,
  bg,
}: {
  title: string;
  mockupType: "phone" | "laptop";
  bg: string;
}) {
  return (
    <div
      style={{
        backgroundColor: bg,
        padding: "52px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "380px",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.04, rotateY: 3 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{
          width: mockupType === "phone" ? "170px" : "300px",
          height: mockupType === "phone" ? "330px" : "195px",
          borderRadius: mockupType === "phone" ? "28px" : "10px",
          backgroundColor: "var(--color-primary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 20px 50px rgba(0,0,255,0.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: mockupType === "phone" ? "8px" : "6px 6px 28px 6px",
            borderRadius: mockupType === "phone" ? "22px" : "6px",
            background: `linear-gradient(145deg, ${bg} 0%, white 100%)`,
            display: "flex",
            flexDirection: "column",
            padding: "18px",
            gap: "10px",
          }}
        >
          <div style={{ width: "35%", height: "8px", borderRadius: "4px", backgroundColor: "var(--color-primary)", opacity: 0.25 }} />
          <div style={{ width: "65%", height: "6px", borderRadius: "3px", backgroundColor: "var(--color-gray-300)", opacity: 0.35 }} />
          <div style={{ width: "50%", height: "6px", borderRadius: "3px", backgroundColor: "var(--color-gray-300)", opacity: 0.2 }} />
          <div style={{ flex: 1, borderRadius: "10px", background: "linear-gradient(145deg, var(--color-primary), var(--color-primary-light))", opacity: 0.12, marginTop: "10px" }} />
        </div>
        <span
          style={{
            color: "white",
            fontFamily: "var(--font-display)",
            fontSize: "15px",
            zIndex: 1,
            textAlign: "center",
            padding: "4px 14px",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </span>
      </motion.div>
    </div>
  );
}
