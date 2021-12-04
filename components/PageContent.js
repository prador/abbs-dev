import Link from 'next/link'
import Accordion from './Accordion'
import AnchorLinks from './AnchorLinks'

const PageContent = ({att,html}) => (
  <>
    <div className="content animate__animated animate__fadeInUp">
      <div className="w-layout-grid contain-block">
        <div id="w-node-_7c863792-a099-bc43-0c0c-0a99699836d9-fe48c5ce">
          <div className="body-copy w-richtext">
          <Accordion title="Click Me!" content="this is content 1" />
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
        
        {att.links ? <AnchorLinks att={att}/> : ""}
      </div>
    </div>
  </>
)

export default PageContent
