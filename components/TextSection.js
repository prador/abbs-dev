import Link from 'next/link';
import react from 'react';
import remark from 'remark';
import html from 'remark-html';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const TextSection = ({att}) => {
  return (
  <>
    <section className="text-section-wrapper">
     {att.text_section ?  <>
     { att.text_section.map((section,index) => (
          <div key={section.id} className="text-section-block">
            {section.section_title ? <h2 className="text-section-title" id={section.section_id}><span className="header-hyphen"></span>{section.section_title}</h2> : "" }
            {/* {section.section_text ? <div dangerouslySetInnerHTML={{ __html: section.section_text }} /> :"" } */}

            <ReactMarkdown children={section.section_text} remarkPlugins={[remarkGfm]} />
            {section.section_button_label ? <a className="btn btn-outline slide-btn" target="_blank" href={section.section_button_link ? section.section_button_link : "#"}>{section.section_button_label}</a> :"" }
          </div>
    ))}
      </> : "" }
    </section>
  </>
)}

export default TextSection
