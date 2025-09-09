import React from "react";
import { setRequestLocale } from "next-intl/server";
import { Util } from "@/core/utils/utils";
import {
  allProjectSlugs,
  getProjectBySlug,
} from "@/features/portfolio/infrastructure/data/projects";
import {
  Challenge,
  Portada,
  Resume,
  Solution,
  Technologies,
  Results,
  Testimonial,
} from "@/features/home/infrastructure/components/sections/portfolio";
import { ContactSection } from "@/features/home/infrastructure/components/sections/ContactSection";

type PageParams = { locale: string; slug: string };
type PageProps = { params: Promise<PageParams> };

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolved = await params;
  const locale = await Util.getLocale(resolved);
  setRequestLocale(locale);

  const { slug } = resolved;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="container mx-auto">
        <h1 className="text-2xl font-semibold text-secondary">
          Proyecto no encontrado
        </h1>
        <p className="text-neutral-dark mt-2">Verifica el slug: {slug}</p>
      </main>
    );
  }

  return (
    <main className="container relative mx-auto">
      {/* Header */}
      <Portada project={project} />

      {/* Estadísticas */}
      <Resume
        resume_content={project.resume}
        length_team={project.team_size}
        project_duration={project.project_duration_months}
        rating={project.rating}
      />

      {/* Desafío */}
      <Challenge description={project.challenge} />

      {/* Solución */}
      <Solution description={project.solution} />

      {/* Tecnologías */}
      <Technologies technologies={project.technologies} />

      {/* Resultados */}
      <Results
        description={project.result_description}
        images={project.result_images_main}
        images_secondary={project.result_images_secondary || []}
      />

      {/* Testimonio y enlace */}
      <Testimonial data={project.client_testimonial} />

      {/* Contacto */}
      <ContactSection />
    </main>
  );
}

export async function generateStaticParams() {
  // Export all possible slugs so SSG works with output: 'export'
  return allProjectSlugs();
}
