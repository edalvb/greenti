"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export type Crumb = {
  label: string;
  href?: string;
};

interface BreadcrumbsProps {
  /**
   * Override the last crumb label (e.g., for dynamic slugs like a project name)
   */
  currentLabel?: string;
  /**
   * Provide explicit crumbs. If provided, auto derivation from pathname is skipped.
   */
  items?: Crumb[];
  className?: string;
  /** Show a leading Home crumb. Default: false */
  showHome?: boolean;
}

/**
 * Simple Breadcrumbs with i18n labels for common sections.
 * Examples:
 * - Home / Portafolio / Beblis
 * - Home / About Us
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  currentLabel,
  items,
  className = "",
  showHome = false,
}) => {
  const t = useTranslations("Breadcrumbs");
  const locale = useLocale();
  const pathname = usePathname();

  const deriveFromPathname = React.useMemo((): Crumb[] => {
    if (items && items.length) return items;

    let path = pathname || "/";
    // Ensure leading slash, split and remove locale segment
    if (!path.startsWith("/")) path = `/${path}`;
    const parts = path.split("/").filter(Boolean);

    // Remove locale as first segment
    const segments = parts[0] === locale ? parts.slice(1) : parts;

    const crumbs: Crumb[] = [];
    // Home optional
    if (showHome) {
      crumbs.push({ label: t("home"), href: `/${locale}` });
    }

    if (segments.length === 0) return crumbs; // On home

    // Map known sections
    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];

      const isLast = i === segments.length - 1;
      let label = seg;
      let href: string | undefined = undefined;

      // Known localized sections
      if (["portfolio"].includes(seg)) {
        label = t("portfolio");
        // No href because there's no /portfolio index page (dropdown only)
        href = undefined;
      } else if (["nosotros", "about-us"].includes(seg)) {
        label = t("aboutUs");
        href = undefined; // current page; we usually don't link current
      } else if (["contact", "contacto"].includes(seg)) {
        label = t("contact");
        href = undefined;
      } else {
        // Dynamic segment or unknown slug
        label = isLast && currentLabel ? currentLabel : decodeURIComponent(seg).replace(/-/g, " ");
        href = undefined;
      }

      crumbs.push({ label, href: isLast ? undefined : href });
    }

    return crumbs;
  }, [items, pathname, locale, currentLabel, t, showHome]);

  const crumbs = deriveFromPathname;

  if (!crumbs || crumbs.length === 0) return null;

  return (
    <nav aria-label={t("ariaLabel")} className={`text-sm ${className}`}>
      <ol className="flex flex-wrap gap-2 items-center text-neutral-dark">
        {crumbs.map((c, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={`${c.label}-${idx}`} className="flex items-center">
              {c.href && !isLast ? (
                <Link
                  href={c.href}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  {c.label}
                </Link>
              ) : (
                <span className={isLast ? "text-secondary font-semibold" : "text-secondary"}>
                  {c.label}
                </span>
              )}
              {!isLast && <span className="mx-2 text-neutral">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
