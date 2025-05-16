import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import path from "path";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const directory = path.join(__dirname, "messages");
  const filePath = path.join(directory, `${locale}.json`);

  return { locale, messages: (await import(filePath)).default };
});
