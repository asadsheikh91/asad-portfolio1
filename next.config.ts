import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the floating dev badge locally. It never ships in a production build either way.
  devIndicators: false,
};

export default nextConfig;
