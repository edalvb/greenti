"use client";

import React from "react";
import Image from "next/image";
import RotatingStatCircle from "@/components/ui/RotatingStatCircle";

type Item = {
  name: string;
  iconSrc: string;
  bgClass?: string; // custom background around the icon container
};

export type PortfolioDropdownPanelProps = {
  projects?: Item[];
};

const defaultProjects: Item[] = [
  { name: "Beblis", iconSrc: "/assets/images/client_logo_easydrop.svg", bgClass: "bg-[#A02A4A]" },
  { name: "Britcam landscape", iconSrc: "/assets/images/client_logo_omarsa.svg", bgClass: "bg-[#E8E2D5]" },
  { name: "Coosofan cooperativa", iconSrc: "/assets/images/client_logo_coosofan.svg", bgClass: "bg-[#00964B]" },
  { name: "Easydrop", iconSrc: "/assets/images/client_logo_easydrop.svg" },
  { name: "Laesystem", iconSrc: "/assets/images/client_logo_avesa.svg", bgClass: "bg-[#E7F0EF]" },
  { name: "Favesa", iconSrc: "/assets/images/client_logo_avesa.svg", bgClass: "bg-gradient-to-b from-[#EE1858] to-[#FF0000]" },
];

export const PortfolioDropdownPanel: React.FC<PortfolioDropdownPanelProps> = ({ projects = defaultProjects }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-6 rounded-2xl bg-white shadow-[0_10px_60px_rgba(0,33,64,0.15)] w-full md:min-w-[640px]">
      {/* Left: list */}
      <div className="w-full md:w-[320px]">
        <ul className="space-y-5">
          {projects.map((p, idx) => (
            <li key={`${p.name}-${idx}`}>
              <button className="flex items-center gap-4 w-full text-left">
                <span className={`w-[50px] h-[50px] rounded-[10px] overflow-hidden flex items-center justify-center ${p.bgClass ?? ""} bg-white ring-1 ring-black/5`}>
                  <Image src={p.iconSrc} alt="" width={36} height={36} className="object-contain" />
                </span>
                <span className="text-secondary text-sm md:text-base font-medium">{p.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px bg-neutral-200" />
      <div className="md:hidden h-px w-full bg-neutral-200" />

      {/* Right: rotating stat circles */}
      <div className="flex flex-col items-center justify-center px-2 md:px-4 w-full md:min-w-[220px] gap-8">
        <RotatingStatCircle
          primary={<span className="text-3xl font-bold text-secondary">23+</span>}
          subtitle={<span>Proyectos<br />realizados</span>}
          rotatingText="Proyectos ejecutados satisfactoriamente"
          animationDuration={22}
          size="small"
          theme="light"
        />

        <RotatingStatCircle
          primary={<span className="text-3xl font-bold text-secondary">5</span>}
          subtitle={<span>Países<br />posicionados</span>}
          rotatingText="Nuestra presencia internacional"
          animationDuration={20}
          size="small"
          theme="light"
        />

        <RotatingStatCircle
          primary={<span className="text-2xl font-bold text-secondary">4.9<span className="text-3xl align-top">/</span>5</span>}
          subtitle={<span>Satisfacción<br />del cliente</span>}
          rotatingText="Satisfacción de nuestros servicios"
          animationDuration={24}
          size="small"
          theme="light"
        />
      </div>
    </div>
  );
};

export default PortfolioDropdownPanel;
