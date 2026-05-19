import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/about/AboutSection";
import SkillsSection from "../components/skills/SkillsSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </main>
  );
}