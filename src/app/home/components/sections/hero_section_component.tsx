import React from "react";
import Image from "next/image";
import { ButtonComponent } from "@/core/components/ui/button_component";
import { StatCard } from "@/core/components/ui/stat_card";
import {
  IconBrandAndroid,
  IconBriefcase,
  IconDownload,
  IconUsers,
} from "@tabler/icons-react";

export const HeroSectionComponent: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative bg-neutral-lightest pt-32 pb-16 md:pt-48 md:pb-24 min-h-[70vh] md:min-h-[calc(100vh-80px)] flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-xl md:max-w-2xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary mb-6">
            Innovamos para
            <span className="block text-secondary">potenciar tu</span>
            <span className="block text-primary">negocio</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-darker mb-10">
            Junto a nuestro equipo de expertos desarrollamos software que
            redefinen la experiencia de nuestros clientes.
          </p>
          <ButtonComponent
            size="lg"
            variant="primary"
            className="px-8 py-3 md:px-10 md:py-3 text-base md:text-lg"
          >
            Quiero cotizar
          </ButtonComponent>
        </div>
      </div>
      <div className="hidden md:block absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div
          className="
            absolute
            top-1/2
            left-[78%]
            transform -translate-x-1/2 -translate-y-1/2
            rounded-full
            overflow-hidden
            shadow-2xl
            w-64 h-64
            md:w-80 md:h-80
          "
        >
          <Image
            src="/assets/images/team_image_hero_overlay.png"
            alt="Equipo de GreenTI trabajando juntos en la oficina"
            quality={85}
            priority
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        <StatCard
          value="75+"
          label="Proyectos"
          icon={<IconBriefcase color="white" />}
          bgColor="#15803d"
          className="top-[20%] left-[70%] lg:top-[25%] lg:left-[65%]"
        />
        <StatCard
          value="15+"
          label="Clientes"
          icon={<IconUsers color="white" />}
          bgColor="#0f766e"
          className="top-[35%] left-[90%] lg:top-[30%] lg:left-[88%]"
        />
        <StatCard
          value="48+"
          label="Apps"
          icon={<IconBrandAndroid color="white" />}
          bgColor="#F6A341"
          className="top-[75%] left-[65%] lg:top-[70%]"
        />
        <StatCard
          value="8K+"
          label="Descargas"
          icon={<IconDownload color="white" />}
          bgColor="#1d4ed8"
          className="top-[80%] left-[88%] lg:top-[65%] lg:left-[85%]"
        />
      </div>
    </section>
  );
};
