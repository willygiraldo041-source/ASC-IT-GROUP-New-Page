import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { PageLoader } from '@/components/ui/PageLoader'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ASC IT GROUP - Cybersecurity & Ethical Hacking Experts',
  description:
    'Professional penetration testing, red team operations, and security audits. Protect your business with expert cybersecurity services from ASC IT GROUP.',
  keywords: [
    'cybersecurity',
    'pentesting',
    'penetration testing',
    'red team',
    'security audit',
    'ethical hacking',
  ],
  authors: [{ name: 'ASC IT GROUP' }],
  creator: 'ASC IT GROUP',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://ascitgroup.com',
    title: 'ASC IT GROUP - Cybersecurity Experts',
    description: 'Professional cybersecurity services to protect your business',
    siteName: 'ASC IT GROUP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASC IT GROUP - Cybersecurity Experts',
    description: 'Professional cybersecurity services to protect your business',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${sora.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased overflow-x-hidden">
        <PageLoader />
        
        {/* Custom Cursor (solo desktop) - Deshabilitado temporalmente */}
        {/* <div className="hidden lg:block">
          <CustomCursor />
        </div> */}
        
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1a1a1a',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            },
          }}
        />
      </body>
    </html>
  )
}
