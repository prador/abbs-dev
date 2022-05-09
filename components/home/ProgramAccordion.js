import { useState,useRef } from "react";

const ProgramAccordion = ({programs}) => {
  const [clicked, setClicked] = useState("0");
  const contentEl = useRef();
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  const mouseEnter = (index) => {
    if (clicked === index) {
      return setClicked(index);
    }
    setClicked(index);
  };
  const mouseLeave = (index) => {
    if (clicked === index) {
      return setClicked(index);
    }
    setClicked("0");
  };

  return (
    <div className="content animate__animated animate__fadeInUp">
          <h2 className='home-section-title'><span className="header-hyphen"></span>Our Programs</h2>
        <ul className="program-accordion">
            {programs.map((prog, index) => (
                <li key={index} className={`program-tabs ${clicked === index ? "active" : ""}`} 
                onClick={() => handleToggle(index)} 
                onMouseEnter={(e) => mouseEnter(index)} 
                onMouseLeave={(e) => mouseLeave(index)}
                style={{backgroundImage: `url(../${prog.bg_image})`}}>
                <div className="program-content" style={{background: prog.bg_color}}>
                  <span className="prog-bg-logo-wrapper "><img className="prog-bg-logo bg-logo-1" src={prog.icon} alt={prog.program}/><img className="prog-bg-logo bg-logo-2" src={prog.icon} alt={prog.program}/></span>
                  <div>
                    <img src={prog.icon} alt={prog.program}/>
                    <h4 className="program-accordion-title">{prog.program}</h4>
                  </div>
                  <ul>
                  {prog.links.map((link,index) => (
                    <li key={index}><a className=" prog-link" href={link.loc}>{link.name}</a></li>
                  ))}
                  </ul>
                </div>
                <div className="program-expanded" ref={contentEl}
                        style={
                            clicked === index
                            ? { height: contentEl.current.scrollHeight }
                            : { height: "0px" }
                        }>
                </div>
              </li>
            ))}
        </ul>
    </div>
  );
};

export default ProgramAccordion;