import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/routing"; // Ajusta la ruta si es necesario

// Esta página solo se renderiza para redirigir al locale por defecto
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
