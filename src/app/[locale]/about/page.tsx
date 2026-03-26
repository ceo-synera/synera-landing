import AboutHero from "@/components/sections/about/AboutHero";
import HistorySection from "@/components/sections/about/HistorySection";
import TeamSection from "@/components/sections/about/TeamSection";
import ValuesSection from "@/components/sections/about/ValuesSection";
import AboutCTA from "@/components/sections/about/AboutCTA";

const titles: Record<string, string> = {
  es: "Nosotros — El equipo detrás de Synera Technologies",
  en: "About Us — The Team Behind Synera Technologies",
  zh: "关于我们 — Synera Technologies团队",
};

const descriptions: Record<string, string> = {
  es: "Somos un equipo pequeño con una misión grande: hacer que la IA sea accesible para cualquier negocio. Conocé nuestra historia y valores.",
  en: "We are a small team with a big mission: making AI accessible to any business. Learn about our story and values.",
  zh: "我们是一个使命远大的小团队：让AI对任何企业都触手可及。了解我们的故事和价值观。",
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
