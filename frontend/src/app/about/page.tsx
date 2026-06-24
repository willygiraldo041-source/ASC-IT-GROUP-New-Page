import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { SITE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/seo/config'

export const metadata: Metadata = genMetadata({
  title: 'Quiénes Somos | ASC IT GROUP — Empresa de Ciberseguridad Colombia',
  description:
    'Conoce al equipo de ASC IT GROUP, empresa colombiana de ciberseguridad con certificaciones OSCP, CRTO, CKS y más. Protegemos empresas en Colombia y Latinoamérica desde Bogotá.',
  keywords: [
    'ASC IT GROUP empresa',
    'empresa ciberseguridad Colombia',
    'equipo ciberseguridad Colombia',
    'certificaciones OSCP Colombia',
    'hackers éticos Colombia',
    'quiénes somos ciberseguridad',
    'Bogotá ciberseguridad',
  ],
  canonical: `${SITE_URL}/about`,
  languages: {
    'es': `${SITE_URL}/about`,
    'en': `${SITE_URL}/en/about`,
    'x-default': `${SITE_URL}/about`,
  },
  openGraph: {
    type: 'website',
    title: 'Quiénes Somos | ASC IT GROUP — Empresa de Ciberseguridad Colombia',
    description:
      'Equipo de expertos en ciberseguridad con certificaciones internacionales. Bogotá, Colombia.',
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 800, height: 600, alt: 'ASC IT GROUP Team', type: 'image/png' }],
  },
})
import { Shield, Target, Users, Award, CheckCircle2, Cloud, Swords, Bot, Lock, ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />
        
        <Container>
          <div className="max-w-4xl mx-auto relative z-10">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al Inicio
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Quiénes Somos
              </h1>
            
              <p className="text-xl text-foreground/80 mb-8">
                Fortalece y protege tus activos tecnológicos con nuestros servicios integrales de defensa y ataque cibernético.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main About Section */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">ASC IT GROUP</h2>
              
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Somos un equipo de profesionales de TI con un profundo compromiso en el ámbito de la ciberseguridad. Contamos con las certificaciones más destacadas del mercado, las cuales respaldan firmemente nuestro nivel de profesionalismo y experiencia.
                </p>
                
                <p>
                  Nuestra misión principal se enfoca en brindar asistencia a empresas y particulares para protegerse de amenazas informáticas. Reducimos los riesgos asociados con la infraestructura crítica al implementar soluciones efectivas de respuesta a incidentes.
                </p>
                
                <p>
                  La confianza de nuestros clientes es nuestra mejor carta de presentación. Gracias a nuestro enfoque riguroso y soluciones confiables, hemos ganado la confianza de quienes buscan salvaguardar sus activos digitales y mantener su tranquilidad en un mundo cada vez más conectado.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background border border-white/10 p-12 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 w-full">
                  <div className="rounded-xl bg-primary/10 p-6 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all duration-300">
                    <Shield className="h-12 w-12 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Seguridad</h3>
                    <p className="text-sm text-foreground/60">Protección total</p>
                  </div>
                  
                  <div className="rounded-xl bg-primary/10 p-6 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all duration-300">
                    <Target className="h-12 w-12 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Precisión</h3>
                    <p className="text-sm text-foreground/60">Testing avanzado</p>
                  </div>
                  
                  <div className="rounded-xl bg-primary/10 p-6 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all duration-300">
                    <Users className="h-12 w-12 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Experiencia</h3>
                    <p className="text-sm text-foreground/60">Equipo experto</p>
                  </div>
                  
                  <div className="rounded-xl bg-primary/10 p-6 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all duration-300">
                    <Award className="h-12 w-12 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Certificados</h3>
                    <p className="text-sm text-foreground/60">Top del mercado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Proteger Tu Negocio?
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Permítenos cambiar tu forma de pensar acerca de la tecnología y la seguridad.
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 bg-primary text-background hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 h-13 px-8 text-lg"
            >
              Contactar con Nosotros
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
