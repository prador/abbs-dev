import Link from 'next/link'
import Layout from '../../components/layout'
import PageHeader from '../../components/PageHeader'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/PageContent'
import { attributes, html } from '../../content/pages/naac-cycle-3/index.md'
import TagLinks from '../../components/content/TagLinks'
import React, { useState, useEffect } from "react";
import Breadcrumbs from '../../components/navigation/Breadcrumbs'
import NaacDocumentsSection from '../../components/content/NaacDocumentsSection'


const importDocs = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../content/naac_docs', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/naac_docs/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const MandatoryDisclosures = (docList) => {
  const [searchValue, setSearchValue] = useState("");
  const [docSection, setDocSection] = useState("SSR");
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  // console.log(docList.docList.filter((obj) => obj.attributes.section == "SSR"))
  const filterDocs = () => {
    return docList.docList.filter((obj) => obj.attributes.section == docSection && obj.attributes.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
  };
  return (
  <Layout>
  <PageHeader attributes={attributes} />
  <PageBanner att={attributes}/>
  <div className="content animate__animated animate__fadeInUp">
      <div className="w-layout-grid contain-block">
      <Breadcrumbs att={attributes}/>
      <section id="content-wrapper" className='has-anchors'>
        <div className='naac-doc-tabs'>
          <button className={`naac-doc-tab ${docSection == "SSR" ? "active" : ""}`} onClick={()=> {setDocSection("SSR")}}>SSR</button>
          {/* <button className={`naac-doc-tab ${docSection == "DVV" ? "active" : ""}`}  onClick={()=> {setDocSection("DVV")}}>DVV</button> */}
        </div>
      <input className="search-input" id="doc-search" placeholder="Search Docs" type="text" onChange={handleChange} value={searchValue}/>
      {/* <PageContent att={attributes} html={html} docs={docList}/> */}
      {docList ? <NaacDocumentsSection docs={filterDocs()} /> : "No Document found"}
    </section>
    </div>
    </div>
</Layout>
)}

export async function getStaticProps() {
  const docList = await importDocs()
  return {
    props: {
      docList,
    }, // will be passed to the page component as props
  }
}


export default MandatoryDisclosures
