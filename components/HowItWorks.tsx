"use client";

import { motion } from "framer-motion";

const steps = [
  {
    emoji: "🗣",
    title: "Reunión gratuita",
    desc: "Entendemos tu negocio y tu problema",
  },
  {
    emoji: "📋",
    title: "Propuesta clara",
    desc: "Alcance, precio y tiempos por escrito",
  },
  {
    emoji: "⚙️",
    title: "Construcción",
    desc: "Desarrollamos y te mostramos el avance cada 3-5 días",
  },
  {
    emoji: "✅",
    title: "Entrega y soporte",
    desc: "Deploy final con soporte incluido siempre",
  },
];

export default function HowItWorks() {
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
          Así <span className="text-accent">trabajamos</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary p-8 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="font-body text-xs font-semibold text-accent tracking-widest">
                  0{i + 1}
                </span>
                <span className="text-2xl">{step.emoji}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-text-main">
                {step.title}
              </h3>
              <p className="font-body text-text-muted text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
