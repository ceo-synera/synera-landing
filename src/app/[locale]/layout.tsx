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

const locales = ["es", "en", "zh"];

const titles: Record<string, string> = {
  es: "Synera Technologies — Automatización con IA para tu negocio",
  en: "Synera Technologies — AI Automation for Your Business",
  zh: "Synera Technologies — 为您的业务提供AI自动化",
};

const descriptions: Record<string, string> = {
  es: "Creamos bots y automatizaciones con IA que trabajan 24/7 por tu negocio. Bot contable, bot para creadores de contenido, automatización de audio a redes sociales y más.",
  en: "We build AI bots and automations that work 24/7 for your business. Accounting bot, content creator bot, audio to social media automation and more.",
  zh: "我们构建全天候为您业务工作的AI机器人和自动化流程。会计机器人、内容创作者机器人、音频转社交媒体自动化等。",
};

const keywords: Record<string, string[]> = {
  es: ["automatización IA", "bots inteligencia artificial", "chatbot negocio", "automatización contable", "bot LinkedIn", "Synera Technologies"],
  en: ["AI automation", "business bots", "artificial intelligence", "chatbot", "Synera Technologies"],
  zh: ["AI自动化", "智能机器人", "商业自动化", "Synera Technologies"],
};

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
        zh: "https://syneratechnologies.com/zh",
      },
    },
    openGraph: {
      type: "website",
      locale: loc === "zh" ? "zh_CN" : loc === "es" ? "es_ES" : "en_US",
      url: `https://syneratechnologies.com/${loc}`,
      siteName: "Synera Technologies",
      title: titles[loc],
      description: descriptions[loc],
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Synera Technologies" }],
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
      </body>
    </html>
  );
}
