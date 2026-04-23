import { Sora, DM_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const locales = ["es", "en"];

const titles: Record<string, string> = {
  es: "Automatización con IA para empresas | Synera Technologies",
  en: "AI Automation for Business | Synera Technologies",
};

const descriptions: Record<string, string> = {
  es: "Agencia de automatización con inteligencia artificial. Synera Portal para hoteles, chatbots para WhatsApp, automatización de procesos y consultoría IA a medida para tu negocio.",
  en: "AI automation agency. Synera Portal for hotels, WhatsApp chatbots, business process automation and custom AI consulting for your business.",
};

const keywords: Record<string, string[]> = {
  es: [
    "automatización IA", "automatización de procesos con inteligencia artificial",
    "agencia de automatización Uruguay", "chatbot WhatsApp empresas",
    "check-in digital hotel", "automatización pymes", "consultoría IA Uruguay",
    "Synera Portal", "Synera Technologies", "inteligencia artificial negocios",
    "bot atención al cliente", "automatización hotelería",
  ],
  en: [
    "AI automation", "business process automation", "AI automation agency",
    "WhatsApp chatbot", "digital hotel check-in", "AI consulting",
    "Synera Portal", "Synera Technologies", "AI for small business",
    "customer service bot", "hotel automation",
  ],
};

// ── JSON-LD schemas ────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Synera Technologies",
  url: "https://syneratechnologies.com",
  logo: "https://syneratechnologies.com/favicon.svg",
  description:
    "Agencia de automatización con inteligencia artificial. Desarrollamos soluciones IA a medida: chatbots, automatizaciones de procesos, check-in digital para hoteles y consultoría estratégica.",
  email: "hola@syneratechnologies.com",
  sameAs: ["https://www.linkedin.com/company/synera-technologies"],
  areaServed: "Worldwide",
  knowsLanguage: ["Spanish", "English"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"],
    email: "hola@syneratechnologies.com",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Synera Technologies",
  url: "https://syneratechnologies.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://syneratechnologies.com/es/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// ── Layout ────────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locales.includes(locale) ? locale : "es";

  return {
    metadataBase: new URL("https://syneratechnologies.com"),
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/icon", type: "image/png", sizes: "32x32" },
      ],
      apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
    },
    title: {
      default: titles[loc],
      template: "%s | Synera Technologies",
    },
    description: descriptions[loc],
    keywords: keywords[loc],
    authors: [{ name: "Synera Technologies", url: "https://syneratechnologies.com" }],
    creator: "Synera Technologies",
    alternates: {
      canonical: `https://syneratechnologies.com/${loc}`,
      languages: {
        es: "https://syneratechnologies.com/es",
        en: "https://syneratechnologies.com/en",
      },
    },
    openGraph: {
      type: "website",
      locale: loc === "es" ? "es_UY" : "en_US",
      url: `https://syneratechnologies.com/${loc}`,
      siteName: "Synera Technologies",
      title: titles[loc],
      description: descriptions[loc],
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Synera Technologies — Automatización con IA" }],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[loc],
      description: descriptions[loc],
      images: ["/opengraph-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${sora.variable} ${dmSans.variable} font-dm-sans antialiased bg-white text-primary`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T3PTP84FJD"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T3PTP84FJD');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
