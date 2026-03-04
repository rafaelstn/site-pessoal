"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Sobre() {
  return (
    <section className="py-28 md:py-36 bg-surface">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Foto */}
          <AnimatedSection>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/rafael-perfil.png"
                  alt="Rafael Damasceno"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative accent */}
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl border-2 border-accent/15 -z-10"
              />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.15}>
            <p className="text-xs font-body font-medium text-accent tracking-widest uppercase mb-6">
              Sobre mim
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-ink leading-tight mb-8">
              Rafael Damasceno
            </h2>
            <div className="flex flex-col gap-5">
              <p className="font-body text-lg text-ink/60 leading-relaxed">
                Sou desenvolvedor de soluções com IA, automação e integração de sistemas.
Nos últimos 3 anos desenvolvi sistemas para gestão pública atendendo múltiplas prefeituras automatizando processos, integrando plataformas e eliminando trabalho manual. Atualmente desenvolvo soluções tecnológicas para o Governo do Estado de São Paulo, com foco em eficiência operacional e IA aplicada.
Minha abordagem é direta: entendo o problema, construo a solução certa e faço funcionar.
              </p>
              <p className="font-body text-lg text-ink/60 leading-relaxed">
                Minha abordagem é direta: entendo o problema, construo a solução
                certa e faço funcionar. Sem complicação desnecessária.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10 flex flex-col gap-3">
              {[
                "Consultor de IA com foco em resultado prático para empresas",
                "Formação técnica em Inteligência Artificial (FIAP)",
                "Especialista em integrações, chatbots e agentes de IA",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="font-body text-sm text-ink/55">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
