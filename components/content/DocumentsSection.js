const DocBlock = ({ docs,type }) => {
return <>
{docs.filter((obj) => obj.attributes.certification === type).length ? <div className="doc-block">
     <h4 className="doc-block-title"><a href={"/mandatory-disclosures/category/"+type}>{type}</a></h4>
    {docs.filter((obj) => obj.attributes.certification === type).map(({attributes}) => <>
          <div className='doc-item'>
            <a href={"/"+attributes.asset} className="doc-btn" target="_blank">
                <p><strong>{attributes.title}:</strong> {attributes.description}</p>
            </a>
          </div>
        </>)}
    </div> : null}
  </>
}
const DocumentsSection = ({ docs }) => {
  let docTypes = ["Affiliation Copy","AISHE","AICTE","AQAR","Compliance with RTI","Form 10B","IACBE","IQAC","NAAC","NBA","Student Hand Book","UGC"]
  return (
  <>
    <section className="doc-wrapper">
      {docTypes.map((type) => <DocBlock docs={docs} type={type}/> )}
    </section>
    
  </>
)}

export default DocumentsSection
