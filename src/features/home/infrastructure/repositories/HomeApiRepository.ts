import { injectable } from "inversify";
import "reflect-metadata";
import { ContactForm } from "@/features/home/domain/ContactForm";
import {
  IHomeRepository,
  InitialHomeData,
} from "@/features/home/domain/IHomeRepository";
import { ContactFormResponseDto } from "@/features/home/application/dto/ContactFormDto";
import {
  MOCK_TESTIMONIALS_DATA,
  MOCK_FAQ_ITEMS_DATA,
} from "../data/mockHomeData";

@injectable()
export class HomeApiRepository implements IHomeRepository {
  private readonly supabaseUrl: string;

  constructor() {
    this.supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";

    if (!this.supabaseUrl) {
      console.error(
        "Supabase URL or Anon Key is not defined in environment variables.",
      );
    }
  }

  public async getInitialHomeData(): Promise<InitialHomeData> {
    // Se mantiene la carga de datos mock para testimonios y FAQs
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          testimonials: MOCK_TESTIMONIALS_DATA,
          faqItems: MOCK_FAQ_ITEMS_DATA,
        });
      }, 50);
    });
  }

  public async submitContactForm(
    formData: ContactForm,
  ): Promise<ContactFormResponseDto> {
    if (!this.supabaseUrl) {
      return {
        success: false,
        messageKey: "ContactSection.errorMessagePrefix",
        errors: { form: "API client is not configured." },
      };
    }

    try {
      const functionUrl = `${this.supabaseUrl}/functions/v1/contact-form`;

      const response = await fetch(functionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error("Error from Supabase function:", responseData);

        // Maneja errores de validación de Zod desde el servidor
        if (responseData.details) {
          const serverErrors: Record<string, any> = {};
          responseData.details.forEach((err: any) => {
            if (err.path && err.path.length > 0) {
              // El backend ya devuelve un mensaje de error detallado
              serverErrors[err.path[0]] = err.message;
            }
          });
          return {
            success: false,
            messageKey: "ValidationErrors.formInvalid",
            errors: serverErrors,
          };
        }

        // Maneja errores genéricos del servidor
        return {
          success: false,
          messageKey: "ContactSection.errorMessagePrefix",
          errors: {
            form: responseData.error || "An unexpected server error occurred.",
          },
        };
      }

      // Maneja la respuesta exitosa
      return {
        success: true,
        messageKey: "ContactSection.successMessage",
        data: responseData.data,
      };
    } catch (error) {
      console.error("Network or fetch error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "A network error occurred.";
      return {
        success: false,
        messageKey: "ContactSection.errorMessagePrefix",
        errors: { form: errorMessage },
      };
    }
  }
}
