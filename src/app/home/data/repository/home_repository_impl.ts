import { ContactFormRequestDto } from "../dto/requests/contact_form_request_dto";
import { ContactFormResponseDto } from "../dto/responses/contact_form_response_dto";
import { IHomeRepository } from "./i_home_repository";

export class HomeRepositoryImpl implements IHomeRepository {
  public async submitContactForm(formData: ContactFormRequestDto): Promise<ContactFormResponseDto> {
    try {
      console.log("Submitting contact form:", formData);
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (formData.email.includes("error")) {
        return {
          success: false,
          message: "Simulated error during form submission.",
          error: {
            code: "SIMULATED_ERROR",
          },
        };
      }

      return {
        success: true,
        message: "Form submitted successfully (simulated).",
        data: { submissionId: Date.now() },
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
      console.error("Error in submitContactForm:", errorMessage);
      return {
        success: false,
        message: "An unexpected error occurred during form submission.",
        error: {
          code: "UNEXPECTED_ERROR",
          details: errorMessage,
        },
      };
    }
  }
}
