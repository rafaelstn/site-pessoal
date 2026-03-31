"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { value: "+8.000", label: "usuários impactados" },
  { value: "3 anos", label: "entregando IA aplicada" },
  { value: "R$ 2,4M", label: "economia projetada" },
  { value: "+30%", label: "ganho de eficiência operacional" },
];

export function SocialProof() {
  return (
    <section className="bg-surface-lighter border-y border-white/[0.04]">
      <div className="container-main py-14 md:py-16">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-10 md:gap-14">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-light text-white font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-ink-subtle mt-2">
                    {stat.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-white/[0.06]" />
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
