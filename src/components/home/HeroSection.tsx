"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlowerLogo from "@/components/layout/FlowerLogo";
import { personalInfo } from "@/data/portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface LetterConfig {
  char: string;
  type: "solid" | "outline";
  scatterAngle: number;
  scatterRadius: number;
  scatterRotate: number;
}

const line1 = "Hello I'm";
const line2 = personalInfo.name;

// Reference-matched: which letters get outline style
const line1Outlines = new Set([2, 4, 8]); // 'l'(first), 'o', 'm'
const line2Outlines = new Set([0, 3, 5]); // 'R', 'u', 'j' (adapt for Rutuja)

function buildConfigs(
  text: string,
  lineIndex: number,
  outlineIndices: Set<number>
): LetterConfig[] {
  return text.split("").map((char, i) => {
    const totalChars = text.replace(/\s/g, "").length;
    const nonSpaceIndex = text
      .slice(0, i + 1)
      .replace(/\s/g, "").length - 1;
    const angle =
      ((nonSpaceIndex / totalChars) * 360 + lineIndex * 140 + Math.random() * 30) *
      (Math.PI / 180);
    return {
      char,
      type: outlineIndices.has(i) ? "outline" : "solid",
      scatterAngle: angle,
      scatterRadius: 260 + Math.random() * 140,
      scatterRotate: -35 + Math.random() * 70,
    };
  });
}

const line1Configs = buildConfigs(line1, 0, line1Outlines);
const line2Configs = buildConfigs(line2, 1, line2Outlines);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const flowerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const setLetterRef = useCallback(
    (index: number) => (el: HTMLSpanElement | null) => {
      lettersRef.current[index] = el;
    },
    []
  );

  // Scroll-scrubbed letter scatter animation (GSAP ScrollTrigger)
  useEffect(() => {
    if (isMobile || !sectionRef.current) return;

    const allConfigs = [...line1Configs, ...line2Configs];
    const ctx = gsap.context(() => {
      // Create a timeline scrubbed by scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
          pin: false,
        },
      });

      // Animate each letter
      lettersRef.current.forEach((el, i) => {
        if (!el) return;
        const config = allConfigs[i];
        if (!config || config.char === " ") return;

        const x = Math.cos(config.scatterAngle) * config.scatterRadius;
        const y = Math.sin(config.scatterAngle) * config.scatterRadius;

        tl.to(
          el,
          {
            x,
            y,
            rotation: config.scatterRotate,
            ease: "power2.out",
            duration: 1,
          },
          0
        );
      });

      // Flower scales in
      if (flowerRef.current) {
        tl.fromTo(
          flowerRef.current,
          { scale: 0, opacity: 0, rotation: 0 },
          { scale: 1, opacity: 1, rotation: 90, ease: "back.out(1.4)", duration: 1 },
          0
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  // Flower rotation on scroll
  const { scrollYProgress } = useScroll();
  const flowerRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  let globalIndex = 0;

  const renderLetter = (config: LetterConfig, idx: number, lineIdx: number) => {
    const currentIdx = globalIndex++;
    if (config.char === " ") {
      return (
        <span
          key={`space-${lineIdx}-${idx}`}
          style={{ display: "inline-block", width: "0.25em" }}
        />
      );
    }

    return (
      <span
        key={`letter-${lineIdx}-${idx}`}
        ref={setLetterRef(currentIdx)}
        className={config.type === "outline" ? "letter-outline" : "letter-solid"}
        style={{
          display: "inline-block",
          willChange: "transform",
          fontFamily: "var(--font-display)",
          lineHeight: 1,
        }}
      >
        {config.char}
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        height: "200vh",
        position: "relative",
        backgroundColor: "var(--color-bg-cream)",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          ref={textContainerRef}
          style={{
            position: "relative",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          {/* Line 1: "Hello I'm" */}
          <div
            style={{
              fontSize: "clamp(48px, 10vw, 140px)",
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {line1Configs.map((config, i) => renderLetter(config, i, 0))}
          </div>

          {/* Line 2: Name */}
          <div
            style={{
              fontSize: "clamp(56px, 13vw, 170px)",
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            {line2Configs.map((config, i) =>
              renderLetter(config, i, 1)
            )}
          </div>

          {/* Flower — appears on scatter, rotates with scroll */}
          <motion.div
            ref={flowerRef}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              zIndex: 2,
              rotate: flowerRotation,
            }}
          >
            <FlowerLogo size={220} />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            position: "absolute",
            bottom: "36px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              color: "var(--color-gray-400)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: "var(--color-gray-300)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
