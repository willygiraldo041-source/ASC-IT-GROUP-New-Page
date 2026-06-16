import { Metadata } from 'next'
import { RedTeamIndexClient } from '@/components/services/RedTeamIndexClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'Red Team Operations | ASC IT GROUP',
  description: 'Servicios especializados de Red Team para simular ataques reales y evaluar la capacidad de defensa de tu organización.',
}

export default async function RedTeamOperationsPage() {
  const settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)

  return <RedTeamIndexClient settings={settings} />
}
