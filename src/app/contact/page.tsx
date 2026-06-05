import type { Metadata } from "next";
import ContactForm from "@/components/shared/ContactForm";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rutuja Nehere for data analytics, business intelligence, or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <section
      style={{
        minHeight: "80vh",
        padding: "80px 0 var(--section-gap)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "600px" }}>
        <ScrollReveal>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 56px)",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Contact Me
          </h1>
          <p
            className="font-serif"
            style={{
              fontSize: "18px",
              color: "var(--color-gray-500)",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you.
          </p>
        </ScrollReveal>
        <ContactForm />
      </div>
    </section>
  );
}
