import TeamList from './TeamList'
import React, { useState, useEffect } from "react";

const CollectionSection = ({att,list}) => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  const filterCollection = () => {
    return list.filter((obj) => obj.attributes.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
  };
  return (
  <>
    {att.show_toggle != false? 
    <section className={"collection-section-wrapper "+ `${att.collection_content.replace(/\s/g , "-").toLowerCase()}`+"-wrapper"}>
      {att.section_title ? <h2 className="section-title" id={att.section_id}><span className="header-hyphen"></span>{att.section_title}</h2> : "" }
      <input className="search-input" id="doc-search" placeholder="Search" type="text" onChange={handleChange} value={searchValue}/>
      {list ? <TeamList list={filterCollection()} tag={att.collection_content}/> : "" }
    </section> 
    : false}
  </>
)}

export default CollectionSection
