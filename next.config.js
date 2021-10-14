module.exports = {
  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    return config;
  },
  images: {
    domains: ["lh3.googleusercontent.com", "blockhub.s3.amazonaws.com"],
  },
  reactStrictMode: true,
};
