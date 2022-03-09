import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Layout from '../../../components/layout'
import PageBanner from '../../../components/PageBanner'
import PageHeader from '../../../components/PageHeader'
import DocumentsSection from '../../../components/content/DocumentsSection'
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from 'react';
import { attributes, html } from '../../../content/pages/mandatory-disclosures/index.md'
import Breadcrumbs from '../../../components/navigation/Breadcrumbs'

const importDocs = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../../content/docs', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../../content/docs/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const Docs = ({ docList }) => {
  const router = useRouter();
    let routes= router.route.split('/');
    
  const { slug } = router.query
  const setDate = (date) => {
    let newDate = new Date(date)
    return newDate.toLocaleDateString('en-US',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }
  return (
  <Layout>
    <PageHeader attributes={attributes} />
  <PageBanner att={attributes} />
  <div className="content animate__animated animate__fadeInUp">
      <div className="w-layout-grid contain-block">
      <Breadcrumbs att={attributes}/>
      <section id="content-wrapper" className='has-anchors'>
      {/* <PageContent att={attributes} html={html} docs={docList}/> */}
      {docList? <DocumentsSection docs={docList.filter((obj) => !obj.attributes.certification.localeCompare(slug, undefined, { sensitivity: 'accent' }))} /> : ""}
    
    </section>
    </div>
    </div>
  </Layout>
)}

export async function getStaticPaths() {
    const paths = fs
      .readdirSync(path.join(process.cwd(), 'content/docs'))
      .map((docName) => {
        const trimmedName = docName.substring(0, docName.length - 3)
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
  const docList = await importDocs()

  return {
    props: {
      docList,
    }, // will be passed to the page component as props
  }
}

export default Docs
