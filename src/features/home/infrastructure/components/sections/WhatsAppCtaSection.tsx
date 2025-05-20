import React from "react";
import { useTranslations } from "next-intl";
import { CONTACT_INFO } from "@/core/utils/constants";
import { IconBrandWhatsapp, IconHandClick } from "@tabler/icons-react";
import { motion } from "framer-motion";

export const WhatsAppCtaSection: React.FC = () => {
  const t = useTranslations("WhatsAppCtaSection");
  const whatsappLink = `https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, "")}/?text=${encodeURIComponent(t("whatsappMessage"))}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block color-whatsapp-cta p-6 md:p-8 rounded-btn-cta hover:shadow-lg transition-all duration-200 group cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="flex justify-between items-center color-whatsapp-cta">
        <div className="max-w-[calc(100%-70px)]">
          <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">
            {t("title")}
          </h3>
          <p className="text-xs md:text-sm text-neutral-darker leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
        <div className="flex flex-col items-center ml-4 flex-shrink-0">
          <IconBrandWhatsapp
            size={48}
            className="text-whatsapp-icon mb-1 transition-transform duration-300 ease-out group-hover:scale-110"
          />
          <IconHandClick size={24} className="text-secondary opacity-50" />
        </div>
      </div>
    </motion.a>
  );
};
