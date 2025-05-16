import React from "react";
import { HeroSection } from "@/features/home/infrastructure/components/sections/HeroSection";
import { HowWeWorkSection } from "@/features/home/infrastructure/components/sections/HowWeWorkSection";
import { PresenceSection } from "@/features/home/infrastructure/components/sections/PresenceSection";
import { TestimonialsSection } from "@/features/home/infrastructure/components/sections/TestimonialsSection";
import { CtaBannerSection } from "@/features/home/infrastructure/components/sections/CtaBannerSection";
import { FaqSection } from "@/features/home/infrastructure/components/sections/FaqSection";
import { ContactSection } from "@/features/home/infrastructure/components/sections/ContactSection";
import { WhatsAppCtaSection } from "@/features/home/infrastructure/components/sections/WhatsAppCtaSection";
import { ClientLogosSection } from "@/features/home/infrastructure/components/sections/ClientLogosSection";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Util } from "@/core/utils/utils";

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
      <ClientLogosSection />
      <HowWeWorkSection />
      <PresenceSection />
      <TestimonialsSection />
      <CtaBannerSection />
      <FaqSection />
      <ContactSection />
      <WhatsAppCtaSection />
    </>
  );
}
