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

const nextConfig = withPWQ({
  reactStrictMode: false,
  images: {
    domains: [
      "storage.googleapis.com",
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
  images: {
    domains: ['k.kakaocdn.net', 'storage.googleapis.com'],
  },
});

module.exports = nextConfig
