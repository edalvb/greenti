"use client";

import React, { useState } from "react";
import { useTranslations, useLocale, Locale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { IconWorld } from "@tabler/icons-react";
import CustomDropdown, {
  DropdownItem as BaseItem,
  type CustomDropdownProps,
} from "./CustomDropdown";

export type DropdownItem = BaseItem;

export type LanguageDropdownProps = Omit<
  CustomDropdownProps,
  "items" | "onToggle"
> & {
  items?: BaseItem[];
  onMobileMenuToggle?: (open: boolean) => void;
};

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  onMobileMenuToggle,
  navLinkClasses = "",
  className = "",
  variant = "desktop",
  name,
  icon,
  items,
  ariaLabel,
}) => {
  const t = useTranslations("Navbar");
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const [_, setOpen] = useState(false);

  const labelFor = (loc: string) => String(loc).toUpperCase();

  const changeLanguage = (nextLocale: Locale) => {
    router.replace(pathname, { locale: nextLocale });
    onMobileMenuToggle?.(false);
    setOpen(false);
  };

  const effectiveItems: BaseItem[] =
    items && items.length > 0
      ? items.map((i) => ({ ...i }))
      : routing.locales.map((loc) => ({
          label: labelFor(loc),
          disabled: loc === locale,
          onClick: () => changeLanguage(loc as Locale),
        }));

  return (
    <CustomDropdown
      name={name ?? labelFor(locale)}
      icon={icon ?? <IconWorld size={20} className="mr-1.5" />}
      items={effectiveItems}
      className={className}
      navLinkClasses={navLinkClasses}
      variant={variant}
      ariaLabel={
        items && items.length > 0
          ? (ariaLabel ?? "Options")
          : t("switchToLanguage")
      }
      onToggle={(o) => {
        setOpen(o);
        if (!o) onMobileMenuToggle?.(false);
      }}
    />
  );
};

export default LanguageDropdown;
