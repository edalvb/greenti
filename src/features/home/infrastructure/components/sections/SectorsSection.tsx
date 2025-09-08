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
      className="pd-section px-responsive"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            {t("titlePart1")}{" "}
            <span className="text-primary">{t("titlePart2")}</span>
          </h2>
        </div>

        <div className="relative">
          <div
            className="hidden md:block absolute top-1/2 left-[10rem] right-[10rem] transform -translate-y-1/2 z-0 line-dashed-horizontal-custom"
            aria-hidden="true"
          ></div>

          <div className="relative flex flex-col md:flex-row justify-around items-center gap-16 md:gap-0">
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
                  <div
                    className="block md:hidden h-10 my-4 self-center line-dashed-vertical-custom"
                    aria-hidden="true"
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
