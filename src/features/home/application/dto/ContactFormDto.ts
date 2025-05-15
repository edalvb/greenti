import { z } from 'zod';

export const ContactFormSchema = z.object({
  fullName: z.string().min(2, 'ValidationErrors.nameMinLength').max(100, 'ValidationErrors.nameMaxLength'),
  countryCode: z.string().min(1, 'ValidationErrors.countryRequired'),
  phoneNumber: z.string().min(5, 'ValidationErrors.phoneMinLength').max(20, 'ValidationErrors.phoneMaxLength'),
  email: z.string().email('ValidationErrors.emailInvalid').min(1, 'ValidationErrors.emailRequired'),
  message: z.string().min(10, 'ValidationErrors.messageMinLength').max(500, 'ValidationErrors.messageMaxLength'),
  acceptTerms: z.boolean().refine(value => value === true, {
    message: 'ValidationErrors.termsRequired',
  }),
});

export type ContactFormDto = z.infer<typeof ContactFormSchema>;

export interface ContactFormResponseDto {
  success: boolean;
  messageKey: string; 
  data?: unknown;
  errors?: Partial<Record<keyof ContactFormDto, string>> | { form?: string };
}