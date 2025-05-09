import { ContactFormRequestDto } from "../dto/requests/contact_form_request_dto";
import { ContactFormResponseDto } from "../dto/responses/contact_form_response_dto";

export interface IHomeRepository {
  submitContactForm(formData: ContactFormRequestDto): Promise<ContactFormResponseDto>;
}
