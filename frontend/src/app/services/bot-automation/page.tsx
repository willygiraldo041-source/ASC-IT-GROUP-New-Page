import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'

export default function BotAutomationPage() {
  return (
    <ServiceDetailPage
      title="Bot Automation (RPA & Scripts)"
      subtitle="Desarrollo de bots inteligentes y scripts de automatización para tareas repetitivas. Implementamos soluciones RPA, web scraping, data extraction, y task automation que optimizan operaciones y liberan recursos humanos."
      description={[
        "La automatización robótica de procesos (RPA) y el scripting permiten automatizar tareas repetitivas que tradicionalmente requieren intervención humana. Desarrollamos bots inteligentes que pueden interactuar con aplicaciones, navegar interfaces web, procesar documentos, extraer y transformar datos, y ejecutar acciones complejas de manera confiable y escalable. Utilizamos tecnologías como Python, PowerShell, Selenium, Puppeteer, y plataformas RPA empresariales.",
        "Nuestros bots pueden automatizar una amplia gama de tareas incluyendo data entry, form filling, report generation, email processing, file manipulation, database operations, API interactions, web scraping ético, y legacy system automation. Implementamos features avanzadas como computer vision para procesar screenshots, NLP para entender contenido, machine learning para decisiones inteligentes, y integración con AI APIs para capacidades cognitivas.",
        "Entregamos bots production-ready con error handling robusto, logging detallado, retry mechanisms, y capabilities de self-healing. Incluimos documentación completa, deployment guides, monitoring dashboards, y alerting para operación confiable. Aplicamos best practices de security incluyendo credential management seguro, encryption de datos sensibles, y compliance con políticas de la organización. Nuestros bots son maintainable, extensible, y diseñados para operar en ambientes empresariales críticos."
      ]}
      certifications={["UiPath Advanced Developer", "Automation Anywhere Master", "Python Automation Expert"]}
      benefits={[
        "Desarrollo de bots RPA customizados para automatizar procesos específicos de tu organización.",
        "Scripts de automatización en Python, PowerShell, Bash para tareas de sistema y operaciones IT.",
        "Web automation con Selenium, Puppeteer para interacción con aplicaciones web y data extraction.",
        "Bots inteligentes con computer vision, OCR, NLP, y ML para procesar documentos y tomar decisiones.",
        "Automatización de legacy systems mediante RPA cuando APIs no están disponibles.",
        "Monitoring, logging, y error handling enterprise-grade para operación confiable 24/7.",
        "Documentation completa y training para que tu equipo pueda mantener y extender los bots."
      ]}
      cta={{
        title: "Automatiza Tareas Repetitivas con Bots",
        description: "Libera a tu equipo de tareas manuales mediante bots inteligentes y scripts de automatización eficientes.",
        buttonText: "Desarrollar Bots",
        buttonLink: "/#contact"
      }}
    />
  )
}
