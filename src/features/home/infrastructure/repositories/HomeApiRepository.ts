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
  public async getInitialHomeData(): Promise<InitialHomeData> {
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
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (formData.email.includes("error@example.com")) {
        return {
          success: false,
          messageKey: "ContactSection.simulatedError",
          errors: { form: "Simulated server error for this email." },
        };
      }
      if (formData.fullName.toLowerCase().includes("test fail")) {
        return {
          success: false,
          messageKey: "ValidationErrors.formInvalid",
          errors: { fullName: "ValidationErrors.nameInvalid" },
        };
      }

      return {
        success: true,
        messageKey: "ContactSection.successMessage",
        data: { submissionId: Date.now().toString() },
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      return {
        success: false,
        messageKey: "ContactSection.errorMessagePrefix",
        errors: { form: errorMessage },
      };
    }
  }
}
