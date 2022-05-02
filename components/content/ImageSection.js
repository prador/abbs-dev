
const ImageSection = ({att}) => {
  return (
    <>
     <>
        <div className={"section-content "}>
          {att.section_image ? 
            <div className="section-image">
              <img src={"../"+att.section_image} alt={att.section_title}/>
            </div> : "" }
          </div>
      </>
  </>
)}

export default ImageSection
