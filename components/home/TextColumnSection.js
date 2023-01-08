import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const TextColumnSection = ({att,isHome}) => {
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
            <div className="section-richtext">
              <ReactMarkdown children={att.section_text} remarkPlugins={[remarkGfm]} />
            </div>
          </div>
          <div className='text-blocks-wrapper'>
          {att.blocks ? att.blocks.map((block,index)=> (
            <div className='block'>
              <div className='block-text' style={{background: block.bg_color}}>
                <div>
                <h3>{block.block_title}</h3>
                <h6>{block.block_subtitle}</h6>
                <ReactMarkdown children={block.block_text} remarkPlugins={[remarkGfm]} />
                </div>
                {block.button_label ? <a className="btn btn-ghost slide-btn" target="_blank" href={block.button_link ? block.button_link : "#"}>{block.button_label}</a> :"" }
              </div>
              <div className="block-image">
                <img src={"../"+block.block_image} alt={block.block_title}/>
              </div>
            </div>
          )) : null}
          </div>
      </div>
      </>
    </section>
  </>
)}

export default TextColumnSection
