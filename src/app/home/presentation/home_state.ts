import { ContactFormModel } from "../domain/contact_form_model";
import { FaqItemModel } from "../domain/faq_item_model";
import { TestimonialModel } from "../domain/testimonial_model";

export type HomeStatus = "idle" | "loading" | "success" | "error";

export interface HomeState {
  contactForm: ContactFormModel;
  contactFormStatus: HomeStatus;
  contactFormError?: string;
  activeFaqItem: string | number | null;
  testimonials: TestimonialModel[];
  faqItems: FaqItemModel[];
}

export const initialHomeState: HomeState = {
  contactForm: {
    fullName: "",
    countryCode: "PE",
    phoneNumber: "",
    email: "",
    message: "",
    acceptTerms: false,
  },
  contactFormStatus: "idle",
  activeFaqItem: null,
  testimonials: [],
  faqItems: [],
};

export type HomeAction =
  | { type: "SET_CONTACT_FORM_FIELD"; payload: { field: keyof ContactFormModel; value: any } }
  | { type: "SET_CONTACT_FORM_STATUS"; payload: HomeStatus }
  | { type: "SET_CONTACT_FORM_ERROR"; payload?: string }
  | { type: "RESET_CONTACT_FORM" }
  | { type: "TOGGLE_FAQ_ITEM"; payload: string | number }
  | { type: "LOAD_INITIAL_DATA"; payload: { testimonials: TestimonialModel[]; faqItems: FaqItemModel[] } };
