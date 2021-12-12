const TeamList = ({att,tag}) => {
  return (
  <>
    <div className="content animate__animated animate__fadeInUp">
      <div className="w-layout-grid contain-block">
        <div id="w-node-_7c863792-a099-bc43-0c0c-0a99699836d9-fe48c5ce">
          <div className="page-body w-richtext">
            <section className="team-list-wrapper">
              {att.map((post) => (
                <>
                {post.attributes.tags == tag ?
                  <div key={post.slug} className="team-bio-card">
                    <div><img src={"../"+post.attributes.thumbnail} /></div>
                    <div>
                      <h2>{post.attributes.name}</h2>
                      <p>{post.attributes.qualification}</p>
                      <p>{post.attributes.title}</p>
                      <div dangerouslySetInnerHTML={{__html:post.html}}></div>
                    </div>
                  </div> : "" }
                  </>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  </>
)}

export default TeamList
