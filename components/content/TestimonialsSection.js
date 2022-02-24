import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const TestimonialsSection = ({att,testimonialsList}) => {
  let imgPos;

  const getPos = () => {
    if(att.image_position) {
      imgPos = att.image_position.replace(/\s/g , "-").toLowerCase();
    }
    return imgPos
  }
  return (
  <>
    {testimonialsList ? 
    <section className="text-section-wrapper">
    <>
     <div key={att.id} className="text-section-block">
        {att.section_title ? <h2 className="section-title" id={att.section_id}><span className="header-hyphen"></span>{att.section_title}</h2> : "" }
        {testimonialsList.testimonialsList.map((post) => (
            <div className="news-post">
              <img className="news-post-image" src={"../../"+post.attributes.thumbnail}></img>
              <div className="news-post-content">
                <h5>{post.attributes.title}</h5>
                <p dangerouslySetInnerHTML={{__html: post.html}}></p>
              </div>
            </div>
            ))}
      </div>
      </>
    </section>
    : "" }
  </>
)}

export default TestimonialsSection
