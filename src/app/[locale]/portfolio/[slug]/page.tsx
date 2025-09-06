import Link from "next/link";
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
} from "@/features/home/infrastructure/components/sections/portfolio";

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
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-2xl font-semibold text-secondary">
          Proyecto no encontrado
        </h1>
        <p className="text-neutral-dark mt-2">Verifica el slug: {slug}</p>
      </main>
    );
  }

  return (
    <main className="container md:pt-40 relative mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
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
      <section className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <blockquote className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-[0_10px_60px_rgba(0,33,64,0.10)]">
          <p className="text-lg md:text-xl text-neutral-darker leading-relaxed">
            “{project.client_testimonial.quote}”
          </p>
          <footer className="mt-3 text-sm text-neutral-dark">
            — {project.client_testimonial.author}
          </footer>
        </blockquote>
        <div>
          <Link
            href={project.url}
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-white hover:opacity-90"
          >
            Visitar proyecto
          </Link>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  // Export all possible slugs so SSG works with output: 'export'
  return allProjectSlugs();
}
