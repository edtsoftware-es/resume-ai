import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    devtoolSegmentExplorer: true,
    reactCompiler: true,
  },
};

export default nextConfig;
