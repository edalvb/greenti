"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCounter } from "@/hooks/useCounter";
import { motion } from "framer-motion";
import RotatingStatCircle from "@/components/ui/RotatingStatCircle";

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
              <h3 className="text-white text-2xl font-bold mb-4">
                {t("projectSummary.title")}
              </h3>
              <p className="text-white text-base font-medium">
                {t("projectSummary.description")}
              </p>
            </div>

            <div className="bg-white/5 rounded-[30px] p-6 h-40">
              <h3 className="text-white text-2xl font-bold mb-4">
                {t("projectSummary.title")}
              </h3>
              <p className="text-white text-base font-medium">
                {t("projectSummary.description")}
              </p>
            </div>

            <div className="bg-white/5 rounded-[30px] p-6 h-40">
              <h3 className="text-white text-2xl font-bold mb-4">
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
            />
          </div>

          {/* COLUMNA 3: Países alineados + Badges simples */}
          <div className="lg:col-span-1 w-full flex flex-col justify-between h-full">
            <Countries />

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

/** Espaciado vertical por fila (coincide con tu layout original) */
const ROW_HEIGHT = 52;

const COLORS = {
  blueBar: "#2B3990",
  peruRed: "#EC1C24",
  peruWhite: "#E6E7E8",
  usaRed: "#B22334",
  usaWhite: "#EEEEEE",
  usaBlue: "#3C3B6E",
  label: "#FFFFFF",
  dotBorder: "#E7F0EF",
  dashed: "rgba(255, 255, 255, 0.40)",
};

/** --------- Banderas (24x24) ---------- */
const baseFlagBox: React.CSSProperties = {
  width: 24,
  height: 24,
  position: "absolute",
  overflow: "hidden",
  left: 35,
};

const Flag = ({ flagSlug = "peru", alt = "Perú" }) => (
  <Image
    src={`/assets/icons/${flagSlug}.svg`}
    alt={`Bandera de ${alt}`}
    width={24}
    height={16}
    className="object-cover rounded-[3px] mr-3"
    unoptimized
  />
);

/** Punto circular de la línea temporal */
const Dot = ({ top }: { top: number }) => (
  <div
    style={{
      width: 16,
      height: 16,
      left: 0,
      top,
      position: "absolute",
      background: "white",
      borderRadius: 9999,
      border: `1px ${COLORS.dotBorder} solid`,
    }}
  />
);

/** Texto etiqueta */
const Label = ({
  top,
  children,
}: {
  top: number;
  children: React.ReactNode;
}) => (
  <div
    style={{
      left: 74,
      top,
      position: "absolute",
      color: COLORS.label,
      fontSize: 16,
      fontFamily: "Poppins",
      fontWeight: "500",
      wordWrap: "break-word",
    }}
  >
    {children}
  </div>
);

/** Línea vertical discontinua (sin rotaciones) */
const Timeline = ({ itemCount }: { itemCount: number }) => {
  const height = (itemCount - 1) * ROW_HEIGHT + 12; // ligeramente extendida
  return (
    <div
      style={{
        position: "absolute",
        left: 8,
        top: 4,
        height,
        borderLeft: `1px dashed ${COLORS.dashed}`,
      }}
    />
  );
};

/** Datos: añade/quita países; 'flag' acepta 'usa' | 'peru' | 'bar' */
const DEFAULT_ITEMS = [
  { name: "USA", flag: "usa" },
  { name: "México", flag: "mexico" },
  { name: "Ecuador", flag: "ecuador" },
  { name: "Perú", flag: "peru" },
  { name: "Paraguay", flag: "paraguay" },
];

export default function Countries({ items = DEFAULT_ITEMS }) {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Timeline itemCount={items.length} />

      {items.map((item, i) => {
        const rowTop = i * ROW_HEIGHT;
        return (
          <React.Fragment key={item.name}>
            {/* Flag box */}
            <div style={{ ...baseFlagBox, top: rowTop }}>
              <Flag flagSlug={item.flag} alt={item.name} />
            </div>

            {/* Label */}
            <Label top={rowTop}>{item.name}</Label>

            {/* Dot (ligeramente más abajo que la parte superior de fila) */}
            <Dot top={rowTop + 4} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
