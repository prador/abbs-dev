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
      <div id="w-node-_11c4dfdb-bd44-ec72-b56b-456417809616-fe48c5ce" data-w-id="11c4dfdb-bd44-ec72-b56b-456417809616" className={scrolling? 'in-page-links active' : 'in-page-links'}>
        {att.links.map((link) => (
          <a href={"#"+`${link.anchor_id ? link.anchor_id : link.anchor_title}`}>{link.anchor_title} -</a>
        ))}
      </div>
      : "" }
    </>
  )
}

export default AnchorLinks
