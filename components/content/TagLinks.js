import Link from 'next/link'
import React, { useEffect,useState } from "react";

const TagLinks = ({att,title,search}) => {
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
      <div className="in-page-links active tag-links">
          <h4>{title}</h4>
        {att.links.map((link,id) => (
          <a key={id} href={`${link.anchor_loc ? link.anchor_loc : ""}`}>{link.anchor_label}</a>
        ))}
      </div>
      : "" }
    </>
  )
}

export default TagLinks
