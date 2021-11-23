import React, { useEffect } from "react";
import Link from 'next/link'
import Script from 'next/script'
import Footer from './navigation/Footer'
import SideBar from './navigation/SideBar'

const Layout = ({ children }) => {
  return (
    <>
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
