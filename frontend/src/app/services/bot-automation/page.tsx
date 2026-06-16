import { ServicePageClient } from '@/components/services/ServicePageClient'

export default function Page() {
  return (
    <ServicePageClient
      slug="bot-automation"
      certifications={["UiPath Advanced Developer", "Automation Anywhere Master", "Python Automation Expert"]}
    />
  )
}
