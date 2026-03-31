"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Portfolio() {
  return (
    <section id="projetos" className="py-20 md:py-28 lg:py-36 bg-surface bg-grain">
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-light leading-tight tracking-[-1.5px] mb-10 md:mb-14 lg:mb-20"
        >
          O que já foi entregue
        </motion.h2>

        {/* Row 1: Bradesco + Memora */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {/* Bradesco */}
          <motion.article
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="rounded-xl border border-accent/[0.15] p-5 sm:p-8 md:p-10 h-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(34,197,94,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            }}
          >
            <div className="flex flex-col h-full">
              <span className="font-mono text-xs text-accent font-medium block mb-4">
                CASE PRINCIPAL
              </span>
              <h3 className="text-white text-xl md:text-2xl font-medium mb-3">
                Plataforma de Gestão com IA para o Bradesco
              </h3>
              <p className="text-ink-muted text-[15px] leading-relaxed mb-6">
                Plataforma para +8.000 funcionários usando LangChain,
                RAG e geolocalização. Assistente conversacional inteligente para
                gestão de carteiras e análise de dados em tempo real.
              </p>

              {/* Métricas */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="bg-accent/[0.08] px-4 py-3 rounded-lg text-center flex-1 min-w-[100px]">
                  <div className="text-xl font-medium text-accent font-mono">
                    +8.000
                  </div>
                  <div className="text-[11px] text-ink-subtle mt-1">
                    usuários ativos
                  </div>
                </div>
                <div className="bg-accent/[0.08] px-4 py-3 rounded-lg text-center flex-1 min-w-[100px]">
                  <div className="text-xl font-medium text-accent font-mono">
                    +30%
                  </div>
                  <div className="text-[11px] text-ink-subtle mt-1">
                    velocidade de gestão
                  </div>
                </div>
                <div className="bg-accent/[0.08] px-4 py-3 rounded-lg text-center flex-1 min-w-[100px]">
                  <div className="text-xl font-medium text-accent font-mono">
                    +8%
                  </div>
                  <div className="text-[11px] text-ink-subtle mt-1">
                    conversões
                  </div>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap mt-auto">
                {["Python", "LangChain", "RAG", "pgvector", "FastAPI"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-ink-subtle bg-white/[0.05] px-3 py-1.5 rounded font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Memora */}
          <motion.article
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-xl border border-white/[0.06] p-5 sm:p-8 md:p-10 h-full bg-white/[0.02]"
          >
            <div className="flex flex-col h-full">
              <span className="font-mono text-xs text-accent font-medium block mb-4">
                PRODUTO PRÓPRIO
              </span>
              <h3 className="text-white text-xl md:text-2xl font-medium mb-3">
                Memora · Plataforma de IA para Codebases
              </h3>
              <p className="text-ink-muted text-[15px] leading-relaxed mb-6">
                Plataforma de inteligência em codebases corporativos. Busca semântica
                via RAG, code review automatizado via GitHub, geração de documentação
                e extração de regras de negócio implícitas. Direcionada a PMEs
                brasileiras de tecnologia.
              </p>
              <div className="flex gap-2 flex-wrap mt-auto">
                {["Python", "RAG", "pgvector", "Claude API", "MCP Server"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-ink-subtle bg-white/[0.05] px-3 py-1.5 rounded font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>

        {/* Row 2: Gov SP + Cebi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {/* Gov SP */}
          <motion.article
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -3 }}
            className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/gov.png"
                alt="Governo SP"
                width={80}
                height={32}
                className="h-7 w-auto object-contain brightness-0 invert opacity-70"
              />
              <span className="font-mono text-xs text-ink-subtle">
                GOVERNO SP
              </span>
            </div>
            <h3 className="text-white text-lg font-medium mb-2">
              Sistema de Gestão Pública com IA
            </h3>
            <p className="text-ink-muted text-sm leading-relaxed mb-4">
              Solução customizada com Python e IA para otimização de processos
              governamentais, reduzindo tempo operacional e eliminando
              atividades manuais.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-medium text-accent font-mono">
                ↓ 60%
              </span>
              <span className="text-sm text-ink-subtle">
                tempo operacional
              </span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Python", "IA", "Automação"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-ink-subtle bg-white/[0.05] px-3 py-1.5 rounded font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>

          {/* Cebi */}
          <motion.article
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -3 }}
            className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/cebi.png"
                alt="Cebi Informática"
                width={80}
                height={32}
                className="h-6 w-auto object-contain opacity-80"
              />
              <span className="font-mono text-xs text-ink-subtle">
                CEBI INFORMÁTICA
              </span>
            </div>
            <h3 className="text-white text-lg font-medium mb-2">
              Automação de Workflows Municipais
            </h3>
            <p className="text-ink-muted text-sm leading-relaxed mb-4">
              Sistemas de automação e integração entre plataformas legadas para
              múltiplas prefeituras paulistas.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-medium text-accent font-mono">
                +5
              </span>
              <span className="text-sm text-ink-subtle">
                prefeituras atendidas
              </span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["n8n", "Python", "Integrações"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-ink-subtle bg-white/[0.05] px-3 py-1.5 rounded font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        </div>

        {/* Row 3: Case técnico full-width */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5 sm:p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <span className="font-mono text-xs text-accent font-medium block mb-3">
                CASE TÉCNICO
              </span>
              <h3 className="text-white text-xl font-medium mb-3">
                Arquitetura de IA Proprietária · Custo Zero de Token
              </h3>
              <p className="text-ink-muted text-[15px] leading-relaxed mb-4">
                Desenvolvi arquitetura eliminando 100% do custo de tokens de
                terceiros. 3 agentes em produção com infra própria, qualidade
                equivalente à OpenAI.
              </p>
              <div className="flex gap-2 flex-wrap">
                {["Python", "LLM", "Docker", "Kubernetes", "Arquitetura IA"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-ink-subtle bg-white/[0.05] px-3 py-1.5 rounded font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 shrink-0 flex-wrap sm:flex-nowrap">
              <div className="bg-accent/[0.08] px-6 py-5 rounded-lg text-center">
                <div className="text-2xl font-medium text-accent font-mono">
                  R$ 2,4M
                </div>
                <div className="text-xs text-ink-subtle mt-1">economia/ano</div>
              </div>
              <div className="bg-accent/[0.08] px-6 py-5 rounded-lg text-center">
                <div className="text-2xl font-medium text-accent font-mono">
                  0
                </div>
                <div className="text-xs text-ink-subtle mt-1">custo de tokens</div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
