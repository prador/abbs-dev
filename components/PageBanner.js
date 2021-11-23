
import Image from 'next/image'

const PageBanner = ({att}) => (
  <>
    <div className="page-header">
      <div className="div-block-4">
        <div className="div-block-5"></div>
        {/* <Image src={att.thumbnail} loading="lazy" alt="" className="image" layout="fill" /> */}
        <img src={att.thumbnail} className="image"/>
      </div>
      <div className="div-block-7">
        <div id="w-node-_5eb63cd6-7a5a-d031-e524-17bf1b83033c-fe48c5ce" className="post-title-section">
          <h1 className="heading">{att.title}</h1>
          <div className="post-info-wrapper">
            <div className="post-info">{att.title}</div>
            <div className="post-info">|</div>
            <a href="#" className="post-info when-link">Text Link</a>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default PageBanner
