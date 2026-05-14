import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export default async function VishingPage() {
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
      title="Vishing Testing"
      subtitle="Simulación de ataques de voice phishing (vishing) para evaluar la susceptibilidad de tu personal a ingeniería social por teléfono. Identificamos vulnerabilidades en tus procesos de verificación de identidad y security awareness."
      description={[
        "Los ataques de vishing (voice phishing) utilizan llamadas telefónicas para manipular a empleados y obtener información sensible o acceso no autorizado. Nuestro servicio de testing de vishing simula llamadas de ingeniería social realistas, pretexting scenarios como IT support, executives, vendors, o autoridades, para evaluar cómo tus empleados responden a solicitudes sospechosas por teléfono.",
        "Diseñamos escenarios de vishing customizados para tu organización, incluyendo scenarios de password reset, access requests, información confidencial, financial fraud (CEO fraud), y otros pretexts relevantes. Nuestros ethical hackers experimentados en ingeniería social realizan las llamadas siguiendo protocolos de seguridad y compliance, documentando cada interacción y evaluando la efectividad de tus controles y políticas.",
        "Entregamos un informe detallado que incluye métricas de susceptibilidad a vishing, transcripciones de llamadas exitosas (con consentimiento), análisis de puntos débiles en tus procesos de verificación, identificación de empleados y departamentos de alto riesgo, y recomendaciones específicas para mejorar tus procedimientos de autenticación por teléfono y training de awareness contra vishing."
      ]}
      certifications={["Social Engineering Expert", "GPEN", "Certified Ethical Hacker"]}
      benefits={[
        "Simulaciones realistas de vishing con pretexts customizados para tu industria y organización.",
        "Evaluación de procesos de verificación de identidad por teléfono y controles de acceso verbal.",
        "Identificación de empleados susceptibles a tácticas de social engineering por voz.",
        "Testing de diferentes scenarios: IT support, executive fraud, vendor impersonation, authority impersonation.",
        "Assessment de controles organizacionales como callback procedures y verification protocols.",
        "Training específico en detección y respuesta a intentos de vishing para tu personal.",
        "Métricas de risk reduction a través de campañas de awareness y entrenamiento continuo."
      ]}
      cta={{
        title: "Protege Contra Vishing",
        description: "Identifica y corrige vulnerabilidades en tus procesos antes de que sean explotadas por atacantes reales.",
        buttonText: "Evaluar Vulnerabilidad",
        buttonLink: "/#contact"
      }}
    />
    <Footer settings={settings} />
    </>
  )
}


