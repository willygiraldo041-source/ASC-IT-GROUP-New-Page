import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ========================================
  // Output Configuration - Static Export for Cloudflare Pages
  // ========================================
  output: 'export',
  
  // ========================================
  // Image Optimization (unoptimized for static export)
  // ========================================
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },

  // ========================================
  // Performance & Caching
  // ========================================
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // ========================================
  // Experimental Features
  // ========================================
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
