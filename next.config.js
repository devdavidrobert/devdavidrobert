/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure output for static exports
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    domains: ['randomuser.me'],
  },
  
  // Set the base path if you're not deploying to the root of the domain
  // basePath: '',
  
  // Disable server-side features that won't work on cPanel
  experimental: {},
  
  // Disable source maps in production for smaller bundle size
  productionBrowserSourceMaps: false,
  
  // Set trailing slash for better compatibility with cPanel
  trailingSlash: true,
};

module.exports = nextConfig;
