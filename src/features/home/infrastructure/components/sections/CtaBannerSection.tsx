"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
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
      className="relative pd-section text-white bg-secondary overflow-hidden px-responsive"
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 leading-tight">
          {t("titlePart1")}
          <span className="block text-primary">{t("titlePart2")}</span>
        </h2>
        <ButtonCta/>
      </div>
    </section>
  );
};
