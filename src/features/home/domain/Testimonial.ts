export interface AppShowcase {
  appNameKey: string;
  appTagKey: string;
  appDescriptionKey: string;
  appMockupImageUrl: string;
}

export interface Testimonial {
  id: string | number;
  testimonialDataKey: string; 
  authorName: string;
  authorAvatarUrl?: string;
  appShowcase: AppShowcase;
}
