/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  mode: 'production',
  disableDevLogs: true,
});

const nextConfig = withPWA({
  reactStrictMode: false,
  images: {
    domains: [
      "storage.googleapis.com",
      'k.kakaocdn.net',
    ],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
});

module.exports = nextConfig
