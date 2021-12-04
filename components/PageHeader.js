import Head from 'next/head'

const PageHeader = ({attributes}) => (
  <>
    <Head>
      {attributes.seo_title ? <>
          <title>{attributes.seo_title}</title>
          <meta content={attributes.seo_title} key="title" property="og:title" />
          <meta content={attributes.seo_title} property="twitter:title" />
          <meta content={attributes.seo_title} property="og:title" />
          </> : ""}
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
          
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {/* {attributes.header_scripts ? <>
            {attributes.header_scripts}
          </> : "" } */}
    </Head>
  </>
)

export default PageHeader
