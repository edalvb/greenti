"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslations, useLocale, Locale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { IconWorld, IconChevronDown } from "@tabler/icons-react";

export type LanguageDropdownProps = {
  onMobileMenuToggle?: (open: boolean) => void;
  navLinkClasses?: string;
  className?: string;
  variant?: "desktop" | "mobile";
};

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  onMobileMenuToggle,
  navLinkClasses = "",
  className = "",
  variant = "desktop",
}) => {
  const t = useTranslations("Navbar");
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const labelFor = (loc: string) =>
    loc === "en" ? "ENG" : loc === "es" ? "ESP" : String(loc).toUpperCase();

  const changeLanguage = (nextLocale: Locale) => {
    router.replace(pathname, { locale: nextLocale });
    onMobileMenuToggle?.(false);
    setOpen(false);
  };

  useEffect(() => {
    if (variant !== "desktop") return;
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [variant]);

  if (variant === "mobile") {
    return (
      <div className={`w-full ${className}`}>
        <button
          onClick={() => setOpen((v) => !v)}
          className={`w-full flex items-center justify-between text-secondary hover:text-primary px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-lightest/50 ${className}`}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span className="flex items-center">
            <IconWorld size={20} className="mr-1.5" />
            {labelFor(locale)}
          </span>
          <IconChevronDown
            size={18}
            className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div
            className="mt-1 ml-9 pr-3"
            role="listbox"
            aria-label={t("switchToLanguage")}
          >
            {routing.locales.map((loc) => (
              <button
                key={loc}
                onClick={() => changeLanguage(loc as Locale)}
                disabled={loc === locale}
                className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                  loc === locale
                    ? "text-primary font-semibold bg-neutral-lightest/60"
                    : "text-secondary hover:text-primary hover:bg-neutral-lightest/50"
                }`}
                role="option"
                aria-selected={loc === locale}
              >
                {labelFor(loc)}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop
  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${navLinkClasses} hover:text-primary`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <IconWorld size={20} className="mr-1.5" />
        {labelFor(locale)}
        <IconChevronDown
          size={16}
          className={`ml-1 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t("switchToLanguage")}
          className="absolute right-0 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50"
        >
          {routing.locales.map((loc) => (
            <button
              key={loc}
              role="option"
              aria-selected={loc === locale}
              onClick={() => changeLanguage(loc as Locale)}
              disabled={loc === locale}
              className={`block w-full text-left px-3 py-2 text-sm uppercase ${
                loc === locale
                  ? "text-primary font-semibold bg-neutral-lightest/60"
                  : "text-secondary hover:text-primary hover:bg-neutral-lightest/50"
              }`}
            >
              {labelFor(loc)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
