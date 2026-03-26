import createNextIntlPlugin from "next-intl/plugin";

const i18nPath = "./src/i18n/request.ts";

const withNextIntl = createNextIntlPlugin(i18nPath);

/** @type {import('next').NextConfig} */
const baseConfig = {
  // Fix next-intl Turbopack alias for Next.js 16
  // next-intl plugin still sets experimental.turbo (Next.js 15 API),
  // so we add the Next.js 16 equivalent here using a relative path
  turbopack: {
    resolveAlias: {
      "next-intl/config": i18nPath,
    },
  },
};

export default withNextIntl(baseConfig);
