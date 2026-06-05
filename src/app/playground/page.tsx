import type { Metadata } from "next";
import MasonryGrid from "@/components/playground/MasonryGrid";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "Explorations, experiments, and creative data visualization work by Rutuja Nehere.",
};

export default function PlaygroundPage() {
  return (
    <div style={{ paddingTop: "40px", paddingBottom: "80px" }}>
      <MasonryGrid />
    </div>
  );
}
