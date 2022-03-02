const TeamList = ({list,tag}) => {
  console.log(tag)
  console.log(list)

  return (
  <>
        {list.map((item) => (
          <>
          { item.attributes.tags[0] == tag ?
            <div key={item.slug} className={"bio-card "+`${item.attributes.tags ? item.attributes.tags[0].replace(/\s/g , "-").toLowerCase() : null}`}> 
              <div className="bio-image"><img src={"../"+item.attributes.thumbnail} /></div>
              <div className="bio-content">
                <h4 className="bio-name">{item.attributes.name}</h4>
                <p className="bio-qualifications">{item.attributes.qualifications}</p>
                <p className="bio-title">{item.attributes.title}</p>
                <div className="bio-desc" dangerouslySetInnerHTML={{__html:item.html}}></div>
              </div>
            </div>
            : null
          }
            </>
        ))}
  </>
)}

export default TeamList
