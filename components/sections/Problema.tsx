"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const problems = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    label: "Atendimento",
    text: "Clientes mandam mensagem fora do horário e não recebem resposta. Você perde venda sem nem saber.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    label: "Operação",
    text: "Sua equipe gasta horas em tarefas repetitivas que poderiam ser automatizadas. Tempo desperdiçado todo dia.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    label: "Dados",
    text: "Você tem informação espalhada em planilhas, sistemas e WhatsApp. Ninguém sabe o que está acontecendo de verdade.",
  },
];

export function Problema() {
  return (
    <section className="py-28 md:py-36 bg-ink">
      <div className="container-main">
        <AnimatedSection className="mb-16 md:mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight max-w-2xl">
            Seu negócio está perdendo{" "}
            <em className="not-italic text-red-400">dinheiro agora.</em>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {problems.map((p, i) => (
            <AnimatedSection key={p.label} delay={i * 0.12}>
              <div className="flex flex-col gap-5 p-8 border border-white/10 rounded-2xl hover:border-white/20 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white/70">
                  {p.icon}
                </div>
                <span className="text-xs font-body font-medium text-white/40 tracking-widest uppercase">
                  {p.label}
                </span>
                <p className="font-body text-base text-white/70 leading-relaxed">
                  {p.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
