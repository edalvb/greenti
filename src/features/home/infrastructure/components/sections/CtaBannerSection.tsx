"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";
import { ButtonCta } from "@/components/ui/ButtonCta";

export const CtaBannerSection: React.FC = () => {
  const t = useTranslations("CtaBannerSection");
  const { ref, y } = useParallax(0.15);

  return (
    <section
      id="cta-banner"
      ref={ref}
      className="relative py-20 md:py-32 text-white bg-secondary overflow-hidden px-responsive"
    >
      <motion.div className="absolute inset-0 z-0 opacity-10" style={{ y }}>
        <Image
          src="/assets/images/faq_background.png"
          alt="Modern office background"
          quality={70}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          {t("titlePart1")}
          <span className="block text-primary">{t("titlePart2")}</span>
        </h2>
        <p className="text-lg md:text-xl text-neutral-lightest max-w-2xl mx-auto mb-10">
          {t("subtitle")}
        </p>
        <ButtonCta/>
      </div>
    </section>
  );
};
