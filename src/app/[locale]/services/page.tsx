import ServicesHero from "@/components/sections/services/ServicesHero";
import BotDetailsSection from "@/components/sections/services/BotDetailsSection";
import CustomSection from "@/components/sections/services/CustomSection";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <BotDetailsSection />
      <CustomSection />
      <ServicesCTA />
    </>
  );
}
