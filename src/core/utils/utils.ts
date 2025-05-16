import { Locale } from "next-intl";

export class Util {
  static async getLocale(params: any): Promise<Locale> {
    let resolvedParams: { locale: string };

    if (typeof (params as any)?.then === "function") {
      resolvedParams = await (params as any);
    } else {
      resolvedParams = params as { locale: string };
    }

    return resolvedParams.locale as Locale;
  }
}
