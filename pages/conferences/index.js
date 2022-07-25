import Link from 'next/link'
import Layout from '../../components/layout'
import PageHeader from '../../components/PageHeader'
import PageBanner from '../../components/PageBanner'
import Breadcrumbs from '../../components/navigation/Breadcrumbs'
import { attributes, html } from '../../content/pages/conferences/index.md'

const importConferences = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../content/conferences', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/conferences/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const Conferences = ({conferenceList}) => {
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
  const isPast = (date) => {
    let eventDate = new Date(date)
    let today = new Date()
      if(eventDate.getTime() < today.getTime()){
          return "past"
      }
  }
  return(
  <Layout>
  <PageHeader attributes={attributes} />
  <PageBanner att={attributes}/>
  <div className="content news-events-page-wrapper">
  <Breadcrumbs att={attributes}/>
      <div className="w-layout-grid contain-block">
      <section className='news-events-page-section'>
      <h2 className="section-title" id="upcoming_events"><span className="header-hyphen"></span>Upcoming Conferences</h2>
      {conferenceList.sort(function(a,b){  return new Date(b.attributes.date) - new Date(a.attributes.date);
      }).map((post) => (
        <>{!isPast(post.attributes.event_date) ?
          <Link href="/conferences/[slug]" as={`/conferences/${post.slug}`} key={post.slug}>
            <div className="events-post">
              <div className='events-post-date-info'>
                <h4 className='events-post-day'>{setEventDate(post.attributes.event_date).day}</h4>
                <span className='events-post-month'>{setEventDate(post.attributes.event_date).month}</span>
              </div>
              <div className="events-post-content">
                <h6>{post.attributes.title}</h6>
                <span>{setDate(post.attributes.event_date)}</span>
              </div>
          </div>
        </Link>
        : null
        // <p>No upcoming Events</p>
      }</>
    ))}
    </section>
      <section className='news-events-page-section'>
      <h2 className="section-title" id="past_events"><span className="header-hyphen"></span>Past Conferences</h2>
      {conferenceList.sort(function(a,b){  return new Date(b.attributes.date) - new Date(a.attributes.date);
      }).map((post) => (
        <>{isPast(post.attributes.event_date) ?
          <Link href="/conferences/[slug]" as={`/conferences/${post.slug}`} key={post.slug}>
            <div className="events-post">
              <div className='events-post-date-info'>
                <h4 className='events-post-day'>{setEventDate(post.attributes.event_date).day}</h4>
                <span className='events-post-month'>{setEventDate(post.attributes.event_date).month}</span>
              </div>
              <div className="events-post-content">
                <h6>{post.attributes.title}</h6>
                <span>{setDate(post.attributes.event_date)}</span>
              </div>
          </div>
        </Link>
        : null
      }</>
    ))}
    </section>
    <div class="side-float">
      <div class="in-page-links active">
        <a href="#upcoming_events">Upcoming Events -</a>
        <a href="#past_events">Past Events -</a>
        </div>
        </div>
    </div>
    </div>
</Layout>
)}

export async function getStaticProps() {
  const conferenceList = await importConferences()

  return {
    props: {
      conferenceList,
    }, // will be passed to the page component as props
  }
}

export default Conferences