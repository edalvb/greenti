"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ClientLogoData {
  src: string;
  altKey: string;
}

const STATIC_CLIENT_LOGOS: ClientLogoData[] = [
  { src: "/assets/images/client_logo_easydrop.svg", altKey: "EasyDropLogo" },
  { src: "/assets/images/client_logo_omarsa.svg", altKey: "OmarsaLogo" },
  { src: "/assets/images/client_logo_coosofan.svg", altKey: "CoosofanLogo" },
  { src: "/assets/images/client_logo_homs.svg", altKey: "HomsRentalsLogo" },
  { src: "/assets/images/client_logo_avesa.svg", altKey: "AvesaLogo" },
];

export const ClientLogosSection: React.FC = () => {
  const t = useTranslations("ClientLogosSection");

  return (
    <section id="client-logos" className="py-12 md:py-16 bg-neutral-lightest px-responsive">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-16 lg:gap-x-20 opacity-80">
          {STATIC_CLIENT_LOGOS.map((logo) => (
            <div
              key={logo.altKey}
              className="relative h-8 md:h-10 w-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px] hover:opacity-100 transition-opacity"
            >
              <Image
                src={logo.src}
                alt={t(logo.altKey as any) || logo.altKey}
                quality={75}
                fill
                sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};