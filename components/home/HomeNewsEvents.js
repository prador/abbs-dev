import { useState,useRef } from "react";
import Link from 'next/link'

const HomeNewsEvents = ({newsList,eventsList}) => {
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
<div className="content news-events-wrapper">
      <div className="w-layout-grid contain-block">
      <section className='news-events-section'>
        <div className='news-block'>
        <h2 className='home-section-title'><span className="header-hyphen"></span>Latest News</h2>
        <div className='news-block-wrapper'>
        {newsList.sort(function(a,b){  return new Date(b.attributes.date) - new Date(a.attributes.date);
      }).slice(0, 3).map((post) => (
<Link legacyBehavior href="/news-events/news/[slug]" as={`/news-events/news/${post.slug}`} key={post.slug}>
            <div className="news-post">
              <div className="news-post-content">
                <h6>{post.attributes.title}</h6>
                {post.brief_description ? <p>{post.brief_description}</p> : null }
                <span className='news-post-date'>{setDate(post.attributes.date)}</span>
              </div>
              <img className="news-post-image" src={post.attributes.thumbnail}></img>
            </div>
        </Link>
    ))}
    <span></span>
    <a href="/news-events/news" className='btn btn-ghost news-block-link'>More from ABBS News</a>
        </div>
        </div>
        <div  className='events-block'>
        <h2 className='home-section-title'><span className="header-hyphen"></span>Events</h2>
        <div>
        {eventsList.sort(function(a,b){  return new Date(b.attributes.event_date) - new Date(a.attributes.event_date);
      }).slice(0, 4).map((post,index) => (
<Link legacyBehavior href="/news-events/events/[slug]" as={`/news-events/events/${post.slug}`} key={post.slug}>
            <div className="events-post">
            <div className='events-post-date-info'>
            <h4 className='events-post-day'>{setEventDate(post.attributes.event_date).day}</h4>
            <span className='events-post-month'>{setEventDate(post.attributes.event_date).month}</span>
            </div>
            
            <div className="events-post-content">
            <h6>{post.attributes.title}</h6>
            <div className='event-post-info'>
              <span className='event-tag'>{post.attributes.tags}</span>
              {post.attributes? <a href={post.attributes.event_link ? post.attributes.event_link : `/news-events/events/${post.slug}`} className='event-tag btn btn-ghost'>Register</a> : null }
            </div>
            </div>
              </div>
        </Link>
    ))}
    <span></span>
        <div className="all-events-link"><a href="/news-events/events" className='btn btn-ghost events-block-link'>More from ABBS Events</a></div>
        </div>
        </div>

      </section>
        </div>
      </div>
)}

export default HomeNewsEvents;