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
  /** Tema visual del componente */
  theme?: "dark" | "light" | "ligth"; // se acepta "ligth" por compatibilidad con la solicitud
  /** Tamaño del componente */
  size?: "small" | "medium" | "large";
};

export function RotatingStatCircle({
  primary,
  subtitle,
  rotatingText,
  animationDuration = 20,
  theme = "dark",
  size = "medium",
}: RotatingStatCircleProps) {
  const pathId = React.useId();

  // Normalización de tema para aceptar "ligth" y "light"
  const isLight = theme === "light" || theme === "ligth";

  // Estilos por tamaño
  const sizeClasses =
    size === "small"
      ? {
          container: "w-32 h-32",
          subtitle: "text-xs",
        }
      : size === "large"
      ? {
          container: "w-56 h-56",
          subtitle: "text-base",
        }
      : {
          container: "w-44 h-44",
          subtitle: "text-sm",
        };

  const bgClass = isLight ? "bg-white" : "bg-secondary";
  const textColorClass = isLight ? "text-gray-900" : "text-white";
  const rotatingFill = isLight ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)";

  return (
    <div
      className={`${sizeClasses.container} ${bgClass} rounded-full flex flex-col items-center justify-center ${textColorClass} relative overflow-hidden z-10`}
    >
      <div className="text-center z-10">
        <div className="mb-2">{primary}</div>
        <div className={`${sizeClasses.subtitle} ${textColorClass} font-medium leading-tight px-4`}>
          {subtitle}
        </div>
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
            <text fontSize="12" fill={rotatingFill} fontFamily="Poppins">
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
