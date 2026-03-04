"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { OceanHero } from "@/components/ui/aurora-hero-bg-2";

const WHATSAPP_LINK =
  "https://wa.me/5511985529546?text=Olá%20Rafael%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20automação%20com%20IA.";

// Segmentos do headline: texto normal e destaque (accent)
const HEADLINE_SEGMENTS = [
  { text: "Automação com IA que resolve ", accent: false },
  { text: "problemas reais", accent: true },
  { text: " do seu negócio.", accent: false },
];

function AnimatedLetter({
  char,
  accent,
}: {
  char: string;
  accent: boolean;
}) {
  if (char === " ") return <span>&nbsp;</span>;
  return (
    <motion.span
      className={`inline-block cursor-default ${accent ? "text-accent" : "text-ink"}`}
      whileHover={{
        scale: 1.18,
        y: -4,
        transition: { type: "spring", stiffness: 400, damping: 15 },
      }}
    >
      {char}
    </motion.span>
  );
}

function AnimatedWord({
  word,
  accent,
  wordKey,
}: {
  word: string;
  accent: boolean;
  wordKey: string;
}) {
  return (
    <span className="inline-block whitespace-nowrap">
      {word.split("").map((char, ci) => (
        <AnimatedLetter key={`${wordKey}-${ci}`} char={char} accent={accent} />
      ))}
    </span>
  );
}

function AnimatedHeadline() {
  // Flatten todos os segmentos em lista de palavras mantendo o accent de cada uma
  const words = HEADLINE_SEGMENTS.flatMap((segment, si) =>
    segment.text
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((word, wi) => ({ word, accent: segment.accent, key: `${si}-${wi}` }))
  );

  return (
    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-6">
      {words.map((item, i) => (
        <span key={item.key}>
          <AnimatedWord word={item.word} accent={item.accent} wordKey={item.key} />
          {i < words.length - 1 && " "}
        </span>
      ))}
    </h1>
  );
}

export function Hero() {
  return (
    <OceanHero>
      <div className="container-main py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-10"
          >
            <Image
              src="/rafael.png"
              alt="Rafael Damasceno"
              width={160}
              height={72}
              className="h-14 w-auto md:h-16"
              priority
            />
          </motion.div>

          {/* Headline com hover por letra */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          >
            <AnimatedHeadline />
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-body text-lg md:text-xl text-ink/60 leading-relaxed max-w-2xl mb-12"
          >
            Construo sistemas inteligentes que economizam tempo, reduzem custos
            e fazem sua operação funcionar enquanto você dorme.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-body font-medium rounded-xl hover:bg-accent-light transition-colors duration-200 text-base"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>

            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-ink/20 text-ink font-body font-medium rounded-xl hover:border-accent hover:text-accent transition-colors duration-200 text-base"
            >
              Ver projetos
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden
      >
        <span className="text-xs font-body text-ink/30 tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-ink/20 to-transparent"
        />
      </motion.div>
    </OceanHero>
  );
}
