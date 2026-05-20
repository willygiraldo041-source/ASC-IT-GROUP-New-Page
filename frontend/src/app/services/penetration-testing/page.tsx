import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'
import Link from 'next/link'
import { Shield, Network, Smartphone, Cloud, Lock, Brain, Server, Globe, ArrowRight, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Penetration Testing | ASC IT GROUP',
  description: 'Servicios completos de Penetration Testing para identificar vulnerabilidades en tu infraestructura antes que los atacantes.',
}

const pentestingServices = [
  {
    title: 'Web Application Pentest',
    description: 'Evaluación exhaustiva de aplicaciones web para identificar vulnerabilidades como SQL injection, XSS, CSRF y más.',
    slug: 'web-app-pentest',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Network Pentest',
    description: 'Análisis profundo de infraestructura de red para detectar configuraciones inseguras, puertos expuestos y vulnerabilidades.',
    slug: 'network-pentest',
    icon: Network,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Mobile App Pentest',
    description: 'Testing de seguridad para aplicaciones móviles iOS y Android, incluyendo análisis de código y comunicaciones.',
    slug: 'mobile-pentest',
    icon: Smartphone,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'AWS Cloud Pentest',
    description: 'Evaluación de seguridad específica para infraestructura en AWS, incluyendo IAM, S3, EC2 y servicios relacionados.',
    slug: 'aws-pentest',
    icon: Cloud,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Azure Cloud Pentest',
    description: 'Testing de seguridad para entornos Microsoft Azure, evaluando configuraciones y permisos de recursos cloud.',
    slug: 'azure-pentest',
    icon: Cloud,
    color: 'from-blue-600 to-indigo-600'
  },
  {
    title: 'GCP Cloud Pentest',
    description: 'Análisis de seguridad para Google Cloud Platform, identificando riesgos en configuraciones y accesos.',
    slug: 'gcp-pentest',
    icon: Cloud,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Active Directory Pentest',
    description: 'Evaluación de seguridad de Active Directory, buscando vulnerabilidades en autenticación, permisos y GPOs.',
    slug: 'ad-pentest',
    icon: Lock,
    color: 'from-red-500 to-rose-500'
  },
  {
    title: 'AI/ML Security Testing',
    description: 'Análisis de seguridad para sistemas de inteligencia artificial y machine learning, incluyendo data poisoning y model theft.',
    slug: 'ai-pentest',
    icon: Brain,
    color: 'from-violet-500 to-purple-500'
  },
]

export default async function PenetrationTestingPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Servicios de Penetration Testing</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Evaluación Exhaustiva de Seguridad
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Identifica vulnerabilidades en tu infraestructura antes que los atacantes. 
              Ofrecemos testing especializado para cada componente de tu stack tecnológico.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="group">
                  Solicitar Evaluación
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              {settings?.whatsappNumber && (
                <a 
                  href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('¡Hola! Me gustaría obtener más información sobre los servicios de Penetration Testing.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="group">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Hablar por WhatsApp
                  </Button>
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pentestingServices.map((service) => {
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
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
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
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 md:p-16">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ¿No estás seguro cuál servicio necesitas?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Nuestros expertos pueden ayudarte a determinar la mejor estrategia de testing para tu infraestructura.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="group bg-white/10 hover:bg-white/20 border-white/20">
                    Solicitar Consulta
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                {settings?.whatsappNumber && (
                  <a 
                    href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('¡Hola! Necesito asesoría para determinar qué servicio de Penetration Testing necesito para mi infraestructura.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="outline" className="group bg-white/10 hover:bg-white/20 border-white/20">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Directo
                    </Button>
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
