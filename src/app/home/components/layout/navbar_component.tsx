"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LogoComponent } from "@/core/components/ui/logo_component";
import { ButtonComponent } from "@/core/components/ui/button_component";
import { IconComponent } from "@/core/components/ui/icon_component";
import { IconInbox, IconLanguage, IconMenu, IconMessage } from "@tabler/icons-react";
import { Global, Sms } from 'iconsax-reactjs';

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

  const basePimaryColor = isScrolled
    ? "text-white hover:text-primary"
    : "text-primary hover:text-primary/80";

  const baseSecondaryColor = isScrolled
    ? "text-white hover:text-secondary"
    : "text-secondary hover:text-secondary/80";

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <LogoComponent isScrolled={isScrolled} />
          </div>
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <span
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${baseSecondaryColor}`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                  )}
                </span>
              </Link>
            ))}
            <button
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium group ${baseSecondaryColor} transition-colors`}
            >
              <Global className="w-5 h-5 mr-2" />
              ENG
              <ChevronDownIcon
                className={`w-4 h-4 ml-1 ${
                  isScrolled ? "text-neutral-darkest" : baseSecondaryColor
                } group-hover:text-primary`}
              />
            </button>
          </div>
          <div className="hidden md:block">
            <ButtonComponent
              variant={isScrolled ? "outline" : "primary"}
              className={
                isScrolled ? "border-white text-white hover:bg-primary" : ""
              }
              size="md"
            >
              Contáctanos
              <Sms className="w-5 h-5 ml-2"/>
            </ButtonComponent>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className={`${
                isScrolled || isMobileMenuOpen
                  ? "bg-white text-neutral-darkest"
                  : "bg-transparent text-white"
              } inline-flex items-center justify-center p-2 rounded-md hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-lightest focus:ring-primary`}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <IconMenu className="block h-6 w-6" aria-hidden="true" />
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
              <Global className="w-5 h-5 mr-2" />
              ENG
              <ChevronDownIcon className="w-4 h-4 ml-1 text-neutral-darkest group-hover:text-primary" />
            </button>
          </div>
          <div className="pt-4 pb-3 border-t border-neutral-light px-5">
            <ButtonComponent variant="primary" size="md" className="w-full">
              Contáctanos
              <Sms className="w-5 h-5 ml-2" />
            </ButtonComponent>
          </div>
        </div>
      )}
    </nav>
  );
};
