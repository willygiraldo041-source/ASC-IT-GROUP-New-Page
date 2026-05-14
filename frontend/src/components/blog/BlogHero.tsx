'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Shield, Code, Cloud, Lock } from 'lucide-react'

const tags = [
  { name: 'Pentesting', icon: Shield },
  { name: 'Red Team', icon: Lock },
  { name: 'Seguridad Cloud', icon: Cloud },
  { name: 'DevSecOps', icon: Code }
]

export function BlogHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/[0.02] to-background">
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Enhanced Gradient Orbs with better visibility */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-500/25 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000" />
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      
      {/* Content */}
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{
            paddingTop: 'clamp(4rem, 12vh, 8rem)',
            paddingBottom: 'clamp(3rem, 10vh, 6rem)'
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 sm:mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-primary text-sm font-medium">Últimas noticias en ciberseguridad</span>
          </motion.div>

          {/* Main Title with Enhanced Glow */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold mb-4 sm:mb-6 leading-tight"
            style={{
              fontSize: 'clamp(2.25rem, 8vw, 4.5rem)',
              lineHeight: 'clamp(2.5rem, 9vw, 5rem)'
            }}
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground bg-clip-text text-transparent">
              Blog de{' '}
            </span>
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 opacity-30 blur-2xl" />
              <span className="relative bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                Ciberseguridad
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-foreground/70 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              lineHeight: 'clamp(1.5rem, 3.5vw, 1.875rem)'
            }}
          >
            Descubre las últimas tendencias, mejores prácticas y noticias del mundo de la ciberseguridad
          </motion.p>

          {/* Enhanced Tags with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center items-center"
          >
            {tags.map((tag, index) => {
              const Icon = tag.icon
              return (
                <motion.div
                  key={tag.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-full opacity-0 group-hover:opacity-100 blur transition duration-300" />
                  <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 backdrop-blur-sm group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all cursor-default">
                    <Icon className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>{tag.name}</span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
