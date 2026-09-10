import type { NextConfig } from 'next';

const nextConfig: NextConfig = process.env.PAGES_BUILD === '1'
  ? { output: 'export', assetPrefix: '/principia-superintelligence', trailingSlash: true }
  : {};

export default nextConfig;
