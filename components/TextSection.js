import Link from 'next/link'

const TextSection = ({att}) => (
  <>
    <div className="hellow">
     {att ?  <>
     { att.map((section,index) => (
          <div key={section.id}>
            {section.section_title ? <h2 id={section.section_id}>{section.section_title}</h2> : "" }
            {section.section_text ? <div>{section.section_text}</div> :"" }
            {section.section_button_label ? <a className="btn btn-outline slide-btn" target="_blank" href={section.section_button_link ? section.section_button_link : "#"}>{section.section_button_label}</a> :"" }
          </div>
    ))}
      </> : "" }
    </div>
  </>
)

export default TextSection
