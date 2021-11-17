module.exports = {
  webpack: (config, { isServer }) => {
    config.experiments = {
      topLevelAwait: true,
    }

    if (isServer) {
      return {
        ...config,
        // This is what allows us to add a node script via NextJS's server
        entry() {
          return config.entry().then((entry) => {
            return Object.assign({}, entry, {
              cache: './cache/cache.js',
            })
          })
        },
      }
    }
    config.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    })
    return config
  },
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return 'my-build-id'
  },
}
