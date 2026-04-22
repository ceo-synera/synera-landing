"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const accentWords: Record<string, string> = {
  es: "automático",
  en: "autopilot",
};

function highlightTitle(title: string, locale: string) {
  const word = accentWords[locale] ?? accentWords["es"];
  const parts = title.split(word);
  if (parts.length < 2) return <>{title}</>;
  return (
    <>
      {parts[0]}
      <span className="text-accent">{word}</span>
      {parts[1]}
    </>
  );
}

// Bot icon SVG
function BotIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="5" width="13" height="9" rx="2" stroke="#185FA5" strokeWidth="1.5" />
      <path d="M5.5 9h5M8 7v4" stroke="#185FA5" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 5V3.5A2.5 2.5 0 0 1 8 1v0a2.5 2.5 0 0 1 3 2.5V5" stroke="#185FA5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const scrollToBots = () => {
    document.getElementById("bots")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-white pt-16 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">

          {/* ── LEFT: content ── */}
          <div className="flex flex-col items-start gap-6">
            {/* Badge */}
            <div className="animate-fade-up-0 inline-flex items-center gap-2 bg-teal-light text-teal text-sm font-medium px-4 py-2 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
              </span>
              {t("badge")}
            </div>

            {/* H1 */}
            <h1 className="animate-fade-up-1 font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              {highlightTitle(t("title"), locale)}
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up-2 text-base sm:text-lg text-muted font-light leading-relaxed max-w-lg">
              {t("subtitle")}
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-3 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href={`/${locale}/contact`}
                className="bg-primary text-white font-medium text-sm px-6 py-3.5 rounded-lg hover:bg-gray-800 transition-colors text-center"
              >
                {t("cta_primary")}
              </Link>
              <button
                onClick={scrollToBots}
                className="text-primary font-medium text-sm px-6 py-3.5 rounded-lg border border-border-light hover:bg-surface transition-colors"
              >
                {t("cta_secondary")}
              </button>
            </div>
          </div>

          {/* ── RIGHT: chat card ── */}
          <div className="animate-fade-up-2 relative">
            {/* Decorative circle */}
            <div className="absolute -top-8 -right-4 w-28 h-28 rounded-full bg-accent-light opacity-50 blur-md pointer-events-none" />

            <div className="relative bg-surface rounded-2xl border border-border-light shadow-sm p-6 overflow-hidden">
              {/* Card header */}
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-border-light">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                <span className="font-sora text-xs font-semibold text-primary">
                  {t("chat_label")}
                </span>
              </div>

              {/* Messages */}
              <div className="flex flex-col gap-3">
                {/* Bot message 1 */}
                <div className="chat-msg-1 flex gap-2.5 items-start">
                  <div className="w-7 h-7 rounded-full bg-accent-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BotIcon />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%] border border-border-light shadow-sm">
                    <p className="text-sm text-primary leading-relaxed">{t("chat_bot1")}</p>
                  </div>
                </div>

                {/* User message */}
                <div className="chat-msg-2 flex justify-end">
                  <div className="bg-primary rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[78%]">
                    <p className="text-sm text-white leading-relaxed">{t("chat_user")}</p>
                  </div>
                </div>

                {/* Bot message 2 */}
                <div className="chat-msg-3 flex gap-2.5 items-start">
                  <div className="w-7 h-7 rounded-full bg-accent-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BotIcon />
                  </div>
                  <div className="bg-accent-light rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%]">
                    <p className="text-sm text-accent font-medium leading-relaxed">{t("chat_bot2")}</p>
                  </div>
                </div>
              </div>

              {/* Status indicator */}
              <div className="chat-status mt-4 pt-4 border-t border-border-light flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                <span className="text-xs text-teal font-medium">{t("chat_status")}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
