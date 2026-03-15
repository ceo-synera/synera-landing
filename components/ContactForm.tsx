"use client";

import { motion } from "framer-motion";
import Script from "next/script";

const TALLY_FORM_ID = "44ja5Y";

export default function ContactForm() {
  return (
    <section id="contacto" className="bg-primary py-24 px-6">
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-expect-error Tally global injected by embed script
          if (typeof Tally !== "undefined") Tally.loadEmbeds();
        }}
      />

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
          className="rounded-sm overflow-hidden"
        >
          <iframe
            data-tally-src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
            loading="lazy"
            width="100%"
            height="500"
            frameBorder="0"
            title="Formulario de contacto"
            className="block w-full"
          />
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
