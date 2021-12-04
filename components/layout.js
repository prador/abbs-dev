import React, { useEffect,useState } from "react";
import Link from 'next/link'
import Script from 'next/script'
import Footer from './navigation/Footer'
import SideBar from './navigation/SideBar'

const Layout = ({ children }) => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > 300);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <>
      <SideBar/>
      <div id="w-node-_213e7ee2-f0cb-cbea-eb62-6f01783e8cfa-fe48c5ce" className="layout-spacer"></div>
      <main id="main">{children}
      <Footer/>
      <a id="scroll-top-anchor" className={scrolling? 'active' : ""} href="#main">top</a> 
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
