import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    inlineCss: true,
  },
  async redirects() {
    return [
      {
        source: "/owner",
        destination: "https://github.com/sunilband",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
