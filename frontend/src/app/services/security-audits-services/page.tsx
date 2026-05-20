import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { buttonVariants } from '@/components/ui/Button'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'
import Link from 'next/link'
import { Search, ShieldCheck, FileCheck, Code, ArrowRight, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Security Audits | ASC IT GROUP',
  description: 'Auditorías de seguridad completas para garantizar el cumplimiento normativo y fortalecer la postura de seguridad de tu organización.',
}

const securityAuditServices = [
  {
    title: 'Compliance Audits',
    description: 'Auditorías de cumplimiento para ISO 27001, SOC 2, PCI DSS, HIPAA y otros marcos regulatorios internacionales.',
    slug: 'security-audits',
    icon: ShieldCheck,
    color: 'from-emerald-500 to-green-500'
  },
  {
    title: 'Security Assessments',
    description: 'Evaluaciones integrales de seguridad que abarcan personas, procesos y tecnología para identificar brechas de seguridad.',
    slug: 'security-audits',
    icon: Search,
    color: 'from-teal-500 to-cyan-500'
  },
  {
    title: 'Vulnerability Assessments',
    description: 'Análisis sistemático de vulnerabilidades en infraestructura, aplicaciones y configuraciones para priorizar remediación.',
    slug: 'security-audits',
    icon: FileCheck,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Code Review & SAST',
    description: 'Revisión de código fuente y análisis estático (SAST) para identificar vulnerabilidades de seguridad en fase de desarrollo.',
    slug: 'security-audits',
    icon: Code,
    color: 'from-purple-500 to-violet-500'
  },
]

export default async function SecurityAuditsPage() {
  let settings: SiteSettings | null = null
  
  try {
    settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)
  } catch (error) {
    console.log('Sanity fetch failed, using default data')
  }

  return (
    <>
      <Navbar settings={settings} />
      <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-green-500/10 border border-green-500/20 rounded-full">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400 font-medium">Servicios de Security Audits</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent">
              Auditorías de Seguridad Integral
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Garantiza el cumplimiento normativo y fortalece tu postura de seguridad con auditorías exhaustivas. 
              Identificamos brechas, evaluamos riesgos y proporcionamos recomendaciones accionables.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className={cn(buttonVariants({ size: "lg" }), "group")}
              >
                Solicitar Auditoría
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {settings?.whatsappNumber && (
                <a 
                  href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('¡Hola! Me gustaría obtener más información sobre los servicios de Security Audits.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: "lg", variant: "outline" }), "group")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Hablar por WhatsApp
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {securityAuditServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Link 
                  key={`${service.slug}-${index}`} 
                  href={`/services/${service.slug}`}
                  className="group relative"
                >
                  <div className="relative h-full p-8 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300 hover:scale-105">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <div className={`relative w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${service.color} p-3`}>
                      <Icon className="w-full h-full text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-green-400 font-medium group-hover:text-green-300 transition-colors">
                      Ver detalles
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 md:p-16">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Necesitas cumplir con normativas de seguridad?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Nuestros expertos te guiarán en el proceso de cumplimiento y te ayudarán a fortalecer tu postura de seguridad.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 h-12 px-4 text-sm sm:h-13 sm:px-8 sm:text-lg bg-white text-green-600 hover:bg-white/90 hover:scale-105 hover:shadow-xl"
                >
                  Solicitar Consulta
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                {settings?.whatsappNumber && (
                  <a 
                    href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('¡Hola! Necesito asesoría sobre auditorías de seguridad y cumplimiento normativo.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 h-12 px-4 text-sm sm:h-13 sm:px-8 sm:text-lg bg-white text-green-600 hover:bg-white/90 hover:scale-105 hover:shadow-xl"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Directo
                  </a>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
      </div>
      <Footer settings={settings} />
    </>
  )
}
