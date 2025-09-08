"use client";

import React from "react";
import RotatingStatCircle from "@/components/ui/RotatingStatCircle";
import { useCounter } from "@/hooks/useCounter";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export const AboutStats: React.FC = () => {
  const t = useTranslations("AboutPage");

  const Counter = ({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) => {
    const { count, ref } = useCounter(to, { duration: 2, delay: 0.1 });
    return (
      <motion.span ref={ref}>
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        {suffix}
      </motion.span>
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
      <RotatingStatCircle
        primary={<span className="text-4xl font-bold text-white"><Counter to={5} /></span>}
        subtitle={<span className="text-sm" >{t("stats.countries")}</span>}
        rotatingText="Nuestra presencia internacional"
        animationDuration={20}
        size="large"
      />
      <RotatingStatCircle
        primary={<span className="text-4xl font-bold text-white"><Counter to={23} suffix="+" /></span>}
        subtitle={<span className="text-sm" >{t("stats.projects")}</span>}
        rotatingText="Proyectos ejecutados"
        animationDuration={24}
        size="large"
      />
      <RotatingStatCircle
        primary={<span className="text-4xl font-bold text-white inline-flex items-baseline"><Counter to={4.9} decimals={1} /><span className="text-2xl font-bold">/</span><Counter to={5} /></span>}
        subtitle={<span className="text-sm" >{t("stats.satisfaction")}</span>}
        rotatingText="Satisfacción del cliente"
        animationDuration={28}
        size="large"
      />
    </div>
  );
};

export default AboutStats;