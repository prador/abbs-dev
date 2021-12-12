import Link from 'next/link';
import react from 'react';
import remark from 'remark';
import html from 'remark-html';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const TableSection = ({att}) => {
  return (
  <>
    <section className="text-section-wrapper">
     {att.table_section ?  <>
     { att.table_section.map((section,index) => (
          <div key={section.id} className="text-section-block">
            {section.section_title ? <h2 className="text-section-title" id={section.section_id}><span className="header-hyphen"></span>{section.section_title}</h2> : "" }
            {/* {section.section_text ? <div dangerouslySetInnerHTML={{ __html: section.section_text }} /> :"" } */}

            <div><ReactMarkdown children={section.section_text} remarkPlugins={[remarkGfm]} /></div>
            {section.button_label ? <a className="btn btn-outline slide-btn" target="_blank" href={section.button_link ? section.button_link : "#"}>{section.button_label}</a> :"" }
          </div>
    ))}
      </> : "" }
    </section>
  </>
)}

export default TableSection
