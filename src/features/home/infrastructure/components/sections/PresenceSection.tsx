"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCounter } from "@/hooks/useCounter";
import { motion } from "framer-motion";

export const PresenceSection: React.FC = () => {
  const t = useTranslations("PresenceSection");
  const countries = t.raw("countries") as string[];

  const Counter = ({ to, suffix, decimals = 0 }: { to: number; suffix?: string; decimals?: number }) => {
    const { count, ref } = useCounter(to, { duration: 2, delay: 0.1 });
    return (
      <motion.span ref={ref}>
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        {suffix}
      </motion.span>
    );
  };

  return (
    <section
      id="presence"
      className="pd-section bg-sky-950 px-responsive rounded-[30px] overflow-hidden relative"
    >
      {/* Container alineado con otros componentes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* COLUMNA 1: Título + Information Cards */}
          <div className="lg:col-span-1 w-full space-y-6">
            {/* Main Title Section */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-6xl font-bold mb-2">
                <span className="text-green-500">{t("titlePart1")}</span>
              </h2>
              <div className="text-white text-4xl md:text-6xl font-bold leading-tight">
                <div>{t("titlePart2")}</div>
                <div>{t("titlePart3")}</div>
              </div>
            </div>

            {/* Information Cards */}
            <div className="bg-white/5 rounded-[30px] p-6 h-40">
              <h3 className="text-white text-2xl font-bold mb-4">{t("projectSummary.title")}</h3>
              <p className="text-white text-base font-medium">
                {t("projectSummary.description")}
              </p>
            </div>
            
            <div className="bg-white/5 rounded-[30px] p-6 h-40">
              <h3 className="text-white text-2xl font-bold mb-4">{t("projectSummary.title")}</h3>
              <p className="text-white text-base font-medium">
                {t("projectSummary.description")}
              </p>
            </div>
            
            <div className="bg-white/5 rounded-[30px] p-6 h-40">
              <h3 className="text-white text-2xl font-bold mb-4">{t("projectSummary.title")}</h3>
              <p className="text-white text-base font-medium">
                {t("projectSummary.description")}
              </p>
            </div>
          </div>

          {/* COLUMNA 2: Círculos estadísticos UNO DEBAJO DE OTRO */}
          <div className="lg:col-span-1 w-full flex flex-col items-center justify-center space-y-12 relative">
            
            {/* Primer Círculo - Countries */}
            <div className="w-44 h-44 bg-secondary rounded-full flex flex-col items-center justify-center text-white relative overflow-hidden z-10">
              <div className="text-center z-10">
                <div className="text-5xl font-bold text-white mb-2">
                  <Counter to={5} />
                </div>
                <div className="text-sm text-white font-medium leading-tight px-4">
                  Países <br />posicionados
                </div>
              </div>
              
              <div className="absolute inset-0">
                <div className="w-full h-full animate-spin" style={{animationDuration: '20s'}}>
                  <svg className="w-full h-full" viewBox="0 0 176 176">
                    <defs>
                      <path id="circle-main" d="M 88, 88 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
                    </defs>
                    <text fontSize="12" fill="rgba(255,255,255,0.4)" fontFamily="Poppins">
                      <textPath href="#circle-main" startOffset="0%">
                        Nuestra presencia internacional • Nuestra presencia internacional • 
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Segundo Círculo - Projects */}
            <div className="w-44 h-44 bg-secondary rounded-full flex flex-col items-center justify-center text-white relative overflow-hidden z-10">
              <div className="text-center z-10">
                <div className="text-5xl font-bold text-white mb-2">
                  <Counter to={23} suffix="+" />
                </div>
                <div className="text-sm text-white font-medium leading-tight px-4">
                  Proyectos <br />realizados
                </div>
              </div>
              
              <div className="absolute inset-0">
                <div className="w-full h-full animate-spin" style={{animationDuration: '25s'}}>
                  <svg className="w-full h-full" viewBox="0 0 176 176">
                    <defs>
                      <path id="circle-projects-2" d="M 88, 88 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
                    </defs>
                    <text fontSize="12" fill="rgba(255,255,255,0.4)" fontFamily="Poppins">
                      <textPath href="#circle-projects-2" startOffset="0%">
                        Proyectos ejecutados satisfactoriamente • Proyectos ejecutados satisfactoriamente • 
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Tercer Círculo - Satisfaction */}
            <div className="w-44 h-44 bg-secondary rounded-full flex flex-col items-center justify-center text-white relative overflow-hidden z-10">
              <div className="text-center z-10">
                <div className="text-4xl font-bold text-white mb-2">
                  <Counter to={4.9} decimals={1} />
                  <span className="text-3xl font-bold">/</span>
                  <Counter to={5} />
                </div>
                <div className="text-sm text-white font-medium leading-tight px-4">
                  Satisfacción <br />del cliente
                </div>
              </div>
              
              <div className="absolute inset-0">
                <div className="w-full h-full animate-spin" style={{animationDuration: '30s'}}>
                  <svg className="w-full h-full" viewBox="0 0 176 176">
                    <defs>
                      <path id="circle-satisfaction-2" d="M 88, 88 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
                    </defs>
                    <text fontSize="12" fill="rgba(255,255,255,0.4)" fontFamily="Poppins">
                      <textPath href="#circle-satisfaction-2" startOffset="0%">
                        Satisfacción de nuestros servicios • Satisfacción de nuestros servicios • 
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* COLUMNA 3: Países alineados + Badges simples */}
          <div className="lg:col-span-1 w-full flex flex-col justify-between h-full">
            
            {/* Countries List - Alineados con "Excelencia..." */}
            <div className="pt-8">
              <ul className="list-none p-0 m-0 space-y-4">
                {countries.map((countryName, index) => {
                  const flagSlug =
                    countryName
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/\s+/g, "_")
                      .replace(/[^a-z0-9_]/g, "");

                  return (
                    <li key={countryName} className="flex items-center relative">
                      <div className="flex flex-col items-center mr-4 flex-shrink-0">
                        <div className="w-4 h-4 bg-white rounded-full border border-slate-200 flex-shrink-0 z-10"></div>
                        {index !== countries.length - 1 && (
                          <div 
                            className="w-0.5 h-6 mt-1"
                            style={{
                              backgroundImage: "repeating-linear-gradient(to bottom, white 0px, white 3px, transparent 3px, transparent 6px)",
                            }}
                          />
                        )}
                      </div>
                      <Image
                        src={`/assets/icons/${flagSlug}.svg`}
                        alt={t("countryFlagAlt", { country: countryName })}
                        width={24}
                        height={16}
                        className="object-cover rounded-[3px] mr-3"
                        unoptimized
                      />
                      <span className="text-base text-white font-medium">
                        {countryName}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Mapa mundial - Entre países y badges */}
            <div className="flex justify-center my-8">
              <Image
                src="/assets/images/world.svg"
                alt={t("worldMapAlt")}
                width={300}
                height={200}
                className="object-contain opacity-60"
                priority
                unoptimized
              />
            </div>

            {/* Recognition Badges - Solo imágenes, sin cards */}
            <div className="flex flex-wrap justify-start gap-4 mt-12">
              <Image
                src="/assets/images/clutch_badge_1.svg"
                alt="Clutch Badge 1"
                width={80}
                height={64}
                className="object-contain"
                unoptimized
              />
              <Image
                src="/assets/images/clutch_badge_2.svg"
                alt="Clutch Badge 2"
                width={80}
                height={64}
                className="object-contain"
                unoptimized
              />
              <Image
                src="/assets/images/clutch_badge_3.svg"
                alt="Clutch Badge 3"
                width={80}
                height={64}
                className="object-contain"
                unoptimized
              />
              <div className="w-20 h-16 flex items-center justify-center">
                <span className="text-white text-xs text-center font-medium opacity-60">
                  Extra Badge
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
