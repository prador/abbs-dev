import React from "react"

const PageBodyScripts = ({attributes}) => (
  <>
      {attributes.body_scripts ? <div dangerouslySetInnerHTML={{ __html: attributes.body_scripts }} /> : null }
  </>
)

export default PageBodyScripts
