/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['t.scdn.co'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
