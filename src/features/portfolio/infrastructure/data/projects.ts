import { Project } from "@/features/portfolio/domain/Project";
import { slugify } from "@/features/home/infrastructure/data/portfolioProjects";

// Dataset mínimo para demo. Puedes reemplazarlo por fetch a una API/CMS.
export const projects: Project[] = [
  new Project({
    name: "Beblis",
    sector: "Turismo y alojamiento",
    pais: "México",
    Plataforma: ["Mobile", "Web"],
    image_logo: "/assets/images/porfolio/beblis_logo.png",
    images: [
      "/assets/images/porfolio/beblis_image_portada.png",
    ],
    resume:
      "Beblis es una plataforma que conecta a viajeros con anfitriones locales para experiencias auténticas.",
    team_size: 5,
    project_duration_months: 8,
    rating: 5,
    challenge:
      "Crear una plataforma intuitiva que facilite la conexión entre viajeros y anfitriones, asegurando una experiencia segura y confiable.",
    solution:
      "Desarrollamos una aplicación móvil y un sitio web con perfiles verificados, sistema de reseñas y chat en tiempo real para facilitar la comunicación.",
    technologies: ["Flutter", "Firebase", "Figma", "Python", "GitHub"],
    result_description:
      "Beblis ha logrado más de 50,000 descargas en su primer año, con una tasa de retención del 70% y una comunidad activa de usuarios satisfechos.",
    result_images_main: [
      "/assets/images/porfolio/beblis_result_image.png",
    ],
    result_images_secondary: [
      "/assets/images/porfolio/beblis_images_secondary.png",
    ],
    url: "https://www.beblis.com",
    client_testimonial: {
      quote:
        "Trabajar con el equipo de desarrollo fue una experiencia increíble. Entendieron nuestras necesidades y entregaron una plataforma que superó nuestras expectativas.",
      author: "Ana Martínez, CEO de Beblis",
    },
  }),
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => slugify(p.name) === slug);
};

export const allProjectSlugs = () =>
  projects.map((p) => ({ slug: slugify(p.name) }));
