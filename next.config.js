const withPreact = require("next-plugin-preact");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA(
  withPreact({
    reactStrictMode: true,
    swcMinify: true,
  })
);

module.exports = nextConfig;
