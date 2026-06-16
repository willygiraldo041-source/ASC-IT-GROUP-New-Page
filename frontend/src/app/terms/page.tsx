import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Términos de Servicio - ASC IT GROUP',
  description: 'Conoce los términos y condiciones de uso de los servicios de ASC IT GROUP.',
}

export default function TermsPage() {
  return (
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
                  <Scale className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Términos de Servicio
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
                  Bienvenido a <strong>ASC IT GROUP</strong>. Estos Términos de Servicio ("Términos") rigen el uso de nuestro sitio web y los servicios de ciberseguridad que ofrecemos. Al acceder o utilizar nuestros servicios, usted acepta estar sujeto a estos Términos. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
                </p>
              </div>

              {/* Sección 1 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-0">1. Definiciones</h2>
                </div>
                <div className="pl-13">
                  <ul className="space-y-2">
                    <li><strong>"Servicios":</strong> Todos los servicios de ciberseguridad ofrecidos por ASC IT GROUP, incluyendo pero no limitado a pentesting, auditorías de seguridad, red team operations, consultoría y capacitación.</li>
                    <li><strong>"Cliente":</strong> Persona física o jurídica que contrata nuestros servicios.</li>
                    <li><strong>"Sitio Web":</strong> El sitio web de ASC IT GROUP y todos sus subdominios.</li>
                    <li><strong>"Contenido":</strong> Toda la información, textos, gráficos, software y materiales disponibles en el Sitio Web.</li>
                  </ul>
                </div>
              </div>

              {/* Sección 2 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-0">2. Descripción de Servicios</h2>
                </div>
                <div className="pl-13">
                  <p>ASC IT GROUP ofrece servicios profesionales de ciberseguridad, incluyendo:</p>
                  <ul className="space-y-2">
                    <li><strong>Penetration Testing:</strong> Evaluación de vulnerabilidades en aplicaciones web, redes, móviles y Active Directory</li>
                    <li><strong>Cloud Security:</strong> Auditorías de seguridad en AWS, Azure y GCP</li>
                    <li><strong>Red Team Operations:</strong> Simulación de ataques avanzados, phishing y vishing</li>
                    <li><strong>Intelligent Process Automation:</strong> Automatización de workflows y desarrollo de bots RPA</li>
                    <li><strong>DevOps & Cloud Security:</strong> Integración de seguridad en pipelines CI/CD y Kubernetes</li>
                    <li><strong>Security Training:</strong> Capacitación y concientización en ciberseguridad</li>
                  </ul>
                </div>
              </div>

              {/* Sección 3 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">3. Uso del Sitio Web</h2>
                <div className="pl-13">
                  <h3 className="text-xl font-semibold mb-3">3.1 Uso Permitido</h3>
                  <p>Usted puede utilizar el Sitio Web para:</p>
                  <ul className="space-y-2">
                    <li>Informarse sobre nuestros servicios</li>
                    <li>Contactarnos para consultas comerciales</li>
                    <li>Acceder a recursos educativos y blog</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Uso Prohibido</h3>
                  <p>NO está permitido:</p>
                  <ul className="space-y-2">
                    <li>Realizar ingeniería inversa, descompilar o intentar extraer el código fuente</li>
                    <li>Realizar ataques de denegación de servicio (DoS/DDoS)</li>
                    <li>Intentar acceder sin autorización a sistemas o datos</li>
                    <li>Usar el sitio para propósitos ilegales o fraudulentos</li>
                    <li>Distribuir malware, virus o código malicioso</li>
                    <li>Copiar, reproducir o redistribuir nuestro contenido sin autorización</li>
                  </ul>
                </div>
              </div>

              {/* Sección 4 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">4. Contratación de Servicios</h2>
                <div className="pl-13">
                  <h3 className="text-xl font-semibold mb-3">4.1 Proceso</h3>
                  <ol className="space-y-2">
                    <li><strong>Consulta inicial:</strong> El Cliente contacta a ASC IT GROUP para discutir sus necesidades</li>
                    <li><strong>Propuesta:</strong> Enviamos una propuesta comercial detallada</li>
                    <li><strong>Contrato:</strong> Se firma un contrato específico que detalla alcance, plazos y costos</li>
                    <li><strong>Ejecución:</strong> Prestación del servicio según lo acordado</li>
                    <li><strong>Reporte:</strong> Entrega de informe detallado con hallazgos y recomendaciones</li>
                  </ol>

                  <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Requisitos del Cliente</h3>
                  <p>El Cliente debe:</p>
                  <ul className="space-y-2">
                    <li>Proporcionar acceso autorizado a los sistemas a evaluar</li>
                    <li>Designar un punto de contacto técnico</li>
                    <li>Informar sobre sistemas críticos y restricciones</li>
                    <li>Aprobar por escrito el alcance del trabajo</li>
                  </ul>
                </div>
              </div>

              {/* Sección 5 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">5. Confidencialidad</h2>
                <div className="pl-13">
                  <p>ASC IT GROUP se compromete a:</p>
                  <ul className="space-y-2">
                    <li>Mantener estricta confidencialidad sobre toda información del Cliente</li>
                    <li>No divulgar hallazgos de seguridad a terceros sin autorización</li>
                    <li>Firmar acuerdos de confidencialidad (NDA) cuando sea requerido</li>
                    <li>Implementar controles de seguridad para proteger la información del Cliente</li>
                    <li>Eliminar datos del Cliente tras finalización del servicio (según lo acordado)</li>
                  </ul>
                </div>
              </div>

              {/* Sección 6 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-0">6. Limitación de Responsabilidad</h2>
                </div>
                <div className="pl-13">
                  <h3 className="text-xl font-semibold mb-3">6.1 Alcance de Servicios</h3>
                  <p>Nuestros servicios de pentesting y auditorías de seguridad:</p>
                  <ul className="space-y-2">
                    <li>Se realizan en un momento específico en el tiempo</li>
                    <li>No garantizan la detección del 100% de vulnerabilidades</li>
                    <li>Se basan en el alcance acordado en el contrato</li>
                    <li>Dependen de la cooperación y acceso proporcionado por el Cliente</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6">6.2 Disclaimers</h3>
                  <p>ASC IT GROUP NO es responsable de:</p>
                  <ul className="space-y-2">
                    <li>Daños causados por vulnerabilidades no detectadas</li>
                    <li>Interrupciones del servicio durante pruebas de seguridad (si se realizan según lo acordado)</li>
                    <li>Pérdidas derivadas de no implementar las recomendaciones proporcionadas</li>
                    <li>Ataques exitosos posteriores a la finalización del servicio</li>
                    <li>Uso inadecuado de nuestras recomendaciones por parte del Cliente</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6">6.3 Límite de Responsabilidad</h3>
                  <p>En ningún caso la responsabilidad total de ASC IT GROUP excederá el valor pagado por el servicio específico que dio origen al reclamo.</p>
                </div>
              </div>

              {/* Sección 7 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">7. Propiedad Intelectual</h2>
                <div className="pl-13">
                  <h3 className="text-xl font-semibold mb-3">7.1 Contenido del Sitio</h3>
                  <p>Todo el contenido del Sitio Web (textos, gráficos, logos, diseño) es propiedad de ASC IT GROUP y está protegido por leyes de propiedad intelectual de Colombia.</p>

                  <h3 className="text-xl font-semibold mb-3 mt-6">7.2 Reportes y Entregables</h3>
                  <ul className="space-y-2">
                    <li>Los reportes de pentesting son para uso exclusivo del Cliente</li>
                    <li>El Cliente no puede redistribuir reportes sin autorización escrita</li>
                    <li>ASC IT GROUP retiene derechos sobre metodologías y herramientas propietarias</li>
                    <li>El Cliente puede usar hallazgos para mejorar su seguridad</li>
                  </ul>
                </div>
              </div>

              {/* Sección 8 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">8. Facturación y Pagos</h2>
                <div className="pl-13">
                  <ul className="space-y-2">
                    <li><strong>Cotizaciones:</strong> Válidas por 30 días desde emisión</li>
                    <li><strong>Pagos:</strong> Según términos acordados en contrato (típicamente 50% anticipo, 50% contra entrega)</li>
                    <li><strong>Moneda:</strong> Pesos colombianos (COP) o dólares americanos (USD)</li>
                    <li><strong>Impuestos:</strong> Precios más IVA según legislación colombiana</li>
                    <li><strong>Mora:</strong> Intereses por pagos atrasados según normativa bancaria</li>
                  </ul>
                </div>
              </div>

              {/* Sección 9 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">9. Cancelación y Reembolsos</h2>
                <div className="pl-13">
                  <ul className="space-y-2">
                    <li><strong>Por el Cliente:</strong> Cancelaciones con menos de 48 horas de anticipación pueden estar sujetas a penalidades</li>
                    <li><strong>Por ASC IT GROUP:</strong> Nos reservamos el derecho de cancelar servicios si detectamos uso no autorizado o ilegal</li>
                    <li><strong>Reembolsos:</strong> Se evaluarán caso por caso según trabajo completado</li>
                    <li><strong>Fuerza mayor:</strong> No hay penalidades por eventos fuera de nuestro control</li>
                  </ul>
                </div>
              </div>

              {/* Sección 10 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">10. Garantías y Soporte</h2>
                <div className="pl-13">
                  <h3 className="text-xl font-semibold mb-3">10.1 Garantías</h3>
                  <p>Garantizamos que:</p>
                  <ul className="space-y-2">
                    <li>Los servicios se realizarán con estándares profesionales de la industria</li>
                    <li>Nuestro equipo cuenta con certificaciones y experiencia relevante</li>
                    <li>Seguimos metodologías reconocidas (OWASP, NIST, PTES)</li>
                    <li>Los reportes serán claros, detallados y accionables</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6">10.2 Soporte Post-Servicio</h3>
                  <ul className="space-y-2">
                    <li>30 días de soporte para aclarar dudas sobre el reporte</li>
                    <li>Asistencia en priorización de remediación (según disponibilidad)</li>
                    <li>Retesting disponible para verificar correcciones</li>
                  </ul>
                </div>
              </div>

              {/* Sección 11 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">11. Modificaciones</h2>
                <div className="pl-13">
                  <p>ASC IT GROUP se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones entrarán en vigor al ser publicadas en el Sitio Web. El uso continuado de nuestros servicios constituye aceptación de los términos modificados.</p>
                </div>
              </div>

              {/* Sección 12 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">12. Ley Aplicable y Jurisdicción</h2>
                <div className="pl-13">
                  <p>Estos Términos se rigen por las leyes de la República de Colombia. Cualquier disputa será resuelta en primera instancia mediante negociación directa. Si no se llega a acuerdo, las partes se someten a la jurisdicción de los tribunales competentes de Bogotá, Colombia.</p>
                </div>
              </div>

              {/* Sección 13 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">13. Divisibilidad</h2>
                <div className="pl-13">
                  <p>Si alguna disposición de estos Términos se considera inválida o inaplicable, las demás disposiciones permanecerán en pleno vigor y efecto.</p>
                </div>
              </div>

              {/* Contacto */}
              <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-blue-500/5 border border-primary/20">
                <h2 className="text-2xl font-bold mb-4">Contacto</h2>
                <p className="mb-4">Para preguntas sobre estos Términos de Servicio o para contratar nuestros servicios:</p>
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
  )
}
