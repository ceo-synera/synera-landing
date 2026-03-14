import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Synera Technologies — Agentes de IA para empresas en Uruguay",
  description:
    "Automatizamos las tareas repetitivas de tu negocio con agentes de Inteligencia Artificial. Consulta gratuita, sin compromiso.",
  metadataBase: new URL("https://syneratechnologies.com"),
  openGraph: {
    title: "Synera Technologies — Agentes de IA para empresas en Uruguay",
    description:
      "Automatizamos las tareas repetitivas de tu negocio con agentes de Inteligencia Artificial. Consulta gratuita, sin compromiso.",
    url: "https://syneratechnologies.com",
    siteName: "Synera Technologies",
    locale: "es_UY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
