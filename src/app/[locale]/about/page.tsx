import AboutHero from "@/components/sections/about/AboutHero";
import HistorySection from "@/components/sections/about/HistorySection";
import TeamSection from "@/components/sections/about/TeamSection";
import ValuesSection from "@/components/sections/about/ValuesSection";
import AboutCTA from "@/components/sections/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <HistorySection />
      <TeamSection />
      <ValuesSection />
      <AboutCTA />
    </>
  );
}
