import React, { useEffect,useState } from "react";
import Link from 'next/link'
import Accordion from './Accordion'
import AnchorLinks from './AnchorLinks'
import TextSection from '../components/TextSection'

const PageContent = ({att,html}) => {
  return (
    <>
      <div className="content animate__animated animate__fadeInUp">
  
        <div className="w-layout-grid contain-block">
          <div id="w-node-_7c863792-a099-bc43-0c0c-0a99699836d9-fe48c5ce">
            <div className="body-copy w-richtext">
            <TextSection att={att.text_section}/>
  
            {att.accordion ? 
            <>{att.accordion.map((acc)=>(<Accordion title={acc.anchor_title} content={acc.anchor_id} />))}</>
            : "" }
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
          
          {att.links ? <AnchorLinks att={att} /> : ""}
        </div>
      </div>
    </>
  )
} 

export default PageContent
