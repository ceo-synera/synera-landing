"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    icon: "📍",
    title: "Somos locales",
    desc: "Uruguay, reuniones por Google Meet o presencial según prefieras.",
  },
  {
    icon: "🌱",
    title: "Empezamos pequeño",
    desc: "Sin grandes inversiones iniciales. Escalamos cuando ves resultados.",
  },
  {
    icon: "💬",
    title: "Sin tecnicismos",
    desc: "Te explicamos todo en lenguaje claro, sin jerga.",
  },
  {
    icon: "🛡",
    title: "Soporte siempre incluido",
    desc: "Mientras tengas la suscripción activa, estamos disponibles. Sin costos ocultos ni sorpresas.",
  },
];

export default function WhySynera() {
  return (
    <section className="bg-secondary py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-main text-center mb-16"
        >
          Lo que nos <span className="text-accent">diferencia</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {differentiators.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-primary border border-border rounded-sm p-8 flex gap-5"
            >
              <span className="text-2xl mt-0.5 shrink-0">{d.icon}</span>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-main mb-2">
                  {d.title}
                </h3>
                <p className="font-body text-text-muted text-sm leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
