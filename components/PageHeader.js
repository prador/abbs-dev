import Head from 'next/head'
import React from 'react'
import { useRouter } from "next/router";
import { Parser } from "html-to-react";

const PageHeader = ({attributes,children}) => {
  const router = useRouter();
  const { parse } = new Parser();
  const canonical = `https://abbs.edu.in` + router.asPath;
  return (
  <>
    <Head>
    {children}
      {attributes.seo_title ? <>
          <title>{attributes.seo_title}</title>
          <meta content={attributes.seo_title} key="title" property="og:title" />
          <meta content={attributes.seo_title} property="twitter:title" />
          <meta content={attributes.seo_title} property="og:title" />
          </> : 
          <>
          <title>{attributes.title} | Acharya Bangalore B-School - The top B school in Bangalore</title>
          <meta content={attributes.title + "| ABBS"} key="title" property="og:title" />
          <meta content={attributes.title} property="twitter:title" />
          <meta content={attributes.title} property="og:title" />
          </>
          }
      {attributes.seo_description ? <> 
          <meta content={attributes.seo_description}  name="description" />
          <meta content={attributes.seo_description}  property="og:description" />
          <meta content={attributes.seo_description}  property="twitter:description" />
          </> : "" }
      {attributes.thumbnail ? <>
          <meta content={attributes.thumbnail.url} property="og:image" />
          <meta content={attributes.thumbnail.url} property="twitter:image" />
          </> : "" }
          <meta content="summary_large_image" name="twitter:card" />
          <meta property="og:type" content="website" />
          
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {attributes.header_scripts ? parse(attributes.header_scripts) : "" }
          <link rel="canonical" href={canonical} />
    </Head>
  </>
)}

export default PageHeader
