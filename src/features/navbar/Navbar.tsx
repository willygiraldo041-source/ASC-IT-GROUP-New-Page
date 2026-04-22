import { ChevronDown, MessageCircle } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/i18n/LanguageContext"
import LanguageSelector from "@/components/LanguageSelector"

export default function Navbar() {
  const [isServiciosOpen, setIsServiciosOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-4 bg-background/80 backdrop-blur-md">
      <a href="#" className="group">
        <img 
          src="/01-05.png" 
          alt="ASC IT GROUP" 
          className="h-20 md:h-28 lg:h-36 w-auto brightness-0 invert transition-all duration-300 group-hover:drop-shadow-[0_0_25px_rgba(0,128,255,0.8)] group-hover:scale-125 cursor-pointer"
        />
      </a>

      <div className="hidden md:flex items-center gap-6">
        <a
          href="#"
          className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,128,255,0.5)] rounded px-3 py-2"
        >
          {t.nav.home}
        </a>
        
        <div
          className="relative group"
          onMouseEnter={() => setIsServiciosOpen(true)}
          onMouseLeave={() => setIsServiciosOpen(false)}
        >
          <button className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 uppercase tracking-widest flex items-center gap-1 hover:shadow-[0_0_20px_rgba(0,128,255,0.5)] rounded px-3 py-2">
            {t.nav.services}
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {isServiciosOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-secondary border border-border rounded-md shadow-lg py-2 animate-fade-in">
              <a
                href="#application-and-network"
                className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {t.nav.servicesMenu.app}
              </a>
              <a
                href="#cloud-penetration-testing"
                className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {t.nav.servicesMenu.cloud}
              </a>
              <a
                href="#advanced-attack-simulation"
                className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {t.nav.servicesMenu.attack}
              </a>
              <a
                href="#ia-penetration-testing"
                className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {t.nav.servicesMenu.ia}
              </a>
              <a
                href="#automation-solutions"
                className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {t.nav.servicesMenu.automation}
              </a>
              <a
                href="#cloud-solutions"
                className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {t.nav.servicesMenu.cloudSolutions}
              </a>
            </div>
          )}
        </div>

        <a
          href="#quienes-somos"
          className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,128,255,0.5)] rounded px-3 py-2"
        >
          {t.nav.about}
        </a>
        <a
          href="#contactanos"
          className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,128,255,0.5)] rounded px-3 py-2"
        >
          {t.nav.contact}
        </a>
        <LanguageSelector />
        
        <a
          href={`https://wa.me/573147950662?text=${encodeURIComponent(t.nav.cta)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          aria-label="WhatsApp"
        >
          <div className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95">
            <MessageCircle className="w-5 h-5" />
          </div>
          
          {/* Pulse animation */}
          <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75 pointer-events-none"></span>
        </a>
      </div>
    </nav>
  )
}
