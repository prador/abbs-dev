import { useState,useRef } from "react";
import AccordionSection from "../content/AccordionSection";

const HomeFaqSection = ({att}) => {

return (

<div className="content home-faq-wrapper">
      <div className="w-layout-grid contain-block">
      <section className='home-faq-section'>
        <div className='home-faq-block'>
        <h2 className='home-section-title'><span className="header-hyphen"></span>FAQs</h2> 
      <AccordionSection att={att} />
      </div>
      {att.section_image ? 
            <div className="home-faq-image">
              <img src={"../"+att.section_image} alt={att.section_title}/>
            </div> : "" }
      </section>
        </div>
      </div>

)}
export default HomeFaqSection