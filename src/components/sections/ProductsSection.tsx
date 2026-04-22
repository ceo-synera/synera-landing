"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useInView } from "@/hooks/useInView";
import { SectionLabel } from "@/components/ui/SectionLabel";

// ── Icons ─────────────────────────────────────────────────────────────────────

function HotelIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 22V8l9-6 9 6v14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="9" y="14" width="6" height="8" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="5" y="11" width="3" height="3" rx="0.5" fill={color} opacity="0.4" />
      <rect x="16" y="11" width="3" height="3" rx="0.5" fill={color} opacity="0.4" />
    </svg>
  );
}

function GearsIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke={color} strokeWidth="1.5" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

function ChatIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="8" y1="10" x2="16" y2="10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="14" x2="12" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BrainIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Featured card (Synera Portal) ─────────────────────────────────────────────

function PortalCard({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      className="relative bg-primary rounded-2xl p-7 flex flex-col gap-5 overflow-hidden group"
      style={style}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-5 bg-white translate-x-16 -translate-y-16" />
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-5 bg-accent translate-x-[-30%] translate-y-[30%]" />

      {/* Badge */}
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-white/80">
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse inline-block" />
          Producto live
        </span>
      </div>

      {/* Icon + title */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center">
          <HotelIcon color="#fff" />
        </div>
        <div>
          <h3 className="font-sora font-bold text-white text-xl leading-tight">Synera Portal</h3>
          <p className="text-white/50 text-xs font-light">Check-in digital para hoteles</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-white/70 text-sm font-light leading-relaxed">
        Reemplaza el check-in manual de recepción. El huésped recibe un link, escanea su documento, firma digitalmente y completa el registro antes de llegar al hotel.
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {["Funciona en iPhone y Android, sin instalar apps", "OCR de documentos + firma digital", "El huésped completa el check-in en ~2 minutos"].map((f) => (
          <li key={f} className="flex items-start gap-2 text-white/70 text-xs font-light">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 mt-0.5">
              <circle cx="6" cy="6" r="5.25" stroke="#1D9E75" strokeWidth="1.25" />
              <path d="M3.5 6l1.5 1.5 3-3" stroke="#1D9E75" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* Link */}
      <a
        href="https://synera-portal.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto self-start flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors px-4 py-2.5 rounded-lg"
      >
        Ver demo en vivo
        <ArrowIcon />
      </a>
    </div>
  );
}

// ── Service card ──────────────────────────────────────────────────────────────

interface ServiceCardProps {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  href: string;
  isExternal?: boolean;
  style?: React.CSSProperties;
}

function ServiceCard({ icon, iconBg, iconColor, title, description, href, isExternal, style }: ServiceCardProps) {
  const Tag = isExternal ? "a" : Link;
  const extraProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    // @ts-expect-error – polymorphic tag
    <Tag
      href={href}
      {...extraProps}
      className="group bg-white rounded-2xl border border-border-light p-6 flex flex-col gap-4 hover:border-accent hover:shadow-md transition-all duration-200"
      style={style}
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: iconBg, color: iconColor }}>
        {icon}
      </div>
      <div className="flex flex-col gap-1.5 flex-1">
        <h3 className="font-sora font-semibold text-primary text-base group-hover:text-accent transition-colors duration-200">{title}</h3>
        <p className="text-sm text-muted font-light leading-relaxed">{description}</p>
      </div>
      <span className="flex items-center gap-1.5 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Ver más <ArrowIcon />
      </span>
    </Tag>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function ProductsSection() {
  const locale = useLocale();
  const { ref, inView } = useInView();

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  const services = [
    {
      icon: <GearsIcon color="#185FA5" />,
      iconBg: "#E6F1FB",
      iconColor: "#185FA5",
      title: "Automatizaciones por industria",
      description: "Soluciones específicas para marketing, salud, logística, retail, legal y más. Cada rubro tiene sus propios flujos automatizables.",
      href: `/${locale}/services`,
    },
    {
      icon: <ChatIcon color="#1D9E75" />,
      iconBg: "#E1F5EE",
      iconColor: "#1D9E75",
      title: "Bots personalizados",
      description: "Atención al cliente, agendamiento, onboarding y seguimiento de ventas. Integrables con WhatsApp, web y cualquier herramienta que ya uses.",
      href: `/${locale}/services`,
    },
    {
      icon: <BrainIcon color="#BA7517" />,
      iconBg: "#FAEEDA",
      iconColor: "#BA7517",
      title: "Consultoría estratégica de IA",
      description: "Diagnosticamos tu operación e identificamos qué procesos tienen mayor potencial de automatización. Entregable en PDF con roadmap priorizado.",
      href: `/${locale}/services`,
    },
  ];

  return (
    <section id="soluciones" className="py-20 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12" style={fadeStyle(0)}>
          <SectionLabel color="accent">Lo que construimos</SectionLabel>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-primary max-w-xl leading-tight">
            Soluciones reales, no demos
          </h2>
          <p className="text-muted font-light text-lg max-w-xl leading-relaxed">
            Desde productos propios desplegados hasta automatizaciones completamente a medida para tu negocio.
          </p>
        </div>

        {/* Layout: featured left + 3 cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <PortalCard style={fadeStyle(0.1)} />
          <div className="flex flex-col gap-4">
            {services.map((svc, i) => (
              <ServiceCard key={svc.title} {...svc} style={fadeStyle(0.15 + i * 0.1)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
