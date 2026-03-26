"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function PricingHero() {
  const t = useTranslations("pricing_page");
  const nav = useTranslations("nav");
  const locale = useLocale();

  return (
    <section className="bg-white pt-28 pb-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted" aria-label="breadcrumb">
          <Link href={`/${locale}`} className="hover:text-primary transition-colors">
            {t("breadcrumb_home")}
          </Link>
          <span className="text-border-light">/</span>
          <span className="text-primary font-medium">{nav("pricing")}</span>
        </nav>

        <SectionLabel color="accent">{t("hero_label")}</SectionLabel>

        <h1 className="font-sora text-4xl sm:text-5xl font-bold text-primary max-w-2xl leading-tight">
          {t("hero_title")}
        </h1>

        <p className="text-muted font-light text-lg leading-relaxed max-w-lg">
          {t("hero_subtitle")}
        </p>
      </div>
    </section>
  );
}
