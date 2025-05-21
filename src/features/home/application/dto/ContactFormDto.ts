import { z } from "zod";

export const ContactFormSchema = z.object({
  fullName: z.string().min(2, "nameMinLength").max(100, "nameMaxLength"),
  countryCode: z.string().min(1, "countryRequired"),
  phoneNumber: z.string().min(5, "phoneMinLength").max(20, "phoneMaxLength"),
  email: z.string().email("emailInvalid").min(1, "emailRequired"),
  message: z.string().min(10, "messageMinLength").max(500, "messageMaxLength"),
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: "termsRequired",
  }),
});

export type ContactFormDto = z.infer<typeof ContactFormSchema>;

export interface ContactFormResponseDto {
  success: boolean;
  messageKey: string;
  data?: unknown;
  errors?: Partial<Record<keyof ContactFormDto, string>> | { form?: string };
}
