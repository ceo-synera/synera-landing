"use client";

import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";
import { SectionLabel } from "@/components/ui/SectionLabel";

function MetricCard({
  value,
  label,
  delay,
  inView,
}: {
  value: string;
  label: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <div
      className="bg-white rounded-2xl border border-border-light px-6 py-7 flex flex-col items-center text-center gap-1"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      <span className="font-sora text-3xl font-bold text-accent">{value}</span>
      <span className="text-sm text-muted font-light">{label}</span>
    </div>
  );
}

export default function HistorySection() {
  const t = useTranslations("about_page");
  const { ref, inView } = useInView();

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  return (
    <section className="py-20 bg-surface border-b border-border-light">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            <div style={fadeStyle(0)}>
              <SectionLabel color="accent">{t("history_label")}</SectionLabel>
            </div>
            <h2
              className="font-sora text-3xl sm:text-4xl font-bold text-primary leading-tight"
              style={fadeStyle(0.1)}
            >
              {t("history_title")}
            </h2>
            <div className="flex flex-col gap-4" style={fadeStyle(0.2)}>
              <p className="text-muted font-light leading-relaxed">{t("history_p1")}</p>
              <p className="text-muted font-light leading-relaxed">{t("history_p2")}</p>
              <p className="text-muted font-light leading-relaxed">{t("history_p3")}</p>
            </div>
          </div>

          {/* Right: metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            <MetricCard
              value={t("metric1_value")}
              label={t("metric1_label")}
              delay={0.25}
              inView={inView}
            />
            <MetricCard
              value={t("metric2_value")}
              label={t("metric2_label")}
              delay={0.35}
              inView={inView}
            />
            <MetricCard
              value={t("metric3_value")}
              label={t("metric3_label")}
              delay={0.45}
              inView={inView}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
