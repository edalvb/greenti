import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FlippableCard } from "@/components/ui/FlippableCard";
import { IconArrowRight } from "@tabler/icons-react";

interface ServiceItem {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  backgroundImage: string;
  altTextKey: string;
}

export const ServicesSection: React.FC = () => {
  const t = useTranslations("ServicesSection");

  const services: ServiceItem[] = [
    {
      icon: "/assets/icons/development_projets.svg",
      titleKey: "projectDevelopmentTitle",
      descriptionKey: "projectDevelopmentDescription",
      backgroundImage: "/assets/images/services/service_bg_dev.png",
      altTextKey: "projectDevelopmentAlt",
    },
    {
      icon: "/assets/icons/consultant.svg",
      titleKey: "uiUxTitle",
      descriptionKey: "uiUxDescription",
      backgroundImage: "/assets/images/services/service_bg_uiux.png",
      altTextKey: "uiUxAlt",
    },
    {
      icon: "/assets/icons/it_staffing.svg",
      titleKey: "multiplatformAppsTitle",
      descriptionKey: "multiplatformAppsDescription",
      backgroundImage: "/assets/images/services/service_bg_mobile.png",
      altTextKey: "multiplatformAppsAlt",
    },
    {
      icon: "/assets/icons/teacher.svg",
      titleKey: "onlineCoursesTitle",
      descriptionKey: "onlineCoursesDescription",
      backgroundImage: "/assets/images/services/service_bg_courses.png",
      altTextKey: "onlineCoursesAlt",
    },
  ];

  const renderCardFrontContent = (service: ServiceItem) => (
    <div className="relative w-full h-full text-white overflow-hidden rounded-btn-cta">
      <Image
        src={service.backgroundImage}
        alt={t(service.titleKey as any)}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        priority
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, hsla(var(--color-secondary-hsl), 0.1) 15%, hsla(var(--color-secondary-hsl), 1) 88%)",
        }}
      />
      <div className="relative z-20 flex flex-col items-center text-center p-6 h-full">
        <div className="flex-grow flex flex-col items-center justify-center">
          <img
            src={service.icon}
            alt={t(service.titleKey as any)}
            width={48}
            height={48}
            className="w-12 h-12 mb-4"
          />
          <h3 className="text-xl font-bold text-white">
            {t(service.titleKey as any)}
          </h3>
        </div>
        <Link
          href="#contact"
          className="flex items-center text-primary text-base font-semibold underline hover:text-primary/80 transition-colors mt-auto self-start"
        >
          {t("discoverMore")}
          <IconArrowRight size={20} className="ml-2 text-primary" />
        </Link>
      </div>
    </div>
  );

  const renderCardBackContent = (descriptionKey: string) => (
    <div className="flex flex-col items-center justify-center text-center p-6 h-full">
      <p className="text-sm leading-relaxed text-white">
        {t(descriptionKey as any)}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {services.map((service) => {
            return (
              <FlippableCard
                key={service.titleKey}
                frontContent={renderCardFrontContent(service)}
                backContent={renderCardBackContent(service.descriptionKey)}
                height="384px"
                width="100%"
                className="min-w-[280px]"
                frontClassName=""
                backClassName="bg-secondary text-white"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
