import React, { useEffect,useState } from "react";
import Link from 'next/link'
import Script from 'next/script'
import Footer from './navigation/Footer'
import SideNav from './navigation/SideNav'

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
      <SideNav/>
      <div id="w-node-_213e7ee2-f0cb-cbea-eb62-6f01783e8cfa-fe48c5ce" className="layout-spacer"></div>
      <main id="main">{children}
      <Footer/>
      <a id="scroll-top-anchor" className={scrolling? 'active' : ""} href="#main">
      <svg width="18" height="10" viewBox="0 0 512 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_328_99)">
        <path d="M38.1012 231.293L57.8992 251.092C62.5852 255.778 70.1832 255.778 74.8702 251.092L256 70.3929L437.13 251.092C441.816 255.778 449.414 255.778 454.101 251.092L473.9 231.293C478.586 226.607 478.586 219.009 473.9 214.322L264.486 4.90793C259.8 0.221934 252.202 0.221934 247.515 4.90793L38.1012 214.322C33.4142 219.009 33.4142 226.607 38.1012 231.293V231.293Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_328_99">
        <rect width="256" height="512" fill="white" transform="translate(0 256) rotate(-90)"/>
        </clipPath>
        </defs>
        </svg>
        </a> 
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
