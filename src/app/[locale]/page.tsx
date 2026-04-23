import HeroSection from "@/components/sections/HeroSection";
import LogosStrip from "@/components/sections/LogosStrip";
import ProductsSection from "@/components/sections/ProductsSection";
import HowItWorks from "@/components/sections/HowItWorks";
import CTAFinal from "@/components/sections/CTAFinal";

const pageTitles: Record<string, string> = {
  es: "Automatización con IA para tu negocio | Synera Technologies",
  en: "AI Automation for Your Business | Synera Technologies",
};

const pageDescriptions: Record<string, string> = {
  es: "Agencia de automatización con inteligencia artificial. Creamos chatbots para WhatsApp, check-in digital para hoteles y automatizaciones a medida que trabajan 24/7 por tu negocio.",
  en: "AI automation agency. We build WhatsApp chatbots, digital check-in for hotels and custom automations that work 24/7 for your business.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale === "en" ? "en" : "es";
  return {
    title: pageTitles[loc],
    description: pageDescriptions[loc],
    alternates: {
      canonical: `https://syneratechnologies.com/${loc}`,
    },
    openGraph: {
      title: pageTitles[loc],
      description: pageDescriptions[loc],
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogosStrip />
      <ProductsSection />
      <HowItWorks />
      <CTAFinal />
    </>
  );
}
