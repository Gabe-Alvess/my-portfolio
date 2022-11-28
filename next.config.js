/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  i18n: {
    locales: ["en-US", "nl-BE", "fr-BE", "pt-BR"],
    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
