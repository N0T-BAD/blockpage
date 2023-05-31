/** @type {import('next').NextConfig} */
const nextConfig = {
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
    domains: ['k.kakaocdn.net'],
  },
};

module.exports = nextConfig
