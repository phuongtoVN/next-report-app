import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // output: "export", // This ensures `next export` generates static files
  // assetPrefix: isProd ? "/next-report-app/" : "", 
  // images: {
  //   unoptimized: true, // Disable image optimization for static export
  // },
};

export default nextConfig;
