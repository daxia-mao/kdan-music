/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.scdn.co",
      },
      {
        protocol: "https",
        hostname: "**.spotifycdn.com",
      },
      {
        protocol: "https",
        hostname: "**.fbsbx.com",
      },
    ],
    domains: [
      "t.scdn.co",
      "i.scdn.co",
      "platform-lookaside.fbsbx.com",
      "mosaic.scdn.co",
      "thisis-images.scdn.co",
      "seeded-session-images.scdn.co",
      "charts-images.scdn.co",
      "seed-mix-image.spotifycdn.com",
      "newjams-images.scdn.co",
      "images-ak.spotifycdn.com",
      "image-cdn-ak.spotifycdn.com"
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
