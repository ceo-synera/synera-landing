"use client";

import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";
import { SectionLabel } from "@/components/ui/SectionLabel";

function CalendarBigIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="10" width="36" height="32" rx="4" stroke="#d0cec8" strokeWidth="2" />
      <line x1="6" y1="20" x2="42" y2="20" stroke="#d0cec8" strokeWidth="2" />
      <line x1="15" y1="6" x2="15" y2="14" stroke="#d0cec8" strokeWidth="2" strokeLinecap="round" />
      <line x1="33" y1="6" x2="33" y2="14" stroke="#d0cec8" strokeWidth="2" strokeLinecap="round" />
      <rect x="16" y="26" width="6" height="6" rx="1" fill="#d0cec8" />
      <rect x="26" y="26" width="6" height="6" rx="1" fill="#d0cec8" />
    </svg>
  );
}

export default function CalendlySection() {
  const t = useTranslations("contact_page");
  const { ref, inView } = useInView();

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  return (
    <section id="calendly" className="py-20 bg-surface border-t border-border-light">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-10" style={fadeStyle(0)}>
          <SectionLabel color="teal">{t("calendly_label")}</SectionLabel>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-primary">
            {t("calendly_title")}
          </h2>
          <p className="text-muted font-light text-lg max-w-xl leading-relaxed">
            {t("calendly_subtitle")}
          </p>
        </div>

        {/* Embed placeholder */}
        <div
          id="calendly-embed"
          className="bg-white border border-border-light rounded-2xl flex flex-col items-center justify-center gap-4 text-center px-6"
          style={{ minHeight: 600, ...fadeStyle(0.1) }}
        >
          {/*
           * TODO: Reemplazar este placeholder con el embed de Calendly
           * 1. Crear cuenta en calendly.com
           * 2. Crear evento "Llamada Synera - 30 min"
           * 3. Reemplazar este div con:
           * <div
           *   className="calendly-inline-widget w-full"
           *   data-url="https://calendly.com/TU-USUARIO/30min"
           *   style={{ minWidth: 320, height: 630 }}
           * />
           * <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
           */}
          <CalendarBigIcon />
          <p className="text-sm text-muted font-light max-w-sm leading-relaxed">
            {t("calendly_placeholder")}
          </p>
        </div>
      </div>
    </section>
  );
}
