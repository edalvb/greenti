import React from "react";
import Image, { ImageProps } from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { IconArrowRight } from "@tabler/icons-react";

export const AboutUsSection: React.FC = () => {
  const t = useTranslations("AboutUsSectionFigma");

  const statsCardData = {
    title: t("card1Title"),
    items: [
      { colorClass: "bg-decorative-red-light", text: t("card1Item1") },
      { colorClass: "bg-decorative-purple-light", text: t("card1Item2") },
      { colorClass: "bg-decorative-emerald-light", text: t("card1Item3") },
    ],
  };

  const highlightCardData = {
    title: t("card2Title"),
    item: {
      colorClass: "bg-decorative-orange-light",
      label: t("card2Item1Label"),
      description: t("card2Item1Description"),
    },
  };

  return (
    <section
      id="about-us"
      className="w-full bg-white overflow-hidden mx-auto py-16 md:py-24 lg:py-32 container px-4 px-responsive"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 xl:gap-20 items-center">
        {/* Columna de Imágenes y Tarjetas (Collage) */}
        <div className="lg:col-span-7 relative order-last lg:order-first mt-12 lg:mt-0">
          {/* Contenedor para el collage con altura definida para AP.
              Ajusta esta altura según sea necesario para diferentes breakpoints.
              Se podría usar aspect-ratio si se desea una proporción fija.
           */}
          <div className="relative w-full h-[500px] sm:h-[650px] md:h-[700px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
            {/* Las posiciones (left/top) y tamaños (width/height) ahora son relativas
                a este div padre. Ajustar los valores para que se parezcan al diseño original.
                Usar porcentajes puede ayudar a que escale, pero requerirá ajustes finos.
            */}
            <AboutUsImage
              className="w-[55%] sm:w-[45%] md:w-[384px] h-auto max-h-[70%] sm:max-h-[65%] md:max-h-[580px] left-[40%] sm:left-[50%] md:left-[calc(50%-64px)] lg:left-[calc(50%-100px)] xl:left-[calc(50%-48px)] top-0 absolute rounded-tr-[30px] rounded-br-[30px] md:rounded-tr-[60px] md:rounded-br-[60px]"
              src="/assets/images/about-us-meeting.jpg"
              altText={t("image1Alt")}
              width={394} // Proporción original
              height={580} // Proporción original
              priority
              sizes="(max-width: 640px) 55vw, (max-width: 768px) 45vw, 384px"
            />

            <StatsCard
              title={statsCardData.title}
              items={statsCardData.items}
              className="w-[60%] sm:w-[50%] md:w-[384px] h-auto left-[5%] sm:left-[10%] md:left-[calc(50%-336px)] lg:left-[calc(50%-380px)] xl:left-[calc(50%-320px)] top-[5%] md:top-[49px] absolute"
            />

            <HighlightCard
              title={highlightCardData.title}
              item={highlightCardData.item}
              className="w-[50%] sm:w-[40%] md:w-[320px] h-auto left-[8%] sm:left-[15%] md:left-[calc(50%-288px)] lg:left-[calc(50%-330px)] xl:left-[calc(50%-274px)] top-[50%] sm:top-[45%] md:top-[404px] absolute"
            />

            <AboutUsImage
              className="w-[40%] sm:w-[30%] md:w-[273px] h-auto max-h-[50%] sm:max-h-[45%] md:max-h-[410px] left-[55%] sm:left-[65%] md:left-[calc(50%+40px)] lg:left-[calc(50%-0px)] xl:left-[calc(50%+24px)] top-[60%] sm:top-[65%] md:top-[595px] absolute rounded-tr-[30px] rounded-br-[30px] md:rounded-tr-[60px] md:rounded-br-[60px]"
              src="/assets/images/about-us-individual.jpg"
              altText={t("image2Alt")}
              width={273}
              height={410}
              sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 273px"
            />
            <AboutUsImage
              className="w-[50%] sm:w-[40%] md:w-[398px] h-auto max-h-[30%] sm:max-h-[25%] md:max-h-[223px] left-[5%] sm:left-[8%] md:left-[calc(50%-336px)] lg:left-[calc(50%-380px)] xl:left-[calc(50%-348px)] top-[70%] sm:top-[75%] md:top-[550px] absolute rounded-bl-[30px] md:rounded-bl-[60px]"
              src="/assets/images/about-us-developers.jpg"
              altText={t("image3Alt")}
              width={398}
              height={223}
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 40vw, 398px"
            />
          </div>
        </div>

        {/* Columna de Texto Principal */}
        <div className="lg:col-span-5 order-first lg:order-last text-center lg:text-left">
          <MainTextContent
            titlePart1={t("mainTitlePart1")}
            titlePart2={t("mainTitlePart2")}
            description={t("mainDescription")}
            ctaLinkText={t("ctaLinkText")}
            ctaHref="#contact"
          />
        </div>
      </div>
    </section>
  );
};

