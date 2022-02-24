import Link from 'next/link'
import React, { useEffect,useState } from "react";

const AnchorLinks = ({att}) => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > 100);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  return (
    <>
    {att.links ?
      <div className={scrolling? 'in-page-links active' : 'in-page-links'}>
        {att.links.map((link,id) => (
          <a key={id} href={"#"+`${link.anchor_loc ? link.anchor_loc : ""}`}>{link.anchor_label} -</a>
        ))}
      </div>
      : "" }
    </>
  )
}

export default AnchorLinks
