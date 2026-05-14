'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Target, Users, Award } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useLanguage } from '@/contexts/LanguageContext'

const statsData = [
  { icon: Shield, value: 500, key: 'vulnerabilities', suffix: '+' },
  { icon: Target, value: 10, key: 'experience', suffix: '+' },
  { icon: Users, value: 100, key: 'clients', suffix: '+' },
  { icon: Award, value: 50, key: 'certifications', suffix: '+' },
]

const featuresData = [
  { key: 'certifiedExperts' },
  { key: 'provenMethodology' },
  { key: 'support247' },
  { key: 'detailedReports' },
]

export function About() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '300px',
  })

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4"
          >
            <Shield className="h-4 w-4" />
            <span>{t('about.badge')}</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-4"
          >
            {t('about.title')}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-lg text-foreground/60"
          >
            {t('about.description')}
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20"
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.key}
              variants={fadeInUp}
              className="relative rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-8 text-center backdrop-blur-sm"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2500} />
              </div>
              <div className="text-sm text-foreground/60">{t(`about.stats.${stat.key}`)}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          className="grid gap-8 md:grid-cols-2"
        >
          {featuresData.map((feature) => (
            <motion.div
              key={feature.key}
              variants={fadeInUp}
              className="relative rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <div className="h-6 w-6 rounded-full bg-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{t(`about.features.${feature.key}.title`)}</h3>
              <p className="text-sm text-foreground/60">{t(`about.features.${feature.key}.description`)}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
