"use client";

import React from "react";
import Image from "next/image";
import RotatingStatCircle from "@/components/ui/RotatingStatCircle";
import { Button } from "@/components/ui/Button";

export type Item = {
  name: string;
  iconSrc: string;
  bgClass?: string;
  onClick?: () => void;
};

export type PortfolioDropdownPanelProps = {
  projects?: Item[];
};

export const PortfolioDropdownPanel: React.FC<PortfolioDropdownPanelProps> = ({
  projects = [],
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-6 rounded-2xl bg-white shadow-[0_10px_60px_rgba(0,33,64,0.15)]">
      {/* Left: list */}
      <div className="w-full col-span-6 md:col-span-4 lg:col-span-3">
        <ul className="space-y-5">
          {projects.map((p, idx) => (
            <li key={`${p.name}-${idx}`}>
              <Button
                className="flex gap-4 w-full justify-start text-left bg-transparent hover:bg-white"
                variant="ghost"
                onClick={p.onClick}
              >
                <span
                  className={`w-[50px] h-[50px] rounded-[10px] overflow-hidden flex items-center justify-center ${p.bgClass ?? ""} bg-white ring-1 ring-black/5`}
                >
                  <Image
                    src={p.iconSrc}
                    alt=""
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </span>
                <span className="text-secondary text-sm md:text-base font-medium">
                  {p.name}
                </span>
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: rotating stat circles */}
      <div className="flex flex-col col-span-6 items-center justify-center px-2 md:px-4 w-full gap-8">
        <RotatingStatCircle
          primary={
            <span className="text-3xl font-bold text-secondary">23+</span>
          }
          subtitle={
            <span>
              Proyectos
              <br />
              realizados
            </span>
          }
          rotatingText="Proyectos ejecutados satisfactoriamente"
          animationDuration={22}
          size="small"
          theme="light"
        />

        <RotatingStatCircle
          primary={<span className="text-3xl font-bold text-secondary">5</span>}
          subtitle={
            <span>
              Países
              <br />
              posicionados
            </span>
          }
          rotatingText="Nuestra presencia internacional"
          animationDuration={20}
          size="small"
          theme="light"
        />

        <RotatingStatCircle
          primary={
            <span className="text-2xl font-bold text-secondary">
              4.9<span className="text-3xl align-top">/</span>5
            </span>
          }
          subtitle={
            <span>
              Satisfacción
              <br />
              del cliente
            </span>
          }
          rotatingText="Satisfacción de nuestros servicios"
          animationDuration={24}
          size="small"
          theme="light"
        />
      </div>
    </div>
  );
};
