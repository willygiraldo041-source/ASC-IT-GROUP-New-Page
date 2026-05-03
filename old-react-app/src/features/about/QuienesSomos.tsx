import { lazy, Suspense } from "react"
import { useLanguage } from "@/i18n/LanguageContext"

const Spline = lazy(() => import("@splinetool/react-spline"))

export default function QuienesSomos() {
  const { t } = useLanguage()
  return (
    <section id="quienes-somos" className="relative bg-background py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ filter: "hue-rotate(90deg)" }}>
        <Suspense fallback={<div className="absolute inset-0 bg-hero-bg" />}>
          <Spline
            scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
      </div>

      <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pointer-events-none">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 md:mb-12 uppercase pointer-events-auto">
          {t.about.title} <span className="text-primary">{t.about.titleHighlight}</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 text-foreground/90 pointer-events-auto">
            <p className="text-base md:text-lg leading-relaxed">
              {t.about.p1}
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              {t.about.p2}
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              {t.about.p3}
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              {t.about.p4}
            </p>
          </div>

          <div className="relative pointer-events-auto">
            <img 
              src="/quienes somos.png" 
              alt="ASC IT GROUP Team" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
