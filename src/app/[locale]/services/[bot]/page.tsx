import { notFound } from "next/navigation";
import Link from "next/link";

// ── Bot data ──────────────────────────────────────────────────────────────────

type Step = { title: string; desc: string };
type Benefit = { title: string; desc: string };

interface BotPageData {
  slug: string;
  accentColor: string;
  headerBg: string;
  title: string;
  tagline: string;
  description: string;
  price: string;
  setup?: string;
  features: string[];
  howTitle: string;
  steps: Step[];
  benefitsTitle: string;
  benefits: Benefit[];
  btnHire: string;
  btnBack: string;
  available: string;
}

type LocaleData = Record<string, BotPageData>;
type AllData = Record<string, LocaleData>;

const botData: AllData = {
  "bot-contable": {
    es: {
      slug: "bot-contable",
      accentColor: "#185FA5",
      headerBg: "#E6F1FB",
      title: "Bot Contable",
      tagline: "Automatización documental con Google Drive y Sheets",
      description:
        "Le mandás un documento y el bot lo organiza automáticamente en Google Drive y transcribe todos los datos a un Google Sheet con la información completa y ordenada. Sin cargas manuales, sin errores, sin demoras.",
      price: "$69 USD/mes",
      setup: "Setup $149 USD",
      features: [
        "Recibe documentos por cualquier canal (WhatsApp, Telegram, email)",
        "Organiza archivos en Google Drive automáticamente",
        "Transcribe datos al Google Sheet con estructura completa",
        "Clasificación inteligente por tipo de documento",
        "Disponible 24/7, sin intervención manual",
      ],
      howTitle: "Cómo funciona",
      steps: [
        {
          title: "Enviás el documento",
          desc: "Mandás la factura, recibo, extracto o cualquier documento por el canal que uses: WhatsApp, Telegram, email o formulario.",
        },
        {
          title: "El bot lo analiza",
          desc: "Extrae automáticamente nombre, monto, fecha, categoría y todos los datos clave del documento usando inteligencia artificial.",
        },
        {
          title: "Drive y Sheet actualizados",
          desc: "El archivo queda guardado en la carpeta correcta de Google Drive y los datos se transcriben al Google Sheet en segundos.",
        },
      ],
      benefitsTitle: "Por qué contratarlo",
      benefits: [
        {
          title: "Cero carga manual de datos",
          desc: "Eliminás horas de tipeo y riesgo de errores humanos en el ingreso de información contable.",
        },
        {
          title: "Todo organizado y accesible",
          desc: "Tus documentos siempre en el lugar correcto dentro de Google Drive. Buscá cualquier archivo en segundos.",
        },
        {
          title: "Integrado con lo que ya usás",
          desc: "Trabaja directamente con Google Drive y Sheets. No necesitás aprender herramientas nuevas.",
        },
      ],
      btnHire: "Contratar este bot",
      btnBack: "← Volver a servicios",
      available: "Disponible ahora",
    },
    en: {
      slug: "bot-contable",
      accentColor: "#185FA5",
      headerBg: "#E6F1FB",
      title: "Accounting Bot",
      tagline: "Document automation with Google Drive and Sheets",
      description:
        "Send a document and the bot automatically organizes it in Google Drive and transcribes all the data to a Google Sheet with complete, structured information. No manual entry, no errors, no delays.",
      price: "$69 USD/mo",
      setup: "Setup $149 USD",
      features: [
        "Receives documents through any channel (WhatsApp, Telegram, email)",
        "Organizes files in Google Drive automatically",
        "Transcribes data to Google Sheets with full structure",
        "Smart classification by document type",
        "Available 24/7, no manual intervention",
      ],
      howTitle: "How it works",
      steps: [
        {
          title: "Send the document",
          desc: "Send the invoice, receipt, statement or any document through the channel you use: WhatsApp, Telegram, email or form.",
        },
        {
          title: "The bot analyzes it",
          desc: "Automatically extracts name, amount, date, category and all key data from the document using artificial intelligence.",
        },
        {
          title: "Drive and Sheet updated",
          desc: "The file is saved in the correct folder in Google Drive and the data is transcribed to the Google Sheet in seconds.",
        },
      ],
      benefitsTitle: "Why hire it",
      benefits: [
        {
          title: "Zero manual data entry",
          desc: "Eliminate hours of typing and the risk of human errors when entering accounting information.",
        },
        {
          title: "Everything organized and accessible",
          desc: "Your documents always in the right place in Google Drive. Find any file in seconds.",
        },
        {
          title: "Integrated with what you already use",
          desc: "Works directly with Google Drive and Sheets. No need to learn new tools.",
        },
      ],
      btnHire: "Hire this bot",
      btnBack: "← Back to services",
      available: "Available now",
    },
  },

  "bot-redes": {
    es: {
      slug: "bot-redes",
      accentColor: "#1D9E75",
      headerBg: "#E1F5EE",
      title: "Bot Creadores de Contenido",
      tagline: "Reportes semanales de tendencias en 6 plataformas",
      description:
        "Recibís cada semana un reporte con los mejores posts y tendencias de tu nicho en las redes que elijas: Twitter/X, TikTok, Instagram, YouTube, LinkedIn y Threads. Siempre al día, sin perder horas scrolleando.",
      price: "$49 USD/mes",
      setup: "Setup $99 USD",
      features: [
        "Reportes semanales de tendencias de tu nicho",
        "Cobertura de Twitter/X, TikTok e Instagram",
        "Análisis de YouTube, LinkedIn y Threads",
        "Selección de los mejores posts de la semana",
        "Entregado directo a tu email o Telegram",
        "Configurás vos qué redes y qué nicho seguir",
      ],
      howTitle: "Cómo funciona",
      steps: [
        {
          title: "Configurás tu nicho",
          desc: "Nos decís en qué industria o nicho querés enfocarte y qué redes sociales querés monitorear.",
        },
        {
          title: "El bot analiza la semana",
          desc: "Monitorea las 6 plataformas y selecciona los posts con mayor engagement, alcance y relevancia de tu nicho.",
        },
        {
          title: "Recibís el reporte",
          desc: "Cada semana llega a tu email o Telegram el reporte con lo más destacado, listo para inspirarte.",
        },
      ],
      benefitsTitle: "Por qué contratarlo",
      benefits: [
        {
          title: "Siempre al día con tu industria",
          desc: "Sabés qué contenido funciona en tu nicho antes que tu competencia, sin invertir horas en investigación.",
        },
        {
          title: "Inspiración constante",
          desc: "Nunca te quedás sin ideas. Cada reporte es una fuente de temas, formatos y tendencias para crear.",
        },
        {
          title: "6 plataformas en un solo lugar",
          desc: "Twitter/X, TikTok, Instagram, YouTube, LinkedIn y Threads resumidos en un reporte semanal claro.",
        },
      ],
      btnHire: "Contratar este bot",
      btnBack: "← Volver a servicios",
      available: "Disponible ahora",
    },
    en: {
      slug: "bot-redes",
      accentColor: "#1D9E75",
      headerBg: "#E1F5EE",
      title: "Content Creator Bot",
      tagline: "Weekly trend reports across 6 platforms",
      description:
        "Get a weekly report with the best posts and trends in your niche across the networks you choose: Twitter/X, TikTok, Instagram, YouTube, LinkedIn, and Threads. Always up to date, without losing hours scrolling.",
      price: "$49 USD/mo",
      setup: "Setup $99 USD",
      features: [
        "Weekly trend reports for your niche",
        "Covers Twitter/X, TikTok, and Instagram",
        "Analyzes YouTube, LinkedIn, and Threads",
        "Best posts of the week, curated for you",
        "Delivered to your email or Telegram",
        "You choose which networks and niche to follow",
      ],
      howTitle: "How it works",
      steps: [
        {
          title: "Set up your niche",
          desc: "Tell us what industry or niche you want to focus on and which social networks you want to monitor.",
        },
        {
          title: "The bot analyzes the week",
          desc: "Monitors 6 platforms and selects the posts with the highest engagement, reach, and relevance in your niche.",
        },
        {
          title: "Receive the report",
          desc: "Every week the report arrives in your email or Telegram with the highlights, ready to inspire you.",
        },
      ],
      benefitsTitle: "Why hire it",
      benefits: [
        {
          title: "Always current with your industry",
          desc: "Know what content works in your niche before your competition, without investing hours in research.",
        },
        {
          title: "Constant inspiration",
          desc: "Never run out of ideas. Each report is a source of topics, formats, and trends to create from.",
        },
        {
          title: "6 platforms in one place",
          desc: "Twitter/X, TikTok, Instagram, YouTube, LinkedIn, and Threads summarized in one clear weekly report.",
        },
      ],
      btnHire: "Hire this bot",
      btnBack: "← Back to services",
      available: "Available now",
    },
  },

  "bot-audio": {
    es: {
      slug: "bot-audio",
      accentColor: "#BA7517",
      headerBg: "#FAEEDA",
      title: "Bot Audio → Redes Sociales",
      tagline: "De tu voz a LinkedIn en segundos",
      description:
        "Mandás un audio con lo que querés comunicar, y el bot lo transcribe, lo formatea y lo publica automáticamente en tus redes. La forma más rápida de crear contenido profesional sin escribir ni una palabra.",
      price: "$39 USD/mes",
      setup: "Setup $79 USD",
      features: [
        "Transcripción de audio en segundos",
        "Publicación automática en LinkedIn",
        "Adaptación del texto al formato de red social",
        "Próximamente: Instagram, Twitter/X, Facebook",
        "Historial de publicaciones",
      ],
      howTitle: "Cómo funciona",
      steps: [
        {
          title: "Grabás tu audio",
          desc: "Grabás un mensaje de voz con lo que querés comunicar: una reflexión, una idea, un anuncio, lo que sea.",
        },
        {
          title: "El bot transcribe y adapta",
          desc: "Transcribe el audio, corrige el texto y lo formatea con el estilo y tono ideal para la red social de destino.",
        },
        {
          title: "Se publica automáticamente",
          desc: "El post queda publicado en tu LinkedIn (y próximamente en más redes) sin que tengas que hacer nada más.",
        },
      ],
      benefitsTitle: "Por qué contratarlo",
      benefits: [
        {
          title: "Contenido profesional sin escribir",
          desc: "Convertís cualquier pensamiento o idea en un post pulido en segundos. Solo hablás, el bot hace el resto.",
        },
        {
          title: "Consistencia en redes sin esfuerzo",
          desc: "Publicás con regularidad sin sacrificar tiempo. Más presencia digital, menos trabajo manual.",
        },
        {
          title: "Tu voz, tu mensaje",
          desc: "El bot preserva tu forma de comunicarte. El resultado suena natural, no generado por máquina.",
        },
      ],
      btnHire: "Contratar este bot",
      btnBack: "← Volver a servicios",
      available: "Disponible ahora",
    },
    en: {
      slug: "bot-audio",
      accentColor: "#BA7517",
      headerBg: "#FAEEDA",
      title: "Audio → Social Media Bot",
      tagline: "From your voice to LinkedIn in seconds",
      description:
        "Send an audio with what you want to communicate, and the bot transcribes it, formats it and publishes it automatically on your networks. The fastest way to create professional content without writing a single word.",
      price: "$39 USD/mo",
      setup: "Setup $79 USD",
      features: [
        "Audio transcription in seconds",
        "Automatic posting on LinkedIn",
        "Text adaptation to social media format",
        "Coming soon: Instagram, Twitter/X, Facebook",
        "Publication history",
      ],
      howTitle: "How it works",
      steps: [
        {
          title: "Record your audio",
          desc: "Record a voice message with what you want to communicate: a reflection, an idea, an announcement, anything.",
        },
        {
          title: "The bot transcribes and adapts",
          desc: "Transcribes the audio, corrects the text and formats it with the ideal style and tone for the target social network.",
        },
        {
          title: "Published automatically",
          desc: "The post is published on your LinkedIn (and soon on more networks) without you having to do anything else.",
        },
      ],
      benefitsTitle: "Why hire it",
      benefits: [
        {
          title: "Professional content without writing",
          desc: "Turn any thought or idea into a polished post in seconds. You just speak, the bot does the rest.",
        },
        {
          title: "Consistent social presence effortlessly",
          desc: "Post regularly without sacrificing time. More digital presence, less manual work.",
        },
        {
          title: "Your voice, your message",
          desc: "The bot preserves your way of communicating. The result sounds natural, not machine-generated.",
        },
      ],
      btnHire: "Hire this bot",
      btnBack: "← Back to services",
      available: "Available now",
    },
  },
};

