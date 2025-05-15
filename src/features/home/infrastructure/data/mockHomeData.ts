import { FaqItem } from '@/features/home/domain/FaqItem';
import { Testimonial } from '@/features/home/domain/Testimonial';

export const MOCK_TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    quoteKey: "testimonial1",
    authorName: "Trac Stephenson",
    authorTitleKey: "founderProWallet",
    authorAvatarUrl: "/assets/images/testimonial_avatar_stephenson.png", 
    projectSummary: {
      sectorKey: "financialSector",
      countryKey: "paraguay",
      durationKey: "fiveMonths",
    },
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