import { NextConfig } from "next";

const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      { hostname: "assets.basehub.com" },
      { hostname: "basehub.earth" },
      { hostname: "is1-ssl.mzstatic.com" },
      { hostname: "is2-ssl.mzstatic.com" },
      { hostname: "is3-ssl.mzstatic.com" },
      { hostname: "is4-ssl.mzstatic.com" },
      { hostname: "is5-ssl.mzstatic.com" },
      { hostname: "motivvhealthstudios.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/acoh",
        destination: "/?acoh=1",
        permanent: true,
      },
    ];
  },
} satisfies NextConfig;

export default nextConfig;
