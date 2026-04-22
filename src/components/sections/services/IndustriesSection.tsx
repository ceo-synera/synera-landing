"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";

// ── Types ─────────────────────────────────────────────────────────────────────

type AutomationTag = "Ahorro" | "Operación" | "Ventas";

interface Automation {
  tag: AutomationTag;
  title: string;
  description: string;
}

interface Industry {
  id: string;
  emoji: string;
  name: string;
  description: string;
  automations: Automation[];
  benefits: string[];
}

// ── Data ──────────────────────────────────────────────────────────────────────

const industries: Industry[] = [
  {
    id: "hoteleria",
    emoji: "🏨",
    name: "Hotelería",
    description: "Operación fragmentada entre recepción, housekeeping y huéspedes. Mucha coordinación manual y tiempo perdido en tareas administrativas.",
    automations: [
      { tag: "Operación", title: "Check-in digital (Synera Portal)", description: "El huésped recibe un link, escanea su documento, firma digitalmente y completa el registro antes de llegar. Sin cola, sin papeles." },
      { tag: "Operación", title: "Panel de housekeeping", description: "App para limpiadores: ven qué habitaciones están listas para limpiar según check-out confirmado y marcan el estado en tiempo real (limpiando / lista)." },
      { tag: "Operación", title: "Coordinación automática de check-out", description: "Cuando se registra un check-out, se notifica automáticamente al equipo de housekeeping qué habitación limpiar y en qué orden según las nuevas entradas." },
      { tag: "Ventas", title: "Comunicación automatizada con el huésped", description: "Mensajes de bienvenida, instrucciones de llegada, encuesta post-estadía y solicitud de reseña enviados automáticamente en el momento justo." },
      { tag: "Ahorro", title: "Registro digital de mantenimiento", description: "El personal reporta incidencias desde el celular. Se genera la orden de trabajo automáticamente y queda el historial por habitación." },
      { tag: "Ahorro", title: "Reportes de ocupación y limpieza", description: "Dashboard en tiempo real con estado de cada habitación: ocupada, en check-out, limpiando, lista. Visible para toda la operación sin llamadas ni radios." },
    ],
    benefits: ["Cero cola en recepción", "Housekeeping coordinado en tiempo real", "Mejor experiencia del huésped"],
  },
  {
    id: "marketing",
    emoji: "📣",
    name: "Marketing",
    description: "Alta demanda de contenido, reportes y gestión de campañas en múltiples canales.",
    automations: [
      { tag: "Ahorro", title: "Creación de contenido masivo", description: "Genera posts, copies y variantes de anuncios a escala para cualquier canal." },
      { tag: "Operación", title: "Reportes automáticos", description: "Consolida métricas de Meta, Google y TikTok en un reporte semanal listo." },
      { tag: "Ventas", title: "Personalización de email", description: "Segmenta y personaliza campañas según comportamiento del usuario." },
      { tag: "Ahorro", title: "Gestión de comentarios", description: "Responde comentarios y DMs automáticamente con tono de marca." },
    ],
    benefits: ["10x producción de contenido", "Reduce agencia externa", "Campañas más rentables"],
  },
  {
    id: "construccion",
    emoji: "🏗️",
    name: "Construcción",
    description: "Industria con mucho papeleo, coordinación de subcontratistas y control de obra manual.",
    automations: [
      { tag: "Ahorro", title: "Presupuestos automáticos", description: "Genera cotizaciones desde planos o especificaciones usando AI." },
      { tag: "Operación", title: "Control de avance de obra", description: "Fotos → reporte de avance automático. Detecta desviaciones vs plan." },
      { tag: "Operación", title: "Gestión de proveedores", description: "Seguimiento de pedidos, alertas de retrasos y comparación de cotizaciones." },
      { tag: "Ahorro", title: "Reportes para clientes", description: "Genera informe de avance semanal con fotos, % completado y próximos pasos." },
    ],
    benefits: ["Reduce retrasos 30%", "Ahorra 15 hrs/semana admin", "Menos errores en presupuestos"],
  },
  {
    id: "inmobiliaria",
    emoji: "🏢",
    name: "Inmobiliaria",
    description: "Alto volumen de leads fríos, proceso de calificación lento y mucho trabajo manual.",
    automations: [
      { tag: "Ventas", title: "Calificación de leads 24/7", description: "Chatbot califica, agenda visitas y responde consultas sin agente." },
      { tag: "Ahorro", title: "Generación de fichas", description: "Crea descripciones de propiedades, posts y fichas desde fotos + datos básicos." },
      { tag: "Operación", title: "CRM automatizado", description: "Actualiza el CRM, envía seguimientos y recuerda tareas al agente." },
      { tag: "Ventas", title: "Tours virtuales asistidos", description: "AI guía al cliente en recorrido virtual y responde preguntas en tiempo real." },
    ],
    benefits: ["3x más leads atendidos", "Convierte leads fríos", "Reduce tiempo de cierre"],
  },
  {
    id: "restaurantes",
    emoji: "🍽️",
    name: "Restaurantes",
    description: "Operación muy manual, alta rotación de personal y gestión ineficiente de pedidos.",
    automations: [
      { tag: "Operación", title: "Toma de pedidos por WhatsApp", description: "Recibe, procesa y confirma pedidos automáticamente sin personal." },
      { tag: "Ahorro", title: "Control de inventario", description: "Alerta cuando hay baja existencia y genera órdenes de compra automáticas." },
      { tag: "Ventas", title: "Programa de fidelización", description: "Mensajes automáticos con promociones según historial de visitas." },
      { tag: "Operación", title: "Gestión de reseñas", description: "Responde reseñas en Google y Rappi automáticamente con tono personalizado." },
    ],
    benefits: ["Reduce 1-2 FTEs caja", "Baja merma 20-30%", "Aumenta recompra"],
  },
  {
    id: "retail",
    emoji: "🛍️",
    name: "Retail",
    description: "E-commerce con mucho soporte repetitivo, gestión de catálogo y abandono de carrito.",
    automations: [
      { tag: "Ventas", title: "Recuperación de carrito", description: "Secuencia automatizada de WhatsApp/email cuando el cliente abandona el carrito." },
      { tag: "Ahorro", title: "Atención al cliente AI", description: "Resuelve consultas de estado de pedido, cambios y devoluciones sin agente." },
      { tag: "Operación", title: "Gestión de catálogo", description: "Genera descripciones de productos y actualiza precios en masa." },
      { tag: "Ventas", title: "Recomendaciones personalizadas", description: "Sugiere productos según historial de compra en email y WhatsApp." },
    ],
    benefits: ["Recupera 15-25% carritos", "Reduce soporte 50%", "Aumenta ticket promedio"],
  },
  {
    id: "salud",
    emoji: "🏥",
    name: "Salud",
    description: "Mucho tiempo perdido en agendamiento, recordatorios y papeleo administrativo.",
    automations: [
      { tag: "Operación", title: "Agendamiento automático", description: "Pacientes agendan, cancelan y reprograman por WhatsApp sin recepcionista." },
      { tag: "Ahorro", title: "Recordatorios de citas", description: "Reduce ausentismo hasta 40% con recordatorios automáticos y confirmación." },
      { tag: "Operación", title: "Resumen de consulta", description: "Transcribe y resume la consulta, genera indicaciones para el paciente." },
      { tag: "Ventas", title: "Seguimiento post-consulta", description: "Revisa si el paciente siguió el tratamiento y lo invita a volver." },
    ],
    benefits: ["Reduce no-shows 40%", "Ahorra 1 FTE recepción", "Mejor experiencia paciente"],
  },
  {
    id: "educacion",
    emoji: "🎓",
    name: "Educación",
    description: "Alta carga administrativa, comunicación con padres y evaluaciones manuales.",
    automations: [
      { tag: "Ahorro", title: "Tutor AI personalizado", description: "Resuelve dudas de alumnos 24/7 adaptado al nivel y materia." },
      { tag: "Operación", title: "Comunicación con padres", description: "Envía reportes, avisos y alertas automáticas según rendimiento." },
      { tag: "Ahorro", title: "Corrección automática", description: "Evalúa tareas, ensayos y exámenes de desarrollo con retroalimentación." },
      { tag: "Ventas", title: "Captación de alumnos", description: "Chatbot que atiende consultas de inscripción y califica prospectos." },
    ],
    benefits: ["Libera 30% del tiempo docente", "Mejora rendimiento", "Reduce deserción"],
  },
  {
    id: "logistica",
    emoji: "🚚",
    name: "Logística",
    description: "Coordinación manual de rutas, comunicación con conductores y atención a clientes.",
    automations: [
      { tag: "Operación", title: "Optimización de rutas", description: "Genera rutas óptimas automáticamente considerando tráfico y ventanas de entrega." },
      { tag: "Ahorro", title: "Tracking automático", description: "Notifica al cliente el estado de su pedido en tiempo real sin llamadas." },
      { tag: "Operación", title: "Gestión de incidencias", description: "Detecta retrasos y notifica a todas las partes automáticamente." },
      { tag: "Ahorro", title: "Prueba de entrega digital", description: "Captura firma y foto, genera reporte y actualiza el sistema." },
    ],
    benefits: ["Reduce llamadas 60%", "Ahorra combustible 15%", "Más entregas por día"],
  },
  {
    id: "finanzas",
    emoji: "💰",
    name: "Finanzas",
    description: "Procesos de análisis manuales, compliance pesado y mucha generación de reportes.",
    automations: [
      { tag: "Ahorro", title: "Análisis de crédito AI", description: "Evalúa solicitudes de crédito y genera dictamen con datos alternativos." },
      { tag: "Operación", title: "Monitoreo de transacciones", description: "Detecta fraude y operaciones inusuales en tiempo real." },
      { tag: "Ahorro", title: "Reportes regulatorios", description: "Genera reportes para reguladores automáticamente desde los datos." },
      { tag: "Ventas", title: "Asesor financiero AI", description: "Chatbot que asesora sobre productos financieros según el perfil del cliente." },
    ],
    benefits: ["Aprobaciones 10x más rápidas", "Reduce riesgo fraude", "Compliance automatizado"],
  },
  {
    id: "contabilidad",
    emoji: "📊",
    name: "Contabilidad",
    description: "Trabajo muy repetitivo: captura de datos, conciliaciones y declaraciones.",
    automations: [
      { tag: "Ahorro", title: "Lectura de facturas", description: "Extrae datos de facturas y tickets automáticamente. Cero captura manual." },
      { tag: "Operación", title: "Conciliación bancaria", description: "Concilia movimientos bancarios vs facturas automáticamente." },
      { tag: "Ahorro", title: "Declaraciones automáticas", description: "Prepara y presenta declaraciones fiscales desde los datos del sistema." },
      { tag: "Ventas", title: "Alertas fiscales", description: "Notifica al cliente sobre vencimientos, oportunidades y riesgos." },
    ],
    benefits: ["Elimina 80% captura manual", "Reduce errores", "3x más clientes por contador"],
  },
  {
    id: "legal",
    emoji: "⚖️",
    name: "Legal",
    description: "Alta carga de revisión de documentos, investigación y redacción repetitiva.",
    automations: [
      { tag: "Ahorro", title: "Revisión de contratos AI", description: "Analiza contratos, detecta cláusulas riesgosas y genera resumen ejecutivo." },
      { tag: "Operación", title: "Generación de documentos", description: "Crea contratos, demandas y escritos desde plantillas y datos del caso." },
      { tag: "Ahorro", title: "Investigación legal", description: "Busca jurisprudencia y normativa relevante en segundos." },
      { tag: "Ventas", title: "Atención inicial AI", description: "Chatbot califica consultas legales y agenda con el abogado correcto." },
    ],
    benefits: ["5x más rápido revisar contratos", "Libera tiempo billable", "Capta más clientes"],
  },
];

