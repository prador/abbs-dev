import TeamList from './TeamList'

const CollectionSection = ({att,list}) => {
  return (
  <>
    <section className={"collection-section-wrapper "+ `${att.collection_content.replace(/\s/g , "-").toLowerCase()}`+"-wrapper"}>
      {att.section_title ? <h2 className="section-title" id={att.section_id}><span className="header-hyphen"></span>{att.section_title}</h2> : "" }
      {list ? <TeamList list={list} tag={att.collection_content}/> : "" }
    </section>
  </>
)}

export default CollectionSection
