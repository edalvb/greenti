import { ContactForm } from './ContactForm';
import { ContactFormResponseDto } from '../application/dto/ContactFormDto';
import { FaqItem } from './FaqItem';
import { Testimonial } from './Testimonial';

export const HomeRepositorySymbol = Symbol.for('IHomeRepository');

export interface InitialHomeData {
  testimonials: Testimonial[];
  faqItems: FaqItem[];
}

export interface IHomeRepository {
  getInitialHomeData(): Promise<InitialHomeData>;
  submitContactForm(formData: ContactForm): Promise<ContactFormResponseDto>;
}