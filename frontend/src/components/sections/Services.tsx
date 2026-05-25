'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import {
  Shield,
  Target,
  ShieldCheck,
  Search,
  AlertTriangle,
  GraduationCap,
  ArrowRight,
  LucideIcon,
  Cloud,
  Zap,
  Settings,
  Network,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'
import type { Service } from '@/types/sanity'
import { useIsMobile } from '@/hooks/useMediaQuery'

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Shield,
  Target,
  ShieldCheck,
  Search,
  AlertTriangle,
  GraduationCap,
  Cloud,
  Zap,
  Settings,
  Network,
}

// Servicios por defecto - keys para traducciones
const defaultServicesKeys = [
  {
    _id: '1',
    key: 'penetrationTesting',
    slug: 'penetration-testing',
    icon: 'Shield',
    order: 1,
  },
  {
    _id: '2',
    key: 'redTeamOperations',
    slug: 'red-team-operations',
    icon: 'Target',
    order: 2,
  },
  {
    _id: '3',
    key: 'securityAudits',
    slug: 'security-audits-services',
    icon: 'Search',
    order: 3,
  },
  {
    _id: '4',
    key: 'automation',
    slug: 'automation-services',
    icon: 'Settings',
    order: 4,
  },
  {
    _id: '5',
    key: 'devOpsCloudSecurity',
    slug: 'devops-cloud-security-services',
    icon: 'Cloud',
    order: 5,
  },
]

interface ServicesProps {
  services: Service[]
}

export function Services({ services }: ServicesProps) {
  const { t, messages } = useLanguage()
  const isMobile = useIsMobile()
  
  // Construir servicios con traducciones dinámicas
  const displayServices = defaultServicesKeys.map(serviceKey => {
    const serviceData = (messages as any)?.services?.items?.[serviceKey.key]
    return {
      _id: serviceKey._id,
      title: t(`services.items.${serviceKey.key}.title`),
      slug: serviceKey.slug,
      description: t(`services.items.${serviceKey.key}.description`),
      icon: serviceKey.icon,
      order: serviceKey.order,
      features: Array.isArray(serviceData?.features) ? serviceData.features : []
    }
  })
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: isMobile ? '-50px' : '50px',
  })

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          variants={isMobile ? undefined : staggerContainer}
          initial={isMobile ? false : "initial"}
          animate={isMobile ? false : (inView ? 'animate' : 'initial')}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4"
          >
            <Shield className="h-4 w-4" />
            <span>{t('navigation.services')}</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-4"
          >
            {t('services.title')}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-lg text-foreground/60"
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayServices.map((service) => {
            const Icon = iconMap[service.icon] || Shield
            
            const cardContent = (
              <>
                {/* Icon */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 relative z-10 transition-transform duration-200 md:group-hover:scale-110">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>

                {/* Description */}
                <p className="mb-6 text-sm text-foreground/60">
                  {service.description}
                </p>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-foreground/70"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA */}
                <Link 
                  href={`/services/${service.slug}`}
                  className="group/btn flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  {t('common.learnMore')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </>
            )
            
            return isMobile ? (
              <div
                key={service._id}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 overflow-hidden"
              >
                {cardContent}
              </div>
            ) : (
              <motion.div
                key={service._id}
                variants={fadeInUp}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 overflow-hidden hover:border-blue-500 hover:bg-blue-500/10 md:hover:-translate-y-2 transition-all duration-200 cursor-pointer will-change-transform"
              >
                {cardContent}
              </motion.div>
            )
          })}
        </div>

        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          className="mt-12 text-center"
        >
          <Link href="/#contact">
            <Button size="lg" variant="outline">
              {t('services.requestConsultation')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
