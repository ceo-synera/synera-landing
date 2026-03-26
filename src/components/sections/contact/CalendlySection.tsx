"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function CalendlySection() {
  const t = useTranslations("contact_page");
  const { ref, inView } = useInView();

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      Cal("init", "30min", {
        origin: "https://cal.com",
      });
      // @ts-ignore
      Cal("inline", {
        elementOrSelector: "#cal-embed",
        calLink: "syneratechnologies/30min",
        layout: "month_view",
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

        {/* Cal.com embed */}
        <div style={fadeStyle(0.1)}>
          <div
            id="cal-embed"
            className="bg-white border border-border-light rounded-2xl overflow-hidden"
            style={{ minHeight: 600 }}
          />
        </div>
      </div>
    </section>
  );
}
