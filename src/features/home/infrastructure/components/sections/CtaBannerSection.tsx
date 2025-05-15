"use client";

import React from 'react';
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Link } from '@/core/config/i18n/navigation';
import { Button } from '@/components/ui/Button';

export const CtaBannerSection: React.FC = () => {
  const t = useTranslations('CtaBannerSection');

  return (
    <section id="cta-banner" className="relative py-20 md:py-32 text-white bg-secondary overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/assets/images/faq_background.png"
          alt="Modern office background"
          quality={70}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          {t('titlePart1')}
          <span className="block text-primary">{t('titlePart2')}</span>
        </h2>
        <p className="text-lg md:text-xl text-neutral-lightest max-w-2xl mx-auto mb-10">
          {t('subtitle')}
        </p>
        <Link href="#contact">
          <Button size="lg" variant="primary" className="px-10 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            {t('buttonText')}
          </Button>
        </Link>
      </div>
    </section>
  );
};