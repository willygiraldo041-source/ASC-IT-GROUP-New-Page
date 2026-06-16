import { Metadata } from 'next'
import { AutomationIndexClient } from '@/components/services/AutomationIndexClient'
import { client } from '@/sanity/client'
import { SETTINGS_QUERY } from '@/sanity/queries'
import type { SiteSettings } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'Intelligent Automation | ASC IT GROUP',
  description: 'Servicios de automatización inteligente para optimizar procesos, mejorar eficiencia y reducir costos operativos.',
}

export default async function AutomationPage() {
  const settings = await client.fetch<SiteSettings>(SETTINGS_QUERY)

  return <AutomationIndexClient settings={settings} />
}
