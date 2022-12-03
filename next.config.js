/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  i18n: {
    locales: ["en", "nl", "fr", "pt"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
