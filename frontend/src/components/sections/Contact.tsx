'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import toast from 'react-hot-toast'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sac@ascitgroup.com',
    href: 'mailto:sac@ascitgroup.com',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+57 314 795 0662',
    href: 'tel:+573147950662',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Bogotá, Colombia',
    href: '#',
  },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      // TODO: Implement API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('¡Mensaje enviado! Te contactaremos pronto.')
      reset()
    } catch (error) {
      toast.error('Error al enviar el mensaje. Intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
            <Mail className="h-4 w-4" />
            <span>Contáctanos</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-4"
          >
            Hablemos de Seguridad
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-lg text-foreground/60"
          >
            ¿Listo para proteger tu negocio? Contáctanos para una consulta gratuita.
          </motion.p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            className="space-y-6"
          >
            {contactInfo.map((info) => (
              <motion.a
                key={info.label}
                variants={fadeInUp}
                href={info.href}
                whileHover={{ x: 4 }}
                className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Icon Container con efectos PRO */}
                <div className="relative">
                  {/* Icon Background con gradient animado */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 transition-all duration-300 group-hover:from-primary/40 group-hover:to-blue-500/40 group-hover:scale-110">
                    <info.icon className="h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  </div>
                  
                  {/* Glow Effect Emergente */}
                  <div className="absolute inset-0 rounded-xl bg-primary/30 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-100" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <div className="text-sm text-foreground/60 mb-1 transition-colors duration-300 group-hover:text-primary/80">
                    {info.label}
                  </div>
                  <div className="text-lg font-medium transition-colors duration-300 group-hover:text-primary">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={ref}
            variants={fadeInUp}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-sm"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Nombre *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Tu nombre completo"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium"
                >
                  Empresa
                </label>
                <input
                  {...register('company')}
                  type="text"
                  id="company"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium"
                >
                  Servicio de Interés *
                </label>
                <select
                  {...register('service')}
                  id="service"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="penetration-testing">
                    Penetration Testing
                  </option>
                  <option value="red-team">Red Team</option>
                  <option value="blue-team">Blue Team</option>
                  <option value="security-audit">Security Audit</option>
                  <option value="incident-response">Incident Response</option>
                  <option value="training">Training</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Mensaje *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Honeypot */}
              <input
                {...register('honeypot')}
                type="text"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <Button
                type="submit"
                size="lg"
                className="w-full"
                isLoading={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
