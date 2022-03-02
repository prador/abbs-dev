import Link from 'next/link'
import Layout from '../../../components/layout'
import PageHeader from '../../../components/PageHeader'
import PageBanner from '../../../components/PageBanner'
import PageContent from '../../../components/PageContent'
import Breadcrumbs from '../../../components/navigation/Breadcrumbs'

import { attributes, html } from '../../../content/pages/news-events/news/index.md'
const importNews = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../../content/news', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../../content/news/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}
const News = ({newsList}) => {
  const setDate = (date) => {
    let newDate = new Date(date)
    return newDate.toLocaleDateString('en-US',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }
  return(
  <Layout>
  <PageHeader attributes={attributes} />
  <PageBanner att={attributes}/>
  <div className="content news-events-page-wrapper">
  <Breadcrumbs att={attributes}/>
      <div className="w-layout-grid contain-block">
      <section className='news-events-page-section'>
  {newsList.sort(function(a,b){  return new Date(b.attributes.date) - new Date(a.attributes.date);
      }).map((post) => (
<Link href="/news-events/news/[slug]" as={`/news-events/news/${post.slug}`} key={post.slug}>
            <div className="news-page-post">
            <img className="news-post-image" src={"../"+post.attributes.thumbnail}></img>
              <div className="news-post-content">
                <span className='post-date'>{setDate(post.attributes.date)}</span>
                <h6>{post.attributes.title}</h6>
                {/* <p dangerouslySetInnerHTML={{__html: post.html}}></p> */}
                {post.brief_description ? <p>{post.brief_description}</p> : null }
                
              </div>
            </div>
        </Link>
    ))}
    </section>
    </div>
    </div>
</Layout>
)}

export async function getStaticProps() {
  const newsList = await importNews()

  return {
    props: {
      newsList,
    }, // will be passed to the page component as props
  }
}

export default News
