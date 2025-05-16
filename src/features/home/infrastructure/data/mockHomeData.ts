import { FaqItem } from '@/features/home/domain/FaqItem';
import { Testimonial } from '@/features/home/domain/Testimonial';

export const MOCK_TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    testimonialDataKey: "testimonial1",
    authorName: "Trac Stephenson",
    authorAvatarUrl: "/assets/images/testimonial_avatar_stephenson.png", 
    appShowcase: {
      appNameKey: "coosofanAppName",
      appTagKey: "coosofanAppTag",
      appDescriptionKey: "coosofanAppDescription",
      appMockupImageUrl: "/assets/images/app_mockup_coosofan.png"
    }
  },
];

export const MOCK_FAQ_ITEMS_DATA: FaqItem[] = [
  {
    id: "faq1",
    questionKey: "costQuestion",
    answerKey: "costAnswer"
  },
  {
    id: "faq2",
    questionKey: "whyGreentiQuestion",
    answerKey: "whyGreentiAnswer"
  },
  {
    id: "faq3",
    questionKey: "toolsQuestion",
    answerKey: "toolsAnswer"
  },
  {
    id: "faq4",
    questionKey: "brochureQuestion",
    answerKey: "brochureAnswer"
  }
];
