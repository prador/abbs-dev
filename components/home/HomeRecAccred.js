import { useState,useRef } from "react";

const HomeRecAccred = ({att}) => {

return (

<div className="content">
      <div className="w-layout-grid contain-block">
      <section className='rec-acred-section'>
        <div className='rec-acred-block'>
      <h2 className='home-section-title'><span className="header-hyphen"></span>{att.section_title}</h2>
      
      <div className='rec-acred-wrapper'>
        <div className="rec-acred-content">
          <p>{att.section_text}</p>
          <a href="/abbs-edge/recognition-accreditations" className="btn btn-outline">View More</a>
        </div>
        {att.logos.map((post,index) => 
          <>
          <img key={index} className="rec-acred-image" src={post.logo_image}/>
          </>
        )}
      </div>
        
    </div>
    </section>
        </div>
      </div>

)}
export default HomeRecAccred