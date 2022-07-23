const withPWA = require("next-pwa");
const withPreact = require("next-plugin-preact");

/** @type {import('next').NextConfig} */
const nextConfig = withPWA(
  withPreact({
    reactStrictMode: true,
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === "development",
    },
  })
);

module.exports = nextConfig;
