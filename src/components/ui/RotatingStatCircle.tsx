import React from "react";

export type RotatingStatCircleProps = {
  /** Contenido principal: número, texto o cualquier ReactNode (e.g., 4.9/5 con estilos) */
  primary: React.ReactNode;
  /** Subtítulo o texto secundario debajo del contenido principal */
  subtitle: React.ReactNode;
  /** Texto que gira alrededor del círculo */
  rotatingText: string;
  /** Duración de la animación de giro en segundos (por defecto 20s) */
  animationDuration?: number;
};

export function RotatingStatCircle({
  primary,
  subtitle,
  rotatingText,
  animationDuration = 20,
}: RotatingStatCircleProps) {
  const pathId = React.useId();

  return (
    <div className="w-44 h-44 bg-secondary rounded-full flex flex-col items-center justify-center text-white relative overflow-hidden z-10">
      <div className="text-center z-10">
        <div className="mb-2">{primary}</div>
        <div className="text-sm text-white font-medium leading-tight px-4">{subtitle}</div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full animate-spin"
          style={{ animationDuration: `${animationDuration}s` }}
        >
          <svg className="w-full h-full" viewBox="0 0 176 176" aria-hidden>
            <defs>
              <path
                id={pathId}
                d="M 88, 88 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
              />
            </defs>
            <text fontSize="12" fill="rgba(255,255,255,0.4)" fontFamily="Poppins">
              <textPath href={`#${pathId}`} startOffset="0%">
                {rotatingText} • {rotatingText} •
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default RotatingStatCircle;
