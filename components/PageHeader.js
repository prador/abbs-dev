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
          <link href="../assets/img/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
          <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon-16x16.png"/>
          <link rel="mask-icon" href="../assets/img/safari-pinned-tab.svg" color="#5bbad5"/>
    </Head>
  </>
)

export default PageHeader
