/** @type {import('next').NextConfig} */

const withImages = require("next-images");

module.exports = withImages({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
});
