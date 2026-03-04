"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface Project {
  title: string;
  client?: string;
  clientLogo?: { src: string; width: number; height: number; className: string }
  description: string;
  tags: string[];
  badge?: string;
}

const projects: Project[] = [
  {
    title: "Sistema de Gestão Pública com IA",
    client: "Governo do Estado de São Paulo",
    clientLogo: {
      src: "/gov.png",
      width: 120,
      height: 48,
      className: "h-9 w-auto object-contain",
    },
    description:
      "Desenvolvi solução customizada com Python e IA para otimização de processos governamentais reduzindo tempo operacional e eliminando dependência de atividades manuais.",
    tags: ["Python", "IA", "Automação", "Setor Público"],
  },
  {
    title: "Automação de Workflows para Gestão Municipal",
    client: "Cebi Informática — múltiplas prefeituras",
    clientLogo: {
      src: "/cebi.png",
      width: 100,
      height: 40,
      className: "h-7 w-auto object-contain",
    },
    description:
      "Atendi múltiplas prefeituras com sistemas de automação e integração entre plataformas legadas aumentando eficiência operacional e reduzindo etapas manuais.",
    tags: ["n8n", "Python", "Integrações", "Setor Público"],
  },
  {
    title: "Arquitetura de IA Proprietária — Custo Zero de Token",
    description:
      "Desenvolvi arquitetura de IA proprietária eliminando completamente o custo de tokens de terceiros. 3 agentes em produção, 100% infra própria qualidade equivalente à OpenAI. Projeção de economia: R$\u00a02,4M/ano em escala de 100k usuários.",
    tags: ["Python", "LLM", "Arquitetura de IA", "Redução de Custos"],
    badge: "Case Técnico",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <AnimatedSection delay={index * 0.12}>
      <motion.article
        whileHover={{ y: -5, boxShadow: "0 20px 48px -8px rgba(17,17,17,0.09)" }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="relative flex flex-col h-full bg-white border border-ink/[0.07] rounded-2xl p-7 overflow-hidden"
        style={{ boxShadow: "0 2px 12px -2px rgba(17,17,17,0.06)" }}
      >
        {/* Badge — apenas no card destaque */}
        {project.badge && (
          <span className="absolute top-6 right-6 text-[10px] font-body font-semibold tracking-widest uppercase text-accent/70 border border-accent/20 bg-accent/[0.05] px-2.5 py-1 rounded-full">
            {project.badge}
          </span>
        )}

        {/* Logo do cliente ou separador decorativo */}
        {project.clientLogo ? (
          <div className="mb-6 opacity-75">
            <Image
              src={project.clientLogo.src}
              alt={project.client ?? ""}
              width={project.clientLogo.width}
              height={project.clientLogo.height}
              className={project.clientLogo.className}
            />
          </div>
        ) : (
          <div className="w-8 h-px bg-ink/15 mb-6" />
        )}

        {/* Título */}
        <h3 className="font-display text-xl font-light text-ink leading-snug mb-3 pr-16">
          {project.title}
        </h3>

        {/* Cliente (texto) — exibe se não tiver logo */}
        {project.client && !project.clientLogo && (
          <p className="font-body text-xs font-medium text-accent/80 tracking-wide uppercase mb-4">
            {project.client}
          </p>
        )}

        {/* Descrição */}
        <p className="font-body text-sm text-ink/55 leading-relaxed flex-1 mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-body text-ink/45 bg-ink/[0.04] border border-ink/[0.07] px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.article>
    </AnimatedSection>
  );
}

export function Portfolio() {
  return (
    <section id="projetos" className="py-28 md:py-36 bg-[#f7f7f7]">
      <div className="container-main">
        <AnimatedSection className="mb-16 md:mb-20">
          <p className="text-xs font-body font-medium text-accent tracking-widest uppercase mb-4">
            Portfólio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-ink">
            Projetos
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
