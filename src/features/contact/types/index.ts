export const CONTACT_REASONS = [
  'Job Opportunity',
  'Collaboration',
  'Consulting',
  'General Inquiry',
] as const;

export type ContactReason = typeof CONTACT_REASONS[number];

export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly company: string;
  readonly reason: ContactReason;
  readonly message: string;
}

export interface ContactSubmission extends ContactFormData {
  readonly timestamp: number;
  readonly ipAddress?: string;
  readonly userAgent?: string;
}

export interface ContactFormErrors {
  readonly name?: string;
  readonly email?: string;
  readonly reason?: string;
  readonly message?: string;
  readonly general?: string;
}

export interface ContactFormState {
  readonly data: Partial<ContactFormData>;
  readonly errors: ContactFormErrors;
  readonly isSubmitting: boolean;
  readonly submitStatus: 'idle' | 'success' | 'error';
}