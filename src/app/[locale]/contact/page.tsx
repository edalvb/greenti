import { setRequestLocale } from "next-intl/server";
import { Util } from "@/core/utils/utils";
import { ContactSection } from "@/features/home/infrastructure/components/sections/ContactSection";

type PageParams = { locale: string };
type PageProps = { params: Promise<PageParams> };

export default async function ContactPage({ params }: PageProps) {
  const resolved = await params;
  const locale = await Util.getLocale(resolved);
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-neutral-lightest">
      {/* Espaciado para el navbar fijo */}
      <div className="pt-20 md:pt-24">
        <ContactSection />
      </div>
    </main>
  );
}
