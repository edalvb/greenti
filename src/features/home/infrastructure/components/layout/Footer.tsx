"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { IconMail, IconPhone } from "@tabler/icons-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/core/utils/constants";

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => (
  <li>
    <Link
      href={href}
      className="text-sm text-neutral-light hover:text-white transition-colors"
    >
      {label}
    </Link>
  </li>
);

const socialIconsData = [
  {
    href: SOCIAL_LINKS.linkedin,
    icon: "/assets/icons/linkedin.svg",
    label: "LinkedIn",
  },
  {
    href: SOCIAL_LINKS.github,
    icon: "/assets/icons/github.svg",
    label: "GitHub",
  },
  {
    href: SOCIAL_LINKS.instagram,
    icon: "/assets/icons/instagram.svg",
    label: "Instagram",
  },
  {
    href: SOCIAL_LINKS.tiktok,
    icon: "/assets/icons/tiktok.svg",
    label: "TikTok",
  },
];

const clutchBadgesData = [
  {
    src: "/assets/images/clutch_badge_1.svg",
    altKey: "ClutchGlobalSpring2024",
    width: 120,
    height: 103,
  },
  {
    src: "/assets/images/clutch_badge_2.svg",
    altKey: "ClutchGlobalFall2023",
    width: 120,
    height: 103,
  },
  {
    src: "/assets/images/clutch_badge_3.svg",
    altKey: "Clutch1000Fall2023",
    width: 128,
    height: 101,
  },
];

export const Footer: React.FC = () => {
  const t = useTranslations("Footer");
  const tGlobal = useTranslations("Global");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-responsive">
      <div className="bg-secondary text-neutral-light pt-16 pb-8 rounded-btn-cta mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-8 mb-12">
            <div className="lg:col-span-1">
              <Link href="/" className="block mb-4 w-14 h-14">
                <Image
                  src="/assets/images/logo_greenti_white.svg"
                  alt={tGlobal("appName") + " Logo"}
                  width={56}
                  height={56}
                  className="h-auto"
                />
              </Link>
              <p className="text-sm text-neutral-light leading-relaxed">
                {t("logoDescription")}
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-4">
                {t("services")}
              </h3>
              <ul className="space-y-2.5">
                <FooterLink
                  href="/#nuestros-servicios"
                  label={t("softwareDevelopment")}
                />
                <FooterLink
                  href="/#nuestros-servicios"
                  label={t("uxuiDesign")}
                />
                <FooterLink href="/#nuestros-servicios" label={t("staffing")} />
                <FooterLink
                  href="/#nuestros-servicios"
                  label={t("onlineCourses")}
                />
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-4">
                {t("portfolio")}
              </h3>
              <ul className="space-y-2.5">
                <FooterLink href="/#testimonials" label={t("financial")} />
                <FooterLink href="/#testimonials" label={t("retail")} />
                <FooterLink href="/#testimonials" label={t("service")} />
                <FooterLink href="/#testimonials" label={t("industry")} />
                <FooterLink href="/#testimonials" label={t("education")} />
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-4">
                {t("office")}
              </h3>
              <address className="text-sm text-neutral-light not-italic leading-relaxed">
                {CONTACT_INFO.addressLine1}
                <br />
                {CONTACT_INFO.addressLine2}
              </address>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-4">
                {t("contact")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <p className="text-sm text-neutral-light mb-1">
                    {t("supportChannel")}
                  </p>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s|\(|\)/g, "")}`}
                    className="flex items-center text-sm text-white font-bold hover:opacity-80 transition-opacity"
                  >
                    <IconPhone size={18} className="mr-2 flex-shrink-0" />
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li>
                  <p className="text-sm text-neutral-light mb-1">
                    {t("emailUs")}
                  </p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center text-sm text-white font-bold hover:opacity-80 transition-opacity"
                  >
                    <IconMail size={18} className="mr-2 flex-shrink-0" />
                    {CONTACT_INFO.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 pb-4">
            <div className="text-center md:text-left order-1 md:order-2 md:ml-auto">
              <h3 className="text-base font-semibold text-white mb-3">
                {t("followUs")}
              </h3>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                {socialIconsData.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="bg-social-icon text-white rounded-full p-0 w-[60px] h-[60px] flex items-center justify-center transform hover:scale-110 transition-all duration-200"
                  >
                    <Image
                      src={social.icon}
                      alt={social.label}
                      width={30}
                      height={30}
                      className="h-auto w-[30px]"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-t border-white/20 my-6" />

          <div className="text-center md:text-right py-4">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-4 order-2 md:order-1">
              {clutchBadgesData.map((badge) => (
                <div
                  key={badge.altKey}
                  className="h-[101px] flex items-center justify-center transform hover:scale-105 transition-transform"
                >
                  <Image
                    src={badge.src}
                    alt={t(badge.altKey as any)}
                    width={badge.width}
                    height={badge.height}
                    className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>

            <p className="text-xs text-neutral-light">
              {t("copyright", { year: currentYear })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
