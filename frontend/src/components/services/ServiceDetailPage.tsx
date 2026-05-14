'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Check, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { useLanguage } from '@/contexts/LanguageContext'

interface ServiceDetailProps {
  title: string
  subtitle: string
  description: string[]
  certifications?: string[]
  benefits: string[]
  cta: {
    title: string
    description: string
    buttonText: string
    buttonLink: string
  }
}

export function ServiceDetailPage({
  title,
  subtitle,
  description,
  certifications,
  benefits,
  cta
}: ServiceDetailProps) {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 mb-8 transition-colors cursor-pointer relative z-20"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('servicePages.backToHome')}
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              {title}
            </h1>
            
            <p className="text-xl text-foreground/80 max-w-3xl">
              {subtitle}
            </p>
            
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 bg-primary text-background hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 h-13 px-8 text-lg mt-8"
            >
              <Phone className="h-5 w-5" />
              {t('common.talkToSales')}
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Description */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">{title}</h2>
                
                {description.map((paragraph, idx) => (
                  <p key={idx} className="text-foreground/80 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* Benefits Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-12"
              >
                <h3 className="text-2xl font-bold mb-6">
                  {t('servicePages.keyBenefits')}
                </h3>
                
                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-primary/10 p-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-foreground/80 flex-1">{benefit}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Certifications Card */}
              {certifications && certifications.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg sticky top-24"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">
                      {t('servicePages.ourCertifications')}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {certifications.map((cert, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg bg-primary/10 px-4 py-3 text-center font-semibold text-primary"
                      >
                        {cert}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {cta.title}
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              {cta.description}
            </p>
            <Link 
              href={cta.buttonLink}
              className="inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 bg-primary text-background hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 h-13 px-8 text-lg"
            >
              <Phone className="h-5 w-5" />
              {cta.buttonText}
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
