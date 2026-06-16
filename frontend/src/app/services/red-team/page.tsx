import { ServicePageClient } from '@/components/services/ServicePageClient'

export default function Page() {
  return (
    <ServicePageClient
      slug="red-team"
      certifications={["OSEP", "OSCE³", "CRTO", "CARTP"]}
    />
  )
}
