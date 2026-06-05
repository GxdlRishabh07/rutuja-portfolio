import Link from "next/link";
import type { Metadata } from "next";
import FlowerLogo from "@/components/layout/FlowerLogo";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <FlowerLogo size={80} />
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(80px, 15vw, 180px)",
          color: "var(--color-primary)",
          lineHeight: 1,
          marginTop: "24px",
        }}
      >
        404
      </h1>
      <p
        className="font-serif"
        style={{
          fontSize: "20px",
          color: "var(--color-gray-500)",
          marginTop: "16px",
          marginBottom: "32px",
        }}
      >
        Oops! This page doesn&apos;t exist.
      </p>
      <Link href="/" className="btn-pill btn-primary">
        Back to Home
      </Link>
    </section>
  );
}
