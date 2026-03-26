"use client";

import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";
import { SectionLabel } from "@/components/ui/SectionLabel";

// ── Icons ─────────────────────────────────────────────────────────────────────

function DocIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="9" x2="8" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CreatorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 2l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="currentColor" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="9" y="2" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 10a7 7 0 0 0 14 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9" y1="22" x2="15" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Bot card data ─────────────────────────────────────────────────────────────

interface BotCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  accentColor: string;
  iconBg: string;
  tagBg: string;
  tagText: string;
  borderBottom: string;
  style?: React.CSSProperties;
}

function BotCard({
  icon,
  title,
  description,
  tags,
  accentColor,
  iconBg,
  tagBg,
  tagText,
  borderBottom,
  style,
}: BotCardProps) {
  return (
    <div
      className="group relative bg-white rounded-2xl border border-border-light p-6 flex flex-col gap-4 cursor-default overflow-hidden"
      style={{
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        ...style,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 12px 32px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: iconBg, color: accentColor }}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-sora font-semibold text-primary text-base">{title}</h3>
        <p className="text-sm text-muted font-light leading-relaxed">{description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium px-2.5 py-1 rounded-full"
            style={{ backgroundColor: tagBg, color: tagText }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom color line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function BotsSection() {
  const t = useTranslations("bots");
  const { ref, inView } = useInView();

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  const bots = [
    {
      icon: <DocIcon />,
      title: t("bot1_title"),
      description: t("bot1_desc"),
      tags: [t("bot1_tag1"), t("bot1_tag2"), t("bot1_tag3"), t("bot1_tag4")],
      accentColor: "#185FA5",
      iconBg: "#E6F1FB",
      tagBg: "#E6F1FB",
      tagText: "#185FA5",
      borderBottom: "#185FA5",
    },
    {
      icon: <CreatorIcon />,
      title: t("bot2_title"),
      description: t("bot2_desc"),
      tags: [t("bot2_tag1"), t("bot2_tag2"), t("bot2_tag3")],
      accentColor: "#1D9E75",
      iconBg: "#E1F5EE",
      tagBg: "#E1F5EE",
      tagText: "#1D9E75",
      borderBottom: "#1D9E75",
    },
    {
      icon: <MicIcon />,
      title: t("bot3_title"),
      description: t("bot3_desc"),
      tags: [t("bot3_tag1"), t("bot3_tag2"), t("bot3_tag3")],
      accentColor: "#BA7517",
      iconBg: "#FAEEDA",
      tagBg: "#FAEEDA",
      tagText: "#BA7517",
      borderBottom: "#BA7517",
    },
  ];

  return (
    <section id="bots" className="py-20 bg-white">
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bots.map((bot, i) => (
            <BotCard key={bot.title} {...bot} style={fadeStyle(0.1 + i * 0.12)} />
          ))}
        </div>
      </div>
    </section>
  );
}
