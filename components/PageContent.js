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

const PageContent = ({att,html,list}) => {
  const sectionSwitch = (section) => {
    console.log(section)
    switch (section.type) {
      case "text_section":
        return <TextSection att={section}/>
      case "logo_section":
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
        return <CollectionSection att={section} list={list} />
      default:
        return null
    }
  }
  let fullContainer = false;

  const getContainer = () => {
    if(att.sections) {
      fullContainer = att.sections.some(section=> section.type == "anchor_section") || att.sections.some(section=> section.type == "logo_section")
    }
    return fullContainer;
  }
  
  return (
    <>
      <div className="content animate__animated animate__fadeInUp">
  
        <div className="w-layout-grid contain-block">
        <Breadcrumbs att={att}/>
          {/* <div id="content-wrapper" className={getContainer()}> */}
          <div id="content-wrapper" className={att.sections ? `${getContainer() ? "has-anchors" : "full"}` : ""}>
              {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : "" }
              {att.sections ? <>
                {att.sections.map((section)=> (
                  <>
                  {sectionSwitch(section)}
                  </>
                ))}
              </> : "" }
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
