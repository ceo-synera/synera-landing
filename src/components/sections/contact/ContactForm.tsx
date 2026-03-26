"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";

// ── Shared input classes ──────────────────────────────────────────────────────

const inputClass =
  "w-full border border-border-light rounded-lg px-4 py-3 text-sm text-primary bg-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors";

// ── Info sidebar ──────────────────────────────────────────────────────────────

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="6" stroke="#888780" strokeWidth="1.5" />
      <path d="M7 4v3l2 1.5" stroke="#888780" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Dot({ color }: { color: string }) {
  return (
    <span
      className="w-2 h-2 rounded-full shrink-0 mt-1"
      style={{ backgroundColor: color }}
    />
  );
}

function Separator() {
  return <hr className="border-border-light" />;
}

function InfoSidebar() {
  const t = useTranslations("contact_page");

  return (
    <div className="bg-surface border border-border-light rounded-2xl p-7 flex flex-col gap-5 h-fit">
      {/* Hours */}
      <div>
        <p className="font-sora font-semibold text-primary text-sm mb-3">
          {t("info_hours_title")}
        </p>
        <div className="flex items-center gap-2 text-sm">
          <ClockIcon />
          <span className="text-primary font-medium">{t("info_hours_value")}</span>
        </div>
      </div>

      <Separator />

      {/* Response time */}
      <div>
        <p className="font-sora font-semibold text-primary text-sm mb-3">
          {t("info_response_title")}
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex items-start gap-2 text-sm">
            <Dot color="#185FA5" />
            <span className="text-muted font-light">
              <span className="text-primary font-medium">{t("info_resp_telegram")}:</span>{" "}
              {t("info_resp_telegram_time")}
            </span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <Dot color="#1D9E75" />
            <span className="text-muted font-light">
              <span className="text-primary font-medium">{t("info_resp_email")}:</span>{" "}
              {t("info_resp_email_time")}
            </span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <Dot color="#BA7517" />
            <span className="text-muted font-light">
              <span className="text-primary font-medium">{t("info_resp_form")}:</span>{" "}
              {t("info_resp_form_time")}
            </span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Languages */}
      <div>
        <p className="font-sora font-semibold text-primary text-sm mb-2">
          {t("info_langs_title")}
        </p>
        <p className="text-sm text-muted font-light">{t("info_langs_desc")}</p>
        <p className="text-xl mt-2">🇪🇸 🇺🇸 🇨🇳</p>
      </div>

      <Separator />

      <p className="text-xs text-muted italic leading-relaxed">{t("info_remote")}</p>
    </div>
  );
}

// ── Form ──────────────────────────────────────────────────────────────────────

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const t = useTranslations("contact_page");
  const { ref, inView } = useInView();

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    contactPref: "email",
  });
  const [status, setStatus] = useState<Status>("idle");

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", service: "", message: "", contactPref: "email" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const services = [
    t("field_service_1"),
    t("field_service_2"),
    t("field_service_3"),
    t("field_service_4"),
    t("field_service_5"),
    t("field_service_6"),
    t("field_service_7"),
    t("field_service_8"),
  ];

  const prefs = [
    { value: "email", label: t("pref_email") },
    { value: "telegram", label: t("pref_telegram") },
    { value: "meet", label: t("pref_meet") },
  ];

  return (
    <section className="py-20 bg-white border-b border-border-light">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Left: form */}
          <div style={fadeStyle(0)}>
            <h2 className="font-sora text-2xl font-bold text-primary mb-1">{t("form_title")}</h2>
            <p className="text-sm text-muted font-light mb-8">{t("form_subtitle")}</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-primary">{t("field_name")}</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="Juan García"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-primary">{t("field_email")}</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    placeholder="juan@empresa.com"
                  />
                </div>
              </div>

              {/* Company + Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-primary">
                    {t("field_company")}{" "}
                    <span className="text-muted font-light">{t("field_company_optional")}</span>
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className={inputClass}
                    placeholder="Mi empresa"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-primary">{t("field_service")}</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      {t("field_service_placeholder")}
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-primary">{t("field_message")}</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={inputClass}
                  placeholder="Contanos qué querés automatizar o consultar..."
                />
              </div>

              {/* Contact preference */}
              <div className="flex flex-col gap-2.5">
                <label className="text-sm font-medium text-primary">{t("field_contact_pref")}</label>
                <div className="flex flex-wrap gap-4">
                  {prefs.map(({ value, label }) => (
                    <label key={value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactPref"
                        value={value}
                        checked={form.contactPref === value}
                        onChange={() => setForm({ ...form, contactPref: value })}
                        className="accent-accent w-4 h-4"
                      />
                      <span className="text-sm text-primary">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full bg-primary text-white font-semibold text-sm px-6 py-3.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="40 20" />
                    </svg>
                    {t("btn_sending")}
                  </>
                ) : (
                  t("btn_submit")
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2.5 text-sm font-medium text-teal bg-teal-light px-4 py-3 rounded-lg">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#1D9E75" strokeWidth="1.5" />
                    <path d="M5 8l2 2 4-4" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t("success_msg")}
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2.5 text-sm font-medium text-red-600 bg-red-50 px-4 py-3 rounded-lg border border-red-200">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#dc2626" strokeWidth="1.5" />
                    <path d="M8 5v4M8 11v.5" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {t("error_msg")}
                </div>
              )}
            </form>
          </div>

          {/* Right: info */}
          <div style={fadeStyle(0.15)}>
            <InfoSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
