"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Chatbots e Agentes",
    description:
      "Atendimento que funciona de madrugada, no domingo, no feriado. Responde, qualifica lead e escala pro humano só quando precisa.",
    whatsapp:
      "https://wa.me/5511985529546?text=Ol%C3%A1%20Rafael%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20Chatbots%20e%20Agentes%20de%20IA.",
  },
  {
    number: "02",
    title: "Automações",
    description:
      "Conecto seus sistemas e elimino o trabalho que existe só porque as ferramentas não conversam entre si.",
    whatsapp:
      "https://wa.me/5511985529546?text=Ol%C3%A1%20Rafael%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20Automa%C3%A7%C3%A3o%20de%20Processos.",
  },
  {
    number: "03",
    title: "Integrações com IA",
    description:
      "IA integrada ao seu processo real. Não um chatbot genérico, mas algo treinado no seu contexto e nas suas regras.",
    whatsapp:
      "https://wa.me/5511985529546?text=Ol%C3%A1%20Rafael%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20Integra%C3%A7%C3%B5es%20com%20IA.",
  },
];

export function Solucao() {
  return (
    <section className="py-28 md:py-36 bg-surface-lighter bg-grain">
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-5xl lg:text-[52px] font-light leading-tight tracking-[-1.5px] mb-14 md:mb-20"
        >
          O que eu faço
        </motion.h2>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <motion.a
              key={service.number}
              href={service.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border-t border-white/[0.08] py-8 md:py-10 pl-6 flex items-start justify-between gap-6 border-l-2 border-l-transparent hover:border-l-accent hover:pl-8 transition-all duration-300"
            >
              <div>
                <div className="flex items-baseline gap-5 mb-3">
                  <span className="font-mono text-sm text-ink-faint">
                    {service.number}
                  </span>
                  <h3 className="text-white text-xl md:text-2xl font-medium">
                    {service.title}
                  </h3>
                </div>
                <p className="text-ink-muted text-[15px] md:text-base leading-relaxed pl-10 md:pl-12 max-w-2xl">
                  {service.description}
                </p>
              </div>
              <span className="text-ink-subtle text-2xl shrink-0 mt-2 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 hidden md:block">
                →
              </span>
            </motion.a>
          ))}
          <div className="border-t border-white/[0.08]" />
        </div>

      </div>
    </section>
  );
}
