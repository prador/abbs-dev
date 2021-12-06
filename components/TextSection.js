import Link from 'next/link'
import remark from 'remark';
import html from 'remark-html';

const TextSection = ({att}) => (
  <>
    <div className="text-section-wrapper">
     {att ?  <>
     { att.map((section,index) => (
          <div key={section.id} className="text-section-block">
            {section.section_title ? <h2 className="text-section-title" id={section.section_id}><span className="header-hyphen"></span>{section.section_title}</h2> : "" }
            {section.section_text ? <div dangerouslySetInnerHTML={{ __html: section.section_text }} /> :"" }
            {section.section_button_label ? <a className="btn btn-outline slide-btn" target="_blank" href={section.section_button_link ? section.section_button_link : "#"}>{section.section_button_label}</a> :"" }
          </div>
    ))}
      </> : "" }
    </div>
  </>
)

export default TextSection
