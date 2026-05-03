import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'

export default function K8sSecurityPage() {
  return (
    <ServiceDetailPage
      title="Kubernetes Security"
      subtitle="Evaluación y hardening de seguridad para clusters Kubernetes. Identificamos misconfigurations, implementamos security best practices, y fortalecemos tu infraestructura de containers contra amenazas y ataques sofisticados."
      description={[
        "Kubernetes es la plataforma de orquestación de containers líder, pero su complejidad introduce riesgos de seguridad únicos. Nuestro servicio de Kubernetes Security evalúa exhaustivamente la seguridad de tus clusters, identificando misconfigurations en RBAC, network policies, pod security standards, admission controllers, y secrets management. Realizamos security assessments basados en CIS Kubernetes Benchmark, NSA/CISA Kubernetes Hardening Guide, y OWASP Kubernetes Top 10.",
        "Implementamos controles de seguridad robustos incluyendo least privilege RBAC, network segmentation con network policies, pod security admission para enforcar security standards, runtime security monitoring con Falco, policy enforcement con OPA/Gatekeeper, y security scanning de container images. Configuramos audit logging, validamos encryption at rest y in transit, implementamos secrets management con external secrets operators, y establecemos security boundaries entre namespaces y tenants.",
        "Proporcionamos cluster hardening completo que incluye securing del control plane, protection de etcd, configuration de API server security, implementation de admission webhooks para policy enforcement, integration con security tools como Falco, Trivy, y Aqua Security, y setup de monitoring y alerting para security events. Entregamos documentación detallada de security configurations, runbooks para incident response en Kubernetes, y training para tu equipo en Kubernetes security best practices y CKS (Certified Kubernetes Security Specialist) preparation."
      ]}
      certifications={["CKS", "CKA", "Kubernetes Security Specialist", "Cloud Native Security"]}
      benefits={[
        "Security assessment exhaustivo de clusters Kubernetes basado en CIS Benchmark y industry standards.",
        "Implementación de RBAC con least privilege, service accounts seguras, y control de acceso granular.",
        "Network policies para microsegmentation, isolation entre workloads, y zero-trust networking.",
        "Pod Security Standards implementation con admission controllers y policy enforcement.",
        "Runtime security monitoring con Falco para detección de comportamiento anómalo en containers.",
        "Container image scanning en pipeline y runtime, vulnerability management para images.",
        "Secrets management con external secrets operators, encryption at rest para etcd, y secure configurations."
      ]}
      cta={{
        title: "Asegura Tus Clusters Kubernetes",
        description: "Protege tu infraestructura de containers con security best practices y controles de seguridad robustos.",
        buttonText: "Evaluar Kubernetes",
        buttonLink: "/#contact"
      }}
    />
  )
}
