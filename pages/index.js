import Layout from '../components/layout'
import ProgramAccoridan from '../components/ProgramAccordian'
import { attributes, html } from '../content/home.md'

const Home = () => (
  <Layout>
    <h1>{attributes.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <ProgramAccoridan/>
    <style jsx>{`
      h1,
      div {
        text-align: center;
      }
    `}</style>
  </Layout>
)

export default Home
