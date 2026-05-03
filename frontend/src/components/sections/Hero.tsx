'use client'

import { lazy, Suspense } from 'react'
import { Button } from '@/components/ui/Button'

const Spline = lazy(() => import('@splinetool/react-spline'))

export function Hero() {
  return (
    <section className="relative h-screen flex items-end overflow-hidden bg-background">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 pointer-events-none" style={{ filter: 'hue-rotate(90deg)' }}>
        <Suspense
          fallback={
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />
          }
        >
          <Spline
            scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
            className="w-full h-full pointer-events-none"
          />
        </Suspense>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[95%] lg:max-w-4xl px-6 md:px-10 pb-10 md:pb-10 pt-32">
        <h1
          className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.05em] text-foreground mb-2 md:mb-4 uppercase opacity-0 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          ASC IT <span className="text-primary">GROUP</span>
        </h1>

        <p
          className="text-foreground/80 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light mb-3 md:mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          Detectamos, fortalecemos e implementamos sistemas de defensa inteligentes.
        </p>

        <p
          className="text-muted-foreground text-[clamp(0.875rem,1.5vw,1.25rem)] font-light mb-4 md:mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.55s' }}
        >
          En ASC IT GROUP ofrecemos soluciones de ciberseguridad e innovación tecnológica
          diseñadas para proteger tu información y garantizar la continuidad de tu negocio.
        </p>

        <div
          className="flex flex-wrap gap-3 font-bold opacity-0 animate-fade-up"
          style={{ animationDelay: '0.7s' }}
        >
          <Button
            size="lg"
          >
            Nuestros Servicios
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-background hover:bg-white/90 hover:text-background"
          >
            ¿Quiénes Somos?
          </Button>
        </div>

        <p
          className="text-primary/80 text-xs font-light mt-4 md:mt-6 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.85s' }}
        >
          Expertos en pentesting, Ciberseguridad y consultoría para tu empresa.
        </p>
      </div>
    </section>
  )
}
