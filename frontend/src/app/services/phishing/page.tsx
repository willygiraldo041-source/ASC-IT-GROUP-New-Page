import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export default async function PhishingPage() {
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
      title="Email Spear Phishing Simulation"
      subtitle="Campañas de phishing dirigido para evaluar el nivel de awareness de seguridad en tu organización. Identificamos usuarios vulnerables y medimos la efectividad de tu programa de security awareness training."
      description={[
        "El phishing sigue siendo el vector de ataque inicial más común en brechas de seguridad. Nuestro servicio de simulación de spear phishing evalúa la susceptibilidad de tus empleados a ataques de ingeniería social mediante campañas realistas pero controladas. Diseñamos emails de phishing personalizados que replican las tácticas utilizadas por atacantes reales, incluyendo spoofing, urgency tactics, y pretexting contextual a tu industria.",
        "Realizamos campañas de phishing con diferentes niveles de sofisticación, desde phishing masivo hasta spear phishing altamente dirigido contra executives y usuarios con privilegios elevados. Simulamos diversos scenarios incluyendo credential harvesting, malware delivery, business email compromise (BEC), y otros tipos de ataques de ingeniería social. Cada campaña es customizada para tu organización e incluye landing pages convincentes y tracking detallado de interactions.",
        "Proporcionamos métricas detalladas incluyendo click rates, credential submission rates, reporting rates, y tiempo promedio para reportar. Identificamos usuarios de alto riesgo, departamentos vulnerables, y gaps en tu programa de awareness. Entregamos recomendaciones para mejorar tu security culture, contenido para training personalizado basado en los resultados, y servicios de awareness training continuo para reducir el riesgo humano."
      ]}
      certifications={["GPEN", "GCIH", "Social Engineering Expert"]}
      benefits={[
        "Campañas de phishing realistas y personalizadas que replican tácticas de atacantes reales.",
        "Evaluación de susceptibilidad a diferentes tipos de phishing: credential harvesting, malware, BEC.",
        "Identificación de usuarios de alto riesgo y departamentos con mayor vulnerabilidad.",
        "Métricas detalladas de click rates, submission rates, y reporting behavior.",
        "Assessment de efectividad de tus controles anti-phishing: email filtering, user reporting tools.",
        "Contenido customizado de security awareness training basado en resultados de la campaña.",
        "Campañas continuas para medir mejora en security culture y reducción de riesgo humano."
      ]}
      cta={{
        title: "Fortalece Tu Security Culture",
        description: "Mide y mejora el awareness de seguridad de tus empleados mediante campañas realistas de phishing.",
        buttonText: "Iniciar Campaña",
        buttonLink: "/#contact"
      }}
    />
    <Footer settings={settings} />
    </>
  )
}


