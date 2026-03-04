"use client";

import { motion } from "framer-motion";

// Seed determinístico — evita hydration mismatch
function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 43758.5453;
  return x - Math.floor(x);
}

interface Particle {
  id: number;
  x: number;   // % horizontal
  y: number;   // % vertical
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  drift: number; // px de drift horizontal
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: seededRandom(i * 3) * 100,
    y: seededRandom(i * 3 + 1) * 100,
    size: 1.5 + seededRandom(i * 3 + 2) * 3,
    opacity: 0.15 + seededRandom(i * 5) * 0.45,
    duration: 4 + seededRandom(i * 7) * 6,
    delay: seededRandom(i * 11) * 5,
    drift: (seededRandom(i * 13) - 0.5) * 24,
  }));
}

const PARTICLES = generateParticles(28);

export function Sparkles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, p.drift, 0],
            opacity: [0, p.opacity, 0],
            scale: [0.6, 1, 0.6],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
