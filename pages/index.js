import Layout from '../components/layout'
import Head from 'next/head'

import HomeSlideshow from '../components/home/HomeSlideshow'
import ProgramAccordion from '../components/home/ProgramAccordion'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import { attributes, html } from '../content/home/home.md'

const Home = () => (
  <Layout>
    <PageHeader attributes={attributes} />
    <HomeSlideshow att={attributes.slider_images} className="animate__animated animate__fadeInUp"/>
    <ProgramAccordion programs={attributes}/>          
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
