import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  email: z
    .string()
    .email('Invalid email address')
    .min(5, 'Email is required'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.enum([
    'penetration-testing',
    'red-team',
    'blue-team',
    'security-audit',
    'incident-response',
    'training',
    'other',
  ]),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message is too long'),
  honeypot: z.string().max(0).optional(), // Bot trap
})

export type ContactFormData = z.infer<typeof contactFormSchema>
