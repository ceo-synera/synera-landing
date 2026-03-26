"use client";

import { useTranslations, useLocale } from "next-intl";
import { useInView } from "@/hooks/useInView";
import { SectionLabel } from "@/components/ui/SectionLabel";

// ── Icons ─────────────────────────────────────────────────────────────────────

function DocIcon({ color }: { color: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M28 6H12a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V18z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="28,6 28,18 40,18"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="32" y1="27" x2="16" y2="27" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="34" x2="16" y2="34" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="20" y1="20" x2="16" y2="20" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function CreatorIcon({ color }: { color: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="16" r="8" stroke={color} strokeWidth="2.5" />
      <path d="M8 42c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M36 6l2 4 4 2-4 2-2 4-2-4-4-2 4-2z" fill={color} />
    </svg>
  );
}

function MicIcon({ color }: { color: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="18" y="4" width="12" height="22" rx="6" stroke={color} strokeWidth="2.5" />
      <path d="M10 22a14 14 0 0 0 28 0" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="38" x2="24" y2="44" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="18" y1="44" x2="30" y2="44" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Check icon ────────────────────────────────────────────────────────────────

function Check({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7.25" stroke={color} strokeWidth="1.5" />
      <path d="M5 8l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Bot card ──────────────────────────────────────────────────────────────────

interface BotDetailCardProps {
  icon: React.ReactNode;
  headerBg: string;
  accentColor: string;
  available: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  setup?: string;
  btnHire: string;
  btnInfo: string;
  blogHref: string;
  locale: string;
  style?: React.CSSProperties;
}

function BotDetailCard({
  icon,
  headerBg,
  accentColor,
  available,
  title,
  description,
  features,
  price,
  setup,
  btnHire,
  btnInfo,
  blogHref,
  locale,
  style,
}: BotDetailCardProps) {
  return (
    <div
      className="bg-white rounded-2xl border border-border-light overflow-hidden flex flex-col"
      style={style}
    >
      {/* Colored header */}
      <div
        className="px-6 py-8 flex flex-col items-start gap-4"
        style={{ backgroundColor: headerBg }}
      >
        {icon}
        <span
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ backgroundColor: "#E1F5EE", color: "#1D9E75" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse inline-block" />
          {available}
        </span>
      </div>

      {/* Body */}
      <div className="px-6 py-6 flex flex-col gap-5 flex-1">
        <div>
          <h3 className="font-sora font-bold text-primary text-xl mb-2">{title}</h3>
          <p className="text-sm text-muted font-light leading-relaxed">{description}</p>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 py-3 border-y border-border-light">
          <span className="font-sora font-bold text-2xl text-primary">{price}</span>
          {setup && (
            <span className="text-xs text-muted font-light">· {setup}</span>
          )}
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-2.5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-primary">
              <Check color={accentColor} />
              {f}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4 border-t border-border-light">
          <a
            href={`/${locale}/contact`}
            className="flex-1 text-center text-sm font-semibold px-5 py-3 rounded-lg transition-opacity hover:opacity-90 text-white"
            style={{ backgroundColor: accentColor }}
          >
            {btnHire}
          </a>
          <a
            href={blogHref}
            className="flex-1 text-center text-sm font-medium px-5 py-3 rounded-lg border border-border-light hover:bg-surface transition-colors text-primary"
          >
            {btnInfo}
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function BotDetailsSection() {
  const t = useTranslations("services_page");
  const locale = useLocale();
  const { ref, inView } = useInView();

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  const bots = [
    {
      icon: <DocIcon color="#185FA5" />,
      headerBg: "#E6F1FB",
      accentColor: "#185FA5",
      title: t("bot1_title"),
      description: t("bot1_desc"),
      features: [t("bot1_f1"), t("bot1_f2"), t("bot1_f3"), t("bot1_f4"), t("bot1_f5")],
      price: t("bot1_price"),
      setup: t("bot1_setup"),
      blogHref: `/${locale}/services/bot-contable`,
    },
    {
      icon: <CreatorIcon color="#1D9E75" />,
      headerBg: "#E1F5EE",
      accentColor: "#1D9E75",
      title: t("bot2_title"),
      description: t("bot2_desc"),
      features: [t("bot2_f1"), t("bot2_f2"), t("bot2_f3"), t("bot2_f4"), t("bot2_f5"), t("bot2_f6")],
      price: t("bot2_price"),
      blogHref: `/${locale}/services/bot-redes`,
    },
    {
      icon: <MicIcon color="#BA7517" />,
      headerBg: "#FAEEDA",
      accentColor: "#BA7517",
      title: t("bot3_title"),
      description: t("bot3_desc"),
      features: [t("bot3_f1"), t("bot3_f2"), t("bot3_f3"), t("bot3_f4"), t("bot3_f5")],
      price: t("bot3_price"),
      setup: t("bot3_setup"),
      blogHref: `/${locale}/services/bot-audio`,
    },
  ];

  const sharedProps = {
    available: t("available"),
    btnHire: t("btn_hire"),
    btnInfo: t("btn_info"),
    locale,
  };

  return (
    <section className="py-16 bg-surface border-t border-border-light">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12" style={fadeStyle(0)}>
          <SectionLabel color="accent">{t("bots_label")}</SectionLabel>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-primary">
            {t("bots_title")}
          </h2>
          <p className="text-muted font-light text-lg max-w-xl leading-relaxed">
            {t("bots_subtitle")}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {bots.map((bot, i) => (
            <BotDetailCard
              key={bot.title}
              {...bot}
              {...sharedProps}
              style={fadeStyle(0.1 + i * 0.12)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
