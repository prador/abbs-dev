
import Image from 'next/image'

const PageBanner = () => (
  <>
    <div className="page-header">
      <div className="div-block-4">
        <div className="div-block-5"></div>
        <Image src="/public/static/img/banner.jpg" loading="lazy" alt="" className="image" layout="fill" />
      </div>
      <div className="div-block-7">
        <div id="w-node-_5eb63cd6-7a5a-d031-e524-17bf1b83033c-fe48c5ce" className="post-title-section">
          <h1 className="heading">Heading</h1>
          <div className="post-info-wrapper">
            <div className="post-info">This is some text inside of a div block.</div>
            <div className="post-info">|</div>
            <a href="#" className="post-info when-link">Text Link</a>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default PageBanner
