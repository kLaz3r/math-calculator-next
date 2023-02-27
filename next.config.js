/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = {
    reactStrictMode: false,
};

module.exports = withPWA(nextConfig);
