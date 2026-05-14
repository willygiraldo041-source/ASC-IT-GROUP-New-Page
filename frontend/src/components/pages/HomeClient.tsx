'use client'

import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { CTA } from '@/components/sections/CTA'
import { Contact } from '@/components/sections/Contact'
import type { Service } from '@/types/sanity'

interface HomeClientProps {
  services: Service[]
}

export function HomeClient({ services }: HomeClientProps) {
  return (
    <main className="relative">
      <Hero />
      <Services services={services} />
      <About />
      <CTA />
      <Contact />
    </main>
  )
}
