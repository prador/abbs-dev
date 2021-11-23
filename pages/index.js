import Layout from '../components/layout'
import Head from 'next/head'

import PageBanner from '../components/PageBanner'
import ProgramAccoridian from '../components/ProgramAccordian'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import { attributes, html } from '../content/pages/home.md'

const Home = () => (
  <Layout>
    <PageHeader attributes={attributes} />
    <PageBanner att={attributes}/>
    <ProgramAccoridian/>
    <PageContent att={attributes} html={html}/>
    <style jsx>{`
      h1,
      div {
        text-align: center;
      }
    `}</style>
  </Layout>
)

export default Home
