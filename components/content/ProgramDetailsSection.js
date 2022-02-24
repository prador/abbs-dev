import Link from 'next/link'
import React, { useEffect,useState } from "react";

const ProgramDetailsSection = ({att}) => {
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
    {att.next_intake ?
      <div className={scrolling? 'prog-details active' : 'prog-details'}>
          <h4>Program details</h4>
        <p><strong>Next Intake: </strong>{att.next_intake}</p>
        {att.duration ? <p><strong>Duration: </strong>{att.duration}</p> : ""}
        {att.credentials ? <p><strong>Credentials: </strong>{att.credentials}</p> : ""}
        {att.deadlines ? <p><strong>Deadlines: </strong>{att.deadlines}</p> : ""}
        {att.apply_form ? <a class="btn btn-black" href={att.apply_form}>Apply Now</a> : ""}
        {att.request_brochure_link ? <a class="btn btn-outline" href={att.request_brochure_link}>Request Brochure</a> : 
        <>{att.brochure ? <a target="_blank" class="btn btn-outline" href={"/"+att.brochure}>Request Brochure</a> : ""}</>}
        
        {att.contact_form ? <a class="btn btn-outline" href={att.contact_form}>Contact Us</a> : ""}
      </div>
      : "" }
    </>
  )
}

export default ProgramDetailsSection
