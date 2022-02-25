import Link from 'next/link'
import Layout from '../../../components/layout'
import PageHeader from '../../../components/PageHeader'
import PageBanner from '../../../components/PageBanner'
import PageContent from '../../../components/PageContent'
import Breadcrumbs from '../../../components/navigation/Breadcrumbs'

import { attributes, html } from '../../../content/pages/news-events/events/index.md'

const importEvents = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../../content/events', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../../content/events/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}
const Events = ({eventsList}) => (
  <Layout>
  <PageHeader attributes={attributes} />
  <PageBanner att={attributes}/>
  <div className="content news-events-page-wrapper">
  <Breadcrumbs att={attributes}/>
      <div className="w-layout-grid contain-block">
      <section className='news-events-page-section'>
  {eventsList.sort(function(a,b){  return new Date(b.attributes.date) - new Date(a.attributes.date);
      }).slice(0, 4).map((post) => (
<Link href="/news-events/news/[slug]" as={`/news-events/news/${post.slug}`} key={post.slug}>
            <div className="events-post">

            <img className="events-post-image" src={"../"+post.attributes.thumbnail}></img>
            <div className="events-post-content">
            <h5>{post.attributes.title}</h5>
            {/* <p dangerouslySetInnerHTML={{__html: post.html}}></p> */}
            <span>{post.attributes.date}</span>
            </div>
              </div>
        </Link>
    ))}
    </section>
    </div>
    </div>
</Layout>
)
export async function getStaticProps() {
  const eventsList = await importEvents()

  return {
    props: {
      eventsList,
    }, // will be passed to the page component as props
  }
}

export default Events
