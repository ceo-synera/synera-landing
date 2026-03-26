import ServicesHero from "@/components/sections/services/ServicesHero";
import BotDetailsSection from "@/components/sections/services/BotDetailsSection";
import CustomSection from "@/components/sections/services/CustomSection";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

const titles: Record<string, string> = {
  es: "Servicios — Bots y Automatizaciones con IA",
  en: "Services — AI Bots and Automations",
  zh: "服务 — AI机器人和自动化",
};

const descriptions: Record<string, string> = {
  es: "Bot contable, bot para creadores de contenido, bot de audio a LinkedIn, bots de agenda y automatizaciones personalizadas para tu negocio.",
  en: "Accounting bot, content creator bot, audio to LinkedIn bot, scheduling bots and custom automations for your business.",
  zh: "会计机器人、内容创作者机器人、音频转LinkedIn机器人、预约机器人和定制自动化服务。",
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
      <BotDetailsSection />
      <CustomSection />
      <ServicesCTA />
    </>
  );
}
