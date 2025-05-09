export interface ContactFormResponseDto {
  success: boolean;
  message: string;
  data?: unknown;
  error?: {
    code: string;
    details?: string;
  };
}
