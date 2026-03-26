"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useInView } from "@/hooks/useInView";

function BoxIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path
        d="M31.5 12L18 5 4.5 12v13.5L18 32l13.5-6.5V12z"
        stroke="#185FA5"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <polyline
        points="4.5,12 18,19 31.5,12"
        stroke="#185FA5"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line
        x1="18"
        y1="19"
        x2="18"
        y2="32"
        stroke="#185FA5"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PacksBlock() {
  const t = useTranslations("pricing_page");
  const locale = useLocale();
  const { ref, inView } = useInView(0.15);

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="rounded-2xl border px-8 py-10 flex flex-col items-center text-center gap-5"
          style={{
            backgroundColor: "#E6F1FB",
            borderColor: "#185FA5",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <BoxIcon />
          <div className="flex flex-col gap-2 max-w-xl">
            <h3 className="font-sora font-bold text-primary text-xl">{t("pack_title")}</h3>
            <p className="text-sm text-primary font-light leading-relaxed opacity-75">
              {t("pack_text")}
            </p>
          </div>
          <Link
            href={`/${locale}/contact`}
            className="bg-accent text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors"
          >
            {t("pack_btn")}
          </Link>
        </div>
      </div>
    </section>
  );
}
