'use client'

import { Container } from '@/components/ui/Container'
import { useLanguage } from '@/contexts/LanguageContext'
import type { SiteSettings } from '@/types/sanity'
import Link from 'next/link'
import { Cloud, GitBranch, Container as ContainerIcon, Shield, ArrowRight, MessageCircle } from 'lucide-react'

const devOpsCloudServices = [
  {
    titleKey: 'serviceCards.devOpsCloud.devSecOps.title',
    descriptionKey: 'serviceCards.devOpsCloud.devSecOps.description',
    slug: 'devsecops',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    titleKey: 'serviceCards.devOpsCloud.cicd.title',
    descriptionKey: 'serviceCards.devOpsCloud.cicd.description',
    slug: 'cicd-infrastructure',
    icon: GitBranch,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    titleKey: 'serviceCards.devOpsCloud.kubernetes.title',
    descriptionKey: 'serviceCards.devOpsCloud.kubernetes.description',
    slug: 'k8s-security',
    icon: ContainerIcon,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    titleKey: 'serviceCards.devOpsCloud.multiCloud.title',
    descriptionKey: 'serviceCards.devOpsCloud.multiCloud.description',
    slug: 'devops-cloud-security',
    icon: Cloud,
    color: 'from-violet-500 to-purple-500'
  }
]

interface Props {
  settings: SiteSettings | null
}

export function DevOpsCloudIndexClient({ settings }: Props) {
  const { t, locale } = useLanguage()

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-500 to-purple-500">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <Cloud className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">{t('serviceIndexPages.devOpsCloud.badge')}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('serviceIndexPages.devOpsCloud.title')}
            </h1>
            
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              {t('serviceIndexPages.devOpsCloud.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 h-12 px-4 text-sm sm:h-13 sm:px-8 sm:text-lg bg-white text-indigo-600 hover:bg-white/90 hover:scale-105 hover:shadow-xl"
              >
                {t('serviceIndexPages.devOpsCloud.ctaButton1')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              {settings?.whatsappNumber && (
                <a
                  href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(locale === 'es' ? '¡Hola! Necesito asesoría en seguridad para DevOps y Cloud.' : 'Hello! I need advice on DevOps and Cloud security.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 h-12 px-4 text-sm sm:h-13 sm:px-8 sm:text-lg bg-white text-indigo-600 hover:bg-white/90 hover:scale-105 hover:shadow-xl"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t('serviceIndexPages.devOpsCloud.ctaButton2')}
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {devOpsCloudServices.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                  
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {t(service.titleKey)}
                  </h3>

                  <p className="text-foreground/60 mb-6 leading-relaxed">
                    {t(service.descriptionKey)}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    {t('common.learnMore')} <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-500 to-purple-500">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('serviceIndexPages.devOpsCloud.ctaTitle')}
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              {t('serviceIndexPages.devOpsCloud.ctaSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 h-12 px-4 text-sm sm:h-13 sm:px-8 sm:text-lg bg-white text-indigo-600 hover:bg-white/90 hover:scale-105 hover:shadow-xl"
              >
                {t('serviceIndexPages.devOpsCloud.ctaButton1')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {settings?.whatsappNumber && (
                <a
                  href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(locale === 'es' ? '¡Hola! Necesito asesoría en seguridad para DevOps y Cloud.' : 'Hello! I need advice on DevOps and Cloud security.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 h-12 px-4 text-sm sm:h-13 sm:px-8 sm:text-lg bg-white text-indigo-600 hover:bg-white/90 hover:scale-105 hover:shadow-xl"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t('serviceIndexPages.devOpsCloud.ctaButton2')}
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
