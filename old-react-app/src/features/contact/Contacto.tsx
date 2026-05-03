import { Building2, Mail, Phone, Plus } from "lucide-react"
import { lazy, Suspense } from "react"
import { useLanguage } from "@/i18n/LanguageContext"

const Spline = lazy(() => import("@splinetool/react-spline"))

export default function Contacto() {
  const { t } = useLanguage()
  return (
    <section id="contactanos" className="relative bg-background py-16 md:py-24 overflow-hidden">
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
        <div className="text-center mb-12 pointer-events-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg md:text-xl text-foreground/80">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 pointer-events-auto">
            <div>
              <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-wider">
                {t.contact.label}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t.contact.heading}
              </h3>
              <p className="text-foreground/70 mb-4">
                {t.contact.message}
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t.contact.socialTitle}
              </h4>
              <p className="text-foreground/70 mb-4">
                {t.contact.socialText}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pointer-events-auto">
            <div className="bg-primary p-6 rounded-lg pointer-events-auto">
              <Building2 className="w-8 h-8 text-primary-foreground mb-4" />
              <h4 className="text-lg font-semibold text-primary-foreground mb-2">
                {t.contact.address}
              </h4>
              <p className="text-primary-foreground/90 text-sm">
                CALLE 81 11 - 08
              </p>
              <p className="text-primary-foreground/90 text-sm">
                Bogotá - Colombia
              </p>
            </div>

            <div className="bg-secondary border border-border p-6 rounded-lg">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {t.contact.email}
              </h4>
              <a href="mailto:comercial@ascitgroup.com" className="text-foreground/80 text-sm block hover:text-primary transition-colors">
                comercial@ascitgroup.com
              </a>
              <a href="mailto:sac@ascitgroup.com" className="text-foreground/80 text-sm block hover:text-primary transition-colors">
                sac@ascitgroup.com
              </a>
            </div>

            <div className="bg-secondary border border-border p-6 rounded-lg">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {t.contact.call}
              </h4>
              <a href="https://wa.me/573147950662" target="_blank" rel="noopener noreferrer" className="text-foreground/80 text-sm block hover:text-primary transition-colors">
                WhatsApp: +57 314 795 0662
              </a>
            </div>

            <div className="bg-secondary border border-border p-6 rounded-lg">
              <Plus className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {t.contact.more}
              </h4>
              <a href="https://www.ascitgroup.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 text-sm block hover:text-primary transition-colors">
                ascitgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
