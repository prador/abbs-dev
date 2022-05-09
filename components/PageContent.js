import React, { useEffect,useState } from "react";
import Link from 'next/link'
import Accordion from './content/Accordion'
import AnchorLinks from './content/AnchorLinks'
import LogoSection from './content/LogoSection'
import TextSection from './content/TextSection'
import ImageSection from './content/ImageSection'
import TableSection from './content/TableSection'
import GallerySection from './content/GallerySection'
import AccordionSection from "./content/AccordionSection";
import EmbedSection from "./content/EmbedSection"
import Breadcrumbs from "./navigation/Breadcrumbs";
import ProgramSection from "./content/ProgramSection"
import TestimonialsSection from "./content/TestimonialsSection"
import RelatedPostsSection from "./content/RelatedPostsSection"
import CollectionSection from "./content/CollectionSection"
import ProgramDetailsSection from "./content/ProgramDetailsSection"
import DocumentsSection from "./content/DocumentsSection";
import PersonSection from "./content/PersonSection";
import HomeSlideshow from "./home/HomeSlideshow";
// import '../assets/styles/pagecontent.module.css'

const PageContent = ({att,html,list,testimonials,docs,cls}) => {
  const [hasPrograms, setHasPrograms] = useState(false);
  const sectionSwitch = (section) => {
    switch (section.type) {
      case "slider":
        console.log(section.slides)
        return <HomeSlideshow att={section.slides} className="animate__animated animate__fadeInUp"/> 
      // case "program_accordion":
      //   return <ImageSection att={section} />
      // case "rec_acc_section":
      //   return <ImageSection att={section} />
      // case "faq_section":
      //   return <ImageSection att={section} />
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
      case "program_section":
        return <ProgramSection att={section} />
      case "testimonials_section":
        return <TestimonialsSection att={section} testimonials={testimonials} />
      case "related_posts_section":
        return <RelatedPostsSection att={section} />
      case "collection_section":
        return <CollectionSection att={section} list={list} />
      case "person_section":
        return <PersonSection att={section} />
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
      <div className={"content animate__animated animate__fadeInUp "+ `${cls? cls : null}`}>
  
        <div className="w-layout-grid contain-block">
        <Breadcrumbs att={att}/>
          {/* <div id="content-wrapper" className={getContainer()}> */}
          <div id="content-wrapper" className={att.sections ? `${getContainer() ? "has-anchors" : "full"}` : ""}>
              {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : "" }
              {att.sections ? <>
                {att.sections.map((section,index)=> (
                  <div key={index}>
                  {sectionSwitch(section)}
                  </div>
                ))}
              </> : "" }
              {docs? <DocumentsSection docs={docs}/> : ""}
          </div>
          {att.sections ? <div className={`side-float ${hasPrograms ? "has-programs" : ""}`}>
            {att.sections.map((section,index)=> (
              <>
              {section.links ? <AnchorLinks key={index} att={section} /> : ""}
              {section.type == "program_details" ? <><ProgramDetailsSection key={index} att={section} /></> : ""}
              </>
            ))}
          </div> : "" }
        </div>
      </div>
    </>
  )
} 

export default PageContent
