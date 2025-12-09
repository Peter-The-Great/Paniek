import withBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzerEnabled = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const isVercel = process.env.VERCEL === '1';
const isExport = process.env.EXPORT === 'true';

const nextConfig = {
  reactStrictMode: true,
  ...(isExport ? { output: 'export' } : {}),
  // When using `output: 'export'` (static HTML export), Next's Image
  // Optimization API is incompatible. Disable the built-in image
  // optimization for static export by setting `unoptimized: true`.
  images: {
    // Optimize images on Vercel, disable optimization locally (or when not on Vercel).
    unoptimized: !isVercel
  },
  swcMinify: true
}

export default withBundleAnalyzerEnabled(nextConfig);