import Layout from '../components/layout'
import PageBanner from '../components/PageBanner'
import ProgramAccoridan from '../components/ProgramAccordian'
import RichContent from '../components/RichContent'
import { attributes, html } from '../content/pages/home.md'

const Home = () => (
  <Layout>
    {/* <ProgramAccoridan/> */}
    <PageBanner att={attributes}/>
    <RichContent att={attributes} html={html}/>
    <style jsx>{`
      h1,
      div {
        text-align: center;
      }
    `}</style>
  </Layout>
)

export default Home
