import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";

export const HeroSection: React.FC = () => {
  const t = useTranslations("HeroSection");
  const tGlobal = useTranslations("Global");

  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-presence-section">
      <section
        id="hero"
        className="relative pb-[70px] md:pt-40 lg:min-h-[calc(100vh-80px)] flex items-center overflow-hidden w-full justify-center"
      >
        <div className="container z-10">
          <div className="max-w-4xl text-center mx-auto">
            <h1 className="text-4xl sm:text-7xl font-extrabold text-secondary mb-6 leading-tight">
              {t("titlePart1")} {t("titlePart2")} {" "}
              <span className="text-primary">{t("titlePart3")}</span>
            </h1>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl md:text-xl mb-10 block">{t("subtitle")}</p>
            </div>
            <Link href="/contacto" passHref>
              <Button size="lg" className="text-white">
                {tGlobal("getAQuote")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
