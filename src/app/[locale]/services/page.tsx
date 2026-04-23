import ServicesHero from "@/components/sections/services/ServicesHero";
import SyneraPortalSection from "@/components/sections/services/SyneraPortalSection";
import IndustriesSection from "@/components/sections/services/IndustriesSection";
import CustomSection from "@/components/sections/services/CustomSection";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

const titles: Record<string, string> = {
  es: "Servicios de Automatización con IA | Chatbots, Check-in Digital y Más",
  en: "AI Automation Services | Chatbots, Digital Check-in and More",
};

const descriptions: Record<string, string> = {
  es: "Automatizamos tu negocio con IA: check-in digital para hoteles (Synera Portal), chatbots para WhatsApp, automatizaciones por industria y consultoría estratégica. Sin código, sin complicaciones.",
  en: "We automate your business with AI: digital hotel check-in (Synera Portal), WhatsApp chatbots, industry automations and strategic consulting. No code, no complexity.",
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
