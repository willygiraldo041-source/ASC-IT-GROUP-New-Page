'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { fadeInUp } from '@/lib/animations'
import { useLanguage } from '@/contexts/LanguageContext'

export function CTA() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '300px',
  })

  return (
    <section className="py-24 relative overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-blue-500/5 to-primary/10 p-12 md:p-16 overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />

          <div className="relative z-10 text-center">
            <motion.div
              variants={fadeInUp}
              className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20"
            >
              <Shield className="h-8 w-8 text-primary" />
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              {t('cta.title')}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mb-8 max-w-2xl text-lg text-foreground/70"
            >
              {t('cta.subtitle')}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <a 
                href="https://wa.me/573147950662?text=Hola,%20me%20interesa%20solicitar%20una%20consulta%20gratuita%20sobre%20sus%20servicios%20de%20ciberseguridad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="group">
                  {t('common.requestConsultation')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="/#contact">
                <Button size="lg" variant="outline">
                  {t('common.viewCaseStudies')}
                </Button>
              </a>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-sm text-foreground/50"
            >
              {t('cta.footer')}
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
