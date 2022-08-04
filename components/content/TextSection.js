import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const TextSection = ({att,isHome}) => {
  let imgPos;

  const getPos = () => {
    if(att.image_position) {
      imgPos = att.image_position.replace(/\s/g , "-").toLowerCase();
    }
    return imgPos
  }
  return (
  <>
    <section className={`text-section-wrapper ${isHome ? "home-content" : null}`}>
     <>
     <div key={att.id} className="text-section-block" id={att.section_id}>
        {att.section_title ? <h2 className="section-title" id={att.section_id}><span className="header-hyphen"></span>{att.section_title}</h2> : "" }
        <div className={"section-content "+`${getPos()}`}>
          {att.section_image ? 
            <div className="section-image">
              <img src={"../"+att.section_image} alt={att.section_title}/>
            </div> : "" }
        <div className="section-richtext"><ReactMarkdown children={att.section_text} remarkPlugins={[remarkGfm]} /></div>
          </div>
          {att.buttons ? att.buttons.map((button,index)=> (
            <>
                    {button.button_label ? <a className="btn btn-outline slide-btn" target="_blank" href={button.button_link ? button.button_link : "#"}>{button.button_label}</a> :"" }
            </>
          )) : null}
      </div>
      </>
    </section>
  </>
)}

export default TextSection
