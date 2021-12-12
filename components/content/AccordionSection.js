import Link from 'next/link';
import react from 'react';
import remark from 'remark';
import html from 'remark-html';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { useState,useRef } from "react";
const AccordionSection = ({att}) => {
  const [clicked, setClicked] = useState("0");

  const contentEl = useRef();
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  return (
  <>
    <section className="text-section-wrapper accordion-section-wrapper">
     {att.accordions ?  <>
      {att.section_title ? <h2 className="text-section-title" id={att.section_id}><span className="header-hyphen"></span>{att.section_title}</h2> : "" }
      <ul className="accordion-list">
      {att.accordions.map((acc,index) => (
             <li className={`accordion-item ${clicked === index ? "active" : ""}`}>
             <div className="accordion-title" onClick={() => handleToggle(index)}>
                 <h6>{acc.accordion_title}</h6>
                 <span className="control">{clicked === index ? "—" : "+"} </span>
             </div>
             <div
                 ref={contentEl}
                 className="accordion-content"
                 style={
                     clicked === index
                     ? { height: contentEl.current.scrollHeight }
                     : { height: "0px" }
                 }
             >
                 <div><ReactMarkdown children={acc.accordion_content} remarkPlugins={[remarkGfm]} /></div>
             </div>
         </li>
    ))}
      </ul>
      </> : "" }
    </section>
  </>
)}

export default AccordionSection
