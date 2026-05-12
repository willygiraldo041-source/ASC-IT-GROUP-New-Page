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
import type { Service } from '@/types/sanity'

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

// Servicios por defecto
const defaultServices: Service[] = [
  {
    _id: '1',
    title: 'Penetration Testing',
    slug: 'application-and-network-security',
    description: 'Evaluación exhaustiva de seguridad para identificar vulnerabilidades en tu infraestructura antes de que los atacantes las encuentren.',
    icon: 'Shield',
    order: 1,
    features: [
      'Network Pentesting',
      'Web App Testing',
      'Mobile App Testing'
    ]
  },
  {
    _id: '2',
    title: 'Red Team Operations',
    slug: 'advanced-attack-simulation',
    description: 'Simulamos ataques reales para probar tu postura de seguridad y capacidades de respuesta a incidentes.',
    icon: 'Target',
    order: 2,
    features: [
      'Social Engineering',
      'Physical Security',
      'Advanced Threats'
    ]
  },
  {
    _id: '3',
    title: 'Security Audits',
    slug: 'cloud-penetration-testing',
    description: 'Análisis en profundidad de tus controles de seguridad, políticas y requisitos de cumplimiento.',
    icon: 'Search',
    order: 3,
    features: [
      'Code Review',
      'Configuration Audit',
      'Compliance Check'
    ]
  },
  {
    _id: '4',
    title: 'Intelligent Process Automation',
    slug: 'intelligent-process-automation',
    description: 'Automatización de workflows y desarrollo de bots RPA. Optimizamos operaciones y liberamos recursos para tareas de mayor valor.',
    icon: 'Settings',
    order: 4,
    features: [
      'Workflow Automation',
      'RPA & Scripts',
      'CI/CD Automation'
    ]
  },
  {
    _id: '5',
    title: 'DevOps & Cloud Security',
    slug: 'devops-cloud-security',
    description: 'Integración de seguridad en pipelines DevOps con DevSecOps y protección cloud nativa.',
    icon: 'Cloud',
    order: 5,
    features: [
      'CI/CD Security',
      'IaC Security',
      'Kubernetes Security'
    ]
  },
]

interface ServicesProps {
  services: Service[]
}

export function Services({ services }: ServicesProps) {
  const displayServices = defaultServices
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '300px',
  })

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4"
          >
            <Shield className="h-4 w-4" />
            <span>Nuestros Servicios</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-4"
          >
            Soluciones de Seguridad Integrales
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-lg text-foreground/60"
          >
            Desde identificar vulnerabilidades hasta construir defensas robustas,
            ofrecemos servicios de ciberseguridad end-to-end adaptados a tus necesidades.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {displayServices.map((service) => {
            const Icon = iconMap[service.icon] || Shield
            
            return (
              <motion.div
                key={service._id}
                variants={fadeInUp}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 overflow-hidden hover:border-blue-500 hover:bg-blue-500/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 relative z-10 transition-transform duration-300 group-hover:scale-110">
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
                    {service.features.map((feature, idx) => (
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
                  Conoce Más
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>

              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          className="mt-12 text-center"
        >
          <Link href="/#contact">
            <Button size="lg" variant="outline">
              Solicitar Consultoría
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
