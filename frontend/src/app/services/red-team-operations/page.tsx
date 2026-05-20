import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { buttonVariants } from '@/components/ui/Button'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'
import Link from 'next/link'
import { Target, Skull, Mail, Phone, ArrowRight, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Red Team Operations | ASC IT GROUP',
  description: 'Servicios especializados de Red Team para simular ataques reales y evaluar la capacidad de defensa de tu organización.',
}

const redTeamServices = [
  {
    title: 'Red Team Assessment',
    description: 'Simulación completa de ataques APT (Advanced Persistent Threat) para evaluar la postura de seguridad de tu organización desde múltiples vectores.',
    slug: 'red-team',
    icon: Target,
    color: 'from-red-500 to-rose-500'
  },
  {
    title: 'Ransomware Simulation',
    description: 'Simulación controlada de ataques de ransomware para evaluar la capacidad de detección, respuesta y recuperación de tu organización.',
    slug: 'ransomware-sim',
    icon: Skull,
    color: 'from-orange-500 to-red-600'
  },
  {
    title: 'Phishing Campaigns',
    description: 'Campañas de phishing personalizadas para evaluar la concienciación de seguridad de tus empleados y fortalecer tu primera línea de defensa.',
    slug: 'phishing',
    icon: Mail,
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Vishing (Voice Phishing)',
    description: 'Simulaciones de ataques telefónicos de ingeniería social para evaluar la resistencia de tu organización a manipulación por voz.',
    slug: 'vishing',
    icon: Phone,
    color: 'from-yellow-500 to-amber-500'
  },
]

export default async function RedTeamOperationsPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-red-500/10 border border-red-500/20 rounded-full">
              <Target className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-400 font-medium">Servicios de Red Team Operations</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">
              Simulación de Ataques Reales
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Evalúa la capacidad de defensa de tu organización mediante simulaciones realistas de ataques avanzados. 
              Nuestro equipo de Red Team pone a prueba tus defensas como lo haría un adversario real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className={cn(buttonVariants({ size: "lg" }), "group")}
              >
                Solicitar Evaluación
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {settings?.whatsappNumber && (
                <a 
                  href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('¡Hola! Me gustaría obtener más información sobre los servicios de Red Team Operations.')}`}
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
            {redTeamServices.map((service) => {
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
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-red-400 font-medium group-hover:text-red-300 transition-colors">
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
          <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 md:p-16">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Listo para poner a prueba tus defensas?
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Nuestros expertos en Red Team te ayudarán a identificar vulnerabilidades antes que los atacantes reales.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 h-12 px-4 text-sm sm:h-13 sm:px-8 sm:text-lg bg-white text-red-600 hover:bg-white/90 hover:scale-105 hover:shadow-xl"
                >
                  Solicitar Consulta
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                {settings?.whatsappNumber && (
                  <a 
                    href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('¡Hola! Necesito asesoría sobre servicios de Red Team para mi organización.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 h-12 px-4 text-sm sm:h-13 sm:px-8 sm:text-lg bg-white text-red-600 hover:bg-white/90 hover:scale-105 hover:shadow-xl"
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
