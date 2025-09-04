import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.REPO_NAME || "greenti";

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : undefined,
  // Permitir acceder al dev server desde IPs LAN (ej. móvil en la red)
  // Evita el warning: Cross origin request detected ... configure "allowedDevOrigins"
  allowedDevOrigins: ["192.168.3.31"],
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default withNextIntl(nextConfig);
