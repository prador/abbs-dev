import TeamList from './TeamList'

const CollectionSection = ({att,list}) => {
  // console.log(att)
  return (
  <>
    <section className="collection-section-wrapper">
      {att.section_title ? <h2 className="section-title" id={att.section_id}><span className="header-hyphen"></span>{att.section_title}</h2> : "" }
      {list ? <TeamList list={list} tag={att.collection_content}/> : "" }
    </section>
  </>
)}

export default CollectionSection
