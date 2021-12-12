// import { useState } from "react";
// import { useRef } from "react";
// const faqs = [
//     {
//       question: "Lorem ipsum dolor sit amet?",
//       answer:
//         "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
//     },
//     {
//       question: "Dignissimos sequi architecto?",
//       answer:
//         "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
//     },
//     {
//       question: "Voluptas praesentium facere?",
//       answer:
//         "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
//     },
//   ];

// const ProgramAccordion = () => {
//   const [clicked, setClicked] = useState("0");

//   const contentEl = useRef();
//   const handleToggle = (index) => {
//     if (clicked === index) {
//       return setClicked("0");
//     }
//     setClicked(index);
//   };
//   const mouseEnter = (index) => {
//     if (clicked === index) {
//       return setClicked(index);
//     }
//     setClicked(index);
//   };
//   const mouseLeave = (index) => {
//     if (clicked === index) {
//       return setClicked(index);
//     }
//     setClicked("0");
//   };

//   return (
//     <div className="content animate__animated animate__fadeInUp">
//         <ul className="accordion">
//             {faqs.map((faq, index) => (
//                 // <li className={`accordion_item ${clicked === index ? "active" : ""}`}>
//                 //     <div className="button" onClick={() => handleToggle(index)} onMouseEnter={(e) => mouseEnter(index)} onMouseLeave={(e) => mouseLeave(index)}>
//                 //         {faq.question}
//                 //         <span className="control">{clicked === index ? "—" : "+"} </span>
//                 //     </div>
//                 //     <div
//                 //         ref={contentEl}
//                 //         className="answer_wrapper"
//                 //         style={
//                 //             clicked === index
//                 //             ? { height: contentEl.current.scrollHeight }
//                 //             : { height: "0px" }
//                 //         }
//                 //     >
//                 //         <p className="answer">{faq.answer}</p>
//                 //     </div>
//                 // </li>
//                 <li className={`tabs accordion_item ${clicked === index ? "active" : ""}`}>
//                 <div className="button social-links twitter-icon" onClick={() => handleToggle(index)} onMouseEnter={(e) => mouseEnter(index)} onMouseLeave={(e) => mouseLeave(index)}>
//                   <a href="https://twitter.com/renettarenula">twitter</a>
//                   {faq.question}
//                         <span className="control">{clicked === index ? "—" : "+"} </span>
//                 </div>
//                 <div className="paragraph" ref={contentEl}
//                         className="answer_wrapper"
//                         style={
//                             clicked === index
//                             ? { height: contentEl.current.scrollHeight }
//                             : { height: "0px" }
//                         }>
//                   <h1>Twitter</h1>
//                   <p>{faq.answer}</p>
//                 </div>
//               </li>
//             ))}
//         </ul>
//     </div>
//   );
// };

// export default ProgramAccordion;