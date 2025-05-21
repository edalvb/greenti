import React from "react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

interface CallToActionLinkProps {
  href: string;
  text: string;
  className?: string;
  textClassName?: string;
  iconClassName?: string;
}

export const CallToActionLink: React.FC<CallToActionLinkProps> = ({
  href,
  text,
  className = "",
  textClassName = "text-primary",
  iconClassName = "text-primary",
}) => {
  return (
    <Link
      href={href}
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md ${className}`}
    >
      <span
        className={`text-base font-semibold transition-colors duration-200 group-hover:text-accent-dark ${textClassName}`}
      >
        {text}
      </span>
      <IconArrowRight
        size={20}
        className={`ml-2 transform transition-transform duration-200 group-hover:translate-x-1 ${iconClassName}`}
      />
    </Link>
  );
};
