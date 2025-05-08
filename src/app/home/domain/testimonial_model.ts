export interface ProjectSummaryModel {
  sector: string;
  country: string;
  duration: string;
}

export interface TestimonialModel {
  id: string | number;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorAvatarUrl?: string;
  projectSummary: ProjectSummaryModel;
}
