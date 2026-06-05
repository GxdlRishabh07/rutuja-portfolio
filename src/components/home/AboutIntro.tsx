"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutIntroText } from "@/data/portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsContainerRef = useRef<HTMLDivElement>(null);

  // Split text into words, keeping emojis inline
  const segments = aboutIntroText.split(/(\s+)/).filter(Boolean);

  useEffect(() => {
    if (!wordsContainerRef.current) return;

    const words = wordsContainerRef.current.querySelectorAll(".about-word");

    const ctx = gsap.context(() => {
      // Each word transitions from muted grey to primary blue on scroll
      gsap.fromTo(
        words,
        { color: "var(--color-text-muted)" },
        {
          color: "var(--color-primary)",
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: wordsContainerRef.current,
            start: "top 75%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "var(--section-gap) 0",
        backgroundColor: "var(--color-bg-cream)",
      }}
    >
      <div className="container">
        <div
          ref={wordsContainerRef}
          style={{
            fontSize: "clamp(24px, 3.5vw, 42px)",
            lineHeight: 1.45,
            textAlign: "center",
            maxWidth: "950px",
            margin: "0 auto",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
          }}
        >
          {segments.map((segment, index) => {
            if (/^\s+$/.test(segment)) {
              return <span key={`sp-${index}`}> </span>;
            }

            // Check for emoji
            const emojiRegex =
              /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{200D}\u{20E3}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}]/gu;
            const hasEmoji = emojiRegex.test(segment);

            return (
              <span
                key={`w-${index}`}
                className="about-word"
                style={{
                  display: "inline-block",
                  marginRight: "0.2em",
                  color: "var(--color-text-muted)",
                  transition: "color 0.5s ease",
                  ...(hasEmoji ? { fontSize: "1.1em" } : {}),
                }}
              >
                {segment}
              </span>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "56px",
          }}
        >
          <Link
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "18px",
              fontWeight: 600,
              color: "var(--color-primary)",
              textDecoration: "none",
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.01em",
              transition: "gap 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.gap = "12px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.gap = "6px";
            }}
          >
            More about me
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
