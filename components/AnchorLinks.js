import Link from 'next/link'

const AnchorLinks = ({att}) => (
  <>
<div id="w-node-_11c4dfdb-bd44-ec72-b56b-456417809616-fe48c5ce" data-w-id="11c4dfdb-bd44-ec72-b56b-456417809616" className="in-page-links">
          {att.links.map((link) => (
            <a href={"#"+`${link.anchor_id ? link.anchor_id : link.anchor_title}`}>{link.anchor_title} -</a>
          ))}
        </div>
  </>
)

export default AnchorLinks
