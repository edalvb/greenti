import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Solo usar middleware en desarrollo o cuando no estamos exportando
const isExport = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS === 'true';

export default isExport ? undefined : createMiddleware(routing);

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
