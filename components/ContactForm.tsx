"use client";

import { motion } from "framer-motion";

const TALLY_FORM_ID = "TALLY_FORM_ID";

export default function ContactForm() {
  return (
    <section id="contacto" className="bg-primary py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-main mb-4">
            Hablemos. La primera{" "}
            <span className="text-accent">reunión es gratis.</span>
          </h2>
          <p className="font-body text-text-muted text-lg leading-relaxed">
            Contanos brevemente tu negocio y tu problema. Te respondemos en
            menos de 24 horas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-secondary border border-border rounded-sm overflow-hidden"
        >
          {TALLY_FORM_ID === "TALLY_FORM_ID" ? (
            <div className="p-12 text-center">
              <p className="font-body text-text-muted text-sm">
                Formulario Tally — reemplazá{" "}
                <code className="text-accent bg-border px-1.5 py-0.5 rounded text-xs">
                  TALLY_FORM_ID
                </code>{" "}
                en{" "}
                <code className="text-accent bg-border px-1.5 py-0.5 rounded text-xs">
                  components/ContactForm.tsx
                </code>{" "}
                con tu ID real.
              </p>
            </div>
          ) : (
            <iframe
              src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
              width="100%"
              height="400"
              frameBorder="0"
              title="Formulario de contacto"
              className="block"
            />
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-center text-text-muted text-sm mt-6"
        >
          Sin compromiso. Sin tecnicismos. Solo una conversación.
        </motion.p>
      </div>
    </section>
  );
}
