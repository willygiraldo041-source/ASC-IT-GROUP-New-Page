import { ServicePageClient } from '@/components/services/ServicePageClient'

export default function Page() {
  return (
    <ServicePageClient
      slug="cicd-infrastructure"
      certifications={["Kubernetes Administrator", "Terraform Associate", "AWS DevOps Professional", "Azure DevOps Engineer"]}
    />
  )
}
