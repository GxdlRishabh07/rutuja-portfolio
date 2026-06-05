import HeroSection from "@/components/home/HeroSection";
import AboutIntro from "@/components/home/AboutIntro";
import ProjectsSection from "@/components/home/ProjectsSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutIntro />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
