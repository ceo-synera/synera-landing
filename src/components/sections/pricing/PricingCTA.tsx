"use client";

import { useTranslations } from "next-intl";
import { PageCTA } from "@/components/ui/PageCTA";

export default function PricingCTA() {
  const t = useTranslations("pricing_page");

  return (
    <PageCTA
      title={t("cta_title")}
      subtitle={t("cta_subtitle")}
      primaryLabel={t("cta_primary")}
      primaryHref="#calendly"
      secondaryLabel={t("cta_secondary")}
      secondaryHref="#telegram"
    />
  );
}
