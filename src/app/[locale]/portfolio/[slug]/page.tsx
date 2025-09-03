import { setRequestLocale } from 'next-intl/server';
import { Util } from '@/core/utils/utils';
import { portfolioProjects, slugify } from '@/features/home/infrastructure/data/portfolioProjects';

type PageParams = { locale: string; slug: string };
type PageProps = { params: Promise<PageParams> };

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolved = await params;
  const locale = await Util.getLocale(resolved);
  setRequestLocale(locale);

  const { slug } = resolved;

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
          Proyecto: {decodeURIComponent(slug).replace(/-/g, " ")}
        </h1>
        <p className="text-neutral-darker mb-8">
          Esta es una página dinámica de detalle del proyecto. Aquí puedes cargar
          información específica del proyecto identificado por el slug.
        </p>
        <div className="rounded-2xl bg-white shadow-[0_10px_60px_rgba(0,33,64,0.15)] p-6">
          <p className="text-sm text-neutral-dark">
            Slug actual: <span className="font-mono">{slug}</span>
          </p>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  // Export all possible slugs so SSG works with output: 'export'
  const slugs = portfolioProjects.map((p) => ({ slug: slugify(p.name) }));
  return slugs;
}
