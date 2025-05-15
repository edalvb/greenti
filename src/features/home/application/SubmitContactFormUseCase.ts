import { injectable, inject } from "inversify";
import "reflect-metadata";
import {
  ContactFormDto,
  ContactFormSchema,
  ContactFormResponseDto,
} from "./dto/ContactFormDto";
import { HomeRepositorySymbol } from "../domain/IHomeRepository";
import type { IHomeRepository } from "../domain/IHomeRepository";

@injectable()
export class SubmitContactFormUseCase {
  constructor(
    @inject(HomeRepositorySymbol) private homeRepository: IHomeRepository,
  ) {}

  async execute(data: ContactFormDto): Promise<ContactFormResponseDto> {
    const validationResult = ContactFormSchema.safeParse(data);

    if (!validationResult.success) {
      const fieldErrors: Partial<Record<keyof ContactFormDto, string>> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path.length > 0) {
          fieldErrors[err.path[0] as keyof ContactFormDto] = err.message;
        }
      });
      return {
        success: false,
        messageKey: "ValidationErrors.formInvalid",
        errors: fieldErrors,
      };
    }

    try {
      const response = await this.homeRepository.submitContactForm(
        validationResult.data,
      );
      return response;
    } catch (error: any) {
      return {
        success: false,
        messageKey: "ContactSection.errorMessagePrefix",
        errors: { form: error.message || "An unexpected error occurred" },
      };
    }
  }
}
