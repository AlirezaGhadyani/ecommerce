import createMiddleware from "next-intl/middleware";
import appConfig from "@/configs";

const { locales, defaultLocale } = appConfig;

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|fa)/:path*"],
};
