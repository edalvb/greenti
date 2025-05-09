import React from 'react';
import Image from "next/image";

const clientLogosData = [
  { src: "/assets/images/client_logo_easydrop.svg", alt: "EasyDrop Logo" },
  { src: "/assets/images/client_logo_omarsa.svg", alt: "Omarsa Logo" },
  { src: "/assets/images/client_logo_coosofan.svg", alt: "Coosofan Logo" },
  { src: "/assets/images/client_logo_homs.svg", alt: "Homs Rentals Logo" },
  { src: "/assets/images/client_logo_avesa.svg", alt: "Avesa Logo" },
];

export const ClientLogosSectionComponent: React.FC = () => {
  return (
    <section id="client-logos" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12 lg:gap-x-16 opacity-75">
          {clientLogosData.map((logo) => (
            <div key={logo.alt} className="relative h-8 md:h-10 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[150px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                quality={75}
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain"
                }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
