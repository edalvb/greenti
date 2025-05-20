import React from "react";
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/Card";
import {
  IconStack2,
  IconWand,
  IconDeviceMobile,
  IconSchool,
} from "@tabler/icons-react";
import Image from "next/image";

interface ServiceItem {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export const ServicesSection: React.FC = () => {
  const t = useTranslations("ServicesSection");

  const services: ServiceItem[] = [
    {
      icon: "/assets/icons/development_projets.svg",
      titleKey: "projectDevelopmentTitle",
      descriptionKey: "projectDevelopmentDescription",
    },
    {
      icon: "/assets/icons/uiux.svg",
      titleKey: "uiUxTitle",
      descriptionKey: "uiUxDescription",
    },
    {
      icon: "/assets/icons/mobile.svg",
      titleKey: "multiplatformAppsTitle",
      descriptionKey: "multiplatformAppsDescription",
    },
    {
      icon: "/assets/icons/teacher.svg",
      titleKey: "onlineCoursesTitle",
      descriptionKey: "onlineCoursesDescription",
    },
  ];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service) => {
            return (
              <Card
                key={service.titleKey}
                className="transition-shadow duration-300 flex flex-col items-center text-center"
                padding="md"
                borderColor="border-transparent"
                backgroundColor="bg-white"
              >
                <div className="items-center flex flex-col">
                  <img
                    src={service.icon}
                    alt=""
                    height={48}
                    className="h-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-secondary my-4">
                  {t(service.titleKey as any)}
                </h3>
                <p className="text-sm text-neutral-darker leading-relaxed mt-auto">
                  {t(service.descriptionKey as any)}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
