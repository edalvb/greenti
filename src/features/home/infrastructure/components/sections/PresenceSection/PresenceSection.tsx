"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCounter } from "@/hooks/useCounter";
import { motion } from "framer-motion";
import RotatingStatCircle from "@/components/ui/RotatingStatCircle";
import Countries from "./Countries";

export const PresenceSection: React.FC = () => {
  const t = useTranslations("PresenceSection");
  const countries = t.raw("countries") as string[];

  const Counter = ({
    to,
    suffix,
    decimals = 0,
  }: {
    to: number;
    suffix?: string;
    decimals?: number;
  }) => {
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
      className="pd-section px-responsive overflow-hidden relative"
    >
      {/* Container alineado con otros componentes */}
      <div className="container mx-auto p-6 sm:p-8 lg:p-10 rounded-[30px] bg-secondary">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* COLUMNA 1: Título + Information Cards */}
          <div className="lg:col-span-1 w-full space-y-6">
            {/* Main Title Section */}
            <div className="mb-8">
              <h2 className="text-5xl font-bold mb-2">
                <span className="text-green-500">{t("titlePart1")}</span>
              </h2>
              <div className="text-white text-5xl font-bold leading-tight">
                <div>{t("titlePart2")}</div>
                <div>{t("titlePart3")}</div>
              </div>
            </div>

            {/* Information Cards */}
            <div className="bg-white/5 rounded-[30px] p-6 h-40">
              <h3 className="text-white text-xl font-bold mb-4">
                {t("projectSummary.title")}
              </h3>
              <p className="text-white text-base font-medium">
                {t("projectSummary.description")}
              </p>
            </div>

            <div className="bg-white/5 rounded-[30px] p-6 h-40">
              <h3 className="text-white text-xl font-bold mb-4">
                {t("projectSummary.title")}
              </h3>
              <p className="text-white text-base font-medium">
                {t("projectSummary.description")}
              </p>
            </div>

            <div className="bg-white/5 rounded-[30px] p-6 h-40">
              <h3 className="text-white text-xl font-bold mb-4">
                {t("projectSummary.title")}
              </h3>
              <p className="text-white text-base font-medium">
                {t("projectSummary.description")}
              </p>
            </div>
          </div>

          {/* COLUMNA 2: Círculos estadísticos UNO DEBAJO DE OTRO */}
          <div className="lg:col-span-1 w-full flex flex-col items-center justify-center space-y-12 relative">
            {/* Primer Círculo - Countries */}
            <RotatingStatCircle
              primary={
                <span className="text-5xl font-bold text-white">
                  <Counter to={5} />
                </span>
              }
              subtitle={
                <>
                  Países <br />
                  posicionados
                </>
              }
              rotatingText="Nuestra presencia internacional"
              animationDuration={20}
              size="large"
            />

            {/* Segundo Círculo - Projects */}
            <RotatingStatCircle
              primary={
                <span className="text-5xl font-bold text-white inline-flex items-baseline">
                  <Counter to={23} suffix="+" />
                </span>
              }
              subtitle={
                <>
                  Proyectos <br />
                  realizados
                </>
              }
              rotatingText="Proyectos ejecutados satisfactoriamente"
              animationDuration={25}
              size="large"
            />

            {/* Tercer Círculo - Satisfaction */}
            <RotatingStatCircle
              primary={
                <span className="text-4xl font-bold">
                  <Counter to={4.9} decimals={1} />
                  <span className="text-3xl font-bold">/</span>
                  <Counter to={5} />
                </span>
              }
              subtitle={
                <>
                  Satisfacción <br />
                  del cliente
                </>
              }
              rotatingText="Satisfacción de nuestros servicios"
              animationDuration={30}
              size="large"
            />
          </div>

          {/* COLUMNA 3: Países alineados + Badges simples */}
          <div className="lg:col-span-1 w-full flex flex-col justify-between h-full">
            <div className="flex container mb-55">
              <Countries />
            </div>

            {/* Mapa mundial - Entre países y badges */}
            <div className="flex justify-center my-8">
              <Image
                src="/assets/images/world.svg"
                alt={t("worldMapAlt")}
                width={1000}
                height={1000}
                className="object-contain opacity-60 w-full"
              />
            </div>

            {/* Recognition Badges - Solo imágenes, sin cards */}
            <div className="flex flex-wrap justify-start gap-4">
              <Image
                src="/assets/images/clutch_badge_1.svg"
                alt="Clutch Badge 1"
                width={120}
                height={64}
                className="object-contain"
                unoptimized
              />
              <Image
                src="/assets/images/clutch_badge_2.svg"
                alt="Clutch Badge 2"
                width={120}
                height={64}
                className="object-contain"
                unoptimized
              />
              <Image
                src="/assets/images/clutch_badge_3.svg"
                alt="Clutch Badge 3"
                width={120}
                height={64}
                className="object-contain"
                unoptimized
              />
              <Image
                src="/assets/images/clutch_badge_3.svg"
                alt="Clutch Badge 3"
                width={120}
                height={64}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
