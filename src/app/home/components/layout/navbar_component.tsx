"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LogoComponent } from "@/core/components/ui/logo_component";
import { ButtonComponent } from "@/core/components/ui/button_component";
import { IconComponent } from "@/core/components/ui/icon_component";

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const XMarkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const GlobeAltIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0112 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 003 12c0 .778.099 1.533.284 2.253m0 0A11.971 11.971 0 0012 19.5c2.998 0 5.74-1.1 7.843-2.918m-15.686 0A8.959 8.959 0 0012 12c0-3.182-1.965-5.908-4.582-7.843"
    />
  </svg>
);

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

export const NavbarComponent: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Servicios", href: "#servicios", hasDropdown: true },
    { label: "Portafolio", href: "#portafolio", hasDropdown: true },
    { label: "Nosotros", href: "#nosotros" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent shadow-none"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <LogoComponent isScrolled={isScrolled} />
          </div>
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
              >
                <span
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isScrolled ? "text-neutral-darkest hover:text-primary" : "text-white hover:text-primary/80"}`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                  )}
                </span>
              </Link>
            ))}
            <button
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium group ${isScrolled ? "text-neutral-darkest hover:text-primary" : "text-white hover:text-primary/80"} transition-colors`}
            >
              <GlobeAltIcon className="w-5 h-5 mr-1" />
              ENG
              <ChevronDownIcon
                className={`w-4 h-4 ml-1 ${isScrolled ? "text-neutral-darkest" : "text-white"} group-hover:text-primary`}
              />
            </button>
          </div>
          <div className="hidden md:block">
            <ButtonComponent variant={isScrolled ? "primary" : "outline"} className={!isScrolled ? "border-white text-white hover:bg-white/10" : ""} size="md">
              <IconComponent size={16} className="mr-2">
                <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </IconComponent>
              Contáctanos
            </ButtonComponent>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className={`${isScrolled || isMobileMenuOpen ? "bg-white text-neutral-darkest" : "bg-transparent text-white"} inline-flex items-center justify-center p-2 rounded-md hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-lightest focus:ring-primary`}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={toggleMobileMenu}
              >
                <span className="block px-3 py-2 rounded-md text-base font-medium text-neutral-darkest hover:text-primary hover:bg-neutral-lightest/50">
                  {item.label}
                   {item.hasDropdown && (
                    <ChevronDownIcon className="w-4 h-4 ml-1 inline" />
                  )}
                </span>
              </Link>
            ))}
            <button className="w-full flex items-center text-neutral-darkest hover:text-primary px-3 py-2 rounded-md text-base font-medium group">
              <GlobeAltIcon className="w-5 h-5 mr-1" />
              ENG
              <ChevronDownIcon className="w-4 h-4 ml-1 text-neutral-darkest group-hover:text-primary" />
            </button>
          </div>
          <div className="pt-4 pb-3 border-t border-neutral-light px-5">
            <ButtonComponent variant="primary" size="md" className="w-full">
              <IconComponent size={16} className="mr-2">
                <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </IconComponent>
              Contáctanos
            </ButtonComponent>
          </div>
        </div>
      )}
    </nav>
  );
};
