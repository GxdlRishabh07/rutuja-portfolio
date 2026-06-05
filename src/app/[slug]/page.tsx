import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/portfolio";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <section style={{ padding: "40px 0 var(--section-gap)" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <ScrollReveal>
          <Link
            href="/#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--color-primary)",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 500,
              marginBottom: "40px",
            }}
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </ScrollReveal>

        <ScrollReveal>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 64px)",
              marginBottom: "16px",
            }}
          >
            {project.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "32px",
            }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "6px 16px",
                  borderRadius: "var(--pill-radius)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                  backgroundColor: "rgba(43, 53, 175, 0.08)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Hero mockup area */}
        <ScrollReveal delay={0.15}>
          <div
            style={{
              borderRadius: "var(--card-radius)",
              backgroundColor: "var(--color-gray-card)",
              padding: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "48px",
              minHeight: "300px",
            }}
          >
            <div
              style={{
                width: project.mockupType === "phone" ? "180px" : "320px",
                height: project.mockupType === "phone" ? "340px" : "200px",
                borderRadius: project.mockupType === "phone" ? "28px" : "10px",
                backgroundColor: "var(--color-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "var(--shadow-xl)",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontFamily: "var(--font-display)",
                  fontSize: "20px",
                }}
              >
                {project.title}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={0.2}>
          <div style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                marginBottom: "16px",
              }}
            >
              Overview
            </h2>
            <p
              className="font-serif"
              style={{
                fontSize: "18px",
                lineHeight: 1.7,
                color: "var(--color-gray-500)",
              }}
            >
              {project.longDescription}
            </p>
          </div>
        </ScrollReveal>

        {/* Highlights */}
        <ScrollReveal delay={0.25}>
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                marginBottom: "20px",
              }}
            >
              Key Highlights
            </h2>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  style={{
                    padding: "16px 20px",
                    borderRadius: "12px",
                    backgroundColor: "var(--color-bg-white)",
                    boxShadow: "var(--shadow-sm)",
                    fontSize: "16px",
                    lineHeight: 1.5,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-primary)",
                      fontWeight: 700,
                      fontSize: "18px",
                      lineHeight: 1.4,
                    }}
                  >
                    ✦
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
