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
      className="relative h-8 md:h-10 w-full opacity-80 group-hover:opacity-100 transition-opacity duration-300" // group-hover on parent for item opacity
    >
      <Image
        src={logo.src}
        alt={t(logo.altKey as any) || logo.altKey}
        quality={75}
        fill
        sizes="160px"
        style={{ objectFit: "contain" }}
      />
    </div>
  ));

  return (
    <section
      id="client-logos"
      className="py-12 md:py-16 bg-neutral-lightest px-responsive"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenedor para aplicar la máscara de difuminado */}
        <div
          className="relative group" // 'group' para que los items puedan reaccionar al hover si es necesario
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <Carousel items={carouselItems} itemWidth={160} gap={80} speed={30} />
        </div>
      </div>
    </section>
  );
};
