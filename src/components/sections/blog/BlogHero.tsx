"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function BlogHero() {
  const t = useTranslations("blog");
  const locale = useLocale();

  return (
    <section className="pt-28 pb-14 bg-white border-b border-border-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href={`/${locale}`} className="hover:text-primary transition-colors">
            {t("breadcrumb_home")}
          </Link>
          <span>/</span>
          <span className="text-primary font-medium">{t("hero_label")}</span>
        </nav>
        <div className="flex flex-col items-start gap-5 max-w-3xl">
          <SectionLabel color="accent">{t("hero_label")}</SectionLabel>
          <h1 className="font-sora text-4xl sm:text-5xl font-bold text-primary leading-tight">
            {t("hero_title")}
          </h1>
          <p className="text-lg text-muted font-light leading-relaxed">
            {t("hero_subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}
