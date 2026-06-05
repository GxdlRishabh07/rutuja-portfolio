"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import { aboutBio, experience } from "@/data/portfolio";

export default function HowItStarted() {
  return (
    <section style={{ padding: "var(--section-gap) 0" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1.5fr",
            gap: "32px",
            alignItems: "stretch",
          }}
          className="how-it-started-grid"
        >
          {/* Left: Blue title block */}
          <ScrollReveal direction="left">
            <div
              style={{
                backgroundColor: "var(--color-primary)",
                borderRadius: "var(--card-radius)",
                padding: "48px 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 3vw, 40px)",
                  color: "var(--color-text-white)",
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                How It All Started
              </h2>
            </div>
          </ScrollReveal>

          {/* Center: Profile photo placeholder */}
          <ScrollReveal delay={0.1}>
            <div
              style={{
                borderRadius: "var(--card-radius)",
                overflow: "hidden",
                height: "100%",
                minHeight: "300px",
                position: "relative",
                background:
                  "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 50%, #6b73d4 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Decorative circles */}
              <div
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  position: "absolute",
                }}
              />
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  position: "absolute",
                }}
              />
              <span
                style={{
                  fontSize: "64px",
                  zIndex: 1,
                }}
              >
                👩‍💻
              </span>
            </div>
          </ScrollReveal>

          {/* Right: Bio text */}
          <ScrollReveal direction="right" delay={0.2}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              {aboutBio.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-serif"
                  style={{
                    fontSize: "clamp(15px, 1.2vw, 18px)",
                    lineHeight: 1.7,
                    color:
                      i === 0
                        ? "var(--color-text-black)"
                        : "var(--color-gray-500)",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Experience Section */}
        <div style={{ marginTop: "80px" }}>
          <ScrollReveal>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4vw, 48px)",
                marginBottom: "32px",
              }}
            >
              Experience
            </h2>
          </ScrollReveal>

          {experience.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                style={{
                  padding: "32px",
                  borderRadius: "var(--card-radius)",
                  backgroundColor: "var(--color-bg-white)",
                  marginBottom: "16px",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "16px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "24px",
                        color: "var(--color-primary)",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <p style={{ fontSize: "16px", color: "var(--color-gray-500)" }}>
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "14px",
                      padding: "4px 14px",
                      borderRadius: "var(--pill-radius)",
                      backgroundColor: "rgba(43, 53, 175, 0.08)",
                      color: "var(--color-primary)",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {exp.highlights.map((highlight, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.6,
                        color: "var(--color-text-black)",
                        paddingLeft: "20px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "var(--color-primary)",
                          fontWeight: 700,
                        }}
                      >
                        →
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .how-it-started-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
