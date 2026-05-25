import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export function generateStaticParams() {
  return [
    { slug: 'application-and-network-security' },
    { slug: 'cloud-penetration-testing' },
    { slug: 'advanced-attack-simulation' },
    { slug: 'intelligent-process-automation' },
    { slug: 'devops-cloud-security' },
  ]
}

const servicesData = {
  'application-and-network-security': {
    title: 'Application and Network Security',
    description: 'Protección integral de aplicaciones y redes contra amenazas cibernéticas avanzadas.',
    features: [
      'Web Application Penetration Testing',
      'Network Penetration Testing',
      'Active Directory Penetration Testing',
      'Mobile App Penetration Testing',
    ],
    benefits: [
      'Identificación proactiva de vulnerabilidades',
      'Reducción de riesgos de seguridad',
      'Cumplimiento normativo',
      'Protección de datos sensibles',
    ],
  },
  'cloud-penetration-testing': {
    title: 'Cloud Penetration Testing',
    description: 'Evaluación exhaustiva de la seguridad de tu infraestructura en la nube.',
    features: [
      'AWS Security Assessment',
      'Azure Security Testing',
      'GCP Security Evaluation',
      'Multi-Cloud Security',
    ],
    benefits: [
      'Seguridad en entornos cloud',
      'Configuración segura de servicios',
      'Detección de misconfiguraciones',
      'Protección de datos en la nube',
    ],
  },
  'advanced-attack-simulation': {
    title: 'Advanced Attack Simulation',
    description: 'Simulación de ataques reales para evaluar la capacidad de respuesta de tu organización.',
    features: [
      'Red Team Operations',
      'Social Engineering',
      'Physical Security Testing',
      'Advanced Persistent Threats (APT)',
    ],
    benefits: [
      'Evaluación realista de defensas',
      'Mejora de capacidades de detección',
      'Entrenamiento del equipo de seguridad',
      'Validación de controles de seguridad',
    ],
  },
  'intelligent-process-automation': {
    title: 'Intelligent Process Automation',
    description: 'Automatización inteligente de procesos de seguridad para mayor eficiencia.',
    features: [
      'Security Orchestration',
      'Automated Incident Response',
      'Threat Intelligence Automation',
      'Compliance Automation',
    ],
    benefits: [
      'Reducción de tiempos de respuesta',
      'Mayor eficiencia operativa',
      'Reducción de errores humanos',
      'Escalabilidad de operaciones',
    ],
  },
  'devops-cloud-security': {
    title: 'DevOps & Cloud Security',
    description: 'Integración de seguridad en pipelines DevOps y entornos cloud.',
    features: [
      'Secure CI/CD Pipelines',
      'Container Security',
      'Infrastructure as Code Security',
      'Cloud Security Posture Management',
    ],
    benefits: [
      'Seguridad desde el desarrollo',
      'Detección temprana de vulnerabilidades',
      'Despliegues seguros',
      'Cumplimiento continuo',
    ],
  },
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData[slug as keyof typeof servicesData]

  if (!service) {
    notFound()
  }

  let settings: SiteSettings | null = null
  
  try {
    settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)
  } catch (error) {
    console.log('⚠️ Sanity CMS no disponible, usando datos por defecto')
  }

  return (
    <>
      <Navbar settings={settings} />
      <main className="min-h-screen pt-32 pb-24">
      <Container>
        {/* Back Button */}
        <Link href="/#services" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Volver a Servicios
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            {service.title}
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            {service.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Features */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Características</h2>
            <div className="space-y-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Beneficios</h2>
            <div className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-blue-500/5 border border-blue-500/10">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-blue-500/5 to-primary/10 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">¿Listo para proteger tu negocio?</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Contáctanos para una evaluación gratuita y descubre cómo podemos ayudarte.
          </p>
          <a 
            href="https://wa.me/573147950662?text=Hola,%20me%20interesa%20solicitar%20una%20consulta%20gratuita%20sobre%20sus%20servicios%20de%20ciberseguridad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">
              Solicitar Consulta Gratuita
            </Button>
          </a>
        </div>
      </Container>
    </main>
    <Footer settings={settings} />
    </>
  )
}
