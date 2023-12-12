/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static-cdn.strpst.com',
      }, {
        protocol: 'https',
        hostname: 'img.strpst.com',
      }, {
        protocol: 'https',
        hostname: 'flagsapi.com',
      },
    ],
  },
};

module.exports = nextConfig;
