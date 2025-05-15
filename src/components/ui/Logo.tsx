import React from "react";
import Link from "next/link";

interface LogoProps {
  width?: number | string;
  className?: string;
  href?: string;
  isScrolled?: boolean;
  imgWidth?: number;
  imgHeight?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  href = "/",
  isScrolled = false,
  imgWidth = 36,
  imgHeight = 36,
}) => {
  const textColorClass = isScrolled ? "text-white" : "text-primary";
  const secondaryTextColorClass = isScrolled ? "text-white" : "text-secondary";
  const logoSrc = isScrolled
    ? "/assets/images/logo_greenti_white.svg"
    : "/assets/images/logo_greenti.svg";

  const logoContent = (
    <span
      className={`inline-flex items-center text-2xl font-bold group ${className}`}
    >
      <img
        src={logoSrc}
        alt="GreenTI Logo"
        width={imgWidth}
        height={imgHeight}
        className={`mr-2 transition-all duration-300 group-hover:opacity-85 h-auto`}
      />
      <span className={`${textColorClass} transition-colors duration-300`}>GREEN</span>
      <span className={`${secondaryTextColorClass} font-light transition-colors duration-300`}>TI</span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};