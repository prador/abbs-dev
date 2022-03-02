import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const PersonSection = ({att}) => {
  return (
    <>
    <section className="person-section-wrapper">
    {att.section_title ? <h2 className="section-title" id={att.section_id}><span className="header-hyphen"></span>{att.section_title}</h2> : "" }
    {att.people ?
      <div className={"person-section-block"}>
        {att.people.map((person) => (
          <div key={person.slug} className={"bio-card person-card"}> 
          <div className="bio-image">{person.thumbnail ? <img src={"../"+person.thumbnail} /> : null }</div>
          <div className="bio-content">
            <h4 className="bio-name">{person.name}</h4>
            <p className="bio-qualifications">{person.qualifications}</p>
            <p className="bio-title">{person.title}</p>
            {/* <div className="bio-desc" dangerouslySetInnerHTML={{__html:person.body}}></div> */}
            <ReactMarkdown children={person.body} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
        ))}
      </div>
      : "" }
      </section>
    </>
  )
}

export default PersonSection
