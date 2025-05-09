interface AppConfig {
  appName: string;
  appVersion: string;
  defaultLanguage: string;
  supportedLanguages: string[];
  websiteUrl: string;
}

export const appConfig: AppConfig = {
  appName: "GreenTI",
  appVersion: "1.0.0",
  defaultLanguage: "es",
  supportedLanguages: ["es", "en"],
  websiteUrl: "https://www.greenti.pe/",
};
