'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'

// Keys para construir servicios dinámicamente
const serviceLinksKeys = [
  { 
    key: 'appNetSecurity',
    href: '/#services',
    subItems: [
      { key: 'webApp', href: '/services/web-app-pentest' },
      { key: 'network', href: '/services/network-pentest' },
      { key: 'ad', href: '/services/ad-pentest' },
      { key: 'mobile', href: '/services/mobile-pentest' },
    ]
  },
  { 
    key: 'cloudPentest',
    href: '/#services',
    subItems: [
      { key: 'aws', href: '/services/aws-pentest' },
      { key: 'azure', href: '/services/azure-pentest' },
      { key: 'gcp', href: '/services/gcp-pentest' },
    ]
  },
  { 
    key: 'advancedAttack',
    href: '/#services',
    subItems: [
      { key: 'ai', href: '/services/ai-pentest' },
      { key: 'redTeam', href: '/services/red-team' },
      { key: 'ransomware', href: '/services/ransomware-sim' },
      { key: 'phishing', href: '/services/phishing' },
      { key: 'vishing', href: '/services/vishing' },
    ]
  },
  { 
    key: 'automation',
    href: '/#services',
    subItems: [
      { key: 'workflow', href: '/services/workflow-automation' },
      { key: 'bot', href: '/services/bot-automation' },
    ]
  },
  { 
    key: 'devopsCloud',
    href: '/#services',
    subItems: [
      { key: 'cicd', href: '/services/cicd-infrastructure' },
      { key: 'devsecops', href: '/services/devsecops' },
      { key: 'k8s', href: '/services/k8s-security' },
    ]
  },
]

