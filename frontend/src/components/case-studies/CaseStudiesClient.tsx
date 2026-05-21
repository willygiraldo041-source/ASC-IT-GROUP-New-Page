'use client'

import { Container } from '@/components/ui/Container'
import { useLanguage } from '@/contexts/LanguageContext'
import type { SiteSettings } from '@/types/sanity'
import Link from 'next/link'
import { 
  Shield, 
  Network, 
  ShoppingCart, 
  Users, 
  Target,
  ArrowRight, 
  MessageCircle,
  TrendingUp,
  CheckCircle2
} from 'lucide-react'

const caseStudies = [
  {
    id: 'integrated-management',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    category: 'caseStudies.cases.integratedManagement.category'
  },
  {
    id: 'attack-surface',
    icon: Network,
    color: 'from-purple-500 to-pink-500',
    category: 'caseStudies.cases.attackSurface.category'
  },
  {
    id: 'pentest-breach',
    icon: ShoppingCart,
    color: 'from-green-500 to-emerald-500',
    category: 'caseStudies.cases.pentestBreach.category'
  },
  {
    id: 'security-culture',
    icon: Users,
    color: 'from-orange-500 to-red-500',
    category: 'caseStudies.cases.securityCulture.category'
  },
  {
    id: 'security-strategy',
    icon: Target,
    color: 'from-indigo-500 to-purple-500',
    category: 'caseStudies.cases.securityStrategy.category'
  }
]

interface Props {
  settings: SiteSettings | null
}

export function CaseStudiesClient({ settings }: Props) {
  const { t, locale } = useLanguage()
  
  const whatsappNumber = settings?.whatsappNumber?.replace(/\D/g, '') || '573147950662'
  const whatsappMessage = locale === 'es' 
    ? '¡Hola! Me interesa conocer más sobre sus casos de éxito y cómo pueden ayudar a mi empresa.'
    : 'Hello! I\'m interested in learning more about your success stories and how you can help my company.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <Container className="relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-primary text-sm font-medium">{t('caseStudies.badge')}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              {t('caseStudies.title')}
            </h1>

            <p className="text-xl text-foreground/70 mb-10 leading-relaxed">
              {t('caseStudies.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
              >
                {t('caseStudies.ctaButton1')} <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-background border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                {t('caseStudies.ctaButton2')}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-background">
        <Container>
          <div className="space-y-16">
            {caseStudies.map((caseStudy, index) => {
              const Icon = caseStudy.icon
              const isEven = index % 2 === 0
              
              return (
                <div
                  key={caseStudy.id}
                  className={`group relative bg-card border border-border rounded-3xl p-8 md:p-12 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${
                    isEven ? '' : 'bg-primary/5'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                  
                  <div className="relative grid md:grid-cols-[auto_1fr] gap-8 items-start">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${caseStudy.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      {/* Category & Title */}
                      <div>
                        <div className="text-sm font-semibold text-primary mb-2">
                          {t(caseStudy.category)}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                          {t(`caseStudies.cases.${caseStudy.id}.title`)}
                        </h2>
                      </div>

                      {/* Challenge */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground/80 flex items-center gap-2">
                          <div className="w-1 h-6 bg-red-500 rounded-full" />
                          {t('caseStudies.challengeLabel')}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed pl-5">
                          {t(`caseStudies.cases.${caseStudy.id}.challenge`)}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground/80 flex items-center gap-2">
                          <div className="w-1 h-6 bg-blue-500 rounded-full" />
                          {t('caseStudies.solutionLabel')}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed pl-5">
                          {t(`caseStudies.cases.${caseStudy.id}.solution`)}
                        </p>
                      </div>

                      {/* Impact */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-foreground/80 flex items-center gap-2">
                          <div className="w-1 h-6 bg-green-500 rounded-full" />
                          {t('caseStudies.impactLabel')}
                        </h3>
                        <div className="pl-5 space-y-2">
                          {t(`caseStudies.cases.${caseStudy.id}.impact`)
                            .split('|')
                            .map((impact, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-foreground/70">{impact.trim()}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary via-blue-500 to-cyan-500">
        <div className="absolute inset-0 bg-grid-white/[0.1]" />
        
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('caseStudies.ctaTitle')}
            </h2>
            <p className="text-xl mb-10 text-white/90">
              {t('caseStudies.ctaSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-all hover:scale-105 hover:shadow-xl"
              >
                {t('caseStudies.ctaButton1')} <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold hover:bg-white/20 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                {t('caseStudies.ctaButton2')}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
