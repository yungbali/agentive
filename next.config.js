/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add resolve.alias configuration
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/utils/composeClasses': '@mui/utils/composeClasses/index.js',
    };
    return config;
  },
  transpilePackages: [
    '@copilotkit/react-textarea',
    '@copilotkit/react-ui',
    '@mui/material',
    '@mui/utils'
  ],
};

module.exports = nextConfig; 