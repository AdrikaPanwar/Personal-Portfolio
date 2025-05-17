import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.spr.so",
        pathname: "/**",
        port: "",
        protocol: "https",
      },
      {
        hostname: "assets.super.so",
        pathname: "/**",
        port: "",
        protocol: "https",
      },
      {
        hostname: "github-readme-stats.vercel.app",
        pathname: "/**",
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
