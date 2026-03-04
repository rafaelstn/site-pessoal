'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface OceanHeroProps {
  className?: string;
  children?: React.ReactNode;
}

export function OceanHero({ className, children }: OceanHeroProps) {
  return (
    <section
      className={cn(
        'relative w-full min-h-screen flex items-center justify-center overflow-hidden',
        className
      )}
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f2f2f2 100%)' }}
      role="banner"
      aria-label="Hero section"
    >
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
