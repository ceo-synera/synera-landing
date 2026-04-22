import Link from "next/link";

// ── Content helpers ────────────────────────────────────────────────────────────

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-sm leading-relaxed text-gray-700">{children}</p>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mb-4 list-disc list-outside pl-5 space-y-1.5 text-sm text-gray-700">
      {children}
    </ul>
  );
}

export function LI({ children }: { children: React.ReactNode }) {
  return <li className="leading-relaxed">{children}</li>;
}

export function B({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-primary">{children}</strong>;
}

// ── Types ──────────────────────────────────────────────────────────────────────

export interface LegalSection {
  id: string;
  heading: string;
  content: React.ReactNode;
}

interface LegalLayoutProps {
  locale: string;
  title: string;
  lastUpdated: string;
  tocLabel: string;
  sections: LegalSection[];
}

// ── Layout ────────────────────────────────────────────────────────────────────

export default function LegalLayout({
  locale,
  title,
  lastUpdated,
  tocLabel,
  sections,
}: LegalLayoutProps) {
  const homeLabel =
    locale === "en" ? "Home" : "Inicio";

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      {/* Header */}
      <header className="border-b border-border-light pb-8 mb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted mb-6 flex-wrap">
            <Link href={`/${locale}`} className="hover:text-primary transition-colors">
              {homeLabel}
            </Link>
            <span>/</span>
            <span className="text-muted">Legal</span>
            <span>/</span>
            <span className="text-primary font-medium">{title}</span>
          </nav>
          <h1 className="font-sora text-3xl sm:text-4xl font-bold text-primary mb-2">
            {title}
          </h1>
          <p className="text-xs text-muted font-light">{lastUpdated}</p>
        </div>
      </header>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 items-start">
          {/* Main article */}
          <article>
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-10 scroll-mt-28"
              >
                <h2 className="font-sora font-bold text-base text-primary mb-4 pb-2 border-b border-border-light">
                  {section.heading}
                </h2>
                <div>{section.content}</div>
              </section>
            ))}
          </article>

          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 bg-surface border border-border-light rounded-2xl p-5">
              <p className="font-sora font-semibold text-sm text-primary mb-4">
                {tocLabel}
              </p>
              <nav className="flex flex-col gap-2.5">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-xs text-muted hover:text-primary transition-colors leading-snug"
                  >
                    {section.heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
