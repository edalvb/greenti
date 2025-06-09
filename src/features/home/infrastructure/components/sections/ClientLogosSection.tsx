"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Carousel } from "@/components/ui/Carousel";

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
  { src: "/assets/images/client_logo_easydrop.svg", altKey: "EasyDropLogo2" },
  { src: "/assets/images/client_logo_omarsa.svg", altKey: "OmarsaLogo2" },
  { src: "/assets/images/client_logo_coosofan.svg", altKey: "CoosofanLogo2" },
];

export const ClientLogosSection: React.FC = () => {
  const t = useTranslations("ClientLogosSection");

  const carouselItems = STATIC_CLIENT_LOGOS.map((logo) => (
    <div
      key={logo.altKey}
      className="relative h-16 md:h-20 w-full group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
    >
      <Image
        src={logo.src}
        alt={t(logo.altKey as any) || logo.altKey}
        quality={80}
        fill
        sizes="(max-width: 768px) 150px, 200px"
        style={{ objectFit: "contain" }}
      />
    </div>
  ));

  return (
    <section
      id="client-logos"
      className="pd-section bg-neutral-lightest px-responsive"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative group"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <Carousel items={carouselItems} itemWidth={200} gap={60} speed={30} />
        </div>
      </div>
    </section>
  );
};
