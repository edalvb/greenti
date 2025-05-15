"use client";

import React from 'react';
import Image from "next/image";
import { useTranslations } from 'next-intl';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="text-center px-2">
    <p className="text-4xl md:text-5xl font-bold text-primary">{value}</p>
    <p className="text-sm text-neutral-light mt-1">{label}</p>
    <div className="w-12 h-0.5 bg-primary/50 mx-auto mt-2"></div>
  </div>
);

export const PresenceSection: React.FC = () => {
  const t = useTranslations('PresenceSection');
  const countries = t.raw('countries') as string[]; 
  const stats = [
    { value: '15+', label: t('stats.clients') },
    { value: '75+', label: t('stats.projects') }, 
    { value: '5+', label: t('stats.countriesLabel') }, 
  ];

  return (
    <section id="presence" className="py-16 md:py-24 bg-secondary text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-xl p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2 w-full relative h-64 md:h-80 lg:h-[450px]">
            <Image
              src="/assets/images/world_map.svg"
              alt={t('worldMapAlt')}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: "contain" }}
              className='opacity-80'
            />
          </div>
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-neutral-light mb-8 leading-relaxed">
              {t('subtitle')}
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 mb-10 text-neutral-lightest text-sm md:text-base">
              {countries.map((country) => (
                <li key={country} className="py-1 hover:text-primary transition-colors duration-200">{country}</li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {stats.map((stat, index) => (
                <StatItem key={index} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};