import { setRequestLocale } from "next-intl/server";
import { Util } from "@/core/utils/utils";
import { ContactSection } from "@/features/home/infrastructure/components/sections/ContactSection";
import { Footer } from "@/features/home/infrastructure/components/layout/Footer";

type PageParams = { locale: string };
type PageProps = { params: Promise<PageParams> };

export default async function ContactPage({ params }: PageProps) {
  const resolved = await params;
  const locale = await Util.getLocale(resolved);
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-neutral-lightest max-w-screen-xl mx-auto px-4 md:px-6">
      {/* Espaciado para el navbar fijo */}
      <div className="pt-20 md:pt-24">
        <ContactSection />

        <Footer />
      </div>
    </main>
  );
}
