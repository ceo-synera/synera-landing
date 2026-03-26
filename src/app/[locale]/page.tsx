import HeroSection from "@/components/sections/HeroSection";
import LogosStrip from "@/components/sections/LogosStrip";
import BotsSection from "@/components/sections/BotsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorks from "@/components/sections/HowItWorks";
import CTAFinal from "@/components/sections/CTAFinal";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogosStrip />
      <BotsSection />
      <ServicesSection />
      <HowItWorks />
      <CTAFinal />
    </>
  );
}
