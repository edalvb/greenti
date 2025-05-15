"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { CONTACT_INFO } from '@/core/utils/constants';
import { Button } from '@/components/ui/Button';
import { IconBrandWhatsapp } from '@tabler/icons-react';

export const WhatsAppCtaSection: React.FC = () => {
  const t = useTranslations('WhatsAppCtaSection');
  const whatsappLink = `https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(t('whatsappMessage'))}`;

  return (
    <section id="whatsapp-cta" className="py-12 md:py-16 bg-neutral-lightest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <div className='md:flex-grow'>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
              {t('title')}
            </h2>
            <p className="text-neutral-darker max-w-xl leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mt-4 md:mt-0"
          >
            <Button 
              variant='primary'
              size='lg'
              className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105'
            >
              <IconBrandWhatsapp size={24} className="mr-2.5" />
              {t('buttonText')}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};