import Link from 'next/link'
import Layout from '../../../components/layout'
import PageHeader from '../../../components/PageHeader'
import PageBanner from '../../../components/PageBanner'
import PageContent from '../../../components/PageContent'
import Breadcrumbs from '../../../components/navigation/Breadcrumbs'
import TagLinks from '../../../components/content/TagLinks'
import React, { useState, useEffect } from "react";
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
  const [searchValue, setSearchValue] = useState("");
  const setDate = (date) => {
    let newDate = new Date(date)
    return newDate.toLocaleDateString('en-US',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  const filterPosts = () => {
    return newsList.filter((obj) => obj.attributes.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
  };
  return(
  <Layout>
  <PageHeader attributes={attributes} />
  <PageBanner att={attributes}/>
  <div className="content news-events-page-wrapper">
  <Breadcrumbs att={attributes}/>
      <div className="w-layout-grid contain-block">
      <section className='news-events-page-section'>
  {filterPosts().sort(function(a,b){  return new Date(b.attributes.date) - new Date(a.attributes.date);
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
    <div className='side-float'>
    <input className="search-input sticky" id="news-search" placeholder="Search news" type="text" onChange={handleChange} value={searchValue}/>
    {/* {attributes.sections[0].links ? <TagLinks att={attributes.sections[0]} search={true} title={"Categories"} /> : ""} */}
    </div>
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
