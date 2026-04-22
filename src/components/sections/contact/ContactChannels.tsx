"use client";

import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";

function WhatsAppIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
      <div className="px-5 py-5 sm:px-6 sm:py-7 flex items-center gap-3 sm:gap-4" style={{ backgroundColor: headerBg }}>
        {icon}
        <h3 className="font-sora font-bold text-primary text-lg sm:text-xl">{title}</h3>
      </div>
      <div className="px-5 py-5 sm:px-6 sm:py-6 flex flex-col gap-4 flex-1">
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
            icon={<WhatsAppIcon color="#185FA5" />}
            headerBg="#E6F1FB"
            title={t("ch1_title")}
            description={t("ch1_desc")}
            meta={<span className="text-muted font-light">{t("ch1_schedule")}</span>}
            btnLabel={t("ch1_btn")}
            btnHref="https://wa.me/886981980019"
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
