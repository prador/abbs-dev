import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/Link'
import HomeSlideshow from '../components/home/HomeSlideshow'
import ProgramAccordion from '../components/home/ProgramAccordion'
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
    <ProgramAccordion programs={attributes}/>          
    <PageContent att={attributes} html={html}/>
    <div className="content">
      <div className="w-layout-grid contain-block">
      <section>
        <div>
        <h2>Latest News</h2>
        <div>
        {newsList.sort(function(a,b){  return new Date(b.attributes.date) - new Date(a.attributes.date);
      }).slice(0, 3).map((post) => (
<Link href="/news-events/news/[slug]" as={`/news-events/news/${post.slug}`} key={post.slug}>
            <div className="news-post">
            <div>
            <h2>{post.attributes.title}</h2>
            <span>{post.attributes.date}</span>
            <p dangerouslySetInnerHTML={{__html: post.html}}></p>
            </div>
            <img src={post.attributes.thumbnail}></img>
              </div>
        </Link>
    ))}
        </div>
        </div>
        <div>
        <h2>Events</h2>
        <div>
        {eventsList.sort(function(a,b){  return new Date(b.attributes.date) - new Date(a.attributes.date);
      }).slice(0, 3).map((post) => (
<Link href="/news-events/news/[slug]" as={`/news-events/news/${post.slug}`} key={post.slug}>
            <div className="news-post">
            <div>
            <h2>{post.attributes.title}</h2>
            <span>{post.attributes.date}</span>
            <p dangerouslySetInnerHTML={{__html: post.html}}></p>
            </div>
            <img src={post.attributes.thumbnail}></img>
              </div>
        </Link>
    ))}
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
