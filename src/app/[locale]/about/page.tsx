import AboutHero from "@/components/sections/about/AboutHero";
import HistorySection from "@/components/sections/about/HistorySection";
import TeamSection from "@/components/sections/about/TeamSection";
import ValuesSection from "@/components/sections/about/ValuesSection";
import AboutCTA from "@/components/sections/about/AboutCTA";

const titles: Record<string, string> = {
  es: "Sobre Nosotros | Equipo de Automatización IA — Synera Technologies",
  en: "About Us | AI Automation Team — Synera Technologies",
};

const descriptions: Record<string, string> = {
  es: "Somos una agencia de automatización con IA especializada en negocios latinoamericanos. Pequeño equipo, resultados reales. Conocé nuestra historia, misión y valores.",
  en: "We are an AI automation agency specialized in Latin American businesses. Small team, real results. Learn about our story, mission and values.",
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
