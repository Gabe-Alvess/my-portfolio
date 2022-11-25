/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = {
  i18n: {
    locales: ["en-US", "nl-BE", "fr-BE", "pt-BR"],
    defaultLocales: "en-US",
  },
};

module.exports = nextConfig;


