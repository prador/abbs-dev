const EmbedSection = ({att}) => {
  return (
  <>
    <section className="text-section-wrapper embed-section-wrapper">
      <div className="text-section-block">
            {att.section_title ? <h2 className="section-title" id={att.section_id}><span className="header-hyphen"></span>{att.section_title}</h2> : "" }
            <div dangerouslySetInnerHTML={{__html: att.embed_source}}/>
          </div>
    </section>
  </>
)}

export default EmbedSection
