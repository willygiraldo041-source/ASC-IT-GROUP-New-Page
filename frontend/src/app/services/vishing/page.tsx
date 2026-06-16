import { ServicePageClient } from '@/components/services/ServicePageClient'

export default function Page() {
  return (
    <ServicePageClient
      slug="vishing"
      certifications={["Social Engineering Expert", "GPEN", "Certified Ethical Hacker"]}
    />
  )
}
