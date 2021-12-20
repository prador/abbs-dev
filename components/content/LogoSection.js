import Link from 'next/link'
import React from "react";

const LogoSection = ({att}) => {

  return (
    <>
    <section className="logo-section-wrapper">
    {att.section_title ? <h2 className="section-title" id={att.section_id}><span className="header-hyphen"></span>{att.section_title}</h2> : "" }
    {att.logos ?
      <div className={"logo-section-block "+`${att.section_grid_size ? att.section_grid_size : ""}`}>
        {att.logos.map((logo) => (
          <a key={logo.id} href={logo.logo_link ? logo.logo_link : ""} target="_blank" className="logo-link">
            <img src={"../"+logo.logo_image} className={"logo-image "+`${logo.logo_size ? logo.logo_size : ""}`} alt={logo.logo_title}/>
            {logo.logo_subtitle ? <h4 className="logo-subtitle">{logo.logo_subtitle}</h4> : "" }
            {logo.logo_title ? <h6 className="logo-title">{logo.logo_title}</h6> : ""}
          </a>
        ))}
      </div>
      : "" }
      </section>
    </>
  )
}

export default LogoSection
