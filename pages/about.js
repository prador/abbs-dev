import Layout from '../components/layout'
import PageHeader from '../components/PageHeader'
import { attributes, html } from '../content/pages/about.md'

const About = () => (
  <Layout>
    <PageHeader attributes={attributes} />
    <h1>{attributes.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <style jsx>{`
      h1,
      div {
        text-align: center;
      }
    `}</style>
  </Layout>
)

export default About
