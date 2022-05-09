import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import HomeSlideshow from '../components/home/HomeSlideshow'
import ProgramAccordion from '../components/home/ProgramAccordion'
import ProgramSelect from '../components/home/ProgramSelect'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import AccordionSection from '../components/content/AccordionSection'
import { attributes, html } from '../content/home/home.md'
import HomeHeader from '../components/home/HomeHeader'
import HomeNewsEvents from '../components/home/HomeNewsEvents'
const importNews = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../content/news', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/news/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}
const importEvents = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../content/events', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/events/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}
const Home = ({newsList,eventsList}) => {
  const setDate = (date) => {
    let newDate = new Date(date)
    return newDate.toLocaleDateString('en-US',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }
  const setEventDate = (date) => {
    let newDate = new Date(date)
    let evDate = {
      day: newDate.toLocaleDateString('en-US',{  day: 'numeric' }),
      month: newDate.toLocaleDateString('en-US',{  month: 'short' })
    }
    return evDate
  }
  return (
  <Layout>
    <PageHeader attributes={attributes}><HomeHeader attributes={attributes}/></PageHeader>
    <HomeSlideshow att={attributes.slider_images} className="animate__animated animate__fadeInUp"/>  
    {/* <PageContent att={attributes} html={html}/> */}
    <ProgramSelect />
    <ProgramAccordion programs={attributes}/> 
    <HomeNewsEvents newsList={newsList} eventsList={eventsList}/>

    <div className="content">
      <div className="w-layout-grid contain-block">
      <section className='rec-acred-section'>
        <div className='rec-acred-block'>
      <h2 className='home-section-title'><span className="header-hyphen"></span>{attributes.rec_acc_section.section_title}</h2>
      
      <div className='rec-acred-wrapper'>
        <div className="rec-acred-content">
          <p>{attributes.rec_acc_section.section_text}</p>
          <a href="/abbs-edge/recognition-accreditations" className="btn btn-outline">View More</a>
        </div>
        {attributes.rec_acc_section.logos.map((post,index) => 
          <>
          <img key={index} className="rec-acred-image" src={post.logo_image}/>
          </>
        )}
      </div>
        
    </div>
    </section>
        </div>
      </div>
      
      <div className="content home-faq-wrapper">
      <div className="w-layout-grid contain-block">
      <section className='home-faq-section'>
        <div className='home-faq-block'>
        <h2 className='home-section-title'><span className="header-hyphen"></span>FAQs</h2> 
      <AccordionSection att={attributes.faq_section} />
      </div>
      {attributes.faq_section.section_image ? 
            <div className="home-faq-image">
              <img src={"../"+attributes.faq_section.section_image} alt={attributes.faq_section.section_title}/>
            </div> : "" }
      </section>
        </div>
      </div>
    <style jsx>{`
      h1,
      div {
        text-align: center;
      }
    `}</style>
     {attributes.body_scripts ? <div dangerouslySetInnerHTML={{ __html: attributes.body_scripts }} /> : null}
  </Layout>
)}

export async function getStaticProps() {
  const newsList = await importNews()
  const eventsList = await importEvents()

  return {
    props: {
      newsList,
      eventsList
    }, // will be passed to the page component as props
  }
}

export default Home
