import { lazy, Suspense } from "react"
import { useLanguage } from "@/i18n/LanguageContext"

const Spline = lazy(() => import("@splinetool/react-spline"))

export default function HeroSection() {
  const { t } = useLanguage()
  return (
    <section className="relative h-screen flex items-end bg-hero-bg overflow-hidden">
      <div className="absolute inset-0" style={{ filter: "hue-rotate(90deg)" }}>
        <Suspense fallback={<div className="absolute inset-0 bg-hero-bg" />}>
          <Spline
            scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
      </div>

      <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />

      <div className="relative z-10 pointer-events-none w-full max-w-[95%] lg:max-w-4xl px-6 md:px-10 pb-10 md:pb-10 pt-32">
        <h1
          className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.05em] text-foreground mb-2 md:mb-4 uppercase opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {t.hero.title} <span className="text-primary">{t.hero.titleHighlight}</span>
        </h1>

        <p
          className="text-foreground/80 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light mb-3 md:mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {t.hero.subtitle}
        </p>

        <p
          className="text-muted-foreground text-[clamp(0.875rem,1.5vw,1.25rem)] font-light mb-4 md:mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          {t.hero.description}
        </p>

        <div
          className="flex flex-wrap gap-3 font-bold opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          <button className="bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97] pointer-events-auto">
            {t.hero.btnServices}
          </button>
          <a href="#quienes-somos" className="bg-white text-background px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97] pointer-events-auto inline-block">
            {t.hero.btnAbout}
          </a>
        </div>

        <p
          className="text-primary/80 text-xs font-light mt-4 md:mt-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.85s" }}
        >
          {t.hero.footer}
        </p>
      </div>
    </section>
  )
}
