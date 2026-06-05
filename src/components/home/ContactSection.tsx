"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { personalInfo } from "@/data/portfolio";

const contactButtons = [
  { label: `Say Hi — ${personalInfo.email}`, href: `mailto:${personalInfo.email}`, full: true },
  { label: "Download Resume", href: personalInfo.resumeUrl, full: true, download: true },
  { label: "LinkedIn", href: personalInfo.social.linkedin, full: false },
  { label: "GitHub", href: personalInfo.social.github, full: false },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        padding: "0 0 80px",
        background: `linear-gradient(180deg, var(--color-bg-cream) 0%, var(--color-primary) 20%, var(--color-primary) 100%)`,
        paddingTop: "var(--section-gap)",
      }}
    >
      <div className="container" style={{ maxWidth: "680px" }}>
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 56px)",
              color: "var(--color-text-white)",
              textAlign: "center",
              marginBottom: "48px",
              letterSpacing: "-0.03em",
            }}
          >
            Let&apos;s Connect
          </h2>
        </ScrollReveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {contactButtons.map((btn, index) => {
            // Side-by-side for LinkedIn + GitHub
            if (!btn.full) {
              const nextBtn = contactButtons[index + 1];
              if (nextBtn && !nextBtn.full) {
                return (
                  <ScrollReveal key={btn.label} delay={index * 0.06}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      <ContactButton {...btn} index={index} />
                      <ContactButton {...nextBtn} index={index + 1} />
                    </div>
                  </ScrollReveal>
                );
              }
              // Skip the second of the pair
              if (index > 0 && !contactButtons[index - 1]?.full) return null;
            }

            return (
              <ScrollReveal key={btn.label} delay={index * 0.06}>
                <ContactButton {...btn} index={index} />
              </ScrollReveal>
            );
          })}
        </div>

        {/* Massive "Thank You" Text */}
        <ScrollReveal delay={0.4}>
          <motion.div
            initial={{ rotateX: 25, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{
              marginTop: "100px",
              textAlign: "center",
              perspective: "600px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(70px, 16vw, 200px)",
                color: "rgba(255, 255, 255, 0.85)",
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
                userSelect: "none",
                textShadow:
                  "2px 2px 0 rgba(0,0,0,0.08), 4px 4px 0 rgba(0,0,0,0.05), 0 0 80px rgba(255,255,255,0.15)",
              }}
            >
              Thank You
            </h2>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ContactButton({
  label,
  href,
  download,
}: {
  label: string;
  href: string;
  full?: boolean;
  download?: boolean;
  index: number;
}) {
  return (
    <motion.a
      href={href}
      target={!download && href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      download={download ? true : undefined}
      className="btn-outline-white"
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        fontSize: "17px",
        letterSpacing: "0.02em",
      }}
    >
      {label}
    </motion.a>
  );
}
