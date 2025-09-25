import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fix Turbopack root path issue
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "sp-snapcast.b-cdn.net",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "iframe.mediadelivery.net",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "vz-94d4cb9d-259.b-cdn.net",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "*.b-cdn.net",
        port: "",
        pathname: "/**"
      }
    ]
  },
  // Remove domains property as it's deprecated
  typescript: {
    ignoreBuildErrors: false // Enable TypeScript checking for production
  },
  // Ensure proper serverless function configuration
  serverExternalPackages: ['better-sqlite3']
};

export default nextConfig;
