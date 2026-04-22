"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useInView } from "@/hooks/useInView";
import { SectionLabel } from "@/components/ui/SectionLabel";

// ── Step ──────────────────────────────────────────────────────────────────────

interface StepProps {
  number: string;
  title: string;
  description: string;
  detail: string;
  accentColor: string;
  accentBg: string;
  style?: React.CSSProperties;
}

function Step({ number, title, description, detail, accentColor, accentBg, style }: StepProps) {
  return (
    <div className="flex gap-5" style={style}>
      {/* Number + line */}
      <div className="flex flex-col items-center">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center font-sora font-bold text-sm shrink-0"
          style={{ backgroundColor: accentBg, color: accentColor }}
        >
          {number}
        </div>
        <div className="w-px flex-1 mt-3" style={{ backgroundColor: accentBg }} />
      </div>
      {/* Content */}
      <div className="pb-8 flex flex-col gap-1.5">
        <h3 className="font-sora font-bold text-primary text-lg">{title}</h3>
        <p className="text-muted font-light text-sm leading-relaxed">{description}</p>
        <p className="text-xs font-medium mt-1" style={{ color: accentColor }}>{detail}</p>
      </div>
    </div>
  );
}

// ── FAQ item ──────────────────────────────────────────────────────────────────

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="py-5 border-b border-border-light last:border-b-0">
      <p className="font-sora font-semibold text-primary text-sm mb-2">{question}</p>
      <p className="text-sm text-muted font-light leading-relaxed">{answer}</p>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HowWeWorkPage() {
  const locale = useLocale();
  const { ref, inView } = useInView();

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  const steps = [
    {
      number: "01",
      title: "Llamada de diagnóstico",
      description: "Empezamos con una llamada gratuita de 30 minutos. Te hacemos las preguntas correctas para entender tu operación, qué procesos te quitan más tiempo y cuál es el mayor dolor.",
      detail: "Gratis · 30 minutos · Sin compromiso",
      accentColor: "#185FA5",
      accentBg: "#E6F1FB",
    },
    {
      number: "02",
      title: "Propuesta a medida",
      description: "Con lo que aprendimos en la llamada, armamos una propuesta específica: qué vamos a construir, cómo funciona, cuánto tarda y cuánto cuesta. Sin vaguedades.",
      detail: "Entregamos la propuesta en 48–72 horas",
      accentColor: "#1D9E75",
      accentBg: "#E1F5EE",
    },
    {
      number: "03",
      title: "Implementación",
      description: "Una vez que acordamos, construimos. Según la complejidad, la entrega es entre 1 y 3 semanas. Te mostramos avances en el camino y ajustamos si hace falta.",
      detail: "1–3 semanas según complejidad",
      accentColor: "#185FA5",
      accentBg: "#E6F1FB",
    },
    {
      number: "04",
      title: "Soporte y evolución",
      description: "No desaparecemos al entregar. Te acompañamos en el arranque, respondemos dudas y cuando el sistema esté rodando, podemos iterar y agregar funcionalidades.",
      detail: "Soporte post-entrega incluido",
      accentColor: "#1D9E75",
      accentBg: "#E1F5EE",
    },
  ];

  const faqs = [
    {
      question: "¿Por qué no tienen precios fijos en la web?",
      answer: "Porque cada negocio es diferente. Una automatización para una clínica de 3 personas no cuesta lo mismo que para una cadena de 50. Armamos cada propuesta según tu caso real: qué sistemas ya usás, cuánta complejidad tiene el flujo y qué resultado esperás.",
    },
    {
      question: "¿La llamada inicial realmente es gratis?",
      answer: "Sí, completamente. Es una sesión de diagnóstico donde entendemos tu negocio y exploramos juntos qué es posible. Si no encontramos fit, te lo decimos con honestidad. Sin presiones.",
    },
    {
      question: "¿Cuánto tiempo tarda un proyecto típico?",
      answer: "Depende de la complejidad. Una automatización puntual puede estar lista en 5–7 días. Un sistema más complejo con múltiples integraciones puede tomar 2–3 semanas. Te lo decimos antes de empezar.",
    },
    {
      question: "¿Qué pasa si después de entregar necesito cambios?",
      answer: "Es normal. Incluimos soporte post-entrega en todos los proyectos. Si los cambios son menores los cubrimos; si son funcionalidades nuevas, lo cotizamos por separado.",
    },
    {
      question: "¿Trabajan con negocios de cualquier tamaño?",
      answer: "Sí. Trabajamos tanto con emprendedores que quieren automatizar su primer proceso como con empresas medianas con operaciones más complejas. El punto de partida siempre es la llamada de diagnóstico.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-24 pb-12 sm:pt-28 sm:pb-16 border-b border-border-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-5 sm:gap-6">
          <nav className="flex items-center gap-2 text-xs text-muted" aria-label="breadcrumb">
            <Link href={`/${locale}`} className="hover:text-primary transition-colors">Inicio</Link>
            <span className="text-border-light">/</span>
            <span className="text-primary font-medium">¿Cómo trabajamos?</span>
          </nav>
          <SectionLabel color="accent">El proceso</SectionLabel>
          <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-primary max-w-2xl leading-tight">
            Cada negocio merece una solución pensada para él
          </h1>
          <p className="text-muted font-light text-base sm:text-lg leading-relaxed max-w-sm sm:max-w-xl">
            No creemos en paquetes genéricos. Empezamos por entender tu operación y diseñamos algo que realmente tenga sentido para vos.
          </p>
          <a
            href="https://cal.com/syneratechnologies/llamada-synera-30-min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-accent text-white font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-accent-dark transition-colors"
          >
            Agendar llamada gratuita →
          </a>
          <p className="text-xs text-muted">Gratis · 30 minutos · Sin compromiso</p>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-12 sm:py-16 bg-surface border-b border-border-light">
        <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-4 mb-10 sm:mb-12" style={fadeStyle(0)}>
            <SectionLabel color="teal">El proceso</SectionLabel>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-primary">Cómo es trabajar con nosotros</h2>
          </div>
          <div style={fadeStyle(0.1)}>
            {steps.map((step) => (
              <Step key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Why no prices + FAQ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-4 mb-10 sm:mb-12">
            <SectionLabel color="accent">Preguntas frecuentes</SectionLabel>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-primary">Lo que nos suelen preguntar</h2>
          </div>
          <div className="bg-surface rounded-2xl border border-border-light px-4 sm:px-7 py-2">
            {faqs.map((faq) => (
              <FAQ key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 bg-primary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-5 sm:gap-6">
          <h2 className="font-sora text-2xl sm:text-3xl font-bold text-white leading-tight">
            Tu próximo gran salto empieza con una conversación
          </h2>
          <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
            En 30 minutos entendemos tu operación y te mostramos qué es posible. Sin compromiso, con claridad.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
            <a
              href="https://cal.com/syneratechnologies/llamada-synera-30-min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-accent text-white font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-accent-dark transition-colors"
            >
              Agendar llamada gratis →
            </a>
            <a
              href="https://wa.me/886981980019"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center border border-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              Escribir por WhatsApp
            </a>
          </div>
          <p className="text-white/40 text-xs">Gratis · 30 min · Sin compromiso</p>
        </div>
      </section>
    </>
  );
}
