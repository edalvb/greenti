import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'greenti'; // O el nombre de tu repo

const nextConfig: NextConfig = {
  output: "export",
  // basePath es necesario si tu sitio se sirve desde un subdirectorio en GitHub Pages
  // Ejemplo: https://username.github.io/repository-name/
  // En ese caso, basePath debería ser "/repository-name"
  basePath: isGithubActions ? `/${repoName}` : "",
  // assetPrefix es útil para que los assets (JS, CSS, imágenes) también usen el basePath.
  // Sin embargo, con next/image y basePath, esto podría no ser estrictamente necesario para imágenes,
  // pero es una buena práctica para otros assets.
  // Para simplificar, next/image manejará el basePath automáticamente para las imágenes.
  // Si tienes otros assets (CSS background-image url(), etc.) que no lo hacen, assetPrefix es útil.
  // Con `basePath` configurado, Next.js generalmente maneja bien los assets.
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;