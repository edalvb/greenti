"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { ButtonCta } from "@/components/ui/ButtonCta";
import LanguageDropdown from "@/components/ui/LanguageDropdown";
import CustomDropdown from "@/components/ui/CustomDropdown";
import PortfolioDropdownPanel from "./PortfolioDropdownPanel";

interface NavItem {
  labelKey: "services" | "portfolio" | "aboutUs" | "currentLanguage";
}

export const Navbar: React.FC = () => {
  const t = useTranslations("Navbar");
  const tGlobal = useTranslations("Global");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = [
    { labelKey: "services" },
    { labelKey: "portfolio" },
    { labelKey: "aboutUs" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses = "text-secondary";
  const contactButtonVariant = "primary";
  const contactButtonExtraClasses = "";
  const mobileMenuIconColor = "bg-white text-secondary";

  const navsItems = [
    ...navItems.map((item) => {
      if (item.labelKey === "portfolio") {
        return (
          <CustomDropdown
            key={item.labelKey}
            name={t(item.labelKey)}
            className={navLinkClasses}
            align="left"
            menuClassName="min-w-[680px]"
            ariaLabel={t("portfolio")}
          >
            <PortfolioDropdownPanel />
          </CustomDropdown>
        );
      }
      return (
        <CustomDropdown
          key={item.labelKey}
          name={t(item.labelKey)}
          className={navLinkClasses}
        />
      );
    }),
    <LanguageDropdown
      onMobileMenuToggle={(open) => setIsMobileMenuOpen(open)}
      navLinkClasses={navLinkClasses}
      variant="desktop"
    />,
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-500 ease-in-out ${isScrolled ? "bg-white shadow-lg py-2" : "bg-presence-section py-6"} px-responsive`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 ease-in-out ${isScrolled ? "h-14 px-4" : "h-20 bg-white rounded-[90px] px-8 shadow-lg"}`}
        >
          <div className="flex items-center">
            <Logo 
              href="/" 
              isScrolled={false} 
              imgWidth={isScrolled ? 40 : 56} 
              imgHeight={isScrolled ? 40 : 56}
              className="transition-all duration-500 ease-in-out"
            />
          </div>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navsItems.map((item) => item)}
            
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
              item.labelKey === "portfolio" ? (
                <CustomDropdown
                  key={item.labelKey}
                  name={t(item.labelKey)}
                  className={navLinkClasses}
                  variant="mobile"
                  ariaLabel={t("portfolio")}
                  onToggle={(o) => !o && setIsMobileMenuOpen(true)}
                >
                  <PortfolioDropdownPanel />
                </CustomDropdown>
              ) : (
                <CustomDropdown
                  key={item.labelKey}
                  name={t(item.labelKey)}
                  className={navLinkClasses}
                  variant="mobile"
                />
              )
            ))}
            <LanguageDropdown
              onMobileMenuToggle={(open) => setIsMobileMenuOpen(open)}
              variant="mobile"
            />
          </div>
          <div className="pt-4 pb-3 border-t border-neutral-light px-5">
            <Link href="#contact" onClick={toggleMobileMenu} passHref>
              <Button
                variant="primary"
                size="md"
                radius="cta"
                className="w-full"
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

// DropdownLang fue extraído a un componente reutilizable en '@/components/ui/LanguageDropdown'
