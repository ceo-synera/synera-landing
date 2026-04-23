import HowWeWorkPage from "@/components/sections/pricing/HowWeWorkPage";

const titles: Record<string, string> = {
  es: "¿Cómo implementamos automatización IA en tu empresa? | Synera Technologies",
  en: "How We Implement AI Automation in Your Business | Synera Technologies",
};

const descriptions: Record<string, string> = {
  es: "Llamada gratuita de diagnóstico, propuesta a medida y entrega en 1–3 semanas. Sin precios fijos: cada automatización se diseña según tu operación real.",
  en: "Free diagnostic call, custom proposal and delivery in 1–3 weeks. No fixed prices: every automation is designed around your actual operation.",
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
  return <HowWeWorkPage />;
}
