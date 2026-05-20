import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { buttonVariants } from '@/components/ui/Button'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'
import Link from 'next/link'
import { Settings, Workflow, Bot, ArrowRight, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Intelligent Automation | ASC IT GROUP',
  description: 'Servicios de automatización inteligente para optimizar procesos, mejorar eficiencia y reducir costos operativos.',
}

const automationServices = [
  {
    title: 'Intelligent Process Automation',
    description: 'Automatización de procesos empresariales complejos utilizando RPA, AI y Machine Learning para maximizar eficiencia operativa.',
    slug: 'intelligent-process-automation',
    icon: Settings,
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Workflow Automation',
    description: 'Diseño e implementación de flujos de trabajo automatizados que conectan sistemas, personas y datos para agilizar operaciones.',
    slug: 'workflow-automation',
    icon: Workflow,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Bot Development',
    description: 'Desarrollo de bots inteligentes para automatizar tareas repetitivas, atención al cliente, procesamiento de datos y más.',
    slug: 'bot-automation',
    icon: Bot,
    color: 'from-violet-500 to-fuchsia-500'
  },
]

export default async function AutomationPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <Settings className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Servicios de Automatización Inteligente</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-200 bg-clip-text text-transparent">
              Automatización Inteligente
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Transforma tus operaciones con automatización inteligente. Optimiza procesos, reduce costos operativos 
              y libera a tu equipo para enfocarse en tareas estratégicas de alto valor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className={cn(buttonVariants({ size: "lg" }), "group")}
              >
                Solicitar Consultoría
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {settings?.whatsappNumber && (
                <a 
                  href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('¡Hola! Me gustaría obtener más información sobre los servicios de Automatización Inteligente.')}`}
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
          <div className="grid md:grid-cols-3 gap-8">
            {automationServices.map((service) => {
              const Icon = service.icon
              return (
                <Link 
                  key={service.slug} 
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
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
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
          <div className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 md:p-16">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Listo para automatizar tus procesos?
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                Nuestros expertos en automatización te ayudarán a identificar oportunidades y diseñar soluciones a medida.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/#contact"
                  className={cn(buttonVariants({ size: "lg", variant: "outline" }), "group bg-white/10 hover:bg-white/20 border-white/20")}
                >
                  Solicitar Consulta
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                {settings?.whatsappNumber && (
                  <a 
                    href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('¡Hola! Necesito asesoría sobre automatización de procesos para mi organización.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ size: "lg", variant: "outline" }), "group bg-white/10 hover:bg-white/20 border-white/20")}
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
