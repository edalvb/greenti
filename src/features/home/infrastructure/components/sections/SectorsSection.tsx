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
    <section
      id="sectores-innovacion"
      className="py-16 md:py-24 bg-white px-responsive"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            {t("titlePart1")}{" "}
            <span className="text-primary">{t("titlePart2")}</span>
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/30 transform -translate-y-1/2 z-0"></div>
          {sectors.map((sector, index) => (
            <React.Fragment key={sector.titlePart1Key}>
              <div className="bg-white w-64 h-64 md:w-80 md:h-80 rounded-full shadow-deep duration-300 flex flex-col items-center justify-center text-center p-8 relative z-10">
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
              {index < sectors.length - 1 && (
                <div className="block md:hidden w-0.5 h-10 bg-primary/30 my-4 self-center"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
