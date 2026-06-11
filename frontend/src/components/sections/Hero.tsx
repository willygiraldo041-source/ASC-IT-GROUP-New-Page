'use client'

import { lazy, Suspense, Component, useState, useRef, useCallback, type ReactNode } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'

const Spline = lazy(() => import('@splinetool/react-spline'))

// Error boundary: si el chunk de Spline no carga o el componente lanza,
// no rompe el hero — se muestra el degradado de respaldo.
class SplineBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

export function Hero() {
  const { t } = useLanguage()
  const [loaded, setLoaded] = useState(false)
  // Ref directo al div overlay — sin useState, sin re-renders en cada mousemove
  const spotlightRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = spotlightRef.current
    if (!el) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.opacity = '1'
    el.style.background = `radial-gradient(circle 450px at ${x}px ${y}px, rgba(140,190,255,0.15) 0%, rgba(200,230,255,0.06) 45%, transparent 70%)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = spotlightRef.current
    if (el) el.style.opacity = '0'
  }, [])

  return (
    <section
      className="relative h-screen flex items-center overflow-hidden bg-background"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Fondo 3D de Spline, con degradado de respaldo siempre detrás */}
      <div className="absolute inset-0" style={{ filter: 'hue-rotate(90deg)' }}>
        {/* Respaldo: visible mientras Spline carga o si falla */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />

        <SplineBoundary fallback={null}>
          <Suspense fallback={null}>
            <div
              className="absolute inset-0 transition-opacity duration-700"
              style={{
                opacity: loaded ? 1 : 0,
                pointerEvents: 'none',
              }}
            >
              <Spline
                scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
                className="w-full h-full"
                onLoad={() => setLoaded(true)}
              />
            </div>
          </Suspense>
        </SplineBoundary>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />

      {/* Spotlight — manipulación directa del DOM, sin re-renders de React */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{ opacity: 0, transition: 'opacity 0.35s ease' }}
      />

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
