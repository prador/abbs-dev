import React, { useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Footer from './navigation/Footer'
import SideBar from './navigation/SideBar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
          <title>My page title</title>
          <meta property="og:title" content="My page title" key="title" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="assets/img/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
          <link href="assets/img/webclip.png" rel="apple-touch-icon"/>
      </Head>
      <SideBar/>
      <div id="w-node-_213e7ee2-f0cb-cbea-eb62-6f01783e8cfa-fe48c5ce" className="layout-spacer"></div>
      <main>{children}
      <Footer/>
      </main>
      <style jsx>{`
        nav {
          text-align: center;
        }
        nav a {
          margin-right: 2px;
          padding: 4px;
        }
        main {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  )
} 

export default Layout
