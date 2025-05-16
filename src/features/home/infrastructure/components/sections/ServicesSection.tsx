"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  IconStack2,
  IconWand,
  IconDeviceMobile,
  IconSchool,
} from "@tabler/icons-react";

interface ServiceItem {
  icon: React.ElementType;
  titleKey: string;
  descriptionKey: string;
}

export const ServicesSection: React.FC = () => {
  const t = useTranslations("ServicesSection");

  const services: ServiceItem[] = [
    {
      icon: IconStack2,
      titleKey: "projectDevelopmentTitle",
      descriptionKey: "projectDevelopmentDescription",
    },
    {
      icon: IconWand,
      titleKey: "uiUxTitle",
      descriptionKey: "uiUxDescription",
    },
    {
      icon: IconDeviceMobile,
      titleKey: "multiplatformAppsTitle",
      descriptionKey: "multiplatformAppsDescription",
    },
    {
      icon: IconSchool,
      titleKey: "onlineCoursesTitle",
      descriptionKey: "onlineCoursesDescription",
    },
  ];

  return (
    <section
      id="nuestros-servicios"
      className="py-16 md:py-24 bg-neutral-lightest"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.titleKey}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <IconComponent
                  size={48}
                  className="text-primary mb-5"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {t(service.titleKey as any)}
                </h3>
                <p className="text-sm text-neutral-darker leading-relaxed">
                  {t(service.descriptionKey as any)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
