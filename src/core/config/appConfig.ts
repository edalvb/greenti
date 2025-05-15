interface AppConfig {
  appNameKey: string;
  appVersion: string;
  defaultLocale: string;
  locales: string[];
  baseUrl: string;
}

export const appConfig: AppConfig = {
  appNameKey: "Global.appName",
  appVersion: process.env.npm_package_version || "0.1.0",
  defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || "es",
  locales: (process.env.NEXT_PUBLIC_LOCALES || "es,en").split(','),
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
};
