import { Variants, Transition } from 'framer-motion'

export const fadeInUp: Variants = {
  initial: { 
    opacity: 0, 
    y: 20, 
    filter: 'blur(4px)' 
  },
  animate: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { 
      duration: 0.5, 
      ease: [0.6, 0.05, 0.01, 0.9] 
    }
  }
}

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export const staggerContainer: Variants = {
  animate: { 
    transition: { 
      staggerChildren: 0.05 
    } 
  }
}

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export const defaultTransition: Transition = {
  duration: 0.5,
  ease: [0.6, 0.05, 0.01, 0.9]
}
