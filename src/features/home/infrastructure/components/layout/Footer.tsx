"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Logo } from '@/components/ui/Logo';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconMail, IconMapPin, IconPhone } from '@tabler/icons-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/core/utils/constants';

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => (
  <li>
    <Link href={href} className="text-sm text-neutral-light hover:text-white transition-colors">
      {label}
    </Link>
  </li>
);

const socialIcons = [
  { href: SOCIAL_LINKS.linkedin, icon: IconBrandLinkedin, label: 'LinkedIn' },
  { href: SOCIAL_LINKS.facebook, icon: IconBrandFacebook, label: 'Facebook' },
  { href: SOCIAL_LINKS.instagram, icon: IconBrandInstagram, label: 'Instagram' },
];

const clutchBadgesData = [
  { src: "/assets/images/clutch_badge_1.svg", altKey: "ClutchGlobalSpring2024" },
  { src: "/assets/images/clutch_badge_2.svg", altKey: "ClutchGlobalFall2023" },
  { src: "/assets/images/clutch_badge_3.svg", altKey: "Clutch1000Fall2023" },
];

export const Footer: React.FC = () => {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-neutral-light pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2 lg:col-span-1">
            <Logo href="/" imgWidth={120} className="mb-4" isScrolled={true} />
          </div>

          <div>
            <h3 className="text-md font-semibold text-white mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              <FooterLink href="#services" label={t('softwareDevelopment')} />
              <FooterLink href="#services" label={t('uxuiDesign')} />
              <FooterLink href="#services" label={t('staffing')} />
              <FooterLink href="#services" label={t('onlineCourses')} />
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-white mb-4">{t('portfolio')}</h3>
            <ul className="space-y-2">
              <FooterLink href="#portfolio" label={t('financial')} />
              <FooterLink href="#portfolio" label={t('retail')} />
              <FooterLink href="#portfolio" label={t('service')} />
              <FooterLink href="#portfolio" label={t('industry')} />
              <FooterLink href="#portfolio" label={t('education')} />
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-white mb-4">{t('office')}</h3>
            <div className="flex items-start text-sm text-neutral-light hover:text-white transition-colors">
              <IconMapPin size={20} className="mr-2 mt-0.5 flex-shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold text-white mb-4">{t('contact')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-neutral-light hover:text-white transition-colors">
                <IconPhone size={20} className="mr-2 flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s|\(|\)/g, "")}`}>{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center text-sm text-neutral-light hover:text-white transition-colors">
                <IconMail size={20} className="mr-2 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start order-1 md:order-2 space-y-2">
            <span className="text-md text-white">{t('followUs')}</span>
            <div className="flex items-center space-x-4">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-neutral-light hover:text-primary transition-colors"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 order-2 md:order-1 mt-8 md:mt-0">
            {clutchBadgesData.map((badge) => (
              <Image
                key={badge.altKey}
                src={badge.src}
                alt={t(badge.altKey as any)}
                width={100}
                height={100}
                className="h-20 md:h-24 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-neutral-light">
            {t('copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
};