import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'

export default function CICDInfrastructurePage() {
  return (
    <ServiceDetailPage
      title="CI/CD & Infrastructure Automation"
      subtitle="Diseño e implementación de pipelines CI/CD modernos y automatización de infraestructura. Acelera tus releases, mejora calidad de software, y gestiona infraestructura como código con GitOps y prácticas DevOps."
      description={[
        "La automatización de CI/CD y gestión de infraestructura es fundamental para organizaciones que buscan agilidad y confiabilidad en entregas de software. Implementamos pipelines CI/CD completos utilizando herramientas modernas como Jenkins, GitLab CI, GitHub Actions, Azure DevOps, y ArgoCD. Nuestras soluciones incluyen automated testing, security scanning, artifact management, deployment automation, y rollback strategies que garantizan releases rápidos y seguros.",
        "Implementamos Infrastructure as Code (IaC) utilizando Terraform, Ansible, CloudFormation, y Pulumi para provisionar y gestionar infraestructura de manera declarativa, versionada y reproducible. Aplicamos principios GitOps donde toda la configuración vive en Git, los cambios se aplican mediante pull requests con review y approval, y el estado deseado se reconcilia automáticamente. Esto proporciona auditability completa, disaster recovery capabilities, y consistency entre ambientes.",
        "Nuestras implementaciones incluyen automated environment provisioning, configuration management, secrets management con Vault o AWS Secrets Manager, monitoring y observability con Prometheus/Grafana, y progressive delivery strategies como blue-green deployments y canary releases. Proporcionamos training completo para tu equipo en herramientas y prácticas, documentación exhaustiva de pipelines e infraestructura, y best practices de platform engineering para escalar tu práctica DevOps."
      ]}
      certifications={["Kubernetes Administrator", "Terraform Associate", "AWS DevOps Professional", "Azure DevOps Engineer"]}
      benefits={[
        "Diseño e implementación de pipelines CI/CD con automated testing, security scanning, y deployment automation.",
        "Infrastructure as Code con Terraform, Ansible para provisioning reproducible y versionado de infraestructura.",
        "GitOps implementation para gestión declarativa de infraestructura y aplicaciones con Git como source of truth.",
        "Container orchestration con Kubernetes, Helm charts, y operators para gestión de aplicaciones cloud-native.",
        "Secrets management, configuration management, y environment parity entre dev, staging, y production.",
        "Monitoring, logging, y observability stack completo con alerting y dashboards operacionales.",
        "Progressive delivery con feature flags, blue-green deployments, canary releases para minimizar riesgo."
      ]}
      cta={{
        title: "Moderniza Tu Infraestructura y Deployments",
        description: "Acelera entregas de software y gestiona infraestructura como código con prácticas DevOps modernas.",
        buttonText: "Transformar DevOps",
        buttonLink: "/#contact"
      }}
    />
  )
}
