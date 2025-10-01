'use client'

import { siteConfig } from "@/config/site"
import SplitText from "@/components/ui/split-text"

export function Hero() {
  return (
    <section className="container py-24 md:py-32">
      <div className="max-w-3xl" style={{ overflow: 'visible', paddingTop: '0.5rem' }}>
        <SplitText
          text="Hey, I&apos;m Pablo Bello 👋"
          tag="h1"
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          style={{ paddingBottom: '0.25rem' }}
          delay={60}
          duration={0.8}
          ease="power2.out"
          splitType="chars"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={1}
          rootMargin="200px"
          textAlign="left"
        />
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
          {siteConfig.personal.title}
        </p>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {siteConfig.description}
        </p>
      </div>
    </section>
  )
}

