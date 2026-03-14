import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
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
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
