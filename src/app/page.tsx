import React from "react";
import { HeroSectionComponent } from "@/app/home/components/sections/hero_section_component";
import { HowWeWorkSectionComponent } from "@/app/home/components/sections/how_we_work_section_component";
import { PresenceSectionComponent } from "@/app/home/components/sections/presence_section_component";
import { TestimonialsSectionComponent } from "@/app/home/components/sections/testimonials_section_component";
import { CtaBannerSectionComponent } from "@/app/home/components/sections/cta_banner_section_component";
import { FaqSectionComponent } from "@/app/home/components/sections/faq_section_component";
import { ContactSectionComponent } from "@/app/home/components/sections/contact_section_component";
import { WhatsAppCtaSectionComponent } from "@/app/home/components/sections/whatsapp_cta_section_component";

export default function HomePageView() {
  return (
    <>
      <HeroSectionComponent />
      <HowWeWorkSectionComponent />
      <PresenceSectionComponent />
      <TestimonialsSectionComponent />
      <CtaBannerSectionComponent />
      <FaqSectionComponent />
      <ContactSectionComponent />
      <WhatsAppCtaSectionComponent />
    </>
  );
}
