import React, { useEffect,useState } from "react";
import Link from 'next/link'
import Accordion from './content/Accordion'
import AnchorLinks from './content/AnchorLinks'
import LogoSection from './content/LogoSection'
import TextSection from './content/TextSection'
import TableSection from './content/TableSection'
import GallerySection from './content/GallerySection'
import AccordionSection from "./content/AccordionSection";
import EmbedSection from "./content/EmbedSection"
import Breadcrumbs from "./navigation/Breadcrumbs";
import CollectionSection from "./content/CollectionSection"
// import '../assets/styles/pagecontent.module.css'

const PageContent = ({att,html}) => {
  const sectionSwitch = (section) => {
    switch (section.type) {
      case "text_section":
        return <TextSection att={section}/>
      case "text_image_section":
        return <TextImageSection att={section}/>
      case "logos_section":
        return <LogoSection att={section} /> 
      case "gallery_section":
        return <GallerySection att={section} />
      case "image_section":
        return <ImageSection att={section} />
      case "table_section":
        return <TableSection att={section} />
      case "accordion_section":
        return <AccordionSection att={section} />
      case "embed_section":
        return <EmbedSection att={section} />
      case "collection_section":
        return <CollectionSection att={section} />
      default:
        return null
    }
  }
  return (
    <>
      <div className="content animate__animated animate__fadeInUp">
  
        <div className="w-layout-grid contain-block">
          
          <div id="w-node-_7c863792-a099-bc43-0c0c-0a99699836d9-fe48c5ce">
          <Breadcrumbs att={att}/>
            <div className="page-body w-richtext">

              {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : "" }
              {att.sections ? <>
                {att.sections.map((section)=> (
                  <>
                  {sectionSwitch(section)}
                  </>
                ))}
              </> : "" }
            </div>
          </div>
          {att.sections ? <>
            {att.sections.map((section)=> (
              <>
              {section.links ? <AnchorLinks att={section} /> : ""}
              </>
            ))}
          </> : "" }
        </div>
      </div>
    </>
  )
} 

export default PageContent
