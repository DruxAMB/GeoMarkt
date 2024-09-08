import bundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  compress: true,  // Enables gzip and Brotli compression
  reactStrictMode: true,  // Optional: Enforces React strict mode
};

export default withBundleAnalyzer(nextConfig);
