const DocBlock = ({ docs,type }) => {
return <>
{docs.filter((obj) => obj.attributes.category === type).length ? <div className="doc-block">
     <h4 className="doc-block-title"><a href={"/naac-cycle-3/category/"+type}>{type}</a></h4>
    {docs.filter((obj) => obj.attributes.category === type).sort((a,b)=>(a.attributes.description>b.attributes.description ? 1 : -1)).map(({attributes}) => <>
    {attributes.show_toggle? <div className='doc-item'>
            <a href={"/"+attributes.document} className="doc-btn naac-doc-btn" target="_blank">
                <p>
                  <span className="index-span">{attributes.index}</span>
                   | {attributes.description}</p>
                <span className="view-span">View</span>
            </a>
          </div>
          : null}
        </>)}
    </div> : null}
  </>
}
const NaacDocumentsSection = ({ docs }) => {
  let docTypes = ["ABBS NAAC Visit video","Self Study Report","Extended Profile","Criteria - 1 Curricular Aspects","Criteria - 2 Teaching Learning and Evaluation","Criteria - 3 Research, Consultancy and Extension","Criteria - 4 Infrastructure and Learning Resources","Criteria - 5 Student Support and Progression","Criteria - 6 Governance, Leadership and Management","Criteria - 7 Innovations and Best Practices"]
  return (
  <>
    <section className="doc-wrapper">
      {docTypes.map((type) => <DocBlock docs={docs} type={type}/> )}
    </section>
    
  </>
)}

export default NaacDocumentsSection
