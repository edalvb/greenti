import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Util } from "@/core/utils/utils";
import AboutStats from "@/features/about/components/AboutStats";
import { FaqSection } from "@/features/home/infrastructure/components/sections/FaqSection";
import { CtaBannerSection } from "@/features/home/infrastructure/components/sections/CtaBannerSection";
import { Footer } from "@/features/home/infrastructure/components/layout/Footer";

export async function generateMetadata({ params }: any) {
  const locale = await Util.getLocale(params);
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  const tGlobal = await getTranslations({ locale, namespace: "Global" });
  const appName = tGlobal("appName");
  return {
    title: t("pageTitle", { appName }),
    description: t("pageDescription", { appName }),
  };
}

export default async function NosotrosPage({ params }: any) {
  const locale = await Util.getLocale(params);
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  const values = (t as any).raw("coreValues.values") as Record<string, { title: string; text: string }>;

  return (
    <main className="min-h-screen bg-white pt-28 pb-24 px-responsive">
      <div className="container mx-auto">
        {/* Hero */}
        <section className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          <div className="space-y-4">
            <h1 className="text-secondary text-5xl md:text-6xl font-bold leading-tight">
              <div>{t("hero.line1")}</div>
              <div>{t("hero.line2")} <span className="text-primary">{t("hero.highlight")}</span></div>
            </h1>
            <p className="text-secondary text-base md:text-lg font-medium max-w-xl">
              {t("hero.paragraph")}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <AboutStats />
          </div>
        </section>

        {/* Brand Section */}
        <section className="text-center max-w-4xl mx-auto mb-32">
          <h2 className="text-primary text-5xl md:text-6xl font-bold mb-8">{t("brand.title")}</h2>
          <p className="text-secondary text-base md:text-lg font-medium leading-relaxed">{t("brand.paragraph")}</p>
        </section>

        {/* Mission / Vision */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-secondary text-4xl md:text-5xl font-bold mb-6">{t("mission.title")}</h2>
              <p className="text-secondary text-base md:text-lg font-medium text-justify max-w-2xl">{t("mission.text")}</p>
            </div>
            <div>
              <h2 className="text-secondary text-4xl md:text-5xl font-bold mb-6">{t("vision.title")}</h2>
              <p className="text-secondary text-base md:text-lg font-medium text-justify max-w-2xl">{t("vision.text")}</p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-32">
          <div className="mb-12">
            <h2 className="text-secondary text-4xl md:text-5xl font-bold leading-tight">
              {t("coreValues.title1")} <span className="text-primary">{t("coreValues.title2")}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {Object.entries(values).map(([key, value]) => (
              <div key={key} className="relative pl-20">
                <div className="w-16 h-16 rounded-full bg-primary absolute left-0 top-0 flex items-center justify-center text-white font-bold text-sm">
                  {/* Simple icon placeholder */}
                  <span>{value.title.charAt(0)}</span>
                </div>
                <h3 className="text-secondary text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-secondary text-base font-medium leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        <CtaBannerSection />

        <FaqSection />

        <Footer />
      </div>
    </main>
  );
}