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
    return [    
      {
        source: '/abbs-edge', // automatically becomes /docs/with-basePath
        destination: '/abbs-edge/recognition-accreditations', // automatically becomes /docs/another
        permanent: false,
        basePath: false,
      },
      {
        source: '/profile/', // automatically becomes /docs/with-basePath
        destination: '/profile/history-overview', // automatically becomes /docs/another
        permanent: false,
        basePath: false,
      },
      {
        source: '/faculty', // automatically becomes /docs/with-basePath
        destination: '/faculty/profiles', // automatically becomes /docs/another
        permanent: false,
        basePath: false,
      },
      {
        source: '/research', // automatically becomes /docs/with-basePath
        destination: '/research/research-centre', // automatically becomes /docs/another
        permanent: false,
        basePath: false,
      },
      {
        source: '/corporate', // automatically becomes /docs/with-basePath
        destination: '/corporate/recruit-students', // automatically becomes /docs/another
        permanent: false,
        basePath: false,
      },
      {
        source: '/campus-life', // automatically becomes /docs/with-basePath
        destination: '/campus-life/health-wellness', // automatically becomes /docs/another
        permanent: false,
        basePath: false,
      },
      {
        source: '/news-events', // automatically becomes /docs/with-basePath
        destination: '/news-events/news', // automatically becomes /docs/another
        permanent: false,
        basePath: false,
      },
      {
        source: '/campus-life/clubs-associations', // automatically becomes /docs/with-basePath
        destination: '/campus-life/health-wellness', // automatically becomes /docs/another
        permanent: false,
        basePath: false,
      },
      {
        source: '/campus-life/student-support', // automatically becomes /docs/with-basePath
        destination: '/campus-life/health-wellness', // automatically becomes /docs/another
        permanent: false,
        basePath: false,
      },
      {
        source: '/programs/business', // automatically becomes /docs/with-basePath
        destination: '/programs/business/business-programs', // automatically becomes /docs/another
        permanent: false,
        basePath: false,
      },
      {
        source: '/programs/life-sciences', // automatically becomes /docs/with-basePath
        destination: '/programs/life-sciences/life-sciences-programs', // automatically becomes /docs/another
        permanent: false,
        basePath: false,
      },
      {
        source: '/programs/commerce', // automatically becomes /docs/with-basePath
        destination: '/programs/commerce/commerce-programs', // automatically becomes /docs/another
        permanent: false,
        basePath: false,
      },
      {
        source: '/programs/liberal-arts', // automatically becomes /docs/with-basePath
        destination: '/programs/liberal-arts/liberal-arts-programs', // automatically becomes /docs/another
        permanent: false,
        basePath: false,
      },
      {
        source: '/programs/information-technology', // automatically becomes /docs/with-basePath
        destination: '/programs/information-technology/information-technology-programs', // automatically becomes /docs/another
        permanent: false,
        basePath: false,
      },
    ]
  }
}
