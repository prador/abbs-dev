import Head from 'next/head'

import "normalize.css";
import "animate.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../assets/styles/global.css";
import '../assets/styles/homepage.css'
import '../assets/styles/search.module.css'
import '../assets/styles/sidenav.css'
import '../assets/styles/slider.css'
import '../assets/styles/breadcrumbs.css'
import '../assets/styles/pagecontent.css'
// import '../assets/styles/webflow.css'
import '../assets/styles/abbs.css'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Head>
      <link href="/static/img/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/static/img/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon-16x16.png"/>
      <link rel="mask-icon" href="/static/img/safari-pinned-tab.svg" color="#5bbad5"/>
  </Head>
  <Component {...pageProps} />
  </>
  );
}
