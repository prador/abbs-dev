import React, { useEffect,useState } from "react";
import { useRouter } from "next/router";
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
import ProgramSelect from "./home/ProgramSelect";
import HomeNewsEvents from "./home/HomeNewsEvents";
import ProgramAccordion from "./home/ProgramAccordion";
import HomeRecAccred from "./home/HomeRecAccred";
import HomeFaqSection from  "./home/HomeFaqSection"
// import '../assets/styles/pagecontent.module.css'

const HomePageContent = ({att,html,list,testimonials,docs,cls,newsList,eventsList}) => {
  const [hasPrograms, setHasPrograms] = useState(false);
  const sectionSwitch = (section) => {
    switch (section.type) {
      case "slider":
        return <HomeSlideshow att={section.slides} className="animate__animated animate__fadeInUp"/> 
      case "rec_acc_section":
        console.log(section)
        return <HomeRecAccred att={section}/>
      case "faq_section":
        return <HomeFaqSection att={section} />
      case "program_select":
        return <ProgramSelect att={section} />
      case "news_events_section":
        return <HomeNewsEvents newsList={newsList} eventsList={eventsList}/>
      case "program_accordion":
        return <ProgramAccordion programs={section.programs}/> 
      case "text_section":
        return <TextSection att={section} isHome={true}/>
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

          {/* <div id="content-wrapper" className={getContainer()}> */}
          <div id="content-wrapper" className={att.sections ? `${getContainer() ? "has-anchors" : "full"}` : ""}>
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
    </>
  )
} 

export default HomePageContent
