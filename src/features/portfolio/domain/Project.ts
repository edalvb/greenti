export interface ClientTestimonial {
  quote: string;
  author: string;
}

// Clase basada en la definición proporcionada por el usuario
export class Project {
  name: string;
  sector: string;
  pais: string;
  plataforma: string[];
  image_logo: string;
  images: string[];
  resume: string;
  team_size: number;
  project_duration_months: number;
  rating: number;
  challenge: string;
  solution: string;
  technologies: string[];
  result_description: string;
  result_images_main: string[];
  result_images_secondary: string[];
  url: string;
  client_testimonial: ClientTestimonial;

  constructor(data: {
    name: string;
    sector: string;
    pais: string;
    Plataforma: string[];
    image_logo: string;
    images: string[];
    resume: string;
    team_size: number;
    project_duration_months: number;
    rating: number;
    challenge: string;
    solution: string;
    technologies: string[];
    result_description: string;
    result_images_main: string[];
    result_images_secondary: string[];
    url: string;
    client_testimonial: ClientTestimonial;
  }) {
    this.name = data.name;
    this.sector = data.sector;
    this.pais = data.pais;
    this.plataforma = data.Plataforma;
    this.image_logo = data.image_logo;
    this.images = data.images;
    this.resume = data.resume;
    this.team_size = data.team_size;
    this.project_duration_months = data.project_duration_months;
    this.rating = data.rating;
    this.challenge = data.challenge;
    this.solution = data.solution;
    this.technologies = data.technologies;
    this.result_description = data.result_description;
    this.result_images_main = data.result_images_main;
    this.result_images_secondary = data.result_images_secondary;
    this.url = data.url;
    this.client_testimonial = data.client_testimonial;
  }
}
