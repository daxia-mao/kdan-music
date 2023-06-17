/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['t.scdn.co'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
