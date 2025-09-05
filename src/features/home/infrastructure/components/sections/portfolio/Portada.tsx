import { Project } from "@/features/portfolio/domain/Project";
import Image from "next/image";

const countryFlagByName: Record<string, string> = {
  México: "/assets/icons/mexico.svg",
  Mexico: "/assets/icons/mexico.svg",
  Ecuador: "/assets/icons/ecuador.svg",
  Perú: "/assets/icons/peru.svg",
  Paraguay: "/assets/icons/paraguay.svg",
  USA: "/assets/icons/usa.svg",
};

export const Portada = (p: {
  project: Pick<
    Project,
    "image_logo" | "name" | "sector" | "pais" | "plataforma" | "images"
  >;
}) => {
  const props = p.project;

  const flag = countryFlagByName[props.pais] ?? undefined;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
      <div className="lg:col-span-1">
        <ClientBadge
          logo={props.image_logo}
          flagCountry={flag}
          nameClient={props.name}
        />
        <ClientInfo
          sector={props.sector}
          pais={props.pais}
          plataforma={props.plataforma}
        />
      </div>

      <div className="lg:col-span-2">
        <ImagePortada images={props.images} name={props.name} />
      </div>
    </section>
  );
};

const ClientBadge = (props: {
  logo: string;
  flagCountry: string;
  nameClient: string;
}) => {
  return (
    <div className="flex">
      {/* Aquí va el logo */}
      <div className="text-left justify-start flex items-center">
        <Image src={props.logo} alt="Logo" width={120} height={120} />
        <div className="ml-5">
          <Image
            src={props.flagCountry}
            alt="Portada"
            width={32}
            height={32}
            className="mb-3"
          />
          <span className="text-left text-secondary font-bold text-6xl">
            {props.nameClient}
          </span>
        </div>
      </div>
    </div>
  );
};

const ClientInfo = (props: {
  sector: string;
  pais: string;
  plataforma: string[];
}) => {
  return (
    <div
      className="rounded-2xl p-5 w-full max-w-xs mt-6"
      style={{ backgroundColor: "#F3F4F6" }}
    >
      <ul className="text-sm text-neutral-darker space-y-3">
        <li className="flex justify-between gap-4">
          <span className="font-medium text-neutral-dark">Sector</span>
          <span className="text-right">{props.sector}</span>
        </li>
        <li className="flex justify-between gap-4">
          <span className="font-medium text-neutral-dark">País</span>
          <span className="text-right">{props.pais}</span>
        </li>
        <li className="flex justify-between gap-4">
          <span className="font-medium text-neutral-dark">Plataforma</span>
          <span className="text-right">{props.plataforma.join(" / ")}</span>
        </li>
      </ul>
    </div>
  );
};

const ImagePortada = (props: { images: string[]; name: string }) => {
  return (
    <Image
      src={props.images?.[0] ?? "/assets/images/easydrop.webp"}
      alt={`${props.name} hero`}
      width={1000}
      height={800}
      className="w-full h-auto object-cover"
    />
  );
};
