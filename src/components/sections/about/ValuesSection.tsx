"use client";

import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";
import { SectionLabel } from "@/components/ui/SectionLabel";

function SimplifyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="#185FA5" strokeWidth="2" />
      <path d="M10 16h12M16 10v12" stroke="#185FA5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ResultsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <polyline
        points="4,24 11,14 17,18 24,8 28,12"
        stroke="#1D9E75"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="22,8 28,8 28,14"
        stroke="#1D9E75"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TransparencyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="5" y="5" width="22" height="22" rx="3" stroke="#185FA5" strokeWidth="2" />
      <line x1="10" y1="12" x2="22" y2="12" stroke="#185FA5" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="17" x2="22" y2="17" stroke="#185FA5" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="22" x2="16" y2="22" stroke="#185FA5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IterateIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M6 16a10 10 0 0 1 17.66-6.5"
        stroke="#BA7517"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <polyline points="20,7 24,9.5 21.5,13" stroke="#BA7517" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M26 16a10 10 0 0 1-17.66 6.5"
        stroke="#BA7517"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <polyline points="12,25 8,22.5 10.5,19" stroke="#BA7517" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ValuesSection() {
  const t = useTranslations("about_page");
  const { ref, inView } = useInView();

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  const values = [
    { icon: <SimplifyIcon />, bg: "#E6F1FB", title: t("v1_title"), desc: t("v1_desc") },
    { icon: <ResultsIcon />, bg: "#E1F5EE", title: t("v2_title"), desc: t("v2_desc") },
    { icon: <TransparencyIcon />, bg: "#E6F1FB", title: t("v3_title"), desc: t("v3_desc") },
    { icon: <IterateIcon />, bg: "#FAEEDA", title: t("v4_title"), desc: t("v4_desc") },
  ];

  return (
    <section className="py-20 bg-surface border-b border-border-light">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12" style={fadeStyle(0)}>
          <SectionLabel color="accent">{t("values_label")}</SectionLabel>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-primary">
            {t("values_title")}
          </h2>
          <p className="text-muted font-light text-lg max-w-xl leading-relaxed">
            {t("values_subtitle")}
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map(({ icon, bg, title, desc }, i) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-border-light p-7 flex flex-col gap-4"
              style={fadeStyle(0.1 + i * 0.1)}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: bg }}
              >
                {icon}
              </div>
              <h3 className="font-sora font-bold text-primary text-lg">{title}</h3>
              <p className="text-sm text-muted font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
