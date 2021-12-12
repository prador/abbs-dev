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
        <ul className="program-accordion">
            {programs.program_accordion.map((prog, index) => (
                <li className={`program-tabs ${clicked === index ? "active" : ""}`} 
                onClick={() => handleToggle(index)} 
                onMouseEnter={(e) => mouseEnter(index)} 
                onMouseLeave={(e) => mouseLeave(index)}>
                <div className="program-content">
                  <div>
                    <img src={prog.icon} alt={prog.program}/>
                    <h5>{prog.program}</h5>
                  </div>
                  <ul>
                  {prog.links.map((link) => (
                    <li><a href={link.loc}>{link.name}</a></li>
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