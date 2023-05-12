const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  swcMinify: true
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)