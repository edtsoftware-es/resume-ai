import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    clientSegmentCache: true,
    devtoolSegmentExplorer: true,
    reactCompiler: true,
  },
};

export default nextConfig;
