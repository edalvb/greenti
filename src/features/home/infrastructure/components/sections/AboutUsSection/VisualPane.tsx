import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { InfoCard } from "@/components/ui/InfoCard";

interface VisualPaneProps {
  className?: string;
}

export const VisualPane: React.FC<VisualPaneProps> = ({ className = "" }) => {
  const t = useTranslations("AboutUsSection");

  const infoCard1Items = [
    {
      colorClass: "bg-pink-300",
      text: t("infoCardItem1_1"),
    },
    {
      colorClass: "bg-purple-300",
      text: t("infoCardItem1_2"),
    },
    {
      colorClass: "bg-teal-300",
      text: t("infoCardItem1_3"),
    },
  ];

  const infoCard2Items = [
    {
      colorClass: "bg-yellow-200",
      text: t("infoCardItem2_1"),
    },
  ];

  return (
    <div className={`relative w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] ${className}`}>
      <div
        className="absolute top-0 left-0 w-full h-[60%] md:h-[65%] lg:h-[70%] rounded-btn-cta overflow-hidden shadow-xl"
      >
        <Image
          src="/assets/images/about-us-meeting.jpg"
          alt="A team collaborating in a modern office meeting"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </div>
      <div
        className="absolute bottom-0 right-0 w-[80%] md:w-[70%] lg:w-[80%] h-[45%] md:h-[40%] lg:h-[50%] rounded-btn-cta overflow-hidden shadow-xl"
      >
        <Image
          src="/assets/images/about-us-developers.jpg"
          alt="Developers working late at night in an office"
          fill
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </div>
      <div
        className="absolute bottom-[10%] left-[5%] w-[40%] md:w-[35%] lg:w-[45%] h-[30%] md:h-[25%] lg:h-[35%] rounded-btn-cta overflow-hidden shadow-xl"
      >
        <Image
          src="/assets/images/about-us-individual.jpg"
          alt="A person working on a laptop"
          fill
          sizes="(max-width: 768px) 40vw, (max-width: 1200px) 20vw, 15vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </div>

      <InfoCard
        title={t("infoCardTitle1")}
        items={infoCard1Items}
        className="absolute top-[10%] right-[5%] md:right-[15%] lg:right-[-5%] w-[50%] md:w-[40%] lg:w-[30%] max-w-[280px] bg-neutral-lightest/95 backdrop-blur-sm"
      />
      <InfoCard
        title={t("infoCardTitle2")}
        items={infoCard2Items}
        className="absolute bottom-[15%] left-[5%] md:left-[10%] lg:left-[5%] w-[45%] md:w-[35%] lg:w-[25%] max-w-[250px] bg-neutral-lightest/95 backdrop-blur-sm"
      />
    </div>
  );
};
