import Layout from '../components/layout'
import PageBanner from '../components/PageBanner'
import ProgramAccoridan from '../components/ProgramAccordian'
import RichContent from '../components/RichContent'
import { attributes, html } from '../content/pages/home.md'

const Home = () => (
  <Layout>
    <h1>{attributes.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
    {/* <ProgramAccoridan/> */}
    <PageBanner/>
    <RichContent/>
    <style jsx>{`
      h1,
      div {
        text-align: center;
      }
    `}</style>
  </Layout>
)

export default Home
