/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache")
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
})

const nextConfig = withPWA({
  experimental: {
    appDir: true,
  },
  images: { domains: ["lh3.googleusercontent.com"] },
})
module.exports = nextConfig
