"use client";

import { motion } from "framer-motion";

const problems = [
  {
    number: "01",
    title: "Atendimento parado",
    text: "Seu time responde as mesmas 10 perguntas todo dia. Esse tempo vai embora, o cliente espera, e você paga por isso.",
  },
  {
    number: "02",
    title: "Processos quebrados",
    text: "Planilha no WhatsApp, dado duplicado no sistema, aprovação parada há dois dias. Você sabe que existe um jeito melhor.",
    offset: true,
  },
  {
    number: "03",
    title: "Escala frágil",
    text: "Quando o volume aumenta, o que quebra primeiro são as partes que ainda dependem de uma pessoa fazendo na mão.",
  },
];

export function Problema() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 bg-surface bg-grain">
      {/* Glow quente no canto */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 0%, rgba(196,151,74,0.05) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container-main relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-light leading-tight tracking-[-1.5px] mb-10 md:mb-14 lg:mb-20 max-w-[550px]"
        >
          Quanto custa{" "}
          <span className="text-warm">não automatizar?</span>
        </motion.h2>

        {/* Grid assimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr_1fr] gap-4 md:gap-8">
          {problems.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`border-t border-white/[0.1] pt-7 pb-10 ${
                p.offset ? "md:mt-12" : ""
              }`}
            >
              <span className="font-mono text-xs text-ink-faint block mb-4">
                {p.number}
              </span>
              <h3 className="text-white text-lg font-medium mb-3">
                {p.title}
              </h3>
              <p className="text-ink-muted text-[15px] leading-relaxed">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
