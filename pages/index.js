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
    <div className="content">
      <div className="w-layout-grid contain-block">
      <section><h2>Our Programs</h2></section>
        </div>
      </div>
    <ProgramAccoridian/>
    <PageContent att={attributes} html={html}/>
    <div className="content">
      <div className="w-layout-grid contain-block">
      <section><h2>Latest News</h2></section>
        </div>
      </div>
    <div className="content">
      <div className="w-layout-grid contain-block">
    <section><h2>Recognition / Accreditions</h2></section>
        </div>
      </div>
    <div className="content">
      <div className="w-layout-grid contain-block">
    <section><h2>FAQs</h2></section>
        </div>
      </div>
    
    <style jsx>{`
      h1,
      div {
        text-align: center;
      }
    `}</style>
  </Layout>
)

export default Home
