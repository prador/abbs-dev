const EmbedSection = ({att}) => {
  return (
  <>
    <section className="embed-section-wrapper">
      <div className={"embed-section-block "+`${att.embed_size ? att.embed_size : ""}`}>
            {att.section_title ? <h2 className="section-title" id={att.section_id}><span className="header-hyphen"></span>{att.section_title}</h2> : "" }
            <div dangerouslySetInnerHTML={{__html: att.embed_source}}/>
          </div>
    </section>
  </>
)}

export default EmbedSection
