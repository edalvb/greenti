export interface ContactFormRequestDto {
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  message: string;
  acceptTerms: boolean;
}
