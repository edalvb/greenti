import Image from "next/image";
import Link from "next/link";
import React from "react";
import { setRequestLocale } from "next-intl/server";
import { Util } from "@/core/utils/utils";
import {
  allProjectSlugs,
  getProjectBySlug,
} from "@/features/portfolio/infrastructure/data/projects";
import { Project } from "@/features/portfolio/domain/Project";
import { Portada } from "@/features/home/infrastructure/components/sections/portfolio";

type PageParams = { locale: string; slug: string };
type PageProps = { params: Promise<PageParams> };

const technologiesFlagByName: Record<string, string> = {
  Flutter: "/assets/images/flutter_logo.png",
  Firebase: "/assets/images/firebase_logo.png",
  Figma: "/assets/images/figma_logo.png",
  Python: "/assets/images/python_logo.png",
  GitHub: "/assets/images/github_logo.png",
};

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

      {/* Resumen + métricas */}
      <section className="mt-14 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-darker mb-3">
              Resumen
            </h2>
            <p className="text-neutral-dark leading-relaxed">
              {project.resume}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 lg:gap-4">
            <StatCircle
              label="Tamaño del equipo"
              value={String(project.team_size)}
            />
            <StatCircle
              label="Duración del proyecto"
              value={`${project.project_duration_months}`}
              suffix="meses"
            />
            <StatCircle
              label="Calificación"
              value={`${project.rating.toFixed(1)}`}
              suffix="★"
            />
          </div>
        </div>
      </section>

      {/* Desafío / Solución */}
      <section className="mt-16 md:mt-24 space-y-14">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            El desafío
          </h3>
          <p className="text-neutral-dark leading-relaxed">
            {project.challenge}
          </p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
            La solución
          </h3>
          <p className="text-neutral-dark leading-relaxed">
            {project.solution}
          </p>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="mt-16 md:mt-24">
        <h3 className="text-2xl md:text-3xl font-bold text-neutral-darker">
          Se utilizaron las <span className="text-green-600">tecnologías</span>
        </h3>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-darker shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Resultados */}
      <section className="mt-16 md:mt-24">
        <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
          El resultado
        </h3>
        <div className="prose max-w-none">
          <p className="text-neutral-dark leading-relaxed">
            {project.result_description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.result_images_main.map((src, idx) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={idx}
              src={src}
              alt={`Resultado ${idx + 1}`}
              className="rounded-2xl shadow-[0_10px_40px_rgba(0,33,64,0.12)] w-full h-auto object-cover"
            />
          ))}
        </div>

        {project.result_images_secondary.length > 0 && (
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.result_images_secondary.map((src, idx) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={idx}
                src={src}
                alt={`Resultado secundario ${idx + 1}`}
                className="rounded-xl border border-neutral-100 w-full h-auto object-cover"
              />
            ))}
          </div>
        )}
      </section>

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

function StatCircle({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-24 w-24 rounded-full grid place-items-center bg-white shadow-[0_8px_30px_rgba(0,33,64,0.12)]">
        <span className="text-3xl font-bold text-secondary">{value}</span>
        {suffix && (
          <span className="absolute -bottom-2 text-xs text-neutral-dark">
            {suffix}
          </span>
        )}
      </div>
      <span className="mt-3 text-xs text-neutral-dark max-w-[8rem]">
        {label}
      </span>
    </div>
  );
}

export async function generateStaticParams() {
  // Export all possible slugs so SSG works with output: 'export'
  return allProjectSlugs();
}
