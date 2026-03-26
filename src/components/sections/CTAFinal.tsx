"use client";

import { useTranslations } from "next-intl";
import { PageCTA } from "@/components/ui/PageCTA";

export default function CTAFinal() {
  const t = useTranslations("cta_section");

  return (
    <PageCTA
      title={t("title")}
      subtitle={t("subtitle")}
      primaryLabel={t("primary")}
      primaryHref="#calendly"
      secondaryLabel={t("secondary")}
      secondaryHref="#telegram"
    />
  );
}
