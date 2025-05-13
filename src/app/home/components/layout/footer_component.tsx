import React from "react";
import Link from "next/link";
import { LogoComponent } from "@/core/components/ui/logo_component";
import { IconComponent } from "@/core/components/ui/icon_component";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/core/utils/constants";
import Image from "next/image";

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <Link
    href={href}
    className="text-sm text-neutral-light hover:text-primary transition-colors"
    legacyBehavior>
    <a>{children}</a>
  </Link>
);

const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
    />
  </svg>
);

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

const LocationPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);

const socialIcons = [
  {
    href: SOCIAL_LINKS.linkedin,
    icon: (
      <IconComponent
        size={20}
        className="text-neutral-light hover:text-primary transition-colors"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </IconComponent>
    ),
  },
  {
    href: SOCIAL_LINKS.facebook,
    icon: (
      <IconComponent
        size={20}
        className="text-neutral-light hover:text-primary transition-colors"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </IconComponent>
    ),
  },
  {
    href: SOCIAL_LINKS.instagram,
    icon: (
      <IconComponent
        size={20}
        className="text-neutral-light hover:text-primary transition-colors"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </IconComponent>
    ),
  },
];

const clutchBadges = [
  {
    src: "/assets/images/clutch_badge_1.svg",
    alt: "Clutch Global Spring 2024",
  },
  { src: "/assets/images/clutch_badge_2.svg", alt: "Clutch Global Fall 2023" },
  { src: "/assets/images/clutch_badge_3.svg", alt: "Clutch 1000 Fall 2023" },
];

export const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-secondary text-neutral-light pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2 lg:col-span-1">
            <LogoComponent className="text-primary mb-4" width={100} />
          </div>

          <div>
            <h3 className="text-md font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="#desarrollo">
                  Desarrollo de software
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#diseno-ux-ui">Diseño UX/UI</FooterLink>
              </li>
              <li>
                <FooterLink href="#staffing">Staffing/Outsourcing</FooterLink>
              </li>
              <li>
                <FooterLink href="#cursos">Cursos en línea</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-white mb-4">
              Portafolio
            </h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="#financiero">Financiero</FooterLink>
              </li>
              <li>
                <FooterLink href="#retail">Retail</FooterLink>
              </li>
              <li>
                <FooterLink href="#servicio">Servicio</FooterLink>
              </li>
              <li>
                <FooterLink href="#industria">Industria</FooterLink>
              </li>
              <li>
                <FooterLink href="#educacion">Educación</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-white mb-4">Oficina</h3>
            <div className="flex items-start text-sm text-neutral-light">
              <LocationPinIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-neutral-light">
                <PhoneIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s|\(|\)/g, "")}`}
                  className="hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center text-sm text-neutral-light">
                <MailIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-darker/30 pt-8 mb-8 flex flex-col md:flex-row justify-center items-center gap-6">
          {clutchBadges.map((badge, index) => (
            <Image
              key={index}
              src={badge.src}
              alt={badge.alt}
              width={100}
              height={50}
              className="h-20 md:h-24 opacity-80"
            />
          ))}
        </div>

        <div className="border-t border-neutral-darker/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-light order-2 md:order-1 mt-4 md:mt-0">
            Greenti © {new Date().getFullYear()} Todos los derechos son
            reservados
          </p>
          <div className="flex items-center space-x-4 order-1 md:order-2">
            <span className="text-sm text-neutral-light">Síguenos en</span>
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
