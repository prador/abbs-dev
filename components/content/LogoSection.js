import Link from 'next/link'
import React from "react";

const LogoSection = ({att}) => {

  return (
    <>
    {att.logos ?
      <div id="w-node-_11c4dfdb-bd44-ec72-b56b-456417809616-fe48c5ce" data-w-id="11c4dfdb-bd44-ec72-b56b-456417809616">
        {att.logos.map((logo) => (
          <a key={logo.id} href={"#"+`${logo.logo_link ? logo.logo_link : ""}`}>
            <img src={"../"+logo.logo_image} className="image"/>
            <h6>{logo.logo_title}</h6>
          </a>
        ))}
      </div>
      : "" }
    </>
  )
}

export default LogoSection
