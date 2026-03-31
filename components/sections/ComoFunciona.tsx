"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Você me conta o problema",
    description: "Uma conversa de 15 minutos pra entender o que trava sua operação.",
  },
  {
    number: "02",
    title: "Eu apresento a solução",
    description: "Em até 48h você recebe uma proposta com escopo, prazo e investimento.",
  },
  {
    number: "03",
    title: "A gente começa",
    description: "Sem contrato longo, sem burocracia. Entrego e você valida.",
  },
];

export function ComoFunciona() {
  return (
    <section className="py-28 md:py-36 bg-surface-lighter">
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-5xl font-light leading-tight tracking-[-1.5px] mb-14 md:mb-20 text-center"
        >
          Como funciona
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-light text-accent/20 font-mono mb-4">
                {step.number}
              </div>
              <h3 className="text-white text-lg font-medium mb-3">
                {step.title}
              </h3>
              <p className="text-ink-muted text-[15px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
