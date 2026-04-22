"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useInView } from "@/hooks/useInView";
import { SectionLabel } from "@/components/ui/SectionLabel";

// ── Feature item ──────────────────────────────────────────────────────────────

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 text-accent">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-primary text-sm mb-0.5">{title}</p>
        <p className="text-xs text-muted font-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6.25" stroke="currentColor" strokeWidth="1.25" />
      <path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="18" x2="12" y2="18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ScanIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function SyneraPortalSection() {
  const locale = useLocale();
  const { ref, inView } = useInView();

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  return (
    <section className="py-16 bg-white border-t border-border-light">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: info */}
          <div className="flex flex-col gap-6" style={fadeStyle(0)}>
            <div className="flex items-center gap-3">
              <SectionLabel color="accent">Producto propio</SectionLabel>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-teal-light text-teal">
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse inline-block" />
                Live
              </span>
            </div>

            <div>
              <h2 className="font-sora text-3xl sm:text-4xl font-bold text-primary leading-tight mb-3">
                Synera Portal
              </h2>
              <p className="text-muted font-light text-lg leading-relaxed">
                Check-in digital para hoteles. Reemplaza el proceso manual de recepción: el huésped recibe un link, escanea su documento, firma digitalmente y completa el registro antes de llegar.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-4">
              <Feature
                icon={<MobileIcon />}
                title="100% mobile, sin instalar nada"
                description="Optimizado para iPhone y Android. Funciona desde cualquier navegador, sin apps."
              />
              <Feature
                icon={<ScanIcon />}
                title="OCR de documentos + firma digital"
                description="Reconocimiento óptico del documento de identidad y firma electrónica integradas."
              />
              <Feature
                icon={<ClockIcon />}
                title="Check-in en menos de 2 minutos"
                description="El huésped completa todo antes de llegar. Cero tiempo de espera en recepción."
              />
              <Feature
                icon={<ShieldIcon />}
                title="Acceso seguro por contraseña única"
                description="Cada link es de un solo uso y está protegido por autenticación de un factor."
              />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://synera-portal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl bg-accent text-white hover:bg-accent-dark transition-colors"
              >
                Ver demo en vivo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link
                href={`/${locale}/contact`}
                className="flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl border border-border-light text-primary hover:bg-surface transition-colors"
              >
                Quiero implementarlo →
              </Link>
            </div>
          </div>

          {/* Right: visual mockup */}
          <div style={fadeStyle(0.15)}>
            <div className="bg-primary rounded-2xl p-6 relative overflow-hidden">
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-accent/10 translate-x-20 -translate-y-20" />

              {/* Phone mockup */}
              <div className="relative bg-white/5 rounded-xl border border-white/10 p-5 flex flex-col gap-4">
                {/* Status bar */}
                <div className="flex items-center justify-between text-white/40 text-[10px]">
                  <span>Synera Portal</span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                    Seguro
                  </span>
                </div>

                {/* Content blocks */}
                <div className="flex flex-col gap-3">
                  <div className="bg-white/10 rounded-lg p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/40 flex items-center justify-center">
                      <CheckIcon />
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">Datos del huésped</p>
                      <p className="text-white/40 text-[10px]">Completado</p>
                    </div>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-auto text-teal">
                      <circle cx="6" cy="6" r="5.25" fill="#1D9E75" />
                      <path d="M3.5 6l1.5 1.5 3-3" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div className="bg-white/10 rounded-lg p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/40 flex items-center justify-center">
                      <ScanIcon />
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">Documento escaneado</p>
                      <p className="text-white/40 text-[10px]">Completado</p>
                    </div>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-auto text-teal">
                      <circle cx="6" cy="6" r="5.25" fill="#1D9E75" />
                      <path d="M3.5 6l1.5 1.5 3-3" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div className="bg-accent/20 rounded-lg p-3 flex items-center gap-3 border border-accent/30">
                    <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                      <ShieldIcon />
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">Firma digital</p>
                      <p className="text-white/60 text-[10px]">En curso...</p>
                    </div>
                    <div className="ml-auto w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </div>
                </div>

                {/* Progress */}
                <div>
                  <div className="flex justify-between text-[10px] text-white/40 mb-1.5">
                    <span>Progreso</span>
                    <span>67%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: "67%" }} />
                  </div>
                </div>

                <p className="text-center text-white/40 text-[10px]">Completá el check-in antes de llegar 🏨</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
