"use client";

import React, { useState, useEffect } from "react";
import { useTranslations, useLocale, Locale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import {
  IconMenu2,
  IconX,
  IconChevronDown,
  IconWorld,
  IconMail,
} from "@tabler/icons-react";
import { routing } from "@/i18n/routing";
import { ButtonCta } from "@/components/ui/ButtonCta";

interface NavItem {
  labelKey: "services" | "portfolio" | "aboutUs";
  href: string;
  hasDropdown?: boolean;
}

export const Navbar: React.FC = () => {
  const t = useTranslations("Navbar");
  const tGlobal = useTranslations("Global");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = [
    { labelKey: "services", href: "#nuestros-servicios", hasDropdown: false },
    { labelKey: "portfolio", href: "#testimonials", hasDropdown: false },
    { labelKey: "aboutUs", href: "#presence", hasDropdown: false },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses = isScrolled ? "text-white " : "text-secondary";

  const contactButtonVariant = isScrolled ? "outline" : "primary";
  const contactButtonExtraClasses = isScrolled
    ? "border-white text-white active:bg-white/90 active:text-primary hover:text-white/80"
    : "hover:text-primary/80";

  const mobileMenuIconColor = "bg-white text-secondary";

  const changeLanguage = (nextLocale: Locale) => {
    router.replace(pathname, { locale: nextLocale });
    setIsMobileMenuOpen(false);
  };

  const otherLocale =
    routing.locales.find((loc) => loc !== locale) || routing.defaultLocale;

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 px-responsive py-4 ${isScrolled ? "bg-primary shadow-lg" : "bg-presence-section"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo
              href="/"
              isScrolled={isScrolled}
              imgWidth={56}
              imgHeight={56}
            />
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 ml-6">
              {navItems.map((item) => (
                <Link key={item.labelKey} href={item.href}>
                  <span
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${navLinkClasses}`}
                  >
                    {t(item.labelKey)}
                    {item.hasDropdown && (
                      <IconChevronDown size={16} className="ml-1" />
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <span
              onClick={() => changeLanguage(otherLocale)}
              className={`cursor-pointer flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${navLinkClasses}`}
              aria-label={`Switch to ${t("switchToLanguage")}`}
            >
              <IconWorld size={20} className="mr-1.5" />
              {t("currentLanguage")}
            </span>
            <ButtonCta
              variant={contactButtonVariant}
              className={contactButtonExtraClasses}
            />
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${mobileMenuIconColor} hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-lightest focus-visible:ring-primary transition-colors duration-300`}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <IconX
                  size={24}
                  aria-hidden="true"
                  className="text-secondary"
                />
              ) : (
                <IconMenu2 size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-white shadow-lg rounded-b-lg absolute top-full left-0 right-0 mx-4 mt-1"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.labelKey}
                href={item.href}
                onClick={toggleMobileMenu}
              >
                <span className="block px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary hover:bg-neutral-lightest/50">
                  {t(item.labelKey)}
                  {item.hasDropdown && (
                    <IconChevronDown size={16} className="ml-1 inline" />
                  )}
                </span>
              </Link>
            ))}
            <button
              onClick={() => changeLanguage(otherLocale)}
              className="w-full flex items-center text-secondary hover:text-primary px-3 py-2 rounded-md text-base font-medium group hover:bg-neutral-lightest/50"
            >
              <IconWorld size={20} className="mr-1.5" />
              {t("currentLanguage")}
            </button>
          </div>
          <div className="pt-4 pb-3 border-t border-neutral-light px-5">
            <Link href="#contact" onClick={toggleMobileMenu} passHref>
              <Button
                variant="primary"
                size="md"
                radius="cta"
                className="w-full"
                icon={<IconMail size={18} />}
                iconPosition="right"
              >
                {tGlobal("contactUs")}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
