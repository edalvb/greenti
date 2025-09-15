"use client";

import React from "react";
import Image from "next/image";
import RotatingStatCircle from "@/components/ui/RotatingStatCircle";
import { useCounter } from "@/hooks/useCounter";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export const AboutStats: React.FC = () => {
  const t = useTranslations("AboutPage");

  const ClutchBadge: React.FC<{ index: number }> = ({ index }) => {
    const [hidden, setHidden] = React.useState(false);
    if (hidden) return null;
    return (
      <Image
        src={`/assets/images/clutch_badge/clutch_badge_0${index}.png`}
        alt={`Clutch badge ${index}`}
        width={130}
        height={130}
        onError={() => setHidden(true)}
        priority={false}
      />
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
        <Stats
          subtitle={t("stats.countries")}
          rotatingText="Proyectos ejecutados satisfactoriamente"
          counterTo={5}
          animationDuration={20}
        />
        <Stats
          subtitle={t("stats.projects")}
          rotatingText="Proyectos ejecutados"
          counterTo={23}
          animationDuration={24}
        />
        <RotatingStatCircle
          primary={
            <span className="text-3xl font-bold text-secondary">
              <Counter to={4.9} decimals={1} />
              <span className="text-xl align-top">/</span>
              <Counter to={5} />
            </span>
          }
          subtitle={<span>{t("stats.satisfaction")}</span>}
          rotatingText="Satisfacción de nuestros servicios"
          animationDuration={24}
          size="medium"
          theme="light"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {[1, 2, 3, 4].map((i) => (
          <ClutchBadge key={i} index={i} />
        ))}
      </div>
    </div>
  );
};

export default AboutStats;

const Stats = (p: {
  subtitle: React.ReactNode;
  rotatingText: string;
  counterTo?: number;
  animationDuration?: number;
}) => {
  return (
    <RotatingStatCircle
      primary={
        <span className="text-3xl font-bold text-secondary">
          <Counter to={p.counterTo || 0} />
        </span>
      }
      subtitle={<span>{p.subtitle}</span>}
      rotatingText={p.rotatingText}
      animationDuration={p.animationDuration || 24}
      size="medium"
      theme="light"
    />
  );
};

const Counter = ({
  to,
  decimals = 0,
  suffix = "",
}: {
  to: number;
  decimals?: number;
  suffix?: string;
}) => {
  const { count, ref } = useCounter(to, { duration: 2, delay: 0.1 });
  return (
    <motion.span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </motion.span>
  );
};
