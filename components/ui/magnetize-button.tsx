"use client"

import * as React from "react"
import { useRef, useEffect, useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { motion, useAnimation } from "framer-motion"

interface MagnetizeButtonProps {
  href: string
  target?: string
  rel?: string
  children: React.ReactNode
  className?: string
  particleCount?: number
}

interface Particle {
  id: number
  x: number
  y: number
}

export function MagnetizeButton({
  href,
  target,
  rel,
  children,
  className,
  particleCount = 14,
}: MagnetizeButtonProps) {
  const [isAttracting, setIsAttracting] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const particlesControl = useAnimation()
  const isAttractingRef = useRef(false)

  // Gera partículas espalhadas ao redor
  useEffect(() => {
    setParticles(
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 320,
        y: (Math.random() - 0.5) * 160,
      }))
    )
  }, [particleCount])

  const handleEnter = useCallback(() => {
    isAttractingRef.current = true
    setIsAttracting(true)
  }, [])

  const handleMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isAttractingRef.current || !buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    particlesControl.start({
      x,
      y,
      transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.5 },
    })
  }, [particlesControl])

  const handleLeave = useCallback(() => {
    isAttractingRef.current = false
    setIsAttracting(false)
    particlesControl.start((i) => ({
      x: particles[i]?.x ?? 0,
      y: particles[i]?.y ?? 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    }))
  }, [particlesControl, particles])

  return (
    <a
      ref={buttonRef}
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onTouchStart={handleEnter}
      onTouchEnd={handleLeave}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden touch-none",
        "px-10 py-5 rounded-xl",
        "bg-white text-accent font-body font-semibold text-base",
        "hover:bg-slate-50 transition-colors duration-200",
        "shadow-lg shadow-ink/20",
        className
      )}
    >
      {/* Partículas — convergem no ícone WhatsApp */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          initial={{ x: particles[i]?.x ?? 0, y: particles[i]?.y ?? 0 }}
          animate={particlesControl}
          className={cn(
            "absolute w-1.5 h-1.5 rounded-full bg-accent/50 transition-opacity duration-300",
            isAttracting ? "opacity-100" : "opacity-0"
          )}
        />
      ))}

      {/* Conteúdo */}
      <span className="relative flex items-center gap-3 z-10">
        {children}
      </span>
    </a>
  )
}
