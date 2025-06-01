import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const ContactSectionAvatar: React.FC = () => {
  const t = useTranslations('ContactSection');

  return (
    <div className="relative w-52 h-28 mb-6"> 
      <div className="absolute bg-white p-2.5 rounded-xl shadow-md left-[55px] top-[25px] z-20 w-[190px]">
        <div className="flex items-center mb-1">
          <div className="w-2 h-2 bg-primary rounded-full mr-1.5 flex-shrink-0"></div>
          <p className="text-sm font-semibold text-secondary truncate">
            {t('avatarSubtitleName')}
          </p>
        </div>
        <p className="text-xs text-neutral-darker">
          {t('avatarSubtitleRole')}
        </p>
      </div>
      <div className="absolute -top-5 -left-2 w-[70px] h-[70px] z-10">
        <Image
          src="/assets/images/contact_avatar_maria.png"
          alt={t('avatarAlt')}
          className="rounded-2xl object-cover shadow-lg"
          fill
          sizes="70px"
        />
      </div>
    </div>
  );
};
