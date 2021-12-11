import React, { useEffect,useState } from "react";
import Link from 'next/link'
import Accordion from './Accordion'
import AnchorLinks from './AnchorLinks'
import LogoSection from './LogoSection'
import TextSection from '../components/TextSection'
import Breadcrumbs from "./Breadcrumbs";
// import '../assets/styles/pagecontent.module.css'

const PageContent = ({att,html}) => {
  return (
    <>
      <div className="content animate__animated animate__fadeInUp">
  
        <div className="w-layout-grid contain-block">
          
          <div id="w-node-_7c863792-a099-bc43-0c0c-0a99699836d9-fe48c5ce">
          <Breadcrumbs att={att}/>
            <div className="page-body w-richtext">
            {att.accordion ? 
            <>{att.accordion.map((acc)=>(<Accordion  key={acc.id} title={acc.anchor_title} content={acc.anchor_id} />))}</>
            : "" }
              <div dangerouslySetInnerHTML={{ __html: html }} />
              
              {att.sections.map((section)=> (
            <>
            {section.logos ? <LogoSection att={section} /> : ""}
            </>
          ))}
              {att.sections.map((section)=> (
            <>
            {section.text_section ? <TextSection att={section}/> : ""}
            </>
          ))}
            </div>
          </div>
          {att.sections.map((section)=> (
            <>
            {section.links ? <AnchorLinks att={section} /> : ""}
            </>
          ))}
        </div>
      </div>
    </>
  )
} 

export default PageContent
