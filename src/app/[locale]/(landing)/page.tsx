import React from "react";
import { HeroSection } from "@/features/home/infrastructure/components/sections/HeroSection";
import { ClientLogosSection } from "@/features/home/infrastructure/components/sections/ClientLogosSection";
import { ServicesSection } from "@/features/home/infrastructure/components/sections/ServicesSection";
import { SectorsSection } from "@/features/home/infrastructure/components/sections/SectorsSection";
import { PresenceSection } from "@/features/home/infrastructure/components/sections/PresenceSection/PresenceSection";
import { TestimonialsSection } from "@/features/home/infrastructure/components/sections/TestimonialsSection";
import { CtaBannerSection } from "@/features/home/infrastructure/components/sections/CtaBannerSection";
import { FaqSection } from "@/features/home/infrastructure/components/sections/FaqSection";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Util } from "@/core/utils/utils";
import { WeWorksSection } from "@/features/home/infrastructure/components/sections";
import { TripleCircleWrapper } from "@/features/home/infrastructure/components/sections/TripleCircleWrapper";


export async function generateMetadata({ params }: any) {
  const locale = await Util.getLocale(params);

  const tMetadata = await getTranslations({
    locale,
    namespace: "Metadata",
  });
  const tGlobal = await getTranslations({ locale, namespace: "Global" });
  const appName = tGlobal("appName");

  return {
    title: tMetadata("landingPageTitle", { appName }),
    description: tMetadata("landingPageDescription", { appName }),
  };
}

export default async function LandingPage({ params }: any) {
  const locale = await Util.getLocale(params);
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TripleCircleWrapper>
        <SectorsSection />
        <PresenceSection />
        <WeWorksSection />
      </TripleCircleWrapper>
      <TestimonialsSection />
      <ClientLogosSection />
      <CtaBannerSection />
      <FaqSection />
    </>
  );
}