// ── Tag config ─────────────────────────────────────────────────────────────────

const tagConfig: Record<AutomationTag, { bg: string; color: string }> = {
  Ahorro: { bg: "#E1F5EE", color: "#1D9E75" },
  Operación: { bg: "#E6F1FB", color: "#185FA5" },
  Ventas: { bg: "#FAEEDA", color: "#BA7517" },
};

// ── Industry grid card ────────────────────────────────────────────────────────

function IndustryCard({
  industry,
  onClick,
}: {
  industry: Industry;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group text-left bg-white rounded-2xl border border-border-light p-5 flex flex-col gap-3 hover:border-accent hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-3xl leading-none">{industry.emoji}</span>
        <svg
          className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200 mt-1 shrink-0"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <h3 className="font-sora font-semibold text-primary text-base mb-1 group-hover:text-accent transition-colors duration-200">
          {industry.name}
        </h3>
        <p className="text-xs text-muted font-light leading-relaxed line-clamp-2">
          {industry.description}
        </p>
      </div>
      <div className="flex items-center gap-1.5 flex-wrap mt-auto">
        {industry.automations.map((a) => (
          <span
            key={a.title}
            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: tagConfig[a.tag].bg, color: tagConfig[a.tag].color }}
          >
            {a.tag}
          </span>
        ))}
      </div>
    </button>
  );
}

