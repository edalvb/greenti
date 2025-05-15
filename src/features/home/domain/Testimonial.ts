export interface ProjectSummary {
  sectorKey: string;
  countryKey: string;
  durationKey: string;
}

export interface Testimonial {
  id: string | number;
  quoteKey: string;
  authorName: string;
  authorTitleKey: string;
  authorAvatarUrl?: string;
  projectSummary: ProjectSummary;
}