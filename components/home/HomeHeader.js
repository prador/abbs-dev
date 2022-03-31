const HomeHeader = ({attributes}) => {
  // console.log(children)
  // console.log(attributes.header_scripts)
  return (
  <>
          {attributes.header_scripts ? <head dangerouslySetInnerHTML={{ __html: attributes.header_scripts }} /> : "" }
  </>
)}

export default HomeHeader
