import { Variants, Transition } from 'framer-motion'

export const fadeInUp: Variants = {
  initial: { 
    opacity: 0, 
    y: 15
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.3, 
      ease: 'easeOut'
    }
  }
}

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
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
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

export const defaultTransition: Transition = {
  duration: 0.3,
  ease: 'easeOut'
}
