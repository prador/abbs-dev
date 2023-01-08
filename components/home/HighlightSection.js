import Link from 'next/link'
import React from "react";

const HighlightSection = ({att}) => {

  return (
    <>
    <section className="content logo-section-wrapper">
    {att.section_title ? <h2 className="section-title" id={att.section_id}><span className="header-hyphen"></span>{att.section_title}</h2> : "" }
    {att.highlights ?
      <div className={"highlight-section-block "+`${att.section_grid_size ? att.section_grid_size : ""}`}>
        {att.highlights.map((highlight) => (
          <span key={highlight.id} className="logo-link">
            <img src={"../"+highlight.logo_image} className={"logo-image "+`${highlight.logo_size ? highlight.logo_size : ""}`} alt={highlight.logo_title}/>
            {highlight.logo_stat ? <h4 className="logo-subtitle">{highlight.logo_stat}</h4> : ""}
            {highlight.logo_subtitle ? <h6 className="logo-title">{highlight.logo_subtitle}</h6> : ""}
          </span>
        ))}
      </div>
      : "" }
      </section>
    </>
  )
}

export default HighlightSection
