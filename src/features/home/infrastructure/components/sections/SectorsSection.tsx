"use client";

import React from "react";
import { useTranslations } from "next-intl";

interface SectorItem {
  titlePart1Key: string;
  titlePart2Key: string;
  descriptionKey: string;
}

export const SectorsSection: React.FC = () => {
  const t = useTranslations("SectorsSection");

  const sectors: SectorItem[] = [
    {
      titlePart1Key: "financialServicesTitlePart1",
      titlePart2Key: "financialServicesTitlePart2",
      descriptionKey: "financialServicesDescription",
    },
    {
      titlePart1Key: "industryCommerceTitlePart1",
      titlePart2Key: "industryCommerceTitlePart2",
      descriptionKey: "industryCommerceDescription",
    },
    {
      titlePart1Key: "publicSectorTitlePart1",
      titlePart2Key: "publicSectorTitlePart2",
      descriptionKey: "publicSectorDescription",
    },
  ];

  return (
    <section id="sectores-innovacion" className="py-16 md:py-24 bg-white px-responsive">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            {t("titlePart1")}{" "}
          </h2>
          <span className="text-3xl md:text-4xl font-bold text-primary">{t("titlePart2")}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {sectors.map((sector) => (
            <div
              key={sector.titlePart1Key}
              className="bg-neutral-lightest w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center text-center p-8"
            >
              <h3 className="text-2xl font-medium text-secondary mb-3">
                {t(sector.titlePart1Key as any)}
                <br />
                <span className="font-bold text-primary text-2xl">
                  {t(sector.titlePart2Key as any)}
                </span>
              </h3>
              <p className="text-sm text-neutral-darker leading-relaxed">
                {t(sector.descriptionKey as any)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
