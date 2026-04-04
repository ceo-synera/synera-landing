"use client";

import { useTranslations, useLocale } from "next-intl";
import { PageCTA } from "@/components/ui/PageCTA";

export default function AboutCTA() {
  const t = useTranslations("about_page");
  const locale = useLocale();

  return (
    <PageCTA
      title={t("cta_title")}
      subtitle={t("cta_subtitle")}
      primaryLabel={t("cta_primary")}
      primaryHref={`/${locale}/contact`}
      secondaryLabel={t("cta_secondary")}
      secondaryHref="https://wa.me/886981980019"
    />
  );
}
