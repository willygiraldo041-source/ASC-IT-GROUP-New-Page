import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export default async function RansomwareSimPage() {
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
      title="Ransomware Attack Simulation"
      subtitle="Simulación controlada de ataques de ransomware para evaluar tu capacidad de prevención, detección y recuperación. Validamos tus controles de seguridad, backups, y procedimientos de incident response ante este tipo de amenaza crítica."
      description={[
        "Los ataques de ransomware representan una de las amenazas más críticas para las organizaciones actuales. Nuestro servicio de simulación de ransomware evalúa tu capacidad de prevenir, detectar y recuperarte de un ataque real, sin causar daño a tus sistemas. Simulamos el ciclo completo de un ataque de ransomware, desde initial access hasta encryption, validando cada layer de defensa en tu organización.",
        "Replicamos las técnicas utilizadas por grupos de ransomware reales incluyendo phishing para initial access, exploitation de vulnerabilidades, privilege escalation, lateral movement, data exfiltration antes del cifrado, y deployment del ransomware simulado. Evaluamos tus controles de EDR/XDR, validamos la efectividad de tus backups, testamos procedimientos de aislamiento de red, y verificamos la capacidad de tu equipo para responder a este tipo de incidente.",
        "Proporcionamos un informe detallado que documenta cada fase de la simulación, identifica gaps en tus defensas anti-ransomware, evalúa el tiempo de detección y respuesta, valida la viabilidad de recovery desde backups, y entrega recomendaciones específicas para mejorar tu resiliencia contra ransomware. También ofrecemos training para tu equipo en detección y respuesta a ransomware."
      ]}
      certifications={["GCFA", "GCIH", "GREM", "OSCP"]}
      benefits={[
        "Simulación segura de ataque de ransomware sin impacto en producción pero validando controles reales.",
        "Evaluación de efectividad de anti-ransomware controls incluyendo EDR, application whitelisting, y behavioral detection.",
        "Testing de backup and recovery procedures para validar RPO/RTO en escenario de ransomware.",
        "Validación de network segmentation y ability to contain ransomware spread.",
        "Assessment de incident response procedures específicos para ransomware scenarios.",
        "Evaluación de data exfiltration controls y DLP para prevenir double extortion tactics.",
        "Training práctico para SOC y IR teams en detección y respuesta a ransomware."
      ]}
      cta={{
        title: "Prepárate Para Ransomware",
        description: "Valida tu capacidad de prevenir, detectar y recuperarte de ataques de ransomware antes de enfrentar uno real.",
        buttonText: "Simular Ataque",
        buttonLink: "/#contact"
      }}
    />
    <Footer settings={settings} />
    </>
  )
}


