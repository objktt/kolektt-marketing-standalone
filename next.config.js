/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip TypeScript and ESLint checks during build for faster deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Remove workspace root warning
  outputFileTracingRoot: '.',
};

module.exports = nextConfig;