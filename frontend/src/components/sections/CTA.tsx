'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { fadeInUp } from '@/lib/animations'

export function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 relative overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-blue-500/5 to-primary/10 p-12 md:p-16 backdrop-blur-sm overflow-hidden"
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
              ¿Listo para Proteger tu Negocio?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mb-8 max-w-2xl text-lg text-foreground/70"
            >
              Obtén una evaluación de seguridad gratuita y descubre cómo podemos
              fortalecer tu infraestructura contra amenazas cibernéticas.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <Button size="lg" className="group">
                Solicitar Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Casos de Éxito
              </Button>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-sm text-foreground/50"
            >
              Respuesta en menos de 24 horas • 100% Confidencial
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
