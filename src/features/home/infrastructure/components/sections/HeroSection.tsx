"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/Button';
import { StatCard } from '@/components/ui/StatCard';
import {
  IconBriefcase,
  IconUsersGroup,
  IconDeviceMobileCode,
  IconCloudDownload,
} from '@tabler/icons-react';

export const HeroSection: React.FC = () => {
  const t = useTranslations('HeroSection');
  const tGlobal = useTranslations('Global');

  const statItems = [
    {
      value: '75+',
      labelKey: 'stats.projects',
      icon: <IconBriefcase size={24} className="text-white" />,
      bgColor: 'bg-stat-green-dark',
      position: 'top-[15%] left-[68%] md:top-[20%] md:left-[65%] lg:top-[25%] lg:left-[60%]',
    },
    {
      value: '15+',
      labelKey: 'stats.clients',
      icon: <IconUsersGroup size={24} className="text-white" />,
      bgColor: 'bg-stat-teal',
      position: 'top-[30%] left-[90%] md:top-[35%] md:left-[88%] lg:top-[30%] lg:left-[85%]',
    },
    {
      value: '48+',
      labelKey: 'stats.apps',
      icon: <IconDeviceMobileCode size={24} className="text-white" />,
      bgColor: 'bg-stat-orange',
      position: 'top-[70%] left-[60%] md:top-[75%] md:left-[55%] lg:top-[70%] lg:left-[55%]',
    },
    {
      value: '8K+',
      labelKey: 'stats.downloads',
      icon: <IconCloudDownload size={24} className="text-white" />,
      bgColor: 'bg-stat-blue',
      position: 'top-[85%] left-[85%] md:top-[80%] md:left-[80%] lg:top-[65%] lg:left-[78%]',
    },
  ];

  return (
    <section
      id="hero"
      className="relative bg-neutral-lightest pt-32 pb-20 md:pt-40 md:pb-28 lg:min-h-[calc(100vh-80px)] flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary mb-6 leading-tight">
            {t('titlePart1')}
            <span className="block">{t('titlePart2')}</span>
            <span className="block text-primary">{t('titlePart3')}</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-darker mb-10">
            {t('subtitle')}
          </p>
          <Link href="#contact">
            <Button
              size="lg"
              variant="primary"
              className="px-8 py-3 md:px-10 md:py-3.5 text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {tGlobal('getAQuote')}
            </Button>
          </Link>
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div
          className="
            absolute 
            top-1/2 
            left-[calc(55%+250px)] 
            transform -translate-x-1/2 -translate-y-1/2 
            w-[380px] h-[380px] 
            xl:w-[450px] xl:h-[450px] 
            rounded-full 
            overflow-hidden 
            shadow-2xl 
            border-8 border-white 
          "
        >
          <Image
            src="/assets/images/team_image_hero_overlay.png"
            alt="GreenTI team working collaboratively"
            quality={90}
            priority
            fill
            sizes="(max-width: 1200px) 380px, 450px"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        {statItems.map((item) => (
          <StatCard
            key={item.labelKey}
            value={item.value}
            label={t(item.labelKey as any)}
            icon={item.icon}
            bgColor={item.bgColor}
            className={item.position}
          />
        ))}
      </div>
    </section>
  );
};