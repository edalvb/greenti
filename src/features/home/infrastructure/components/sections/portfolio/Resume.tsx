import { IconStarFilled } from "@tabler/icons-react";

export interface ResumeProps {
  resume_content?: string;
  length_team?: string | number;
  project_duration?: string | number;
  rating?: string | number;
  lenght_team?: string | number;
  raiting?: string | number;
}

export const Resume = ({
  resume_content = "",
  length_team,
  project_duration = "",
  rating,
  // typos legacy admitidos
  lenght_team,
  raiting,
}: ResumeProps): React.JSX.Element => {
  const teamSize = (length_team ?? lenght_team ?? "").toString();
  const ratingValue = (rating ?? raiting ?? "").toString();

  // Mantiene sólo propiedades necesarias (la fuente ya está global)
  const base: React.CSSProperties = {
    wordWrap: "break-word",
  };

  const stat = (v: React.ReactNode, label: string, sub?: React.ReactNode) => (
    <div className="text-center flex flex-col items-center" aria-label={label}>
      <div className="w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full border-2 border-neutral-light flex items-center justify-center">
        <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full border-2 border-neutral-light flex flex-col items-center justify-center">
          <div className="text-secondary font-bold text-4xl md:text-5xl lg:text-6xl leading-none">
            {v}
          </div>
          {sub && (
            <div className="text-secondary font-bold mt-1 text-sm md:text-base">
              {sub}
            </div>
          )}
        </div>
      </div>
      <div className="text-secondary font-bold mt-3 md:mt-4 text-base md:text-lg lg:text-2xl max-w-[10rem]">
        {label}
      </div>
    </div>
  );

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mb-16 md:mb-24 relative">
      <div>
        <h3 className="text-secondary font-bold text-3xl md:text-5xl lg:text-[56px] leading-tight">
          Resumen
        </h3>
        <p
          className="text-secondary mt-4 text-sm md:text-base font-medium max-w-[544px] text-justify"
          style={base}
        >
          {resume_content}
        </p>
      </div>

      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-8 md:gap-6 lg:gap-10 items-start">
        {stat(teamSize, "Tamaño del equipo")}
        {stat(project_duration, "Duración del proyecto", "meses")}
        {stat(
          ratingValue,
          "Calificación",
          <IconStarFilled size={24} className="text-amber-400" />,
        )}
      </div>
    </section>
  );
};
