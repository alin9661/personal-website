import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),
  
  email: z.string()
    .email('Invalid email address')
    .max(255, 'Email must not exceed 255 characters'),
  
  company: z.string()
    .max(100, 'Company name must not exceed 100 characters')
    .optional()
    .default(''),
  
  reason: z.enum(['Job Opportunity', 'Collaboration', 'Consulting', 'General Inquiry']),
  
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must not exceed 2000 characters'),
});

export type ContactFormInput = z.infer<typeof ContactFormSchema>;

export const ApiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  error: z.string().optional(),
  data: z.unknown().optional(),
});

export type ApiResponse<T = unknown> = z.infer<typeof ApiResponseSchema> & {
  data?: T;
};