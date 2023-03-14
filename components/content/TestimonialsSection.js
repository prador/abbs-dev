import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const TestimonialsSection = ({ att, testimonials, show, program, limit }) => {
  let imgPos;

  const getPos = () => {
    if(att.image_position) {
      imgPos = att.image_position.replace(/\s/g , "-").toLowerCase();
    }
    return imgPos
  }
  console.log(att)
  return (
  <>
    {testimonials.length > 0 && att.show_toggle === true ? 
    <section className="testimonial-section-wrapper">
    <>
     <div key={att.id} className="testimonial-section-block">
        {att.section_title ? <h2 className="section-title" id={att.section_id}><span className="header-hyphen"></span>{att.section_title}</h2> : "" }
        {testimonials.map((post) => (
            <div className="testimonial-post">
              <img className="testimonial-image" src={"../../"+post.attributes.thumbnail}></img>
              <div className="testimonial-content">
                <h6 className='testimonial-student'>{post.attributes.title}</h6>
                <p className="testimonial-batch">{post.attributes.program} (Batch {post.attributes.batch})</p>
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
