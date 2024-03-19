import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Layout from '../../../components/layout'
import PageBanner from '../../../components/PageBanner'
import PageHeader from '../../../components/PageHeader'
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from 'react';
import { attributes, html } from '../../../content/pages/blog/index.md'
import Breadcrumbs from '../../../components/navigation/Breadcrumbs'

const importBlogPosts = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../../content/blogPosts', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../../content/blogPosts/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const Blog = ({ postsList }) => {
  const router = useRouter();
    let routes= router.route.split('/');
  const { slug } = router.query
  const setDate = (date) => {
    let newDate = new Date(date)
    return newDate.toLocaleDateString('en-US',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }
  attributes.seo_description = "Discover excellence at Acharya Bangalore Business School, ranked among the top business schools in Bangalore. Explore our blogs for valuable insights"
  attributes.seo_keywords="Business School Excellence , Educational Insights, Management Studies Bangalore"
  return (
  <Layout>
    <PageHeader attributes={attributes} />
  <PageBanner att={attributes} />
  <div className="content animate__animated animate__fadeInUp">
      <Breadcrumbs att={attributes}/>
      <div className="w-layout-grid contain-block">
      <section className='news-events-page-section'>
    {postsList ? postsList.filter((obj) => obj.attributes.categories == slug).sort(function(a,b){  return new Date(b.attributes.date) - new Date(a.attributes.date)}).map((post) => (
      <div key={post.slug} className="post">
        <Link legacyBehavior href="/blog/[slug]" as={`/blog/${post.slug}`}>
        <div className="news-page-post">
            <img className="news-post-image" src={"../../"+post.attributes.thumbnail}></img>
              <div className="news-post-content">
                <span className='post-date'>{setDate(post.attributes.date)}</span>
                <h6>{post.attributes.title}</h6>
                {post.brief_description ? <p>{post.brief_description}</p> : null }
              </div>
            </div>
        </Link>
      </div>
    )): null}
    </section>
    </div>
    </div>
  </Layout>
)}

export async function getStaticPaths() {
    const paths = fs
      .readdirSync(path.join(process.cwd(), 'content/blogPosts'))
      .map((blogName) => {
        const trimmedName = blogName.substring(0, blogName.length - 3)
        return {
          params: { slug: trimmedName },
        }
      })
  
    return {
      paths,
      fallback: true, // constrols whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
    }
  }

export async function getStaticProps() {
  const postsList = await importBlogPosts()

  return {
    props: {
      postsList,
    }, // will be passed to the page component as props
  }
}

export default Blog
