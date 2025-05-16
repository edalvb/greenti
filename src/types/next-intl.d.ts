import type { routing } from "@/i18n/routing";
import type messages from "../../messages/es.json";

type Messages = typeof messages;
type Locales = (typeof routing.locales)[number];

declare global {
  interface IntlMessages extends Messages {}
}

declare module "next-intl" {
  interface AppConfig {
    Locale: Locales;
    Messages: Messages;
  }
}
