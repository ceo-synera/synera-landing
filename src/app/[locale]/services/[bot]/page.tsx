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
      price: "$49 USD/mes",
      setup: "Setup $99 USD",
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
      price: "$49 USD/mo",
      setup: "Setup $99 USD",
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
    zh: {
      slug: "bot-contable",
      accentColor: "#185FA5",
      headerBg: "#E6F1FB",
      title: "记账机器人",
      tagline: "通过Google Drive和Sheets实现文档自动化",
      description:
        "发送文件，机器人自动整理到Google Drive，并将所有数据完整、有序地转录到Google Sheet。无需手动录入，无错误，无延迟。",
      price: "$49 USD/月",
      setup: "安装费 $99 USD",
      features: [
        "通过任何渠道接收文件（WhatsApp、Telegram、邮件）",
        "自动将文件整理到Google Drive",
        "将数据完整转录到Google Sheet",
        "按文件类型智能分类",
        "全天候运行，无需人工干预",
      ],
      howTitle: "工作原理",
      steps: [
        {
          title: "发送文件",
          desc: "通过您使用的渠道发送发票、收据、账单或任何文件：WhatsApp、Telegram、邮件或表单。",
        },
        {
          title: "机器人分析",
          desc: "使用人工智能自动提取文件中的姓名、金额、日期、类别和所有关键数据。",
        },
        {
          title: "Drive和Sheet更新",
          desc: "文件保存在Google Drive的正确文件夹中，数据在几秒内转录到Google Sheet。",
        },
      ],
      benefitsTitle: "为什么选择它",
      benefits: [
        {
          title: "零手动数据录入",
          desc: "消除手动输入的数小时工作和人为错误风险。",
        },
        {
          title: "一切井然有序",
          desc: "您的文件始终在Google Drive的正确位置。几秒内找到任何文件。",
        },
        {
          title: "与您已有工具集成",
          desc: "直接与Google Drive和Sheets配合使用。无需学习新工具。",
        },
      ],
      btnHire: "购买此机器人",
      btnBack: "← 返回服务",
      available: "立即可用",
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
      price: "$25 USD/mes",
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
      price: "$25 USD/mo",
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
    zh: {
      slug: "bot-redes",
      accentColor: "#1D9E75",
      headerBg: "#E1F5EE",
      title: "内容创作者机器人",
      tagline: "覆盖6个平台的每周趋势报告",
      description:
        "每周收到您所选平台中您细分领域的最佳帖子和趋势报告：Twitter/X、TikTok、Instagram、YouTube、LinkedIn和Threads。始终保持最新，无需花几小时刷屏。",
      price: "$25 USD/月",
      features: [
        "每周细分领域趋势报告",
        "覆盖Twitter/X、TikTok和Instagram",
        "分析YouTube、LinkedIn和Threads",
        "精选本周最佳帖子",
        "直接发送到您的邮箱或Telegram",
        "自定义选择关注的平台和细分领域",
      ],
      howTitle: "工作原理",
      steps: [
        {
          title: "设置您的细分领域",
          desc: "告诉我们您想专注的行业或细分领域，以及您想监控的社交平台。",
        },
        {
          title: "机器人分析本周内容",
          desc: "监控6个平台，选择您细分领域中互动率、覆盖率和相关性最高的帖子。",
        },
        {
          title: "接收报告",
          desc: "每周报告发送到您的邮箱或Telegram，包含精彩内容，随时激发灵感。",
        },
      ],
      benefitsTitle: "为什么选择它",
      benefits: [
        {
          title: "始终领先行业动态",
          desc: "在竞争对手之前了解您细分领域的内容趋势，无需花费数小时研究。",
        },
        {
          title: "持续获得灵感",
          desc: "永远不缺创意。每份报告都是话题、格式和趋势的来源。",
        },
        {
          title: "6个平台一站汇总",
          desc: "Twitter/X、TikTok、Instagram、YouTube、LinkedIn和Threads，一份清晰的周报搞定。",
        },
      ],
      btnHire: "购买此机器人",
      btnBack: "← 返回服务",
      available: "立即可用",
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
      price: "$29 USD/mes",
      setup: "Setup $49 USD",
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
      price: "$29 USD/mo",
      setup: "Setup $49 USD",
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
    zh: {
      slug: "bot-audio",
      accentColor: "#BA7517",
      headerBg: "#FAEEDA",
      title: "音频→社交媒体机器人",
      tagline: "从您的声音到LinkedIn，只需几秒",
      description:
        "发送音频，机器人转录内容、格式化并自动发布到您的社交网络。无需写一个字，创建专业内容的最快方式。",
      price: "$29 USD/月",
      setup: "安装费 $49 USD",
      features: [
        "秒级音频转录",
        "自动发布到LinkedIn",
        "文本适配社交媒体格式",
        "即将上线：Instagram、Twitter/X、Facebook",
        "发布历史记录",
      ],
      howTitle: "工作原理",
      steps: [
        {
          title: "录制音频",
          desc: "录制一条语音消息，内容随意：一个想法、一个公告、一次分享，任何内容都可以。",
        },
        {
          title: "机器人转录并适配",
          desc: "转录音频，校正文本，并以目标社交平台的理想风格和语气进行格式化。",
        },
        {
          title: "自动发布",
          desc: "帖子自动发布到您的LinkedIn（即将支持更多平台），无需您做任何其他操作。",
        },
      ],
      benefitsTitle: "为什么选择它",
      benefits: [
        {
          title: "无需写作的专业内容",
          desc: "几秒内将任何想法变成精致的帖子。您只需说话，机器人完成其余工作。",
        },
        {
          title: "轻松保持社交一致性",
          desc: "定期发布而不牺牲时间。更多数字存在感，更少手动工作。",
        },
        {
          title: "您的声音，您的信息",
          desc: "机器人保留您的沟通方式。结果听起来自然，不像机器生成的。",
        },
      ],
      btnHire: "购买此机器人",
      btnBack: "← 返回服务",
      available: "立即可用",
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
    zh: "记账机器人 — Google Drive和Sheets自动化",
  },
  "bot-redes": {
    es: "Bot Creadores — Reportes semanales de tendencias",
    en: "Content Creator Bot — Weekly Trend Reports",
    zh: "内容创作者机器人 — 每周趋势报告",
  },
  "bot-audio": {
    es: "Bot Audio → Redes — Publicá con tu voz",
    en: "Audio → Social Bot — Publish with Your Voice",
    zh: "音频→社交机器人 — 用声音发布内容",
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
  const locales = ["es", "en", "zh"];
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
              {locale === "zh" ? "首页" : locale === "en" ? "Home" : "Inicio"}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/services`} className="hover:text-primary transition-colors">
              {locale === "zh" ? "服务" : locale === "en" ? "Services" : "Servicios"}
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
            {locale === "zh" ? "包含内容" : locale === "en" ? "What's included" : "Qué incluye"}
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
              {locale === "zh"
                ? `准备好使用${d.title}了吗？`
                : locale === "en"
                ? `Ready to use ${d.title}?`
                : `¿Listo para usar el ${d.title}?`}
            </h3>
            <p className="text-sm text-muted font-light">
              {locale === "zh"
                ? "联系我们，我们将在24小时内配置好您的机器人。"
                : locale === "en"
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
