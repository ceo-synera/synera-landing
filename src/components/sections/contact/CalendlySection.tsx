"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function CalendlySection() {
  const t = useTranslations("contact_page");
  const { ref, inView } = useInView();

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "llamada-synera-30-min", {origin:"https://app.cal.com"});
      Cal.ns["llamada-synera-30-min"]("inline", {
        elementOrSelector:"#my-cal-inline-llamada-synera-30-min",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
        calLink: "syneratechnologies/llamada-synera-30-min",
      });
      Cal.ns["llamada-synera-30-min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="calendly" className="py-20 bg-surface border-t border-border-light">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-10" style={fadeStyle(0)}>
          <SectionLabel color="teal">{t("calendly_label")}</SectionLabel>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-primary">
            {t("calendly_title")}
          </h2>
          <p className="text-muted font-light text-lg max-w-xl leading-relaxed">
            {t("calendly_subtitle")}
          </p>
        </div>

        {/* Cal.com embed */}
        <div
          id="my-cal-inline-llamada-synera-30-min"
          className="bg-white border border-border-light rounded-2xl overflow-hidden"
          style={{ width: "100%", minHeight: 600, overflow: "scroll" }}
        />
      </div>
    </section>
  );
}
