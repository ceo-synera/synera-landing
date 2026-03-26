import PricingHero from "@/components/sections/pricing/PricingHero";
import PricingPlans from "@/components/sections/pricing/PricingPlans";
import PacksBlock from "@/components/sections/pricing/PacksBlock";
import PricingFAQ from "@/components/sections/pricing/PricingFAQ";
import PricingCTA from "@/components/sections/pricing/PricingCTA";

const titles: Record<string, string> = {
  es: "Precios — Planes simples y transparentes",
  en: "Pricing — Simple and Transparent Plans",
  zh: "价格 — 简单透明的套餐",
};

const descriptions: Record<string, string> = {
  es: "Planes de suscripción mensual y proyectos únicos. Sin contratos largos ni costos ocultos. Elegí el plan que se adapta a tu negocio.",
  en: "Monthly subscription plans and one-time projects. No long contracts or hidden costs. Choose the plan that fits your business.",
  zh: "月度订阅计划和一次性项目。无长期合同，无隐藏费用。选择适合您业务的计划。",
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

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <PacksBlock />
      <PricingFAQ />
      <PricingCTA />
    </>
  );
}
