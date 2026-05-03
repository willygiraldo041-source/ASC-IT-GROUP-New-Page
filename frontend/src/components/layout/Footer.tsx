'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, ExternalLink } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import type { SiteSettings } from '@/types/sanity'

const footerLinks = {
  services: [
    { label: 'Penetration Testing', href: '/#services' },
    { label: 'Red Team Operations', href: '/#services' },
    { label: 'Blue Team Defense', href: '/#services' },
    { label: 'Security Audits', href: '/#services' },
  ],
  company: [
    { label: 'Quiénes Somos', href: '/#about' },
    { label: 'Casos de Éxito', href: '/#case-studies' },
    { label: 'Contacto', href: '/#contact' },
  ],
  legal: [
    { label: 'Política de Privacidad', href: '/privacy' },
    { label: 'Términos de Servicio', href: '/terms' },
  ],
}

interface FooterProps {
  settings: SiteSettings | null
}

export function Footer({ settings }: FooterProps) {
  const socialLinks = [
    { 
      icon: ExternalLink, 
      href: 'https://www.linkedin.com/company/asc-it-group', 
      label: 'LinkedIn',
      color: 'hover:text-[#0A66C2]'
    },
    { 
      icon: ExternalLink, 
      href: 'https://twitter.com/ascitgroup', 
      label: 'Twitter/X',
      color: 'hover:text-[#1DA1F2]'
    },
    { 
      icon: ExternalLink, 
      href: 'https://www.instagram.com/ascitgroup', 
      label: 'Instagram',
      color: 'hover:text-[#E4405F]'
    },
  ]
  return (
    <footer className="border-t border-white/5 bg-background">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="group flex items-center gap-3 mb-4">
              <div className="relative transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/01-02.png"
                  alt="ASC IT GROUP Logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg bg-primary/40 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <span className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                {settings?.siteName || 'ASC IT GROUP'}
              </span>
            </Link>
            <p className="text-sm text-foreground/60 mb-6">
              {settings?.siteDescription || 'Expertos en ciberseguridad, pentesting y ethical hacking. Protegemos tu negocio con soluciones avanzadas de seguridad.'}
            </p>
            
            {/* Redes Sociales */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground/80 mb-3">Síguenos</h4>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 text-foreground/60 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-lg opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-30 bg-current" />
                    
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Contacto
            </h3>
            <ul className="space-y-3">
              {settings?.email && (
                <li className="flex items-center gap-2 text-sm text-foreground/60">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href={`mailto:${settings.email}`} className="hover:text-primary transition-colors">
                    {settings.email}
                  </a>
                </li>
              )}
              {settings?.phone && (
                <li className="flex items-center gap-2 text-sm text-foreground/60">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href={`tel:${settings.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                    {settings.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} ASC IT GROUP. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
