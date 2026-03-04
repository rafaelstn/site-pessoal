"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const pillars = [
  {
    number: "01",
    title: "Agentes de Atendimento",
    description:
      "Sistemas que respondem, qualificam e encaminham clientes automaticamente — 24h por dia, sem custo de equipe.",
    whatsapp:
      "https://wa.me/5511985529546?text=Ol%C3%A1%20Rafael%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20Agentes%20de%20Atendimento%20com%20IA.",
  },
  {
    number: "02",
    title: "Automação de Processos",
    description:
      "Elimino tarefas manuais e repetitivas da sua operação. Sua equipe foca no que realmente importa.",
    whatsapp:
      "https://wa.me/5511985529546?text=Ol%C3%A1%20Rafael%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20Automa%C3%A7%C3%A3o%20de%20Processos.",
  },
  {
    number: "03",
    title: "Integrações Inteligentes",
    description:
      "Conecto seus sistemas, dados e ferramentas. Tudo funcionando junto, sem retrabalho.",
    whatsapp:
      "https://wa.me/5511985529546?text=Ol%C3%A1%20Rafael%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20Integra%C3%A7%C3%B5es%20Inteligentes.",
  },
];

export function Solucao() {
  return (
    <section className="py-28 md:py-36 bg-surface">
      <div className="container-main">
        {/* Header */}
        <AnimatedSection className="mb-20 md:mb-24 max-w-2xl">
          <p className="text-xs font-body font-medium text-accent tracking-widest uppercase mb-5">
            O que faço
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-ink leading-tight mb-5">
            Automação que funciona{" "}
            <em className="not-italic">de verdade.</em>
          </h2>
          <p className="font-body text-lg text-ink/55 leading-relaxed">
            Não vendo tecnologia. Resolvo problemas específicos com IA aplicada
            ao seu negócio.
          </p>
        </AnimatedSection>

        {/* Pillars */}
        <div className="flex flex-col gap-0 divide-y divide-ink/10">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.number} delay={i * 0.1}>
              <a
                href={pillar.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-16 py-10 hover:bg-slate-50/80 transition-colors duration-300 -mx-6 md:-mx-10 lg:-mx-16 px-6 md:px-10 lg:px-16 rounded-xl block"
              >
                <span className="font-display text-5xl font-light text-accent/20 group-hover:text-accent/40 transition-colors duration-300 w-16 shrink-0">
                  {pillar.number}
                </span>
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-16 flex-1">
                  <h3 className="font-display text-2xl md:text-3xl font-light text-ink md:w-72 shrink-0">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-base text-ink/55 leading-relaxed max-w-lg">
                    {pillar.description}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-ink/20 group-hover:text-accent/60 group-hover:translate-x-1 transition-all duration-300 hidden md:block shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
