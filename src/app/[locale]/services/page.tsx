import ServicesHero from "@/components/sections/services/ServicesHero";
import SyneraPortalSection from "@/components/sections/services/SyneraPortalSection";
import IndustriesSection from "@/components/sections/services/IndustriesSection";
import CustomSection from "@/components/sections/services/CustomSection";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

const titles: Record<string, string> = {
  es: "Servicios — Automatización con IA para tu industria",
  en: "Services — AI Automation for Your Industry",
};

const descriptions: Record<string, string> = {
  es: "Synera Portal, automatizaciones por industria, soluciones a medida y consultoría estratégica de IA para tu negocio.",
  en: "Synera Portal, industry automations, custom solutions and strategic AI consulting for your business.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale in titles ? locale : "es";
  return {
    title: titles[loc],
    description: descriptions[loc],
    openGraph: {
      title: titles[loc],
      description: descriptions[loc],
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    },
  };
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <SyneraPortalSection />
      <IndustriesSection />
      <CustomSection />
      <ServicesCTA />
    </>
  );
}
