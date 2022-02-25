import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const DocBlock = (doc) => {
  return (
  <div className='doc-item'>
    <a href={"/"+doc.doc.asset} className="doc-btn" target="_blank">
        <p><strong>{doc.doc.title}:</strong> {doc.doc.description}</p>
    </a>
  </div>
)}
const DocumentsSection = ({ docs }) => {
let aqar = docs.filter((obj) => obj.attributes.certification === "AQAR");
let aishe = docs.filter((obj) => obj.attributes.certification === "AISHE");
let form = docs.filter((obj) => obj.attributes.certification === "Form 10B");
let ugc = docs.filter((obj) => obj.attributes.certification === "UGC");
let nba = docs.filter((obj) => obj.attributes.certification === "NBA");
let naac = docs.filter((obj) => obj.attributes.certification === "NAAC");
let iqac = docs.filter((obj) => obj.attributes.certification === "IQAC");
let iacbe = docs.filter((obj) => obj.attributes.certification === "IACBE");
let aicte = docs.filter((obj) => obj.attributes.certification === "AICTE");
let shb = docs.filter((obj) => obj.attributes.certification === "Student Hand Book");
  return (
  <>
    {docs ? 
    <section className="doc-wrapper">
    <>
     <div className="doc-block">
     <h4 className="doc-block-title">AQAR</h4>
     {aqar.map(({attributes}) => <>
            <DocBlock doc={attributes}/>
        </>)}
        </div>
        <div className="doc-block">
     <h4 className="doc-block-title">AISHE</h4>
     {aishe.map(({attributes}) => <>
            <DocBlock doc={attributes}/>
        </>)}
        </div>
        <div className="doc-block">
     <h4 className="doc-block-title">Form no. 10B</h4>
     {form.map(({attributes}) => <>
            <DocBlock doc={attributes}/>
        </>)}
        </div>
        <div className="doc-block">
     <h4 className="doc-block-title">UGC</h4>
     {ugc.map(({attributes}) => <>
            <DocBlock doc={attributes}/>
        </>)}
        </div>
        <div className="doc-block">
     <h4 className="doc-block-title">NBA</h4>
     {nba.map(({attributes}) => <>
            <DocBlock doc={attributes}/>
        </>)}
        </div>
        <div className="doc-block">
     <h4 className="doc-block-title">NAAC</h4>
     {naac.map(({attributes}) => <>
            <DocBlock doc={attributes}/>
        </>)}
        </div>
        <div className="doc-block">
     <h4 className="doc-block-title">IQAC</h4>
     {iqac.map(({attributes}) => <>
            <DocBlock doc={attributes}/>
        </>)}
        </div>
        <div className="doc-block">
     <h4 className="doc-block-title">IACBE</h4>
     {iacbe.map(({attributes}) => <>
            <DocBlock doc={attributes}/>
        </>)}
        </div>
        <div className="doc-block">
     <h4 className="doc-block-title">Student Hand Book</h4>
     {shb.map(({attributes}) => <>
            <DocBlock doc={attributes}/>
        </>)}
        </div>
        <div className="doc-block">
     <h4 className="doc-block-title">AICTE</h4>
     {aicte.map(({attributes}) => <>
            <DocBlock doc={attributes}/>
        </>)}
      </div>
      </>

    </section>
    : "" }
  </>
)}

export default DocumentsSection
