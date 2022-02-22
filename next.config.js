// import redirectURLs from "./redirects"

module.exports = {
  distDir: 'out',
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    })
    return configuration
  },
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return 'my-build-id'
  },
  async redirects() {
    return [    {
      source: '/programs/business', // automatically becomes /docs/with-basePath
      destination: '/programs/business/business-programs', // automatically becomes /docs/another
      permanent: true,
      basePath: false
    }]
  }
}
