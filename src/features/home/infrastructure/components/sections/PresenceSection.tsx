"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCounter } from "@/hooks/useCounter";
import { motion } from "framer-motion";

export const PresenceSection: React.FC = () => {
  const t = useTranslations("PresenceSection");
  const countries = t.raw("countries") as string[];

  const Counter = ({ to, suffix }: { to: number; suffix?: string }) => {
    const { count, ref } = useCounter(to, { duration: 2, delay: 0.1 });
    return (
      <motion.span ref={ref}>
        {count}
        {suffix}
      </motion.span>
    );
  };

  const statsData = [
    { value: 90, suffix: "%", labelKey: "stats.satisfactionRate" },
    { value: 15, prefix: "+", labelKey: "stats.clients" },
    { value: 23, prefix: "+", labelKey: "stats.projects" },
  ];

  return (
    <section
      id="presence"
      className="py-16 md:py-24 bg-presence-section px-responsive"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <div className="lg:w-2/5 w-full text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-secondary">{t("titlePart1")} </span>
              <span className="text-primary">{t("titlePart2")}</span>
            </h2>
            <p className="text-neutral-darker mb-8 md:mb-10 leading-relaxed">
              {t("subtitle")}
            </p>
            <ul className="list-none p-0 m-0 inline-block text-left lg:mx-0 mx-auto">
              {countries.map((countryName, index) => {
                const flagSlug =
                  countryName
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/\s+/g, "_")
                    .replace(/[^a-z0-9_]/g, "");

                return (
                  <li key={countryName} className="flex items-start relative">
                    <div className="flex flex-col items-center mr-[15px] flex-shrink-0">
                      <div className="w-[18px] h-[18px] bg-primary rounded-full flex-shrink-0 z-10"></div>
                      <div
                        className={`w-[2px] h-[35px] ${index === countries.length - 1 ? "invisible" : ""}`}
                        style={{
                          backgroundImage:
                            "linear-gradient(to bottom, hsl(var(--color-primary)) 60%, transparent 60%)",
                          backgroundSize: "2px 8px",
                          backgroundRepeat: "repeat-y",
                        }}
                      ></div>
                    </div>

                    <div className="flex items-center relative -top-[5px]">
                      <Image
                        src={`/assets/icons/${flagSlug}.svg`}
                        alt={t("countryFlagAlt", { country: countryName })}
                        width={32}
                        height={20}
                        className="object-cover rounded-[3px] mr-[10px]"
                        unoptimized
                      />
                      <span className="text-lg text-neutral-darker leading-relaxed">
                        {countryName}
                      </span>
                    </div>
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

            <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:gap-x-6 md:gap-x-8 lg:gap-x-10">
              {statsData.map((stat, index) => (
                <React.Fragment key={stat.labelKey}>
                  <div className="flex items-center text-center py-2 sm:py-0">
                    <div className="hidden sm:block w-1 h-16 bg-primary mr-3 md:mr-4"></div>

                    <div>
                      <p className="text-5xl font-bold text-secondary">
                        {stat.prefix}
                        <Counter to={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="text-sm text-neutral-darker mt-1.5">
                        {t.rich(
                          stat.labelKey as any,
                          { br: () => <br /> } as any,
                        )}
                      </p>
                    </div>
                  </div>

                  {index < statsData.length - 1 && (
                    <div className="block sm:hidden w-4/5 max-w-[150px] h-px bg-primary/30 my-4 mx-auto"></div>
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