"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedNumberProps {
  value: string;
  duration?: number;
}

function AnimatedNumber({ value, duration = 2000 }: AnimatedNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extrair prefixo, número e sufixo
    const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const prefix = match[1]; // "+", "R$ ", etc
    const numberStr = match[2]; // "8.000", "2,4", "30"
    const suffix = match[3]; // "M", "%", etc

    // Detectar formato brasileiro
    const hasDecimalComma = numberStr.includes(",");
    const hasDotSeparator = numberStr.includes(".") && !hasDecimalComma;

    // Converter pra número
    let targetNum: number;
    if (hasDecimalComma) {
      targetNum = parseFloat(numberStr.replace(".", "").replace(",", "."));
    } else if (hasDotSeparator) {
      targetNum = parseInt(numberStr.replace(/\./g, ""), 10);
    } else {
      targetNum = parseFloat(numberStr);
    }

    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = targetNum * eased;

      // Formatar de volta no estilo brasileiro
      let formatted: string;
      if (hasDecimalComma) {
        formatted = current.toFixed(1).replace(".", ",");
      } else if (hasDotSeparator) {
        formatted = Math.round(current)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      } else {
        formatted = Math.round(current).toString();
      }

      setDisplay(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <div ref={ref}>{display}</div>;
}

const stats = [
  { value: "+8.000", label: "usuários impactados" },
  { value: "3", label: "anos entregando IA aplicada" },
  { value: "R$ 2,4M", label: "economia projetada" },
  { value: "+30%", label: "ganho de eficiência operacional" },
];

export function SocialProof() {
  return (
    <section className="bg-surface-lighter border-y border-white/[0.04]">
      <div className="container-main py-14 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-10 md:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-light text-white font-mono tracking-tight">
                  <AnimatedNumber value={stat.value} duration={2000} />
                </div>
                <div className="text-xs text-ink-subtle mt-2">
                  {stat.label}
                </div>
              </motion.div>
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-white/[0.06]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
