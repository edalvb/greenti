"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const PresenceSection: React.FC = () => {
  const t = useTranslations("PresenceSection");
  const countries = t.raw("countries") as string[];

  const statsData = [
    { value: "90%", labelKey: "stats.satisfactionRate" },
    { value: "+15", labelKey: "stats.clients" },
    { value: "+23", labelKey: "stats.projects" },
  ];

  return (
    <section id="presence" className="py-16 md:py-24 bg-neutral-lightest px-responsive">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <div className="lg:w-2/5 w-full text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-secondary">{t("titlePart1")}</span>{" "}
              <span className="text-primary">{t("titlePart2")}</span>
            </h2>
            <p className="text-neutral-darker mb-8 md:mb-10 leading-relaxed">
              {t("subtitle")}
            </p>
            <ul className="space-y-4 inline-block text-left lg:mx-0 mx-auto">
              {countries.map((countryName, index) => {
                const flagSlug = countryName
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/\s+/g, "_")
                  .replace(/[^a-z0-9_]/g, "");

                return (
                  <li key={countryName} className="flex items-center">
                    <div className="flex flex-col items-center mr-3 shrink-0">
                      <span className="block w-3 h-3 bg-primary rounded-full"></span>
                      {index < countries.length - 1 && (
                        <span className="block w-px flex-1 bg-primary/50"></span>
                      )}
                    </div>
                    <Image
                      src={`/assets/icons/${flagSlug}.svg`}
                      alt={t("countryFlagAlt", { country: countryName })}
                      width={24}
                      height={16}
                      className="mr-2.5 object-contain shrink-0"
                      unoptimized
                    />
                    <span className="text-neutral-darker text-sm md:text-base">
                      {countryName}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:w-3/5 w-full">
            <div className="relative w-full h-64 md:h-80 lg:h-[400px] mb-10 md:mb-12">
              <Image
                src="/assets/images/world.svg"
                alt={t("worldMapAlt")}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 500px"
                style={{ objectFit: "contain" }}
                className="opacity-90"
                priority
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-around items-center text-center gap-6 sm:gap-4">
              {statsData.map((stat, index) => (
                <React.Fragment key={stat.labelKey}>
                  <div className="flex flex-col items-center px-2 py-2">
                    <p className="text-4xl md:text-5xl font-bold text-secondary">
                      {stat.value}
                    </p>
                    <p className="text-sm text-neutral-darker mt-1.5 whitespace-nowrap">
                      {t(stat.labelKey as any)}
                    </p>
                  </div>
                  {index < statsData.length - 1 && (
                    <>
                      <div className="hidden sm:block w-px h-16 bg-primary/50 mx-2"></div>
                      <div className="block sm:hidden w-20 h-px bg-primary/30 my-2"></div>
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
