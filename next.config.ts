import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/next-report-app/' : '',
  basePath: isProd ? '/next-report-app' : '',
  output: process.env.NEXT === "true" ? "export" : undefined,
  };

export default nextConfig;
