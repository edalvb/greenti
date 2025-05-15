export class Util {
  static async getLocale(
    params: Promise<{ locale: string }> | { locale: string },
  ): Promise<string> {
    let resolvedParams: { locale: string };

    if (typeof (params as any)?.then === "function") {
      resolvedParams = await (params as any);
    } else {
      resolvedParams = params as { locale: string };
    }

    return resolvedParams.locale;
  }
}
