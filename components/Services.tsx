"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🤖",
    title: "Agente de Atención al Cliente",
    desc: "Responde consultas 24/7 por WhatsApp, web o email. Sin tiempos de espera, sin sobrecargar a tu equipo.",
    model: "Pago inicial + suscripción mensual",
  },
  {
    icon: "📅",
    title: "Sistema de Reservas y Turnos",
    desc: "Reservas automáticas con confirmaciones y recordatorios. Menos cancelaciones, cero llamadas innecesarias.",
    model: "Pago inicial + suscripción mensual",
  },
  {
    icon: "⚡",
    title: "Automatización de Procesos",
    desc: "Conectamos tus herramientas y eliminamos la carga manual. Tus datos fluyen solos entre sistemas.",
    model: "Pago inicial + suscripción mensual",
  },
];

export default function Services() {
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
          ¿Qué podemos hacer por{" "}
          <span className="text-accent">tu negocio</span>?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-primary border border-border rounded-sm p-8 flex flex-col gap-4 hover:border-accent/50 transition-colors duration-300"
            >
              <span className="text-3xl">{s.icon}</span>
              <h3 className="font-display text-xl font-semibold text-text-main">
                {s.title}
              </h3>
              <p className="font-body text-text-muted text-sm leading-relaxed flex-1">
                {s.desc}
              </p>
              <span className="font-body text-xs text-accent font-medium tracking-wide uppercase border-t border-border pt-4">
                {s.model}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-center text-text-muted text-sm"
        >
          ¿No sabés cuál necesitás?{" "}
          <span className="text-text-main">
            En la reunión gratuita te lo decimos.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
