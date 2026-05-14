import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export default async function DevSecOpsPage() {
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
      title="Cloud Security (DevSecOps)"
      subtitle="Integración de seguridad en tus pipelines DevOps y arquitecturas cloud. Implementamos shift-left security, SAST/DAST, container scanning, policy as code, y prácticas DevSecOps que hacen la seguridad parte del desarrollo."
      description={[
        "DevSecOps integra seguridad en cada fase del ciclo de vida de desarrollo, haciendo que sea responsabilidad compartida y automatizada. Implementamos security gates en tus pipelines CI/CD incluyendo SAST (Static Application Security Testing), DAST (Dynamic Application Security Testing), SCA (Software Composition Analysis), container image scanning, IaC security scanning, y secret detection. Estas validaciones automáticas detectan vulnerabilidades temprano cuando son más económicas de remediar.",
        "Implementamos policy as code utilizando herramientas como Open Policy Agent (OPA), Kyverno, y cloud-native policy engines para enforcar controles de seguridad, compliance, y governance de manera automatizada. Esto incluye validación de configuraciones de infraestructura, enforcement de security baselines, control de deployment policies, y automated compliance checking contra frameworks como CIS Benchmarks, SOC 2, y regulaciones específicas de tu industria.",
        "Nuestras implementaciones DevSecOps incluyen vulnerability management automatizado, security testing en pre-production environments, runtime security monitoring, automated incident response, y security observability con herramientas como Falco, Aqua Security, y cloud-native security platforms. Proporcionamos training en secure coding practices, threat modeling, y security champions program para embeber security mindset en tu equipo de desarrollo. El resultado es software más seguro entregado más rápido sin comprometer la agilidad."
      ]}
      certifications={["Certified DevSecOps Professional", "AWS Security Specialty", "Kubernetes Security Specialist"]}
      benefits={[
        "Implementación de security scanning automatizado en CI/CD: SAST, DAST, SCA, container scanning.",
        "Policy as code con OPA, Kyverno para automated enforcement de security policies y compliance.",
        "Shift-left security con early detection de vulnerabilidades en IDE, pre-commit hooks, y pull requests.",
        "Container security con image scanning, runtime protection, y network policies en Kubernetes.",
        "Secrets management automatizado con detection de secrets en código y integración con vaults.",
        "Security observability con monitoring de runtime threats, anomaly detection, y automated response.",
        "Security champions program y training para desarrolladores en secure coding y threat modeling."
      ]}
      cta={{
        title: "Integra Seguridad en Tu DevOps",
        description: "Haz la seguridad parte natural de tu desarrollo con automatización, políticas como código, y shift-left practices.",
        buttonText: "Implementar DevSecOps",
        buttonLink: "/#contact"
      }}
    />
    <Footer settings={settings} />
    </>
  )
}


