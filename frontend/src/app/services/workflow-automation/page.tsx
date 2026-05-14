import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export default async function WorkflowAutomationPage() {
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
      title="Workflow Automation"
      subtitle="Automatización inteligente de procesos empresariales mediante orquestación de workflows, integración de sistemas y diseño de arquitecturas automation-first. Optimiza operaciones, reduce errores manuales y acelera tus procesos de negocio."
      description={[
        "La automatización de workflows transforma procesos manuales y repetitivos en flujos automatizados eficientes. Nuestro servicio de workflow automation diseña, implementa y optimiza soluciones de automatización de procesos empresariales utilizando plataformas modernas de orquestación como Power Automate, Zapier, n8n, Apache Airflow, y herramientas de BPM. Analizamos tus procesos actuales, identificamos oportunidades de automatización, y construimos workflows robustos y escalables.",
        "Implementamos automatizaciones que conectan múltiples sistemas y aplicaciones, integrando APIs, bases de datos, servicios cloud, y herramientas empresariales. Nuestras soluciones incluyen approval workflows, document processing automation, notification systems, data synchronization between systems, reporting automation, y complex business process orchestration. Aplicamos best practices de error handling, monitoring, logging, y governance para garantizar workflows confiables.",
        "Entregamos soluciones de automation completamente documentadas, con runbooks para operación y troubleshooting, dashboards de monitoring, y training para tu equipo. Implementamos continuous improvement mediante análisis de métricas de performance, identificación de cuellos de botella, y optimización continua de workflows. Nuestro enfoque garantiza ROI medible a través de reducción de tiempo de proceso, eliminación de errores manuales, y liberación de recursos humanos para tareas de mayor valor."
      ]}
      certifications={["Microsoft Power Automate Expert", "Automation Anywhere Certified", "UiPath Certified"]}
      benefits={[
        "Análisis exhaustivo de procesos empresariales para identificar oportunidades de automatización con alto ROI.",
        "Diseño e implementación de workflows robustos con error handling, retry logic, y monitoring integrado.",
        "Integración de múltiples sistemas y servicios mediante APIs, webhooks, y conectores empresariales.",
        "Automatización de procesos complejos incluyendo approvals, conditional logic, y human-in-the-loop scenarios.",
        "Implementación de governance y compliance en workflows automatizados con audit trails completos.",
        "Dashboards y reporting para visibility de performance de workflows y métricas de negocio.",
        "Transferencia de conocimiento y training para que tu equipo pueda mantener y extender las automatizaciones."
      ]}
      cta={{
        title: "Transforma Tus Procesos con Automatización",
        description: "Optimiza operaciones empresariales mediante workflows inteligentes que reducen costos y aceleran tu negocio.",
        buttonText: "Automatizar Procesos",
        buttonLink: "/#contact"
      }}
    />
    <Footer settings={settings} />
    </>
  )
}


