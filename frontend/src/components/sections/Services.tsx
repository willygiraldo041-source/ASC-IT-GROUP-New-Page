'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
    slug: 'penetration-testing',
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
    slug: 'red-team-operations',
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
    slug: 'security-audits',
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
  {
    _id: '6',
    title: 'Security Training',
    slug: 'security-training',
    description: 'Empodera a tu equipo con capacitación práctica en ciberseguridad y programas de concientización.',
    icon: 'GraduationCap',
    order: 6,
    features: [
      'Developer Training',
      'Security Awareness',
      'Custom Workshops'
    ]
  },
]

interface ServicesProps {
  services: Service[]
}

export function Services({ services }: ServicesProps) {
  // TEMPORAL: Usar solo servicios por defecto (ignorar Sanity mientras se resuelve el acceso)
  const displayServices = defaultServices
  
  console.log('Services received:', services)
  console.log('Display services:', displayServices)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
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
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-sm overflow-hidden"
              >
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{ 
                       background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
                       backgroundSize: '200% 100%',
                       animation: 'shimmer 2s infinite'
                     }} 
                />
                
                {/* Icon with enhanced animation */}
                <motion.div 
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 relative z-10"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {/* Glow Effect Emergente */}
                  <div className="absolute inset-0 rounded-xl bg-primary/30 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-100" />
                  <Icon className="h-7 w-7 text-primary" />
                </motion.div>

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
                <button className="group/btn flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                  Conoce Más
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 opacity-0 blur-xl transition-opacity group-hover:opacity-20" />
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
          <Button size="lg" variant="outline">
            Ver Todos los Servicios
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
