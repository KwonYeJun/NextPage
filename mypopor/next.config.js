const withPlugins = require('next-compose-plugins');
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa');

const nextConfig = withPWA({
  reactStrictMode: true,
  images:{
    domains:[
      'www.notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com',
      'prod-files-secure.s3.us-west-2.amazonaws.com'
    ]
  },
  experimental: {
    appDir: true,
  },
});

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
          register: true,
          skipWaiting: true,
          runtimeCaching,
          disable: process.env.NODE_ENV === 'development',
        },
      },
    ],
  ],
  nextConfig,
);