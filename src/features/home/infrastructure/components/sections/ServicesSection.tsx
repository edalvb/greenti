import React from "react";
import { useTranslations } from "next-intl";
import { FlippableCard } from "@/components/ui/FlippableCard";

interface ServiceItem {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  backContentKey: string;
}

export const ServicesSection: React.FC = () => {
  const t = useTranslations("ServicesSection");

  const services: ServiceItem[] = [
    {
      icon: "/assets/icons/development_projets.svg",
      titleKey: "projectDevelopmentTitle",
      descriptionKey: "projectDevelopmentDescription",
      backContentKey: "projectDevelopmentBack",
    },
    {
      icon: "/assets/icons/uiux.svg",
      titleKey: "uiUxTitle",
      descriptionKey: "uiUxDescription",
      backContentKey: "uiUxBack",
    },
    {
      icon: "/assets/icons/mobile.svg",
      titleKey: "multiplatformAppsTitle",
      descriptionKey: "multiplatformAppsDescription",
      backContentKey: "multiplatformAppsBack",
    },
    {
      icon: "/assets/icons/teacher.svg",
      titleKey: "onlineCoursesTitle",
      descriptionKey: "onlineCoursesDescription",
      backContentKey: "onlineCoursesBack",
    },
  ];

  const renderCardContent = (icon: string, titleKey: string, descriptionKey: string) => (
    <div className="flex flex-col items-center text-center p-4 h-full justify-around">
      <img src={icon} alt={t(titleKey as any)} height={60} className="h-auto mb-4 max-h-[60px]" />
      <h3 className="text-xl font-semibold my-3">
        {t(titleKey as any)}
      </h3>
      <p className="text-sm leading-relaxed mt-auto">
        {t(descriptionKey as any)}
      </p>
    </div>
  );

  const renderCardBackContent = (backContentKey: string) => (
    <div className="flex flex-col items-center justify-center text-center p-6 h-full">
        <p className="text-sm leading-relaxed">
            {t(backContentKey as any)}
        </p>
    </div>
  );

  return (
    <section
      id="nuestros-servicios"
      className="py-16 md:py-24 bg-white px-responsive"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {t("titlePart1")}{" "}
            <span className="text-primary">{t("titlePart2")}</span>
          </h2>
          <p className="text-neutral-darker max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {services.map((service) => {
            return (
              <FlippableCard
                key={service.titleKey}
                frontContent={renderCardContent(service.icon, service.titleKey, service.descriptionKey)}
                backContent={renderCardBackContent(service.backContentKey)}
                height="380px"
                width="100%"
                frontClassName="bg-white text-secondary border border-neutral-light"
                backClassName="bg-primary text-white border border-primary"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};