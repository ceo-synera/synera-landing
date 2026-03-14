import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import ForWho from "@/components/ForWho";
import WhySynera from "@/components/WhySynera";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="problema">
        <Problem />
      </section>
      <section id="proceso">
        <HowItWorks />
      </section>
      <section id="servicios">
        <Services />
      </section>
      <ForWho />
      <WhySynera />
      <ContactForm />
      <Footer />
    </main>
  );
}
