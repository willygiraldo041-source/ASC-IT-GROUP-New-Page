'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'
import type { SiteSettings } from '@/types/sanity'

const serviceLinks = [
  { 
    label: 'Application and Network Security', 
    href: '/#services',
    subItems: [
      { label: 'Web Application Penetration Testing', href: '/services/web-app-pentest' },
      { label: 'Network Penetration Testing', href: '/services/network-pentest' },
      { label: 'Active Directory Penetration Testing', href: '/services/ad-pentest' },
      { label: 'Mobile App Penetration Testing', href: '/services/mobile-pentest' },
    ]
  },
  { 
    label: 'Cloud Penetration Testing', 
    href: '/#services',
    subItems: [
      { label: 'AWS Penetration Testing', href: '/services/aws-pentest' },
      { label: 'Azure Penetration Testing', href: '/services/azure-pentest' },
      { label: 'GCP Penetration Testing', href: '/services/gcp-pentest' },
    ]
  },
  { 
    label: 'Advanced Attack Simulation', 
    href: '/#services',
    subItems: [
      { label: 'Artificial Intelligence Penetration Testing', href: '/services/ai-pentest' },
      { label: 'Red Team Assessments', href: '/services/red-team' },
      { label: 'Ransomware Attack Simulation', href: '/services/ransomware-sim' },
      { label: 'Email Spear Phishing', href: '/services/phishing' },
      { label: 'Vishing Testing', href: '/services/vishing' },
    ]
  },
  { 
    label: 'Intelligent Process Automation', 
    href: '/#services',
    subItems: [
      { label: 'Workflow Automation', href: '/services/workflow-automation' },
      { label: 'Bot Automation (RPA & Scripts)', href: '/services/bot-automation' },
    ]
  },
  { 
    label: 'DevOps & Cloud Security', 
    href: '/#services',
    subItems: [
      { label: 'CI/CD & Infrastructure Automation', href: '/services/cicd-infrastructure' },
      { label: 'Cloud Security (DevSecOps)', href: '/services/devsecops' },
      { label: 'Kubernetes Security', href: '/services/k8s-security' },
    ]
  },
]

interface NavbarClientProps {
  settings: SiteSettings | null
}

export function NavbarClient({ settings }: NavbarClientProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <nav className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group -my-2"
          >
            <div className="relative transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/01-02.png"
                alt="ASC IT GROUP Logo"
                width={800}
                height={400}
                className="relative z-10 object-contain h-24 md:h-36 w-auto transition-all duration-500 group-hover:brightness-110 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                priority
              />
              
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out overflow-hidden">
                <div className="h-full w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" />
              </div>
              
              <div className="absolute inset-0 rounded-2xl bg-primary/40 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {/* Inicio */}
            <Link
              href="/"
              className="group relative text-sm font-medium text-foreground/80 transition-all duration-300 hover:text-primary"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                Inicio
              </span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 group-hover:w-full" />
              <span className="absolute inset-0 -z-10 rounded-md bg-primary/10 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-100" />
            </Link>
            
            {/* Servicios Dropdown */}
            <div className="group relative">
              <div className="relative text-sm font-medium text-foreground/80 transition-all duration-300 hover:text-primary cursor-pointer">
                <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                  Servicios
                </span>
                
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 group-hover:w-full" />
                
                <span className="absolute inset-0 -z-10 rounded-md bg-primary/10 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-100" />
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
                      <div className="flex items-center justify-between px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 cursor-pointer font-medium">
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
              className="group relative text-sm font-medium text-foreground/80 transition-all duration-300 hover:text-primary"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                Quiénes Somos
              </span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 group-hover:w-full" />
              <span className="absolute inset-0 -z-10 rounded-md bg-primary/10 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-100" />
            </Link>
            
            {/* Blog */}
            <Link
              href="/blog"
              className="group relative text-sm font-medium text-foreground/80 transition-all duration-300 hover:text-primary"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                Blog
              </span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 group-hover:w-full" />
              <span className="absolute inset-0 -z-10 rounded-md bg-primary/10 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-100" />
            </Link>
            
            {/* Contacto */}
            <Link
              href="/#contact"
              className="group relative text-sm font-medium text-foreground/80 transition-all duration-300 hover:text-primary"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                Contacto
              </span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 group-hover:w-full" />
              <span className="absolute inset-0 -z-10 rounded-md bg-primary/10 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-100" />
            </Link>
            
            <Button size="sm" className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">Request Pentest</Button>
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
                  <span className="relative z-10">Inicio</span>
                  <span className="absolute inset-0 -z-10 rounded-md bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
                
                {/* Servicios en móvil - Expandibles */}
                <div className="border-t border-white/5 pt-4 mt-2">
                  <div className="text-sm font-semibold text-primary mb-3">Servicios</div>
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
                  <span className="relative z-10">Quiénes Somos</span>
                  <span className="absolute inset-0 -z-10 rounded-md bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
                
                {/* Blog */}
                <Link
                  href="/blog"
                  className="group relative text-lg font-medium text-foreground/80 transition-all duration-300 hover:text-primary hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">Blog</span>
                  <span className="absolute inset-0 -z-10 rounded-md bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
                
                {/* Contacto */}
                <Link
                  href="/#contact"
                  className="group relative text-lg font-medium text-foreground/80 transition-all duration-300 hover:text-primary hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">Contacto</span>
                  <span className="absolute inset-0 -z-10 rounded-md bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
                
                <Button className="w-full" size="md">
                  Request Pentest
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