// ── Icons ─────────────────────────────────────────────────────────────────────

function DocIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <path d="M28 6H12a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V18z" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="28,6 28,18 40,18" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="32" y1="27" x2="16" y2="27" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="34" x2="16" y2="34" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="20" y1="20" x2="16" y2="20" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function CreatorIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="16" r="8" stroke={color} strokeWidth="2.5" />
      <path d="M8 42c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M36 6l2 4 4 2-4 2-2 4-2-4-4-2 4-2z" fill={color} />
    </svg>
  );
}

function MicIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <rect x="18" y="4" width="12" height="22" rx="6" stroke={color} strokeWidth="2.5" />
      <path d="M10 22a14 14 0 0 0 28 0" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="38" x2="24" y2="44" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="18" y1="44" x2="30" y2="44" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="8.25" stroke={color} strokeWidth="1.5" />
      <path d="M5.5 9l2.5 2.5 4.5-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Metadata ──────────────────────────────────────────────────────────────────

const metaTitles: Record<string, Record<string, string>> = {
  "bot-contable": {
    es: "Bot Contable — Automatización con Google Drive y Sheets",
    en: "Accounting Bot — Automation with Google Drive and Sheets",
  },
  "bot-redes": {
    es: "Bot Creadores — Reportes semanales de tendencias",
    en: "Content Creator Bot — Weekly Trend Reports",
  },
  "bot-audio": {
    es: "Bot Audio → Redes — Publicá con tu voz",
    en: "Audio → Social Bot — Publish with Your Voice",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; bot: string }>;
}) {
  const { locale, bot } = await params;
  const data = botData[bot]?.[locale] ?? botData[bot]?.["es"];
  if (!data) return {};
  const title = metaTitles[bot]?.[locale] ?? data.title;
  return {
    title,
    description: data.description,
    openGraph: {
      title,
      description: data.description,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    },
  };
}

