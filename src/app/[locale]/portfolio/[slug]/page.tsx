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
import { FlowArrow } from "@/features/home/infrastructure/components/sections/portfolio";
import { ContactSection } from "@/features/home/infrastructure/components/sections/ContactSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

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
        <Breadcrumbs className="mt-24 mb-4" />
        <h1 className="text-2xl font-semibold text-secondary">
          Proyecto no encontrado
        </h1>
        <p className="text-neutral-dark mt-2">Verifica el slug: {slug}</p>
      </main>
    );
  }

  return (
    <main id="project-main" className="container relative mx-auto">
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-presence-section pt-40">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <Breadcrumbs currentLabel={project.name} className="mb-6" />
        </div>
        {/* Header */}
        <Portada project={project} />
      </div>

      {/* Flecha de flujo entre secciones (overlay SVG) */}
      <FlowArrow />

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

      {/* Resultados */}
      <Results
        description={project.result_description}
        images={project.result_images_main}
        images_secondary={project.result_images_secondary || []}
      />

      {/* Tecnologías */}
      <Technologies technologies={project.technologies} />

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
