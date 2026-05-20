import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { buttonVariants } from '@/components/ui/Button'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'
import Link from 'next/link'
import { Cloud, GitBranch, Container as ContainerIcon, Shield, ArrowRight, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'DevOps & Cloud Security | ASC IT GROUP',
  description: 'Servicios especializados en seguridad para DevOps, CI/CD, contenedores y entornos cloud multi-proveedor.',
}

const devOpsCloudServices = [
  {
    title: 'DevSecOps Integration',
    description: 'Integración de seguridad en todo el ciclo de vida de desarrollo con prácticas DevSecOps, SAST, DAST y SCA automatizados.',
    slug: 'devsecops',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'CI/CD Pipeline Security',
    description: 'Aseguramiento de pipelines CI/CD con análisis de seguridad automatizado, secrets management y controles de acceso.',
    slug: 'cicd-infrastructure',
    icon: GitBranch,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'Container & Kubernetes Security',
    description: 'Seguridad para contenedores Docker, orquestación Kubernetes, escaneo de imágenes y runtime protection.',
    slug: 'k8s-security',
    icon: ContainerIcon,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Multi-Cloud Security',
    description: 'Estrategias de seguridad para entornos multi-cloud (AWS, Azure, GCP) con gobernanza, compliance y monitoreo unificado.',
    slug: 'devops-cloud-security',
    icon: Cloud,
    color: 'from-violet-500 to-purple-500'
  },
]

export default async function DevOpsCloudSecurityPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
              <Cloud className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-400 font-medium">Servicios de DevOps & Cloud Security</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent">
              Seguridad para DevOps y Cloud
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Integra seguridad en tu pipeline de desarrollo y protege tus entornos cloud. 
              Acelera el delivery sin comprometer la seguridad con nuestras soluciones DevSecOps.
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
                  href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('¡Hola! Me gustaría obtener más información sobre los servicios de DevOps & Cloud Security.')}`}
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
            {devOpsCloudServices.map((service) => {
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
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors">
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
          <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 md:p-16">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Necesitas seguridad en tu pipeline DevOps?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Nuestros expertos te ayudarán a implementar seguridad sin frenar la velocidad de desarrollo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 h-12 px-4 text-sm sm:h-13 sm:px-8 sm:text-lg bg-white text-indigo-600 hover:bg-white/90 hover:scale-105 hover:shadow-xl"
                >
                  Solicitar Consulta
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                {settings?.whatsappNumber && (
                  <a 
                    href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('¡Hola! Necesito asesoría sobre seguridad para DevOps y Cloud.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 h-12 px-4 text-sm sm:h-13 sm:px-8 sm:text-lg bg-white text-indigo-600 hover:bg-white/90 hover:scale-105 hover:shadow-xl"
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
