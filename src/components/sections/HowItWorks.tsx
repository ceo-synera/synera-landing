"use client";

import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function HowItWorks() {
  const t = useTranslations("process");
  const { ref, inView } = useInView();

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  const steps = [
    { number: "01", title: t("p1_title"), description: t("p1_desc") },
    { number: "02", title: t("p2_title"), description: t("p2_desc") },
    { number: "03", title: t("p3_title"), description: t("p3_desc") },
    { number: "04", title: t("p4_title"), description: t("p4_desc") },
  ];

  return (
    <section className="py-20 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-14" style={fadeStyle(0)}>
          <SectionLabel color="accent">{t("label")}</SectionLabel>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-primary">
            {t("title")}
          </h2>
          <p className="text-muted font-light text-lg max-w-xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.number} style={fadeStyle(0.1 + i * 0.12)}>
              {/* Circle row with connecting line */}
              <div className="flex items-center mb-5">
                <div className="w-10 h-10 rounded-full border-2 border-border-light bg-white flex items-center justify-center shrink-0">
                  <span className="font-sora text-xs font-bold text-muted">{step.number}</span>
                </div>
                {/* Horizontal connector — desktop only, not on last */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px bg-border-light ml-3" />
                )}
              </div>

              {/* Content */}
              <h3 className="font-sora font-semibold text-primary text-sm mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
