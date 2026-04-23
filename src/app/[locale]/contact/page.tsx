import ContactHero from "@/components/sections/contact/ContactHero";
import ContactChannels from "@/components/sections/contact/ContactChannels";
import ContactForm from "@/components/sections/contact/ContactForm";
import CalendlySection from "@/components/sections/contact/CalendlySection";

const titles: Record<string, string> = {
  es: "Contacto — Llamada Gratuita de Diagnóstico IA | Synera Technologies",
  en: "Contact — Free AI Diagnostic Call | Synera Technologies",
};

const descriptions: Record<string, string> = {
  es: "Agendá una llamada gratuita de 30 minutos para analizar qué procesos de tu negocio se pueden automatizar. También por WhatsApp o email. Respondemos en menos de 24 horas.",
  en: "Schedule a free 30-minute call to analyze which business processes can be automated. Also available via WhatsApp or email. We respond in less than 24 hours.",
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

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactChannels />
      <ContactForm />
      <CalendlySection />
    </>
  );
}
