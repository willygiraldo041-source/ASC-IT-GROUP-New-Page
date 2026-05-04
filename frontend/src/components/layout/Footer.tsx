'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import type { SiteSettings } from '@/types/sanity'

const footerLinks = {
  services: [
    { label: 'Application and Network Security', href: '/#services' },
    { label: 'Cloud Penetration Testing', href: '/#services' },
    { label: 'Advanced Attack Simulation', href: '/#services' },
    { label: 'Intelligent Process Automation', href: '/#services' },
    { label: 'DevOps & Cloud Security', href: '/#services' },
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
      href: 'https://www.linkedin.com/company/ascybersecurity/', 
      label: 'LinkedIn',
      color: 'hover:text-[#0A66C2]',
      svg: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    { 
      href: 'https://x.com/asccybersec', 
      label: 'X (Twitter)',
      color: 'hover:text-white',
      svg: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    { 
      href: 'https://www.facebook.com/asccybersec', 
      label: 'Facebook',
      color: 'hover:text-[#1877F2]',
      svg: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    { 
      href: 'https://www.instagram.com/ascybersecurity', 
      label: 'Instagram',
      color: 'hover:text-[#E4405F]',
      svg: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
    { 
      href: 'https://www.youtube.com/@ASC_IT_GROUP', 
      label: 'YouTube',
      color: 'hover:text-[#FF0000]',
      svg: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    { 
      href: 'https://t.me/ASCybersecurity', 
      label: 'Telegram',
      color: 'hover:text-[#26A5E4]',
      svg: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
    },
  ]
  return (
    <footer className="border-t border-white/5 bg-background">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="group mb-4 inline-block">
              <span className="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
                ASC IT GROUP
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
                    <span className="transition-transform duration-300 group-hover:scale-110">{social.svg}</span>
                    
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
