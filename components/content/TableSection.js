import Link from 'next/link';
import react from 'react';
import remark from 'remark';
import html from 'remark-html';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const TableSection = ({att}) => {
  return (
  <>
    <section className="table-section-wrapper">
      <div className={"table-section-block "+`${att.embed_size ? att.embed_size : ""}`}>
            {att.section_title ? <h2 className="section-title" id={att.section_id}><span className="header-hyphen"></span>{att.section_title}</h2> : "" }
            <div className="table-wrapper" dangerouslySetInnerHTML={{__html: att.table_content}}/>
          </div>
    </section>
  </>
)}

export default TableSection
