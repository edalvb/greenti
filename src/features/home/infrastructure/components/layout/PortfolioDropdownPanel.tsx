"use client";

import React from "react";
import Image from "next/image";

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

      {/* Right: stats mimic from Figma */}
      <div className="flex flex-col items-center justify-center px-2 md:px-4 w-full md:min-w-[220px] gap-6">
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-secondary leading-none">23+</div>
          <div className="text-xs text-secondary font-medium">Proyectos<br />realizados</div>
        </div>
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-secondary leading-none">5</div>
          <div className="text-xs text-secondary font-medium">Países<br />posicionados</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-secondary leading-none">4.9<span className="align-top text-xl">/</span>5</div>
          <div className="text-xs text-secondary font-medium">Satisfacción<br />del cliente</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDropdownPanel;
