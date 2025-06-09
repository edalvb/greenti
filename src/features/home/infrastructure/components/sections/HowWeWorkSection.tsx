"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

interface ProcessStepData {
  titleKey: 'analysis' | 'design' | 'development' | 'testing' | 'deployment';
}

const processStepsData: ProcessStepData[] = [
  { titleKey: 'analysis' },
  { titleKey: 'design' },
  { titleKey: 'development' },
  { titleKey: 'testing' },
  { titleKey: 'deployment' },
];

export const HowWeWorkSection: React.FC = () => {
  const t = useTranslations('HowWeWorkSection');

  return (
    <section id="how-we-work" className="pd-section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-neutral-darker max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed">
          {t('subtitle')}
        </p>
        <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-12 md:mb-16">
          {t('processTitle')}
        </h3>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden sm:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/30 transform -translate-y-1/2 z-0"></div>
          <div className="relative flex flex-col sm:flex-row justify-between items-center z-10 space-y-10 sm:space-y-0">
            {processStepsData.map((step, index) => (
              <div key={step.titleKey} className="flex flex-col items-center w-full sm:w-auto">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-white font-bold text-base md:text-lg">{index + 1}</span>
                </div>
                <p className="mt-3 text-base md:text-lg font-medium text-secondary">{t(`steps.${step.titleKey}`)}</p>
                {index < processStepsData.length -1 && <div className="sm:hidden w-0.5 h-10 bg-primary/30 mt-3"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