export function generateStaticParams() {
  const locales = ["es", "en"];
  const bots = ["bot-contable", "bot-redes", "bot-audio"];
  return locales.flatMap((locale) => bots.map((bot) => ({ locale, bot })));
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function BotPage({
  params,
}: {
  params: Promise<{ locale: string; bot: string }>;
}) {
  const { locale, bot } = await params;
  const d = botData[bot]?.[locale] ?? botData[bot]?.["es"];
  if (!d) notFound();

  const icon =
    bot === "bot-contable" ? (
      <DocIcon color={d.accentColor} />
    ) : bot === "bot-redes" ? (
      <CreatorIcon color={d.accentColor} />
    ) : (
      <MicIcon color={d.accentColor} />
    );

  return (
    <div className="bg-white min-h-screen">
      {/* ── Hero ── */}
      <header className="pt-28 pb-12 border-b border-border-light" style={{ backgroundColor: d.headerBg }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted mb-8 flex-wrap">
            <Link href={`/${locale}`} className="hover:text-primary transition-colors">
              {locale === "en" ? "Home" : "Inicio"}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/services`} className="hover:text-primary transition-colors">
              {locale === "en" ? "Services" : "Servicios"}
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">{d.title}</span>
          </nav>

          <div className="flex flex-col gap-5 max-w-3xl">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
              >
                {icon}
              </div>
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ backgroundColor: "#E1F5EE", color: "#1D9E75" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse inline-block" />
                {d.available}
              </span>
            </div>

            <div>
              <p className="text-sm font-medium mb-1" style={{ color: d.accentColor }}>
                {d.tagline}
              </p>
              <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                {d.title}
              </h1>
            </div>

            <p className="text-lg text-muted font-light leading-relaxed">{d.description}</p>

            <div className="flex items-baseline gap-2">
              <span className="font-sora font-bold text-2xl text-primary">{d.price}</span>
              {d.setup && (
                <span className="text-sm text-muted font-light">· {d.setup}</span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center text-sm font-semibold px-6 py-3 rounded-lg text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: d.accentColor }}
              >
                {d.btnHire}
              </a>
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-lg border border-border-light hover:bg-white transition-colors text-primary"
              >
                {d.btnBack}
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-16">
        {/* ── What's included ── */}
        <section>
          <h2 className="font-sora font-bold text-2xl text-primary mb-6">
            {locale === "en" ? "What's included" : "Qué incluye"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {d.features.map((f) => (
              <div key={f} className="flex items-start gap-3 bg-surface rounded-xl px-4 py-3.5 border border-border-light">
                <CheckIcon color={d.accentColor} />
                <span className="text-sm text-primary font-light leading-relaxed">{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ── */}
        <section>
          <h2 className="font-sora font-bold text-2xl text-primary mb-8">{d.howTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {d.steps.map((step, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-sora font-bold text-sm text-white shrink-0"
                  style={{ backgroundColor: d.accentColor }}
                >
                  {i + 1}
                </div>
                <h3 className="font-sora font-semibold text-primary text-base">{step.title}</h3>
                <p className="text-sm text-muted font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Benefits ── */}
        <section>
          <h2 className="font-sora font-bold text-2xl text-primary mb-8">{d.benefitsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {d.benefits.map((b) => (
              <div
                key={b.title}
                className="flex flex-col gap-2 rounded-2xl p-6 border border-border-light bg-surface"
              >
                <div
                  className="w-10 h-10 rounded-xl mb-1"
                  style={{ backgroundColor: d.headerBg }}
                />
                <h3 className="font-sora font-semibold text-primary text-base">{b.title}</h3>
                <p className="text-sm text-muted font-light leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ backgroundColor: d.headerBg, border: `1px solid ${d.accentColor}30` }}
        >
          <div>
            <h3 className="font-sora font-bold text-primary text-xl mb-1">
              {locale === "en" ? `Ready to use ${d.title}?` : `¿Listo para usar el ${d.title}?`}
            </h3>
            <p className="text-sm text-muted font-light">
              {locale === "en"
                ? "Contact us and we'll have your bot set up within 24 hours."
                : "Contactanos y en 24 horas tenés tu bot configurado y funcionando."}
            </p>
          </div>
          <a
            href={`/${locale}/contact`}
            className="shrink-0 text-sm font-semibold px-6 py-3 rounded-lg text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: d.accentColor }}
          >
            {d.btnHire}
          </a>
        </section>
      </div>
    </div>
  );
}
