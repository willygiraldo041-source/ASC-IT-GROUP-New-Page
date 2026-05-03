'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Target, Users, Award, Zap, CheckCircle2, Cloud, Swords, Bot, Lock, ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'

export default function AboutPage() {
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
            className="max-w-4xl mx-auto relative z-10"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 mb-8 transition-colors cursor-pointer relative z-20"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al Inicio
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Quiénes Somos
              </h1>
            
              <p className="text-xl text-foreground/80 mb-8">
                Fortalece y protege tus activos tecnológicos con nuestros servicios integrales de defensa y ataque cibernético.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Main About Section */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">ASC IT GROUP</h2>
              
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Somos un equipo de profesionales de TI con un profundo compromiso en el ámbito de la ciberseguridad. Contamos con las certificaciones más destacadas del mercado, las cuales respaldan firmemente nuestro nivel de profesionalismo y experiencia.
                </p>
                
                <p>
                  Nuestra misión principal se enfoca en brindar asistencia a empresas y particulares para protegerse de amenazas informáticas. Reducimos los riesgos asociados con la infraestructura crítica al implementar soluciones efectivas de respuesta a incidentes.
                </p>
                
                <p>
                  La confianza de nuestros clientes es nuestra mejor carta de presentación. Gracias a nuestro enfoque riguroso y soluciones confiables, hemos ganado la confianza de quienes buscan salvaguardar sus activos digitales y mantener su tranquilidad en un mundo cada vez más conectado.
                </p>
              </div>
            </motion.div>

            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background border border-white/10 p-12 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 w-full">
                  <div className="rounded-xl bg-primary/10 p-6 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all duration-300">
                    <Shield className="h-12 w-12 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Seguridad</h3>
                    <p className="text-sm text-foreground/60">Protección total</p>
                  </div>
                  
                  <div className="rounded-xl bg-primary/10 p-6 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all duration-300">
                    <Target className="h-12 w-12 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Precisión</h3>
                    <p className="text-sm text-foreground/60">Testing avanzado</p>
                  </div>
                  
                  <div className="rounded-xl bg-primary/10 p-6 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all duration-300">
                    <Users className="h-12 w-12 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Experiencia</h3>
                    <p className="text-sm text-foreground/60">Equipo experto</p>
                  </div>
                  
                  <div className="rounded-xl bg-primary/10 p-6 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all duration-300">
                    <Award className="h-12 w-12 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Certificados</h3>
                    <p className="text-sm text-foreground/60">Top del mercado</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Qué Hacemos</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Descubre vulnerabilidades antes de que otros lo hagan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg hover:border-primary/30 transition-all duration-300"
            >
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Application and Network Security</h3>
              <p className="text-foreground/70 leading-relaxed">
                Pentesting de aplicaciones web, móviles, redes y Active Directory. Identificamos vulnerabilidades críticas antes de que sean explotadas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg hover:border-primary/30 transition-all duration-300"
            >
              <Cloud className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cloud Penetration Testing</h3>
              <p className="text-foreground/70 leading-relaxed">
                Evaluación especializada de seguridad en AWS, Azure y GCP. Identificamos misconfigurations y vulnerabilidades en tu infraestructura cloud.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg hover:border-primary/30 transition-all duration-300"
            >
              <Swords className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Advanced Attack Simulation</h3>
              <p className="text-foreground/70 leading-relaxed">
                Red Team, simulación de ransomware, campañas de phishing y vishing. Validamos tu capacidad de detección y respuesta ante amenazas reales.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg hover:border-primary/30 transition-all duration-300"
            >
              <Bot className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Intelligent Process Automation</h3>
              <p className="text-foreground/70 leading-relaxed">
                Automatización de workflows y desarrollo de bots RPA. Optimizamos operaciones y liberamos recursos para tareas de mayor valor.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg hover:border-primary/30 transition-all duration-300 md:col-span-2 lg:col-span-1"
            >
              <Lock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">DevOps & Cloud Security</h3>
              <p className="text-foreground/70 leading-relaxed">
                CI/CD automation, DevSecOps y seguridad de Kubernetes. Integramos seguridad en cada fase de tu ciclo de desarrollo.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Qué Elegirnos</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              'Certificaciones líderes del mercado',
              'Equipo de profesionales experimentados',
              'Enfoque riguroso y soluciones confiables',
              'Protección de infraestructura crítica',
              'Respuesta efectiva a incidentes',
              'Confianza de nuestros clientes'
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">{reason}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-6xl text-primary mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-light italic mb-6 text-foreground/90">
              Tu objetivo como empresa no es tener solamente el mejor servicio al cliente, sino que sea legendario.
            </blockquote>
            <cite className="text-foreground/60 not-italic">
              — Sam Walton, fundador de Wal-Mart
            </cite>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Proteger Tu Negocio?
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Permítenos cambiar tu forma de pensar acerca de la tecnología y la seguridad.
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 bg-primary text-background hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 h-13 px-8 text-lg"
            >
              Contactar con Nosotros
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
