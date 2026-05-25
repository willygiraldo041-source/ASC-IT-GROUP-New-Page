'use client'

import { lazy, Suspense } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'

const Spline = lazy(() => import('@splinetool/react-spline'))

export function Hero() {
  const { t } = useLanguage()
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-background">
      {/* Spline 3D Background */}
      <div className="absolute inset-0" style={{ filter: 'hue-rotate(90deg)' }}>
        <Suspense
          fallback={
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />
          }
        >
          <div 
            className="w-full h-full"
            style={{ 
              pointerEvents: 'auto',
              touchAction: 'pan-y',
            }}
            onWheel={(e) => {
              const target = e.currentTarget.parentElement?.parentElement
              if (target) {
                window.scrollBy(0, e.deltaY)
              }
            }}
          >
            <Spline
              scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </Suspense>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[95%] lg:max-w-5xl mx-auto px-6 md:px-10 pointer-events-auto">
        <div className="max-w-3xl mx-auto text-center">
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
            {t('hero.subtitle')}
          </p>

          <p
            className="text-muted-foreground text-[clamp(0.875rem,1.5vw,1.25rem)] font-light mb-4 md:mb-8 max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: '0.55s' }}
          >
            {t('hero.description')}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 font-bold justify-center opacity-0 animate-fade-up"
            style={{ animationDelay: '0.7s' }}
          >
            <Link href="/#services" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto whitespace-nowrap">
                {t('hero.cta.primary')}
              </Button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white text-background hover:bg-white/90 hover:text-background whitespace-nowrap"
              >
                {t('hero.cta.secondary')}
              </Button>
            </Link>
          </div>

          <p
            className="text-primary/80 text-xs font-light mt-4 md:mt-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.85s' }}
          >
            {t('hero.tagline')}
          </p>
        </div>
      </div>
    </section>
  )
}
