import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { useRouter } from "next/router";

const ProgramSection = ({att}) => {
  const router = useRouter();
  const routesArray= router.route.split('/');
  let pageLevel = routesArray.length -1;

  return (
  <>
    <section className="program-section-wrapper" id={att.section_id}>
     {att.programs ?  <>
      {att.section_logo ? <img className="program-logo" src={"../".repeat(pageLevel)+att.section_logo}alt={att.section_title} /> : "" }
      {att.section_title ? <h2 className="program-section-title" ><span className="header-hyphen"></span>{att.section_title}</h2> : "" }
      {att.programs.map((prog,index) => (
        <>
             <h4 className="program-title">
             <span className="header-hyphen"></span>{prog.program_title}
             </h4>
             <div className="program-overview-content" >
                 <ReactMarkdown children={prog.program_content} remarkPlugins={[remarkGfm]} />
                 {prog.program_link_label ? <a className="btn btn-outline slide-btn" href={prog.program_link_loc? prog.program_link_loc : "#"}>{prog.program_link_label}</a> :"" }
             </div>
             </>
    ))}
      </> : "" }
    </section>
  </>
)}

export default ProgramSection
