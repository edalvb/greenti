import React from "react";
import Link from "next/link";

interface LogoComponentProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  href?: string;
  isScrolled?: boolean;
}

export const LogoComponent: React.FC<LogoComponentProps> = ({
  width = 40,
  height = "auto",
  className = "",
  href = "/",
  isScrolled = false,
}) => {
  const baseGreenColor = isScrolled ? "text-white" : "text-primary";
  const logo = isScrolled
    ? "/assets/images/logo_greenti_white.svg"
    : "/assets/images/logo_greenti.svg";

  const logoContent = (
    <span
      className={`inline-flex items-center font-bold text-3xl ${className}`}
      style={{ width, height }}
    >
      <img
        src={logo}
        alt="GreenTI logo"
        width={width}
        height={height}
        className={"mr-2 h-full w-auto" + baseGreenColor}
      />
      <span className={baseGreenColor}>GREEN</span>
      <span className={`${baseGreenColor} font-thin`}>TI</span>
    </span>
  );

  if (href) {
    return (
      <Link href={href}>
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};