// ── Automation card (inside modal) ────────────────────────────────────────────

function AutomationCard({ automation }: { automation: Automation }) {
  const { bg, color } = tagConfig[automation.tag];
  return (
    <div className="bg-surface rounded-xl border border-border-light p-4 flex flex-col gap-2">
      <span
        className="self-start text-[11px] font-semibold px-2.5 py-1 rounded-full"
        style={{ backgroundColor: bg, color }}
      >
        {automation.tag}
      </span>
      <h4 className="font-sora font-semibold text-primary text-sm leading-snug">
        {automation.title}
      </h4>
      <p className="text-xs text-muted font-light leading-relaxed">
        {automation.description}
      </p>
    </div>
  );
}

// ── Modal ─────────────────────────────────────────────────────────────────────

function IndustryModal({
  industry,
  onClose,
  locale,
}: {
  industry: Industry;
  onClose: () => void;
  locale: string;
}) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={industry.name}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 bg-white w-full sm:max-w-2xl max-h-[92dvh] sm:max-h-[85vh] rounded-t-3xl sm:rounded-2xl flex flex-col overflow-hidden shadow-2xl">

        {/* Header */}
        <div className="flex items-start gap-4 px-6 pt-6 pb-4 border-b border-border-light shrink-0">
          <span className="text-4xl leading-none">{industry.emoji}</span>
          <div className="flex-1 min-w-0">
            <h2 className="font-sora font-bold text-primary text-xl leading-tight">
              {industry.name}
            </h2>
            <p className="text-sm text-muted font-light leading-relaxed mt-1">
              {industry.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-muted hover:text-primary hover:bg-surface transition-colors"
            aria-label="Cerrar"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5">

          {/* Automations grid */}
          <div>
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-3">
              Automatizaciones disponibles
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {industry.automations.map((auto) => (
                <AutomationCard key={auto.title} automation={auto} />
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-3">
              Impacto en tu negocio
            </p>
            <div className="flex flex-wrap gap-2">
              {industry.benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full bg-accent-light text-accent"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                    <circle cx="6" cy="6" r="5.25" stroke="currentColor" strokeWidth="1.25" />
                    <path d="M3.5 6l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-6 py-4 border-t border-border-light bg-white shrink-0">
          <a
            href={`/${locale}/contact`}
            className="block w-full text-center text-sm font-semibold px-5 py-3 rounded-xl bg-accent text-white hover:bg-accent-dark transition-colors"
          >
            Quiero automatizar mi {industry.name.toLowerCase()} →
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function IndustriesSection() {
  const locale = useLocale();
  const [selected, setSelected] = useState<Industry | null>(null);

  return (
    <>
      <section className="py-16 bg-white border-t border-border-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <SectionLabel color="accent">Por rubro</SectionLabel>
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-primary max-w-xl leading-tight">
              Automatizaciones para tu industria
            </h2>
            <p className="text-muted font-light text-lg max-w-xl leading-relaxed">
              Seleccioná tu rubro y descubrí exactamente qué podemos automatizar en tu negocio.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                onClick={() => setSelected(industry)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <IndustryModal
          industry={selected}
          onClose={() => setSelected(null)}
          locale={locale}
        />
      )}
    </>
  );
}
