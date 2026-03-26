"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useInView } from "@/hooks/useInView";
import { SectionLabel } from "@/components/ui/SectionLabel";

// ── Icons ─────────────────────────────────────────────────────────────────────

function CalendarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="7" y="13" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="13" y="13" width="3" height="3" rx="0.5" fill="currentColor" />
    </svg>
  );
}

function GearsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="14" x2="12" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <polyline
        points="22,12 18,12 15,21 9,3 6,12 2,12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Custom card ───────────────────────────────────────────────────────────────

interface CustomCardProps {
  icon: React.ReactNode;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
  price: string;
  style?: React.CSSProperties;
}

function CustomCard({ icon, iconColor, iconBg, title, description, price, style }: CustomCardProps) {
  return (
    <div
      className="bg-white rounded-2xl border border-border-light p-6 flex flex-col gap-4 group cursor-default"
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
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: iconBg, color: iconColor }}
      >
        {icon}
      </div>

      <div className="flex flex-col gap-1.5 flex-1">
        <h3 className="font-sora font-semibold text-primary text-base">{title}</h3>
        <p className="text-sm text-muted font-light leading-relaxed">{description}</p>
      </div>

      <span
        className="self-start text-xs font-semibold px-3 py-1.5 rounded-full"
        style={{ backgroundColor: "#E6F1FB", color: "#185FA5" }}
      >
        {price}
      </span>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function CustomSection() {
  const t = useTranslations("services_page");
  const locale = useLocale();
  const { ref, inView } = useInView();

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  const cards = [
    {
      icon: <CalendarIcon />,
      iconColor: "#185FA5",
      iconBg: "#E6F1FB",
      title: t("c1_title"),
      description: t("c1_desc"),
      price: t("c1_price"),
    },
    {
      icon: <GearsIcon />,
      iconColor: "#1D9E75",
      iconBg: "#E1F5EE",
      title: t("c2_title"),
      description: t("c2_desc"),
      price: t("c2_price"),
    },
    {
      icon: <ChatIcon />,
      iconColor: "#185FA5",
      iconBg: "#E6F1FB",
      title: t("c3_title"),
      description: t("c3_desc"),
      price: t("c3_price"),
    },
    {
      icon: <BrainIcon />,
      iconColor: "#BA7517",
      iconBg: "#FAEEDA",
      title: t("c4_title"),
      description: t("c4_desc"),
      price: t("c4_price"),
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-border-light">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12" style={fadeStyle(0)}>
          <SectionLabel color="teal">{t("custom_label")}</SectionLabel>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-primary">
            {t("custom_title")}
          </h2>
          <p className="text-muted font-light text-lg max-w-xl leading-relaxed">
            {t("custom_subtitle")}
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {cards.map((card, i) => (
            <CustomCard key={card.title} {...card} style={fadeStyle(0.1 + i * 0.1)} />
          ))}
        </div>

        {/* Pack block */}
        <div
          className="rounded-2xl border px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          style={{
            backgroundColor: "#E6F1FB",
            borderColor: "#185FA5",
            ...fadeStyle(0.5),
          }}
        >
          <p className="text-sm text-primary leading-relaxed flex-1">{t("pack_text")}</p>
          <Link
            href={`/${locale}/pricing`}
            className="shrink-0 bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-dark transition-colors whitespace-nowrap"
          >
            {t("pack_btn")}
          </Link>
        </div>
      </div>
    </section>
  );
}
