import React from "react";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CallToActionLink } from "@/components/ui/CallToActionLink";

interface ContentPaneProps {
  className?: string;
}

export const ContentPane: React.FC<ContentPaneProps> = ({ className = "" }) => {
  const t = useTranslations("AboutUsSection");

  return (
    <div className={`flex flex-col justify-center items-start lg:ml-12 ${className}`}>
      <SectionTitle
        mainText={t("titlePart1")}
        highlightText={t("titlePart2")}
        mainTextColorClass="text-secondary"
        highlightTextColorClass="text-primary"
        className="mb-6"
      />
      <p className="text-lg text-neutral-darker leading-relaxed mb-8">
        {t("description")}
      </p>
      <CallToActionLink
        href="#contact"
        text={t("discoverMore")}
        className="mt-4"
      />
    </div>
  );
};
