import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'Política de Privacidad - ASC IT GROUP',
  description: 'Conoce cómo ASC IT GROUP protege y maneja tu información personal.',
}

export default async function PrivacyPage() {
  const settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)
  
  return (
    <>
      <Navbar settings={settings} />
      <div className="min-h-screen bg-background">
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
              
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Política de Privacidad
                </h1>
                <p className="text-lg text-foreground/70">
                  Última actualización: Mayo 2026
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
              {/* Introducción */}
              <div className="mb-12 p-6 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-foreground/80 mb-0">
                  En <strong>ASC IT GROUP</strong>, nos comprometemos a proteger la privacidad y seguridad de la información personal de nuestros clientes, usuarios y visitantes. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información de acuerdo con las leyes colombianas de protección de datos, incluyendo la Ley 1581 de 2012 y el Decreto 1377 de 2013.
                </p>
              </div>

              {/* Sección 1 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-0">1. Información que Recopilamos</h2>
                </div>
                <div className="pl-13">
                  <h3 className="text-xl font-semibold mb-3">1.1 Información Personal</h3>
                  <p>Recopilamos la siguiente información cuando interactúa con nuestros servicios:</p>
                  <ul className="space-y-2">
                    <li><strong>Datos de contacto:</strong> Nombre, dirección de correo electrónico, número de teléfono, nombre de empresa</li>
                    <li><strong>Información profesional:</strong> Cargo, sector industrial, tamaño de empresa</li>
                    <li><strong>Datos de comunicación:</strong> Mensajes, consultas y preferencias de comunicación</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6">1.2 Información Técnica</h3>
                  <ul className="space-y-2">
                    <li>Dirección IP y datos de navegación</li>
                    <li>Tipo de navegador y dispositivo</li>
                    <li>Páginas visitadas y tiempo de permanencia</li>
                    <li>Cookies y tecnologías similares</li>
                  </ul>
                </div>
              </div>

              {/* Sección 2 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-0">2. Cómo Usamos su Información</h2>
                </div>
                <div className="pl-13">
                  <p>Utilizamos su información personal para los siguientes propósitos:</p>
                  <ul className="space-y-2">
                    <li><strong>Prestación de servicios:</strong> Pentesting, auditorías de seguridad, consultoría en ciberseguridad</li>
                    <li><strong>Comunicación:</strong> Responder a consultas, enviar propuestas comerciales, notificaciones de servicios</li>
                    <li><strong>Mejora continua:</strong> Análisis de uso del sitio web, optimización de servicios</li>
                    <li><strong>Cumplimiento legal:</strong> Obligaciones legales y regulatorias</li>
                    <li><strong>Marketing:</strong> Envío de información sobre nuevos servicios (con su consentimiento previo)</li>
                  </ul>
                </div>
              </div>

              {/* Sección 3 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-0">3. Protección de Datos</h2>
                </div>
                <div className="pl-13">
                  <p>Como empresa especializada en ciberseguridad, implementamos las mejores prácticas de la industria para proteger su información:</p>
                  <ul className="space-y-2">
                    <li><strong>Cifrado:</strong> Uso de HTTPS/TLS para transmisión segura de datos</li>
                    <li><strong>Controles de acceso:</strong> Acceso restringido basado en roles y necesidad de conocer</li>
                    <li><strong>Monitoreo continuo:</strong> Detección de amenazas y respuesta a incidentes</li>
                    <li><strong>Auditorías regulares:</strong> Evaluaciones periódicas de seguridad</li>
                    <li><strong>Capacitación del personal:</strong> Formación continua en protección de datos</li>
                  </ul>
                </div>
              </div>

              {/* Sección 4 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">4. Compartir Información</h2>
                <div className="pl-13">
                  <p>No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en los siguientes casos:</p>
                  <ul className="space-y-2">
                    <li><strong>Proveedores de servicios:</strong> Partners tecnológicos que ayudan a operar nuestro sitio web (hosting, analytics)</li>
                    <li><strong>Requisitos legales:</strong> Cuando sea requerido por ley o autoridades competentes</li>
                    <li><strong>Protección de derechos:</strong> Para proteger nuestros derechos legales o los de terceros</li>
                  </ul>
                  <p className="mt-4">Todos los terceros están obligados contractualmente a mantener la confidencialidad de su información.</p>
                </div>
              </div>

              {/* Sección 5 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">5. Sus Derechos</h2>
                <div className="pl-13">
                  <p>De acuerdo con la legislación colombiana, usted tiene los siguientes derechos:</p>
                  <ul className="space-y-2">
                    <li><strong>Acceso:</strong> Conocer qué información personal tenemos sobre usted</li>
                    <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
                    <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos personales</li>
                    <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para ciertos fines</li>
                    <li><strong>Revocación:</strong> Revocar la autorización otorgada para el tratamiento de datos</li>
                  </ul>
                  <p className="mt-4">Para ejercer estos derechos, contáctenos en: <a href="mailto:sac@ascitgroup.com" className="text-primary hover:text-primary/80">sac@ascitgroup.com</a></p>
                </div>
              </div>

              {/* Sección 6 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">6. Cookies y Tecnologías Similares</h2>
                <div className="pl-13">
                  <p>Utilizamos cookies y tecnologías similares para:</p>
                  <ul className="space-y-2">
                    <li>Recordar sus preferencias</li>
                    <li>Analizar el tráfico del sitio web</li>
                    <li>Mejorar la experiencia del usuario</li>
                    <li>Personalizar contenido</li>
                  </ul>
                  <p className="mt-4">Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.</p>
                </div>
              </div>

              {/* Sección 7 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">7. Retención de Datos</h2>
                <div className="pl-13">
                  <p>Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política o según lo requiera la ley colombiana. Los criterios para determinar el período de retención incluyen:</p>
                  <ul className="space-y-2">
                    <li>Duración de la relación comercial</li>
                    <li>Obligaciones legales de conservación</li>
                    <li>Plazos de prescripción legal</li>
                    <li>Resolución de disputas</li>
                  </ul>
                </div>
              </div>

              {/* Sección 8 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">8. Transferencias Internacionales</h2>
                <div className="pl-13">
                  <p>Si transferimos datos personales fuera de Colombia, aseguramos que el país de destino proporcione un nivel adecuado de protección o implementamos salvaguardas contractuales apropiadas conforme a la legislación colombiana.</p>
                </div>
              </div>

              {/* Sección 9 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">9. Menores de Edad</h2>
                <div className="pl-13">
                  <p>Nuestros servicios están dirigidos a empresas y profesionales. No recopilamos intencionalmente información de menores de 18 años sin el consentimiento de sus padres o tutores legales.</p>
                </div>
              </div>

              {/* Sección 10 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">10. Cambios a esta Política</h2>
                <div className="pl-13">
                  <p>Nos reservamos el derecho de actualizar esta Política de Privacidad periódicamente. Los cambios significativos serán notificados a través de nuestro sitio web o por correo electrónico. Le recomendamos revisar esta página regularmente.</p>
                </div>
              </div>

              {/* Contacto */}
              <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-blue-500/5 border border-primary/20">
                <h2 className="text-2xl font-bold mb-4">Contacto</h2>
                <p className="mb-4">Para preguntas, comentarios o solicitudes relacionadas con esta Política de Privacidad:</p>
                <ul className="space-y-2">
                  <li><strong>Empresa:</strong> ASC IT GROUP</li>
                  <li><strong>Email:</strong> <a href="mailto:sac@ascitgroup.com" className="text-primary hover:text-primary/80">sac@ascitgroup.com</a></li>
                  <li><strong>Teléfono:</strong> <a href="tel:+573147950662" className="text-primary hover:text-primary/80">+57 314 795 0662</a></li>
                  <li><strong>Ubicación:</strong> Bogotá, Colombia</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </div>
      <Footer settings={settings} />
    </>
  )
}
