/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader: 'akamai',
    path: '',
  },
  basePath: '/answermyq',
  assetPrefix: '/answermyq'
}

module.exports = nextConfig
