"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import { education, certifications, achievements } from "@/data/portfolio";

export default function EducationSection() {
  return (
    <section
      style={{
        padding: "80px 0",
        backgroundColor: "var(--color-bg-cream)",
      }}
    >
      <div className="container">
        {/* Education */}
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 48px)",
              marginBottom: "40px",
            }}
          >
            Education
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "80px",
          }}
        >
          {education.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                style={{
                  padding: "28px 32px",
                  borderRadius: "var(--card-radius)",
                  backgroundColor: "var(--color-bg-white)",
                  boxShadow: "var(--shadow-sm)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "20px",
                      color: "var(--color-primary)",
                      marginBottom: "4px",
                    }}
                  >
                    {edu.degree}
                    {edu.field && ` — ${edu.field}`}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--color-gray-500)",
                    }}
                  >
                    {edu.institution}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "var(--color-gray-500)",
                      display: "block",
                    }}
                  >
                    {edu.period}
                  </span>
                  {edu.grade && (
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--color-primary)",
                        padding: "2px 12px",
                        borderRadius: "var(--pill-radius)",
                        backgroundColor: "rgba(43, 53, 175, 0.08)",
                        display: "inline-block",
                        marginTop: "4px",
                      }}
                    >
                      {edu.grade}
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications */}
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              marginBottom: "32px",
            }}
          >
            Certifications
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "60px",
          }}
        >
          {certifications.map((cert, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                style={{
                  padding: "24px 32px",
                  borderRadius: "var(--card-radius)",
                  backgroundColor: "var(--color-bg-white)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "18px",
                      color: "var(--color-primary)",
                    }}
                  >
                    {cert.title}
                  </h3>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "var(--color-gray-500)",
                    }}
                  >
                    {cert.issuer} • {cert.year}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--color-gray-500)",
                    marginTop: "8px",
                  }}
                >
                  {cert.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Achievements */}
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              marginBottom: "32px",
            }}
          >
            Achievements
          </h2>
        </ScrollReveal>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {achievements.map((achievement, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                style={{
                  padding: "24px 32px",
                  borderRadius: "var(--card-radius)",
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "18px",
                    marginBottom: "4px",
                  }}
                >
                  {achievement.title}
                </h3>
                <p style={{ fontSize: "14px", opacity: 0.85 }}>
                  {achievement.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
