import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/about/AboutSection";
import SkillsSection from "../components/skills/SkillsSection";
import ProjectsSection from "../components/projects/ProjectsSection";
import ContactSection from "../components/contact/ContactSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}