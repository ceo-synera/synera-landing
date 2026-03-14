"use client";

import { motion } from "framer-motion";

const problems = [
  {
    icon: "💬",
    text: "Responder las mismas preguntas por WhatsApp una y otra vez",
  },
  {
    icon: "📞",
    text: "Confirmar turnos manualmente por llamada o mensaje",
  },
  {
    icon: "⏱",
    text: "Perder leads porque nadie los contactó a tiempo",
  },
  {
    icon: "📋",
    text: "Cargar datos de un sistema a otro a mano",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Problem() {
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
          ¿Cuántas horas perdés en esto{" "}
          <span className="text-accent">cada semana</span>?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-primary border border-border rounded-sm p-6 flex items-start gap-4"
            >
              <span className="text-2xl mt-0.5">{p.icon}</span>
              <p className="font-body text-text-muted text-base leading-relaxed">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-center text-text-muted text-lg max-w-2xl mx-auto"
        >
          Si reconocés alguno de estos problemas,{" "}
          <span className="text-text-main font-medium">
            la IA puede resolverlos.
          </span>{" "}
          Y nosotros podemos implementarla.
        </motion.p>
      </div>
    </section>
  );
}
