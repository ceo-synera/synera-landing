"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

const localeLabels: Record<string, string> = {
  es: "ES",
  en: "EN",
};

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Build locale-aware href
  const localePath = (path: string) => `/${locale}${path}`;

  // Switch locale keeping current page path.
  // Blog article slugs differ per locale — redirect to blog index instead.
  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    if (segments.length >= 4 && segments[2] === "blog") {
      router.push(`/${newLocale}/blog`);
      return;
    }
    segments[1] = newLocale;
    router.push(segments.join("/") || `/${newLocale}`);
  };

  const navLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("services"), href: "/services" },
    { label: t("pricing"), href: "/pricing" },
    { label: t("blog"), href: "/blog" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={localePath("/")} className="flex items-center gap-2 shrink-0">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14" cy="4" r="3" fill="#1a1917" />
            <circle cx="4" cy="22" r="3" fill="#1a1917" />
            <circle cx="24" cy="22" r="3" fill="#1a1917" />
            <circle cx="14" cy="14" r="2.5" fill="#185FA5" />
            <line x1="14" y1="7" x2="14" y2="11.5" stroke="#1a1917" strokeWidth="1.5" />
            <line x1="6.5" y1="20" x2="11.5" y2="15.5" stroke="#1a1917" strokeWidth="1.5" />
            <line x1="21.5" y1="20" x2="16.5" y2="15.5" stroke="#1a1917" strokeWidth="1.5" />
          </svg>
          <span className="font-sora font-700 text-primary text-[15px] tracking-tight">
            Synera Technologies
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={localePath(link.href)}
                className="px-3 py-2 text-sm text-gray-600 hover:text-primary transition-colors rounded-md hover:bg-gray-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: locale switcher + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Locale switcher */}
          <div className="flex items-center gap-1 text-xs font-medium">
            {Object.keys(localeLabels).map((loc, i) => (
              <span key={loc} className="flex items-center">
                {i > 0 && <span className="text-border-light mx-0.5">|</span>}
                <button
                  onClick={() => switchLocale(loc)}
                  className={`px-1 py-0.5 rounded transition-colors ${
                    locale === loc
                      ? "text-primary font-semibold"
                      : "text-muted hover:text-primary"
                  }`}
                >
                  {localeLabels[loc]}
                </button>
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={localePath("/contact")}
            className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {t("cta")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 4L16 16M16 4L4 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M3 5H17M3 10H17M3 15H17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6 pt-4 shadow-lg">
          <ul className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={localePath(link.href)}
                  className="block px-3 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Locale switcher mobile */}
          <div className="flex items-center gap-2 px-3 mb-4">
            <span className="text-xs text-muted">Idioma:</span>
            {Object.keys(localeLabels).map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  switchLocale(loc);
                  setMenuOpen(false);
                }}
                className={`text-xs px-2 py-1 rounded border transition-colors ${
                  locale === loc
                    ? "border-primary bg-primary text-white"
                    : "border-border-light text-muted hover:border-primary hover:text-primary"
                }`}
              >
                {localeLabels[loc]}
              </button>
            ))}
          </div>

          <Link
            href={localePath("/contact")}
            className="block w-full bg-primary text-white text-sm font-medium px-4 py-2.5 rounded-lg text-center hover:bg-gray-800 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {t("cta")}
          </Link>
        </div>
      )}
    </header>
  );
}
