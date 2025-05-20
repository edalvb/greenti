// src/app/layout.tsx
import React from "react";
import { routing } from "@/i18n/routing"; // Importa tu configuración de routing
import "../app/globals.css"; // Asegúrate de que los estilos globales se importan aquí también si es necesario
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // El lang aquí puede ser tu locale por defecto o un placeholder.
    // No es crítico para la página de redirección.
    <html lang={routing.defaultLocale}>
      <body>{children}</body>
    </html>
  );
}
