import HowWeWorkPage from "@/components/sections/pricing/HowWeWorkPage";

const titles: Record<string, string> = {
  es: "¿Cómo trabajamos? — Synera Technologies",
  en: "How We Work — Synera Technologies",
};

const descriptions: Record<string, string> = {
  es: "Cada proyecto es diferente. Agendá una llamada gratuita y te contamos exactamente cómo podemos ayudarte.",
  en: "Every project is different. Book a free call and we'll tell you exactly how we can help you.",
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
