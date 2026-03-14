"use client";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="text-center md:text-left">
            <span className="font-display text-xl font-semibold text-text-main">
              Synera<span className="text-accent">.</span>
            </span>
            <p className="font-body text-text-muted text-sm mt-1">
              Automatización inteligente para empresas reales
            </p>
          </div>

          <nav className="flex items-center gap-6">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="font-body text-sm text-text-muted hover:text-text-main transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="text-center md:text-right">
            <p className="font-body text-text-muted text-sm">
              syneratechnologies.com
            </p>
            <p className="font-body text-text-muted text-sm">Uruguay</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="font-body text-text-muted text-xs">
            © 2026 Synera Technologies. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
