"use client";

export default function Navbar() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display text-xl font-semibold text-text-main tracking-wide">
          Synera<span className="text-accent">.</span>
        </span>
        <button
          onClick={scrollToContact}
          className="text-sm font-body font-medium text-primary bg-accent hover:bg-accent/90 transition-colors px-5 py-2.5 rounded-sm"
        >
          Hablar con nosotros
        </button>
      </div>
    </nav>
  );
}
