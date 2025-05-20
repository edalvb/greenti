import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
});

export const defaultLocale = routing.defaultLocale;
export const locales = routing.locales;
