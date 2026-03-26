"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useInView } from "@/hooks/useInView";

// ── Check icon ────────────────────────────────────────────────────────────────

function Check({ color = "#185FA5" }: { color?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0 mt-0.5">
      <path
        d="M2.5 7.5l3.5 3.5 6.5-6.5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Feature list ──────────────────────────────────────────────────────────────

function FeatureList({ features, checkColor }: { features: string[]; checkColor?: string }) {
  return (
    <ul className="flex flex-col gap-2.5 flex-1">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2.5 text-sm text-primary">
          <Check color={checkColor} />
          {f}
        </li>
      ))}
    </ul>
  );
}

// ── Monthly plan card ─────────────────────────────────────────────────────────

interface MonthlyCardProps {
  name: string;
  price: string;
  priceMonth: string;
  desc: string;
  features: string[];
  buttonLabel: string;
  buttonHref: string;
  featured?: boolean;
  badge?: string;
  style?: React.CSSProperties;
}

function MonthlyCard({
  name,
  price,
  priceMonth,
  desc,
  features,
  buttonLabel,
  buttonHref,
  featured,
  badge,
  style,
}: MonthlyCardProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl flex flex-col overflow-hidden ${
        featured
          ? "border-2 border-accent shadow-lg shadow-accent/10"
          : "border border-border-light"
      }`}
      style={style}
    >
      {/* Featured badge */}
      {featured && badge && (
        <div className="bg-accent text-white text-[11px] font-semibold uppercase tracking-widest text-center py-2">
          {badge}
        </div>
      )}

      <div className="p-7 flex flex-col gap-6 flex-1">
        {/* Name */}
        <div>
          <span className="font-sora text-xs font-semibold uppercase tracking-widest text-muted">
            {name}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-end gap-1">
          <span className="font-sora text-5xl font-bold text-primary leading-none">{price}</span>
          {price !== "—" && (
            <span className="text-muted text-sm font-light mb-1">{priceMonth}</span>
          )}
        </div>

        {/* Desc */}
        <p className="text-sm text-muted font-light leading-relaxed">{desc}</p>

        {/* Features */}
        <FeatureList features={features} checkColor={featured ? "#185FA5" : "#888780"} />

        {/* Button */}
        <a
          href={buttonHref}
          className={`w-full text-center text-sm font-semibold px-5 py-3.5 rounded-lg transition-colors mt-auto ${
            featured
              ? "bg-primary text-white hover:bg-gray-800"
              : "border border-border-light text-primary hover:bg-surface"
          }`}
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  );
}

// ── One-time card ─────────────────────────────────────────────────────────────

interface OneTimeCardProps {
  name: string;
  priceNote: string;
  desc: string;
  features: string[];
  buttonLabel: string;
  buttonHref: string;
  style?: React.CSSProperties;
}

function OneTimeCard({
  name,
  priceNote,
  desc,
  features,
  buttonLabel,
  buttonHref,
  style,
}: OneTimeCardProps) {
  return (
    <div
      className="bg-white rounded-2xl border border-border-light flex flex-col overflow-hidden"
      style={style}
    >
      <div className="p-7 flex flex-col gap-6 flex-1">
        <span className="font-sora text-xs font-semibold uppercase tracking-widest text-muted">
          {name}
        </span>

        {/* Price placeholder */}
        <div className="flex flex-col gap-1">
          <span className="font-sora text-5xl font-bold text-primary leading-none">—</span>
          <span className="text-xs text-muted font-light">{priceNote}</span>
        </div>

        <p className="text-sm text-muted font-light leading-relaxed">{desc}</p>

        <FeatureList features={features} checkColor="#888780" />

        <a
          href={buttonHref}
          className="w-full text-center text-sm font-semibold px-5 py-3.5 rounded-lg border border-border-light text-primary hover:bg-surface transition-colors mt-auto"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function PricingPlans() {
  const t = useTranslations("pricing_page");
  const locale = useLocale();
  const [tab, setTab] = useState<"monthly" | "one_time">("monthly");
  const { ref, inView } = useInView();

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return (
    <section className="py-6 pb-16 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toggle */}
        <div className="flex justify-center mb-12" style={fadeStyle(0)}>
          <div className="inline-flex bg-surface rounded-full p-1 border border-border-light">
            <button
              onClick={() => setTab("monthly")}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                tab === "monthly" ? "bg-primary text-white shadow-sm" : "text-muted hover:text-primary"
              }`}
            >
              {t("toggle_monthly")}
            </button>
            <button
              onClick={() => setTab("one_time")}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                tab === "one_time" ? "bg-primary text-white shadow-sm" : "text-muted hover:text-primary"
              }`}
            >
              {t("toggle_one_time")}
            </button>
          </div>
        </div>

        {/* ── Monthly cards ── */}
        {tab === "monthly" && (
          <div className="tab-fade-in grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <MonthlyCard
              name={t("plan1_name")}
              price={t("price_tbd")}
              priceMonth={t("price_month")}
              desc={t("plan1_desc")}
              features={[
                t("plan1_f1"),
                t("plan1_f2"),
                t("plan1_f3"),
                t("plan1_f4"),
                t("plan1_f5"),
              ]}
              buttonLabel={t("btn_consult")}
              buttonHref={`/${locale}/contact`}
              style={fadeStyle(0.08)}
            />
            <MonthlyCard
              name={t("plan2_name")}
              price={t("price_tbd")}
              priceMonth={t("price_month")}
              desc={t("plan2_desc")}
              features={[
                t("plan2_f1"),
                t("plan2_f2"),
                t("plan2_f3"),
                t("plan2_f4"),
                t("plan2_f5"),
                t("plan2_f6"),
              ]}
              buttonLabel={t("btn_consult")}
              buttonHref={`/${locale}/contact`}
              featured
              badge={t("plan2_badge")}
              style={fadeStyle(0.16)}
            />
            <MonthlyCard
              name={t("plan3_name")}
              price={t("price_custom")}
              priceMonth=""
              desc={t("plan3_desc")}
              features={[
                t("plan3_f1"),
                t("plan3_f2"),
                t("plan3_f3"),
                t("plan3_f4"),
                t("plan3_f5"),
                t("plan3_f6"),
              ]}
              buttonLabel={t("btn_call")}
              buttonHref="https://cal.com/syneratechnologies/30min"
              style={fadeStyle(0.24)}
            />
          </div>
        )}

        {/* ── One-time cards ── */}
        {tab === "one_time" && (
          <div className="tab-fade-in grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <OneTimeCard
              name={t("ot1_name")}
              priceNote={t("ot1_price_note")}
              desc={t("ot1_desc")}
              features={[t("ot1_f1"), t("ot1_f2"), t("ot1_f3"), t("ot1_f4")]}
              buttonLabel={t("btn_consult")}
              buttonHref={`/${locale}/contact`}
              style={fadeStyle(0.08)}
            />
            <OneTimeCard
              name={t("ot2_name")}
              priceNote={t("ot2_price_note")}
              desc={t("ot2_desc")}
              features={[
                t("ot2_f1"),
                t("ot2_f2"),
                t("ot2_f3"),
                t("ot2_f4"),
                t("ot2_f5"),
              ]}
              buttonLabel={t("btn_call")}
              buttonHref="https://cal.com/syneratechnologies/30min"
              style={fadeStyle(0.16)}
            />
          </div>
        )}
      </div>
    </section>
  );
}
