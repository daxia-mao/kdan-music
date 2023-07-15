/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "t.scdn.co",
      "i.scdn.co",
      "platform-lookaside.fbsbx.com",
      "mosaic.scdn.co",
      "thisis-images.scdn.co",
      "seeded-session-images.scdn.co",
      "charts-images.scdn.co",
      "seed-mix-image.spotifycdn.com",
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
