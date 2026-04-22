import ContactHero from "@/components/sections/contact/ContactHero";
import ContactChannels from "@/components/sections/contact/ContactChannels";
import ContactForm from "@/components/sections/contact/ContactForm";
import CalendlySection from "@/components/sections/contact/CalendlySection";

const titles: Record<string, string> = {
  es: "Contacto — Hablemos sobre tu negocio",
  en: "Contact — Let's Talk About Your Business",
};

const descriptions: Record<string, string> = {
  es: "Contactanos por WhatsApp, email o agendá una llamada gratuita de 30 minutos. Respondemos en menos de 24 horas.",
  en: "Contact us via WhatsApp, email or schedule a free 30-minute call. We respond in less than 24 hours.",
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
