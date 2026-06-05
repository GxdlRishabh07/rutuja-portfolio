import type { Metadata } from "next";
import HowItStarted from "@/components/about/HowItStarted";
import ToolkitGrid from "@/components/about/ToolkitGrid";
import SkillsBubbles from "@/components/about/SkillsBubbles";
import WhatDefinesMe from "@/components/about/WhatDefinesMe";
import EducationSection from "@/components/about/EducationSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Rutuja Nehere — Data Analyst & BI Specialist with expertise in Power BI, Python, SQL, and business analytics.",
};

export default function AboutPage() {
  return (
    <>
      <HowItStarted />
      <ToolkitGrid />
      <SkillsBubbles />
      <EducationSection />
      <WhatDefinesMe />
    </>
  );
}
