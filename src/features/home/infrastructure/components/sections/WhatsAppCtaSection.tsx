"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { CONTACT_INFO } from "@/core/utils/constants";
import { IconBrandWhatsapp, IconHandClick } from "@tabler/icons-react";

export const WhatsAppCtaSection: React.FC = () => {
  const t = useTranslations("WhatsAppCtaSection");
  const whatsappLink = `https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(t("whatsappMessage"))}`;

  return (
    <section id="whatsapp-cta" className="py-8 md:py-12 bg-neutral-lightest">
      <div className="bg-emerald-50 p-6 md:p-8 rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-secondary mb-3">
              {t("title")}
            </h3>
            <p className="text-sm text-neutral-darker mb-4 leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
          <div className="flex flex-col items-center ml-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 mt-4 md:mt-0 transition-transform duration-200 ease-in-out hover:scale-120 hover:animate-shake"
            >
              <IconBrandWhatsapp
                size={50}
                className="text-green-500 opacity-50 mb-1 transition-opacity duration-200 ease-in-out group-hover:opacity-100"
              />
            </a>
            <IconHandClick size={30} className="text-secondary opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};
