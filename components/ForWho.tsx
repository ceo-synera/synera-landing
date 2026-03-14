"use client";

import { motion } from "framer-motion";

const sectors = [
  { emoji: "🏥", label: "Clínicas y salud" },
  { emoji: "🏢", label: "Edificios y condominios" },
  { emoji: "🏠", label: "Inmobiliarias" },
  { emoji: "🛍", label: "Comercios y servicios" },
];

export default function ForWho() {
  return (
    <section className="bg-primary py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-main text-center mb-16"
        >
          Trabajamos con negocios{" "}
          <span className="text-accent">como el tuyo</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {sectors.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary border border-border rounded-sm p-6 flex flex-col items-center gap-3 text-center"
            >
              <span className="text-3xl">{s.emoji}</span>
              <span className="font-body text-text-muted text-sm font-medium">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary border border-border rounded-sm p-8 max-w-2xl mx-auto text-center"
        >
          <p className="font-body text-text-muted text-base leading-relaxed">
            Somos una agencia uruguaya. Nos reunimos por Google Meet, hablamos
            el mismo idioma y{" "}
            <span className="text-text-main font-medium">
              entendemos el mercado local.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
