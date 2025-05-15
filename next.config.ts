import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.REPO_NAME || 'greenti';

const withNextIntl = createNextIntlPlugin('./src/core/config/i18n/request.ts');

const nextConfig: NextConfig = {
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : undefined,
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
  }
};

export default withNextIntl(nextConfig);