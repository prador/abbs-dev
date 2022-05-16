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
      <a className="floating-whatsapp" target="_blank" href={"https://api.whatsapp.com/send/?phone=919148977317&text&app_absent=0"} >
      <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="150" rx="75" fill="#00E676"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M93.05 82.9401C92.0567 82.4435 87.1867 80.0501 86.28 79.7168C85.3733 79.3868 84.7133 79.2235 84.05 80.2168C83.39 81.2035 81.4933 83.4368 80.9167 84.0968C80.3367 84.7601 79.76 84.8401 78.77 84.3468C77.78 83.8468 74.5867 82.8035 70.8033 79.4301C67.86 76.8035 65.87 73.5601 65.2933 72.5668C64.7167 71.5768 65.23 71.0401 65.7267 70.5468C66.1733 70.1035 66.7167 69.3901 67.2133 68.8135C67.71 68.2335 67.8733 67.8201 68.2033 67.1568C68.5367 66.4968 68.37 65.9201 68.12 65.4235C67.8733 64.9268 65.8933 60.0501 65.0667 58.0668C64.2633 56.1368 63.4467 56.4001 62.84 56.3668C62.26 56.3401 61.6 56.3335 60.94 56.3335C60.28 56.3335 59.2067 56.5801 58.3 57.5735C57.39 58.5635 54.8333 60.9601 54.8333 65.8368C54.8333 70.7101 58.38 75.4201 58.8767 76.0835C59.3733 76.7435 65.86 86.7501 75.7967 91.0401C78.1633 92.0601 80.0067 92.6701 81.4433 93.1235C83.8167 93.8801 85.9767 93.7735 87.6833 93.5168C89.5833 93.2335 93.5433 91.1201 94.37 88.8068C95.1933 86.4935 95.1933 84.5101 94.9467 84.0968C94.7 83.6835 94.04 83.4368 93.0467 82.9401H93.05ZM74.9767 107.617H74.9633C69.0614 107.618 63.2679 106.031 58.19 103.023L56.99 102.31L44.5167 105.583L47.8467 93.4235L47.0633 92.1768C43.7638 86.9246 42.0176 80.8461 42.0267 74.6435C42.0333 56.4768 56.8133 41.6968 74.99 41.6968C83.79 41.6968 92.0633 45.1301 98.2833 51.3568C101.351 54.4121 103.783 58.0454 105.438 62.0465C107.092 66.0476 107.937 70.3371 107.923 74.6668C107.917 92.8335 93.1367 107.617 74.9767 107.617V107.617ZM103.017 46.6268C99.344 42.9299 94.9741 39.9986 90.1603 38.0028C85.3465 36.007 80.1845 34.9864 74.9733 35.0001C53.1267 35.0001 35.34 52.7835 35.3333 74.6401C35.3232 81.596 37.1479 88.4314 40.6233 94.4568L35 115L56.0133 109.487C61.8262 112.654 68.3403 114.313 74.96 114.313H74.9767C96.8233 114.313 114.61 96.5301 114.617 74.6701C114.633 69.4611 113.616 64.3005 111.625 59.4869C109.634 54.6734 106.708 50.3024 103.017 46.6268" fill="white"/>
      </svg>
      </a>
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
