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
    return [{
        source: '/abbs-edge', 
        destination: '/abbs-edge/recognition-accreditations', 
        permanent: false,
        basePath: false,
      },
      {
        source: '/profile/', 
        destination: '/profile/history-overview', 
        permanent: false,
        basePath: false,
      },
      {
        source: '/faculty', 
        destination: '/faculty/profiles', 
        permanent: false,
        basePath: false,
      },
      {
        source: '/research', 
        destination: '/research/research-centre', 
        permanent: false,
        basePath: false,
      },
      {
        source: '/corporate', 
        destination: '/corporate/recruit-students', 
        permanent: false,
        basePath: false,
      },
      {
        source: '/campus-life', 
        destination: '/campus-life/health-wellness', 
        permanent: false,
        basePath: false,
      },
      {
        source: '/news-events', 
        destination: '/news-events/news', 
        permanent: false,
        basePath: false,
      },
      {
        source: '/campus-life/clubs-associations', 
        destination: '/campus-life/health-wellness', 
        permanent: false,
        basePath: false,
      },
      {
        source: '/campus-life/student-support', 
        destination: '/campus-life/health-wellness', 
        permanent: false,
        basePath: false,
      },
      {
        source: '/programs/business', 
        destination: '/programs/business/business-programs', 
        permanent: false,
        basePath: false,
      },
      {
        source: '/programs/life-sciences', 
        destination: '/programs/life-sciences/life-sciences-programs', 
        permanent: false,
        basePath: false,
      },
      {
        source: '/programs/commerce', 
        destination: '/programs/commerce/commerce-programs', 
        permanent: false,
        basePath: false,
      },
      {
        source: '/programs/liberal-arts', 
        destination: '/programs/liberal-arts/liberal-arts-programs', 
        permanent: false,
        basePath: false,
      },
      {
        source: '/programs/information-technology', 
        destination: '/programs/information-technology/information-technology-programs', 
        permanent: false,
        basePath: false,
      },
      
    ]
  }
}