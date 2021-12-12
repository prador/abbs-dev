import { useState,useRef } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const Accordion = (props) => {
  const [clicked, setClicked] = useState("0");

  const contentEl = useRef();
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
      <li className={`accordion_item ${clicked === index ? "active" : ""}`}>
          <div className="button" onClick={() => handleToggle(index)} onMouseEnter={(e) => mouseEnter(index)} onMouseLeave={(e) => mouseLeave(index)}>
              {props.title}
              <span className="control">{clicked === index ? "—" : "+"} </span>
          </div>
          <div
              ref={contentEl}
              className="answer_wrapper"
              style={
                  clicked === index
                  ? { height: contentEl.current.scrollHeight }
                  : { height: "0px" }
              }
          >
              {/* <p className="answer">{props.content}</p> */}
              <div><ReactMarkdown children={props.content} remarkPlugins={[remarkGfm]} /></div>
          </div>
      </li>
  );
};

export default Accordion;