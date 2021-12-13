import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const TextSection = ({att}) => {
  let imgPos;

  const getPos = () => {
    if(att.image_position) {
      imgPos = att.image_position.replace(/\s/g , "-").toLowerCase();
    }
    return imgPos
  }
  return (
  <>
    <section className="text-section-wrapper">
     <>
     <div key={att.id} className="text-section-block">
        {att.section_title ? <h2 className="section-title" id={att.section_id}><span className="header-hyphen"></span>{att.section_title}</h2> : "" }
        <div className={"section-content "+`${getPos()}`}>
          {att.section_image ? 
            <div className="section-image">
              <img src={"../"+att.section_image} alt={att.section_title}/>
            </div> : "" }
        <div className="section-richtext"><ReactMarkdown children={att.section_text} remarkPlugins={[remarkGfm]} /></div>
          </div>
        {att.button_label ? <a className="btn btn-outline slide-btn" target="_blank" href={att.button_link ? att.button_link : "#"}>{att.button_label}</a> :"" }
      </div>
      </>
    </section>
  </>
)}

export default TextSection
