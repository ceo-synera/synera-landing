"use client";

import { useTranslations } from "next-intl";

const integrations = [
  "LinkedIn",
  "WhatsApp",
  "Instagram",
  "Gmail",
  "Notion",
  "Calendly",
  "Telegram",
  "Zapier",
];

export default function LogosStrip() {
  const t = useTranslations("logos");

  return (
    <div className="bg-surface border-y border-border-light py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-xs text-muted font-medium shrink-0">{t("label")}</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {integrations.map((name, i) => (
              <span
                key={name}
                className="font-sora text-xs font-semibold uppercase tracking-widest text-border-light flex items-center gap-2"
              >
                {i > 0 && (
                  <span className="text-border-light opacity-50 text-[10px]">·</span>
                )}
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
