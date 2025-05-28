"use client";

import React from "react";
import Image, { ImageProps } from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { IconArrowRight } from "@tabler/icons-react";

import { motion, Variants } from "framer-motion";

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className,
  delay = 0,
  direction = "up",
}) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

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
        <div className="lg:col-span-7 relative order-last lg:order-first mt-12 lg:mt-0">
          <div className="relative w-full h-[500px] sm:h-[650px] md:h-[700px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
            <AnimatedElement
              delay={0.2}
              className="w-[55%] sm:w-[45%] md:w-[384px] h-auto max-h-[70%] sm:max-h-[65%] md:max-h-[580px] left-[40%] sm:left-[50%] md:left-[calc(50%-64px)] lg:left-[calc(50%-100px)] xl:left-[calc(50%-48px)] top-0 absolute"
            >
              <AboutUsImage
                className="rounded-tr-[30px] rounded-br-[30px] md:rounded-tr-[60px] md:rounded-br-[60px] w-full h-full"
                src="/assets/images/about-us-meeting.jpg"
                altText={t("image1Alt")}
                width={394}
                height={580}
                priority
                sizes="(max-width: 640px) 55vw, (max-width: 768px) 45vw, 384px"
              />
            </AnimatedElement>

            <AnimatedElement
              delay={0.4}
              direction="left"
              className="w-[60%] sm:w-[50%] md:w-[384px] h-auto left-[5%] sm:left-[10%] md:left-[calc(50%-336px)] lg:left-[calc(50%-380px)] xl:left-[calc(50%-320px)] top-[5%] md:top-[49px] absolute"
            >
              <StatsCard
                title={statsCardData.title}
                items={statsCardData.items}
              />
            </AnimatedElement>

            <AnimatedElement
              delay={0.5}
              direction="left"
              className="w-[50%] sm:w-[40%] md:w-[320px] h-auto left-[8%] sm:left-[15%] md:left-[calc(50%-288px)] lg:left-[calc(50%-330px)] xl:left-[calc(50%-274px)] top-[50%] sm:top-[45%] md:top-[404px] absolute"
            >
              <HighlightCard
                title={highlightCardData.title}
                item={highlightCardData.item}
              />
            </AnimatedElement>

            <AnimatedElement
              delay={0.6}
              className="w-[40%] sm:w-[30%] md:w-[273px] h-auto max-h-[50%] sm:max-h-[45%] md:max-h-[410px] left-[55%] sm:left-[65%] md:left-[calc(50%+40px)] lg:left-[calc(50%-0px)] xl:left-[calc(50%+24px)] top-[60%] sm:top-[65%] md:top-[595px] absolute"
            >
              <AboutUsImage
                className="rounded-tr-[30px] rounded-br-[30px] md:rounded-tr-[60px] md:rounded-br-[60px] w-full h-full"
                src="/assets/images/about-us-individual.jpg"
                altText={t("image2Alt")}
                width={273}
                height={410}
                sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 273px"
              />
            </AnimatedElement>

            <AnimatedElement
              delay={0.7}
              direction="up"
              className="w-[50%] sm:w-[40%] md:w-[398px] h-auto max-h-[30%] sm:max-h-[25%] md:max-h-[223px] left-[5%] sm:left-[8%] md:left-[calc(50%-336px)] lg:left-[calc(50%-380px)] xl:left-[calc(50%-348px)] top-[70%] sm:top-[75%] md:top-[550px] absolute"
            >
              <AboutUsImage
                className="rounded-bl-[30px] md:rounded-bl-[60px] w-full h-full"
                src="/assets/images/about-us-developers.jpg"
                altText={t("image3Alt")}
                width={398}
                height={223}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 40vw, 398px"
              />
            </AnimatedElement>
          </div>
        </div>

        <div className="lg:col-span-5 order-first lg:order-last text-center lg:text-left">
          <AnimatedElement delay={0.1} direction="down">
            <MainTextContent
              titlePart1={t("mainTitlePart1")}
              titlePart2={t("mainTitlePart2")}
              description={t("mainDescription")}
              ctaLinkText={t("ctaLinkText")}
              ctaHref="#contact"
            />
          </AnimatedElement>
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
  sizes,
  ...rest
}) => {
  return (
    <Image
      src={src}
      alt={altText}
      width={width}
      height={height}
      className={`${className} object-cover`}
      priority={priority}
      sizes={sizes}
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
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  items,
  className = "",
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
  className?: string;
}

export const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  item,
  className = "",
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
