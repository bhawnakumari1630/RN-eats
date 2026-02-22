import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/rn-eats", // your repo name
  assetPrefix: "/rn-eats/",

  images: {
    remotePatterns: [
      unoptimized: true, 
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.swiggy.com",
      },
      {
        protocol: "https",
        hostname: "media-assets.swiggy.com",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