interface AboutUsImageProps extends Omit<ImageProps, "alt"> {
  className: string;
  altText: string;
}

export const AboutUsImage: React.FC<AboutUsImageProps> = ({
  src,
  altText,
  width,
  height,
  className,
  priority,
  sizes, // Añadido para optimización de Next/Image
  ...rest
}) => {
  return (
    <Image
      src={src}
      alt={altText}
      width={width} // Sigue siendo importante para la relación de aspecto
      height={height} // Sigue siendo importante para la relación de aspecto
      className={`${className} object-cover`}
      priority={priority}
      sizes={sizes} // Añadido para optimización de Next/Image
      {...rest}
    />
  );
};

interface InfoCardItemProps {
  colorClass: string;
  text: string;
}

export const InfoCardItem: React.FC<InfoCardItemProps> = ({
  colorClass,
  text,
}) => (
  <li className="flex items-center">
    <div
      className={`w-7 h-7 sm:w-9 sm:h-9 ${colorClass} rounded-md sm:rounded-lg mr-3 sm:mr-4 shrink-0`}
    ></div>
    <p className="text-secondary text-sm sm:text-base font-medium">{text}</p>
  </li>
);

interface HighlightCardItemProps {
  colorClass: string;
  label: string;
  description: string;
}

export const HighlightCardItem: React.FC<HighlightCardItemProps> = ({
  colorClass,
  label,
  description,
}) => (
  <div className="flex items-start">
    <div
      className={`w-7 h-7 sm:w-9 sm:h-9 ${colorClass} rounded-md sm:rounded-lg mr-3 sm:mr-4 shrink-0`}
    ></div>
    <div>
      <p className="text-secondary text-sm sm:text-base font-semibold">
        {label}
      </p>
      <p className="text-neutral-darker text-xs sm:text-sm font-normal">
        {description}
      </p>
    </div>
  </div>
);

interface StatsCardProps {
  title: string;
  items: { colorClass: string; text: string }[];
  className?: string; // Hacer opcional y combinarlo
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  items,
  className = "", // Valor por defecto
}) => (
  <div
    className={`bg-white rounded-xl md:rounded-[20px] shadow-figma-card overflow-hidden p-3 sm:p-4 ${className}`}
  >
    <h3 className="text-left text-secondary text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
      {title}
    </h3>
    <ul className="space-y-2 sm:space-y-2.5">
      {items.map((item, index) => (
        <InfoCardItem
          key={index}
          colorClass={item.colorClass}
          text={item.text}
        />
      ))}
    </ul>
  </div>
);

interface HighlightCardProps {
  title: string;
  item: { colorClass: string; label: string; description: string };
  className?: string; // Hacer opcional y combinarlo
}

export const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  item,
  className = "", // Valor por defecto
}) => (
  <div
    className={`bg-white rounded-xl md:rounded-[20px] shadow-figma-card overflow-hidden p-3 sm:p-3.5 ${className}`}
  >
    <h3 className="text-left text-secondary text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-2.5">
      {title}
    </h3>
    <HighlightCardItem
      colorClass={item.colorClass}
      label={item.label}
      description={item.description}
    />
  </div>
);

interface MainTextContentProps {
  titlePart1: string;
  titlePart2: string;
  description: string;
  ctaLinkText: string;
  ctaHref: string;
}

// Este componente ahora es un contenedor de bloque
export const MainTextContent: React.FC<MainTextContentProps> = ({
  titlePart1,
  titlePart2,
  description,
  ctaLinkText,
  ctaHref,
}) => (
  <div className="flex flex-col space-y-6 md:space-y-8 items-center lg:items-start">
    <h2 className="text-left">
      {" "}
      {/* Mantener text-left por si el contenedor padre es text-center */}
      <span className="text-secondary text-4xl sm:text-5xl lg:text-6xl font-bold block md:inline">
        {titlePart1}{" "}
      </span>
      <span className="text-primary text-4xl sm:text-5xl lg:text-6xl font-bold block md:inline">
        {titlePart2}
      </span>
    </h2>
    <p className="max-w-lg text-secondary text-base font-medium leading-relaxed">
      {description}
    </p>
    <Link
      href={ctaHref}
      className="text-secondary text-base font-bold underline hover:text-primary transition-colors duration-200 inline-flex items-center group"
    >
      {ctaLinkText}
      <IconArrowRight
        size={20}
        className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  </div>
);
