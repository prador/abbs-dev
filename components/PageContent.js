import Link from 'next/link'

const PageContent = ({att,html}) => (
  <>
    <div className="content">
      <div className="w-layout-grid contain-block">
        <div id="w-node-_7c863792-a099-bc43-0c0c-0a99699836d9-fe48c5ce">
          <div className="body-copy w-richtext">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
        <div id="w-node-_11c4dfdb-bd44-ec72-b56b-456417809616-fe48c5ce" data-w-id="11c4dfdb-bd44-ec72-b56b-456417809616" className="in-page-links">
          <a href="#">Management - </a>
          <a href="#">Life Sciences - </a>
          <a href="#">Commerce - </a>
          <a href="#">Liberal Arts - </a>
          <a href="#">Information Technology - </a>
        </div>
      </div>
    </div>
  </>
)

export default PageContent
