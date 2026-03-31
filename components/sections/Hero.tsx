"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CyberneticGridShader } from "@/components/ui/cybernetic-grid-shader";

const WHATSAPP_LINK =
  "https://wa.me/5511985529546?text=Olá%20Rafael%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20automação%20com%20IA.";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-surface overflow-hidden">
      {/* Cybernetic grid shader */}
      <CyberneticGridShader />

      {/* Glow verde orgânico */}
      <div
        className="absolute top-[-80px] left-[40%] w-[600px] h-[350px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Texto vertical lateral */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute left-5 bottom-8 text-[10px] text-white/[0.08] tracking-[3px] font-mono hidden lg:block"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        aria-hidden
      >
        RAFAEL DAMASCENO · 2026
      </motion.span>

      {/* Content */}
      <div className="container-main relative z-10 py-20 sm:py-28 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[760px] mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-8"
          >
            <Image
              src="/rafael.png"
              alt="Rafael Damasceno"
              width={160}
              height={72}
              className="h-12 w-auto mx-auto brightness-0 invert opacity-60"
              priority
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-2px] mb-7"
          >
            Trabalho manual é caro.
            <br />
            <span className="text-accent font-normal">IA resolve isso.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-lg md:text-xl text-ink-muted leading-relaxed mb-10 max-w-[560px] mx-auto"
          >
            Monto as automações, chatbots e integrações que liberam seu time das
            tarefas repetitivas, sem precisar contratar mais ninguém.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-10 py-4 bg-accent text-black font-body font-bold rounded-xl hover:bg-accent-dark transition-colors text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-4 text-ink-muted border border-white/[0.12] rounded-xl hover:bg-white/[0.04] transition-colors text-base"
            >
              Ver projetos ↓
            </a>
          </motion.div>

          {/* Trust logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-14 pt-6 border-t border-white/[0.06]"
          >
            <p className="text-ink-subtle text-xs tracking-[1.5px] font-mono mb-4">
              Empresas que pararam de fazer na mão:
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center items-center opacity-70">
              <span className="text-ink-muted text-sm font-medium">Gov SP</span>
              <span className="text-ink-faint text-[10px]">●</span>
              <span className="text-ink-muted text-sm font-medium">Bradesco</span>
              <span className="text-ink-faint text-[10px]">●</span>
              <span className="text-ink-muted text-sm font-medium">Cebi</span>
              <span className="text-ink-faint text-[10px]">●</span>
              <span className="text-ink-muted text-sm font-medium">Prefeituras SP</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
