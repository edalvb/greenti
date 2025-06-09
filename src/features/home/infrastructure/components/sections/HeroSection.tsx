import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { StatCard } from "@/components/ui/StatCard";
import {
  IconBriefcase,
  IconUsersGroup,
  IconDeviceMobileCode,
  IconCloudDownload,
} from "@tabler/icons-react";

export const HeroSection: React.FC = () => {
  const t = useTranslations("HeroSection");
  const tGlobal = useTranslations("Global");

  const statItems = [
    {
      value: "75+",
      labelKey: "stats.projects",
      icon: <IconBriefcase size={20} className="text-white" />,
      bgColor: "bg-stat-green-dark",
      position:
        "top-[15%] left-[58%] md:top-[20%] md:left-[50%] lg:top-[25%] lg:left-50%]",
    },
    {
      value: "15+",
      labelKey: "stats.clients",
      icon: <IconUsersGroup size={20} className="text-white" />,
      bgColor: "bg-stat-teal",
      position:
        "top-[30%] left-[75%] md:top-[35%] md:left-[75%] lg:top-[30%] lg:left-80%]",
    },
    {
      value: "48+",
      labelKey: "stats.apps",
      icon: <IconDeviceMobileCode size={20} className="text-white" />,
      bgColor: "bg-stat-orange",
      position:
        "top-[70%] left-[60%] md:top-[75%] md:left-[40%] lg:top-[70%] lg:left-[50%]",
    },
    {
      value: "8K+",
      labelKey: "stats.downloads",
      icon: <IconCloudDownload size={20} className="text-white" />,
      bgColor: "bg-stat-blue",
      position:
        "top-[85%] left-[85%] md:top-[80%] md:left-[60%] lg:top-[65%] lg:left-[75%]",
    },
  ];

  return (
    <section
      id="hero"
      className="relative bg-presence-section pt-32 pb-[70px] md:pt-40 lg:min-h-[calc(100vh-80px)] flex items-center overflow-hidden px-responsive"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-secondary mb-6 leading-tight">
            {t("titlePart1")}
            <span className="block">{t("titlePart2")}</span>
            <span className="block text-primary">{t("titlePart3")}</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 block">{t("subtitle")}</p>
          <Link href="#contact" passHref>
            <Button size="lg" className="text-white">
              {tGlobal("getAQuote")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div
          className="
            absolute 
            top-1/2 
            left-[calc(50%+250px)] 
            transform -translate-x-1/2 -translate-y-1/2 
            w-[380px] h-[380px] 
            xl:w-[450px] xl:h-[450px] 
            rounded-full 
            overflow-hidden 
            shadow-2xl 
          "
        >
          <Image
            src="/assets/images/team_image_hero_overlay.png"
            alt="GreenTI team working collaboratively"
            quality={90}
            priority
            fill
            sizes="(max-width: 1200px) 380px, 450px"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        {statItems.map((item) => (
          <StatCard
            key={item.labelKey}
            value={item.value}
            label={t(item.labelKey as any)}
            icon={item.icon}
            bgColor={item.bgColor}
            className={item.position}
            radius="cta"
          />
        ))}
      </div>
    </section>
  );
};
