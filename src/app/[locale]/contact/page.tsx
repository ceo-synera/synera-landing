import ContactHero from "@/components/sections/contact/ContactHero";
import ContactChannels from "@/components/sections/contact/ContactChannels";
import ContactForm from "@/components/sections/contact/ContactForm";
import CalendlySection from "@/components/sections/contact/CalendlySection";

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
