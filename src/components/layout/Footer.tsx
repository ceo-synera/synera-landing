"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const year = new Date().getFullYear();

  const localePath = (path: string) => `/${locale}${path}`;

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg
                width="26"
                height="26"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="4" r="3" fill="white" />
                <circle cx="4" cy="22" r="3" fill="white" />
                <circle cx="24" cy="22" r="3" fill="white" />
                <circle cx="14" cy="14" r="2.5" fill="#378ADD" />
                <line x1="14" y1="7" x2="14" y2="11.5" stroke="white" strokeWidth="1.5" />
                <line x1="6.5" y1="20" x2="11.5" y2="15.5" stroke="white" strokeWidth="1.5" />
                <line x1="21.5" y1="20" x2="16.5" y2="15.5" stroke="white" strokeWidth="1.5" />
              </svg>
              <span className="font-sora font-semibold text-sm tracking-tight">
                Synera Technologies
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Automatizaciones e inteligencia artificial para negocios modernos.
            </p>

            {/* Contact icons */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://t.me/syneratechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.54 14.063l-2.956-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.604.496z" />
                </svg>
              </a>
              <a
                href="mailto:hola@syneratechnologies.com"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Productos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href={localePath("/services")} className="hover:text-white transition-colors">
                  Bot Contable
                </Link>
              </li>
              <li>
                <Link href={localePath("/services")} className="hover:text-white transition-colors">
                  Bot Creadores
                </Link>
              </li>
              <li>
                <Link href={localePath("/services")} className="hover:text-white transition-colors">
                  Bot Audio→RRSS
                </Link>
              </li>
              <li>
                <Link href={localePath("/services")} className="hover:text-white transition-colors">
                  Bot de Agenda
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href={localePath("/services")} className="hover:text-white transition-colors">
                  Automatizaciones
                </Link>
              </li>
              <li>
                <Link href={localePath("/services")} className="hover:text-white transition-colors">
                  Consultoría IA
                </Link>
              </li>
              <li>
                <Link href={localePath("/services")} className="hover:text-white transition-colors">
                  Atención al cliente
                </Link>
              </li>
              <li>
                <Link href={localePath("/services")} className="hover:text-white transition-colors">
                  Integraciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href={localePath("/about")} className="hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href={localePath("/blog")} className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={localePath("/contact")} className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/syneratechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href={localePath("/privacy")} className="hover:text-white transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href={localePath("/terms")} className="hover:text-white transition-colors">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>
            © {year} Synera Technologies. {t("rights")}.
          </span>
          <span>{t("tagline")}</span>
        </div>
      </div>
    </footer>
  );
}
