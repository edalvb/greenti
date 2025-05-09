import React from "react";
import Image from "next/image";
import { ButtonComponent } from "@/core/components/ui/button_component";

interface StatCardProps {
  value: string;
  label: string;
  bgColor: string;
  className?: string;
  sizeClasses?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  bgColor,
  className,
  sizeClasses = "w-32 h-32 md:w-36 md:h-36",
}) => (
  <div
    className={`absolute flex flex-col items-center justify-center text-white rounded-full shadow-xl transform -translate-x-1/2 -translate-y-1/2 ${sizeClasses} ${className}`}
    style={{ backgroundColor: bgColor }}
  >
    <span className="text-2xl md:text-3xl font-bold">{value}</span>
    <span className="text-xs md:text-sm">{label}</span>
  </div>
);

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
            <span className="block text-primary">potenciar tu negocio</span>
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
            left-[75%]
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
          bgColor="#15803d"
          className="top-[20%] left-[70%] lg:top-[25%] lg:left-[65%]"
          sizeClasses="w-28 h-28 lg:w-36 lg:h-36"
        />
        <StatCard
          value="15+"
          label="Clientes"
          bgColor="#0f766e"
          className="top-[35%] left-[90%] lg:top-[30%] lg:left-[88%]"
          sizeClasses="w-24 h-24 lg:w-32 lg:h-32"
        />
        <StatCard
          value="48+"
          label="Apps"
          bgColor="#ea580c"
          className="top-[75%] left-[65%] lg:top-[70%] lg:left-[60%]"
          sizeClasses="w-28 h-28 lg:w-36 lg:h-36"
        />
        <StatCard
          value="8K+"
          label="Descargas"
          bgColor="#1d4ed8"
          className="top-[80%] left-[88%] lg:top-[65%] lg:left-[85%]"
          sizeClasses="w-24 h-24 lg:w-32 lg:h-32"
        />
      </div>
    </section>
  );
};
