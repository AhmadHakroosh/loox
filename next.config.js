/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'tailwindui.com',
      },
      {
        hostname: 'images.loox.io',
      }
    ],
  },
}

module.exports = nextConfig
