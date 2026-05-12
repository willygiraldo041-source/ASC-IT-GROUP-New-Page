import { Variants, Transition } from 'framer-motion'

export const fadeInUp: Variants = {
  initial: { 
    opacity: 0, 
    y: 10
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.2, 
      ease: 'easeOut'
    }
  }
}

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeOut' }
  }
}

export const staggerContainer: Variants = {
  animate: { 
    transition: { 
      staggerChildren: 0.03 
    } 
  }
}

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -15 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.2, ease: 'easeOut' }
  }
}

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 15 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.2, ease: 'easeOut' }
  }
}

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.2, ease: 'easeOut' }
  }
}

export const defaultTransition: Transition = {
  duration: 0.2,
  ease: 'easeOut'
}
