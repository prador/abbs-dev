import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import HomeSlideshow from '../components/home/HomeSlideshow'
import ProgramAccordion from '../components/home/ProgramAccordion'
import ProgramSelect from '../components/home/ProgramSelect'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import { attributes, html } from '../content/home/home.md'

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
const Home = ({newsList,eventsList}) => (
  <Layout>
    <PageHeader attributes={attributes} />
    <HomeSlideshow att={attributes.slider_images} className="animate__animated animate__fadeInUp"/>  

    <div className="content news-events-wrapper">
      <div className="w-layout-grid contain-block">
      <section className='news-events-section'>
      <ProgramSelect />
      </section>
      </div>
      </div>
    <ProgramAccordion programs={attributes}/> 
    <PageContent att={attributes} html={html}/>
    <div className="content news-events-wrapper">
      <div className="w-layout-grid contain-block">
      <section className='news-events-section'>
        <div className='news-block'>
        <h2 className='home-section-title'><span className="header-hyphen"></span>Latest News</h2>
        <div className='news-block-wrapper'>
        {newsList.sort(function(a,b){  return new Date(b.attributes.date) - new Date(a.attributes.date);
      }).slice(0, 3).map((post) => (
<Link href="/news-events/news/[slug]" as={`/news-events/news/${post.slug}`} key={post.slug}>
            <div className="news-post">
              <div className="news-post-content">
                <h5>{post.attributes.title}</h5>
                <p dangerouslySetInnerHTML={{__html: post.html}}></p>
                <span>{post.attributes.date}</span>
              </div>
              <img className="news-post-image" src={post.attributes.thumbnail}></img>
            </div>
        </Link>
    ))}
    <a href="/news-events/news" className='btn btn-ghost'>More from ABBS News</a>
        </div>
        </div>
        <div  className='events-block'>
        <h2 className='home-section-title'><span className="header-hyphen"></span>Events</h2>
        <div>
        {eventsList.sort(function(a,b){  return new Date(b.attributes.date) - new Date(a.attributes.date);
      }).slice(0, 4).map((post) => (
<Link href="/news-events/news/[slug]" as={`/news-events/news/${post.slug}`} key={post.slug}>
            <div className="events-post">

            <img className="events-post-image" src={post.attributes.thumbnail}></img>
            <div className="events-post-content">
            <h5>{post.attributes.title}</h5>
            {/* <p dangerouslySetInnerHTML={{__html: post.html}}></p> */}
            <span>{post.attributes.date}</span>
            </div>
              </div>
        </Link>
    ))}
        <a href="/news-events/events" className='btn btn-ghost'>More from ABBS Events</a>
        </div>
        </div>

      </section>
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
