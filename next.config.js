/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // React Three Fiber の設定
  webpack: (config) => {
    config.externals = [...config.externals, 'canvas', 'jsdom']
    return config
  }
}

module.exports = nextConfig