import { NavbarClient } from './NavbarClient'
import type { SiteSettings } from '@/types/sanity'

interface NavbarProps {
  settings: SiteSettings | null
}

export function Navbar({ settings }: NavbarProps) {
  return <NavbarClient settings={settings} />
}
