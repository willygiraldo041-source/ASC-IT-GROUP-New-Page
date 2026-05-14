import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

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
      <ServiceDetailPage
      title="Security Audits"
      subtitle="En ASC IT GROUP realizamos auditorías de seguridad orientadas a identificar vulnerabilidades, validar configuraciones críticas y fortalecer el cumplimiento de estándares y buenas prácticas de ciberseguridad."
      description={[
        "Nuestros servicios permiten evaluar la postura de seguridad de la organización mediante revisiones técnicas, análisis de configuraciones y validaciones de cumplimiento sobre infraestructura, aplicaciones y servicios tecnológicos.",
        "**Code Review**: Análisis técnico del código fuente para identificar vulnerabilidades de seguridad, errores de desarrollo seguro, exposición de información sensible, fallas de autenticación y autorización, riesgos OWASP Top 10 y malas prácticas de programación. Realizamos revisiones enfocadas en seguridad para aplicaciones web, APIs y desarrollos empresariales.",
        "**Configuration Audit**: Evaluación de configuraciones de seguridad en Firewalls, Servidores Windows/Linux, Active Directory, Plataformas Cloud, Microsoft 365, Dispositivos de red y Herramientas de seguridad. Validamos configuraciones inseguras, servicios expuestos, permisos excesivos y desviaciones respecto a buenas prácticas.",
        "**Compliance Check**: Verificación del cumplimiento de controles y estándares como ISO 27001, CIS Controls, NIST, PCI-DSS, Políticas corporativas y Requisitos regulatorios. Identificamos brechas de cumplimiento y generamos recomendaciones para fortalecer la postura de seguridad y reducir riesgos operativos."
      ]}
      certifications={["ISO 27001", "CIS Controls", "NIST", "PCI-DSS"]}
      benefits={[
        "Identificación temprana de riesgos de seguridad antes de que sean explotados.",
        "Fortalecimiento de controles de seguridad mediante validación técnica y recomendaciones específicas.",
        "Reducción de superficie de ataque a través de la detección de configuraciones inseguras y servicios expuestos.",
        "Mejora del cumplimiento normativo con evaluaciones alineadas a estándares internacionales.",
        "Recomendaciones técnicas priorizadas basadas en el nivel de riesgo y criticidad de los hallazgos.",
        "Reportes ejecutivos y técnicos detallados con evidencias y roadmap de remediación.",
        "Evaluación de infraestructura On-Premise, Cloud (AWS, Azure, GCP), Aplicaciones Web, APIs, Microsoft 365, Active Directory, Firewalls y Plataformas de Seguridad.",
        "Experiencia en auditorías técnicas, gestión de riesgos, seguridad ofensiva y defensiva, análisis de vulnerabilidades, hardening y cumplimiento.",
        "Enfoque orientado a entregar resultados claros, accionables y alineados con las necesidades del negocio."
      ]}
      cta={{
        title: "Solicita una evaluación",
        description: "Contáctanos para conocer cómo podemos ayudarte a fortalecer la seguridad de tu organización mediante auditorías técnicas y evaluaciones especializadas.",
        buttonText: "Agendar Consulta",
        buttonLink: "/#contact"
      }}
    />
    <Footer settings={settings} />
    </>
  )
}
