"use client";

import { useInView } from "@/hooks/useInView";

interface PageCTAProps {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  primaryNote?: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export function PageCTA({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  primaryNote,
  secondaryLabel,
  secondaryHref,
}: PageCTAProps) {
  const { ref, inView } = useInView(0.2);

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return (
    <section className="bg-primary py-24">
      <div
        ref={ref}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8"
      >
        <div className="flex flex-col gap-4" style={fadeStyle(0)}>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-white">{title}</h2>
          <p
            className="text-white text-lg font-light leading-relaxed max-w-xl"
            style={{ opacity: 0.55 }}
          >
            {subtitle}
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          style={fadeStyle(0.15)}
        >
          <div className="flex flex-col items-center gap-1 w-full sm:w-auto">
            <a
              href={primaryHref}
              className="bg-white text-primary font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto text-center"
            >
              {primaryLabel}
            </a>
            {primaryNote && (
              <span className="text-xs font-light" style={{ color: "rgba(255,255,255,0.45)" }}>
                {primaryNote}
              </span>
            )}
          </div>
          <a
            href={secondaryHref}
            className="text-white font-medium text-sm px-7 py-3.5 rounded-lg w-full sm:w-auto text-center transition-colors hover:bg-white/5"
            style={{ border: "1.5px solid rgba(255,255,255,0.3)" }}
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
