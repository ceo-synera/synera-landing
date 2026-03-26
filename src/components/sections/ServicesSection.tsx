"use client";

import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  style?: React.CSSProperties;
}

function ServiceCard({ number, title, description, style }: ServiceCardProps) {
  return (
    <div
      className="bg-white rounded-2xl border border-border-light p-6 flex flex-col gap-3 group cursor-default"
      style={{
        transition: "box-shadow 0.25s ease",
        ...style,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.07)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <span className="font-sora text-5xl font-bold text-border-light select-none leading-none">
        {number}
      </span>
      <h3 className="font-sora font-semibold text-primary text-base">{title}</h3>
      <p className="text-sm text-muted font-light leading-relaxed">{description}</p>
    </div>
  );
}

export default function ServicesSection() {
  const t = useTranslations("services");
  const { ref, inView } = useInView();

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  const services = [
    { number: "01", title: t("s1_title"), description: t("s1_desc") },
    { number: "02", title: t("s2_title"), description: t("s2_desc") },
    { number: "03", title: t("s3_title"), description: t("s3_desc") },
    { number: "04", title: t("s4_title"), description: t("s4_desc") },
  ];

  return (
    <section className="py-20 bg-surface border-y border-border-light">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12" style={fadeStyle(0)}>
          <SectionLabel color="accent">{t("label")}</SectionLabel>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-primary">
            {t("title")}
          </h2>
          <p className="text-muted font-light text-lg max-w-xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((svc, i) => (
            <ServiceCard
              key={svc.number}
              {...svc}
              style={fadeStyle(0.1 + i * 0.1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
