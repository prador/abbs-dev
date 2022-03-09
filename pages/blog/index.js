import Link from 'next/link'
import Layout from '../../components/layout'
import PageBanner from '../../components/PageBanner'
import PageHeader from '../../components/PageHeader'
import { attributes, html } from '../../content/pages/blog/index.md'
import Breadcrumbs from '../../components/navigation/Breadcrumbs'
import AnchorLinks from '../../components/content/AnchorLinks'
import TagLinks from '../../components/content/TagLinks'
import React, { useState, useEffect } from "react";

const importBlogPosts = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../content/blogPosts', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/blogPosts/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const Blog = ({ postsList }) => {
  const [searchValue, setSearchValue] = useState("");

  const setDate = (date) => {
    let newDate = new Date(date)
    return newDate.toLocaleDateString('en-US',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  const filterPosts = () => {
    return postsList.filter((obj) => obj.attributes.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
  };
  return (
  <Layout>
    <PageHeader attributes={attributes} />
  <PageBanner att={attributes}/>
  <div className="content animate__animated animate__fadeInUp">
      <Breadcrumbs att={attributes}/>
      <div className="w-layout-grid contain-block">
      
      <section className='news-events-page-section'>
    {filterPosts().sort(function(a,b){ return new Date(b.attributes.date) - new Date(a.attributes.date);
      }).map((post) => (
      <div key={post.slug} className="post">
        <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
        <div className="news-page-post">
            <img className="news-post-image" src={"../"+post.attributes.thumbnail}></img>
              <div className="news-post-content">
                <span className='post-date'>{setDate(post.attributes.date)}</span>
                <h6>{post.attributes.title}</h6>
                {/* <span>{post.attributes.categories}</span> */}
                {/* <p dangerouslySetInnerHTML={{__html: post.html}}></p> */}
                {post.brief_description ? <p>{post.brief_description}</p> : null }
              </div>
            </div>
        </Link>
      </div>
    ))}
    </section>
    <div className='side-float'>
    <input className="search-input sticky" id="blog-search" placeholder="Search posts" type="text" onChange={handleChange} value={searchValue}/>
    {attributes.sections[0].links ? <TagLinks att={attributes.sections[0]} search={true} title={"Categories"} /> : ""}
    </div>
    
    </div>
    </div>
  </Layout>
)}

export async function getStaticProps() {
  const postsList = await importBlogPosts()

  return {
    props: {
      postsList,
    }, // will be passed to the page component as props
  }
}

export default Blog
