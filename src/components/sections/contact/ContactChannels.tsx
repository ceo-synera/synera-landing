"use client";

import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";

function TelegramIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path
        d="M6 20L34 8L26 34L20 24L14 28L16 20L6 20Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <line x1="20" y1="24" x2="26" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function EmailIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="5" y="10" width="30" height="22" rx="3" stroke={color} strokeWidth="2" />
      <path d="M5 13l15 10L35 13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BotIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="14" width="24" height="18" rx="4" stroke={color} strokeWidth="2" />
      <circle cx="15" cy="23" r="2.5" fill={color} />
      <circle cx="25" cy="23" r="2.5" fill={color} />
      <line x1="20" y1="6" x2="20" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="5" r="2" fill={color} />
      <line x1="8" y1="28" x2="4" y2="31" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="28" x2="36" y2="31" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CalendarIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="5" y="9" width="30" height="26" rx="3" stroke={color} strokeWidth="2" />
      <line x1="5" y1="18" x2="35" y2="18" stroke={color} strokeWidth="2" />
      <line x1="13" y1="5" x2="13" y2="13" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="27" y1="5" x2="27" y2="13" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M14 26l4 4 8-8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface ChannelCardProps {
  icon: React.ReactNode;
  headerBg: string;
  title: string;
  description: string;
  meta: React.ReactNode;
  btnLabel: string;
  btnHref: string;
  btnStyle: "accent" | "outline" | "teal";
  style?: React.CSSProperties;
}

function ChannelCard({
  icon,
  headerBg,
  title,
  description,
  meta,
  btnLabel,
  btnHref,
  btnStyle,
  style,
}: ChannelCardProps) {
  const btnClass =
    btnStyle === "accent"
      ? "bg-accent text-white hover:opacity-90"
      : btnStyle === "teal"
      ? "bg-teal text-white hover:opacity-90"
      : "border border-border-light text-primary hover:bg-surface";

  return (
    <div
      className="bg-white rounded-2xl border border-border-light overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
      style={style}
    >
      <div className="px-6 py-7 flex items-center gap-4" style={{ backgroundColor: headerBg }}>
        {icon}
        <h3 className="font-sora font-bold text-primary text-xl">{title}</h3>
      </div>
      <div className="px-6 py-6 flex flex-col gap-4 flex-1">
        <p className="text-sm text-muted font-light leading-relaxed">{description}</p>
        <div className="text-sm font-medium text-primary">{meta}</div>
        <a
          href={btnHref}
          target={btnHref.startsWith("http") ? "_blank" : undefined}
          rel={btnHref.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`mt-auto text-center text-sm font-semibold px-5 py-3 rounded-lg transition-all ${btnClass}`}
        >
          {btnLabel}
        </a>
      </div>
    </div>
  );
}

export default function ContactChannels() {
  const t = useTranslations("contact_page");
  const { ref, inView } = useInView();

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return (
    <section className="py-16 bg-surface border-b border-border-light">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ChannelCard
            icon={<TelegramIcon color="#185FA5" />}
            headerBg="#E6F1FB"
            title={t("ch1_title")}
            description={t("ch1_desc")}
            meta={<span className="text-muted font-light">{t("ch1_schedule")}</span>}
            btnLabel={t("ch1_btn")}
            btnHref="https://t.me/syneratech_bot"
            btnStyle="accent"
            style={fadeStyle(0)}
          />
          <ChannelCard
            icon={<EmailIcon color="#888780" />}
            headerBg="#f8f7f4"
            title={t("ch2_title")}
            description={t("ch2_desc")}
            meta={
              <a
                href={`mailto:${t("ch2_email")}`}
                className="text-accent hover:underline"
              >
                {t("ch2_email")}
              </a>
            }
            btnLabel={t("ch2_btn")}
            btnHref={`mailto:${t("ch2_email")}`}
            btnStyle="outline"
            style={fadeStyle(0.1)}
          />
          <ChannelCard
            icon={<CalendarIcon color="#1D9E75" />}
            headerBg="#E1F5EE"
            title={t("ch3_title")}
            description={t("ch3_desc")}
            meta={
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-teal-light text-teal">
                <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
                {t("ch3_badge")}
              </span>
            }
            btnLabel={t("ch3_btn")}
            btnHref="https://cal.com/syneratechnologies/llamada-synera-30-min"
            btnStyle="teal"
            style={fadeStyle(0.2)}
          />
        </div>

        <p
          className="text-center text-sm text-muted italic mt-8"
          style={fadeStyle(0.3)}
        >
          {t("channels_note")}
        </p>
      </div>
    </section>
  );
}
