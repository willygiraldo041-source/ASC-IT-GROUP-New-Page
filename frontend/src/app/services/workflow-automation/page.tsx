import { ServicePageClient } from '@/components/services/ServicePageClient'

export default function Page() {
  return (
    <ServicePageClient
      slug="workflow-automation"
      certifications={["Microsoft Power Automate Expert", "Automation Anywhere Certified", "UiPath Certified"]}
    />
  )
}
