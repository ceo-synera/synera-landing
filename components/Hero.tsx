"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-primary flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-body text-accent text-sm font-medium tracking-widest uppercase mb-6"
        >
          Agentes de Inteligencia Artificial · Uruguay
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-text-main leading-tight mb-8"
        >
          Tu negocio, trabajando{" "}
          <span className="text-accent">24/7</span> sin que vos estés presente
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-text-muted text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Diseñamos e implementamos agentes de Inteligencia Artificial para
          pequeñas y medianas empresas en Uruguay. Automatizamos las tareas
          repetitivas para que tu equipo se enfoque en lo que genera valor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={scrollToContact}
            className="font-body font-semibold text-primary bg-accent hover:bg-accent/90 transition-all duration-200 px-8 py-4 text-base rounded-sm hover:scale-105"
          >
            Quiero una consulta gratuita
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 flex justify-center"
        >
          <div className="w-px h-16 bg-gradient-to-b from-border to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
