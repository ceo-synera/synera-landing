import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["es", "en", "zh"],
  defaultLocale: "es",
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
