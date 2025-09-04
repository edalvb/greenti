"use client";
import { useEffect } from "react";
import { defaultLocale } from "@/i18n/routing";

// Redirección en cliente para entornos con output: export
export default function RootPage() {
  useEffect(() => {
    const target = `/${defaultLocale}/`;
    if (typeof window !== "undefined" && window.location.pathname !== target) {
      window.location.replace(target);
    }
  }, []);

  return null;
}
