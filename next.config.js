/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [''],
  },
 // output: "export",  <=== enables static exports
};

module.exports = nextConfig;