export function NavbarClient() {
  const pathname = usePathname()
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState<number | null>(null)

  // Construir serviceLinks con traducciones dinámicas
  const serviceLinks = serviceLinksKeys.map(service => ({
    label: t(`navigation.serviceItems.${service.key}.title`),
    href: service.href,
    subItems: service.subItems.map(subItem => ({
      label: t(`navigation.serviceItems.${service.key}.items.${subItem.key}`),
      href: subItem.href
    }))
  }))

  // Detectar si estamos en una página de servicios
  const isServicesPage = pathname.startsWith('/services')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-200',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/LogoASCfinal.png"
              alt="ASC IT GROUP Logo"
              width={400}
              height={200}
              className={`object-contain w-auto transition-[height] duration-300 ${
                isScrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {/* Inicio */}
            <Link
              href="/"
              className={cn(
                "group relative text-sm font-medium transition-all duration-300 hover:text-primary",
                pathname === '/' ? "text-primary" : "text-foreground/80"
              )}
            >
              <span className={cn(
                "relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]",
                pathname === '/' && "drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
              )}>
                {t('navigation.home')}
              </span>
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300",
                pathname === '/' ? "w-full" : "w-0 group-hover:w-full"
              )} />
              <span className={cn(
                "absolute inset-0 -z-10 rounded-md bg-primary/10 blur-sm transition-all duration-300",
                pathname === '/' ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              )} />
            </Link>
            
            {/* Servicios Dropdown */}
            <div className="group relative">
              <div className={cn(
                "relative text-sm font-medium transition-all duration-300 hover:text-primary cursor-pointer",
                isServicesPage ? "text-primary" : "text-foreground/80"
              )}>
                <span className={cn(
                  "relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]",
                  isServicesPage && "drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                )}>
                  {t('navigation.services')}
                </span>
                
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300",
                  isServicesPage ? "w-full" : "w-0 group-hover:w-full"
                )} />
                
                <span className={cn(
                  "absolute inset-0 -z-10 rounded-md bg-primary/10 blur-sm transition-all duration-300",
                  isServicesPage ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )} />
              </div>
              
              {/* Menu Principal - Solo los 5 servicios */}
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="w-80 p-2 rounded-xl border border-white/10 bg-background/95 backdrop-blur-lg shadow-xl">
                  {serviceLinks.map((service, idx) => (
                    <div 
                      key={`service-${idx}`} 
                      className="relative"
                      onMouseEnter={() => setHoveredServiceIndex(idx)}
                      onMouseLeave={() => setHoveredServiceIndex(null)}
                    >
                      <div className={cn(
                        "flex items-center justify-between px-4 py-3 text-sm transition-all duration-200 cursor-pointer font-medium rounded-lg",
                        hoveredServiceIndex === idx 
                          ? "text-primary bg-primary/10" 
                          : "text-foreground/80 hover:text-primary hover:bg-primary/10"
                      )}>
                        <span>{service.label}</span>
                        {service.subItems && <ChevronRight className="h-4 w-4 text-foreground/40" />}
                      </div>
                      
                      {/* Submenú que aparece a la derecha - SIEMPRE renderizado */}
                      {service.subItems && (
                        <div 
                          className={`absolute left-full top-0 -ml-1 w-80 p-4 rounded-xl border border-white/10 bg-background/95 backdrop-blur-lg shadow-2xl transition-all duration-200 z-50 ${
                            hoveredServiceIndex === idx ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                          }`}
                          onMouseEnter={() => setHoveredServiceIndex(idx)}
                          onMouseLeave={() => setHoveredServiceIndex(null)}
                        >
                          <div className="space-y-1">
                            {service.subItems.map((subItem, subIdx) => (
                              <Link
                                key={`subitem-${idx}-${subIdx}`}
                                href={subItem.href}
                                className="block px-3 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-primary/10 rounded-md transition-all duration-200"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Quiénes Somos */}
            <Link
              href="/about"
              className={cn(
                "group relative text-sm font-medium transition-all duration-300 hover:text-primary",
                pathname === '/about' ? "text-primary" : "text-foreground/80"
              )}
            >
              <span className={cn(
                "relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]",
                pathname === '/about' && "drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
              )}>
                {t('navigation.about')}
              </span>
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300",
                pathname === '/about' ? "w-full" : "w-0 group-hover:w-full"
              )} />
              <span className={cn(
                "absolute inset-0 -z-10 rounded-md bg-primary/10 blur-sm transition-all duration-300",
                pathname === '/about' ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              )} />
            </Link>
            
            {/* Blog */}
            <Link
              href="/blog"
              className={cn(
                "group relative text-sm font-medium transition-all duration-300 hover:text-primary",
                pathname === '/blog' ? "text-primary" : "text-foreground/80"
              )}
            >
              <span className={cn(
                "relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]",
                pathname === '/blog' && "drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
              )}>
                {t('navigation.blog')}
              </span>
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300",
                pathname === '/blog' ? "w-full" : "w-0 group-hover:w-full"
              )} />
              <span className={cn(
                "absolute inset-0 -z-10 rounded-md bg-primary/10 blur-sm transition-all duration-300",
                pathname === '/blog' ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              )} />
            </Link>
            
            {/* Contacto */}
            <Link
              href="/#contact"
              className="group relative text-sm font-medium text-foreground/80 transition-all duration-300 hover:text-primary"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                {t('navigation.contact')}
              </span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 group-hover:w-full" />
              <span className="absolute inset-0 -z-10 rounded-md bg-primary/10 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-100" />
            </Link>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            <Link href="/#contact">
              <Button size="sm" className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">{t('common.requestPentest')}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Container>
              <div className="flex flex-col gap-4 py-6">
                {/* Inicio */}
                <Link
                  href="/"
                  className="group relative text-lg font-medium text-foreground/80 transition-all duration-300 hover:text-primary hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{t('navigation.home')}</span>
                  <span className="absolute inset-0 -z-10 rounded-md bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
                
                {/* Servicios en móvil - Expandibles */}
                <div className="border-t border-white/5 pt-4 mt-2">
                  <div className="text-sm font-semibold text-primary mb-3">{t('navigation.services')}</div>
                  {serviceLinks.map((service, idx) => (
                    <div key={idx} className="mb-2">
                      <button
                        onClick={() => setExpandedService(expandedService === idx ? null : idx)}
                        className="w-full flex items-center justify-between text-sm text-foreground/80 hover:text-primary py-2 px-3 hover:bg-primary/10 rounded transition-all duration-200"
                      >
                        <span className="font-medium">{service.label}</span>
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            expandedService === idx && "rotate-180"
                          )} 
                        />
                      </button>
                      
                      {/* Submenú expandible */}
                      {expandedService === idx && service.subItems && (
                        <div className="mt-1 ml-4 space-y-1">
                          {service.subItems.map((subItem, subIdx) => (
                            <Link
                              key={subIdx}
                              href={subItem.href}
                              className="block text-xs text-foreground/60 hover:text-primary py-2 px-3 hover:bg-primary/5 rounded transition-all duration-200"
                              onClick={() => {
                                setIsMobileMenuOpen(false)
                                setExpandedService(null)
                              }}
                            >
                              • {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Quiénes Somos */}
                <Link
                  href="/about"
                  className="group relative text-lg font-medium text-foreground/80 transition-all duration-300 hover:text-primary hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{t('navigation.about')}</span>
                  <span className="absolute inset-0 -z-10 rounded-md bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
                
                {/* Blog */}
                <Link
                  href="/blog"
                  className="group relative text-lg font-medium text-foreground/80 transition-all duration-300 hover:text-primary hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{t('navigation.blog')}</span>
                  <span className="absolute inset-0 -z-10 rounded-md bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
                
                {/* Contacto */}
                <Link
                  href="/#contact"
                  className="group relative text-lg font-medium text-foreground/80 transition-all duration-300 hover:text-primary hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{t('navigation.contact')}</span>
                  <span className="absolute inset-0 -z-10 rounded-md bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
                
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full" size="md">
                    {t('common.requestPentest')}
                  </Button>
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
