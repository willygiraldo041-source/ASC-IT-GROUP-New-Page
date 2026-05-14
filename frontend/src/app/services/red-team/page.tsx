import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export default async function RedTeamPage() {
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
      title="Red Team Assessments"
      subtitle="Simulaciones avanzadas de ataques reales contra tu organización. Evaluamos tu capacidad de detección, respuesta y prevención mediante operaciones ofensivas realistas que replican las tácticas de adversarios sofisticados."
      description={[
        "Las operaciones de Red Team van más allá del penetration testing tradicional, simulando ataques APT (Advanced Persistent Threat) realistas contra tu organización durante períodos extendidos. Nuestro equipo de Red Team emplea las mismas tácticas, técnicas y procedimientos (TTPs) que utilizan los atacantes reales, evaluando no solo la seguridad técnica, sino también tu capacidad de detección, análisis de SOC, incident response, y awareness del personal.",
        "Realizamos operaciones que incluyen reconocimiento pasivo y activo, social engineering, physical security testing, initial access mediante phishing o exploitation, persistence en la red, lateral movement, privilege escalation, y exfiltración de datos simulada. Operamos de forma sigilosa evaluando tu capacidad de detectar y responder a amenazas avanzadas, documentando cada paso de la kill chain desde reconnaissance hasta impact.",
        "Al finalizar la operación de Red Team, proporcionamos un debrief ejecutivo y técnico detallado que incluye timeline de la operación, TTPs empleadas (mapeadas a MITRE ATT&CK), evidencia de cada fase del ataque, análisis de gaps en detección y respuesta, y recomendaciones prioritizadas para mejorar tu postura de seguridad defensiva. También ofrecemos ejercicios purple team para transferir conocimiento a tu equipo de seguridad."
      ]}
      certifications={["OSEP", "OSCE³", "CRTO", "CARTP"]}
      benefits={[
        "Simulación realista de ataques APT con TTPs mapeadas a MITRE ATT&CK framework.",
        "Evaluación integral de tu security operations center (SOC) y capacidades de threat detection.",
        "Testing de incident response procedures y tiempos de respuesta ante amenazas reales.",
        "Social engineering campaigns incluyendo phishing, vishing, y physical security testing.",
        "Validación de controles de seguridad en un escenario de ataque multi-vector y multi-stage.",
        "Assessment de network segmentation, lateral movement detection, y data exfiltration controls.",
        "Ejercicios purple team opcionales para mejorar collaboration entre equipos ofensivos y defensivos."
      ]}
      cta={{
        title: "Evalúa Tu Capacidad Defensiva",
        description: "Descubre gaps críticos en tu seguridad mediante simulaciones de ataques realistas por adversarios avanzados.",
        buttonText: "Agendar Red Team",
        buttonLink: "/#contact"
      }}
    />
    <Footer settings={settings} />
    </>
  )
}


