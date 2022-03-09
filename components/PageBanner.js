
import Image from 'next/image'
import { useRouter } from "next/router";

const PageBanner = ({att}) => {
  const router = useRouter();
  const routes= router.route.split('/');
  let pageLevel = routes.length -1;
  const { slug } = router.query
  console.log(slug)
  const pageSub = () => {
    if (routes[2] == "category") {
      return "/ "+slug.replace(/-/g, ' ').toUpperCase()
    }
  }
  return (
    <>
      <div className="page-header">
        <div className="div-block-4">
          <div className="div-block-5"></div>
          {/* <Image src={att.thumbnail} loading="lazy" alt="" className="image" layout="fill" /> */}
          <img src={"../".repeat(pageLevel)+att.thumbnail} className="image"/>
        </div>
        <div className="div-block-7">
          <div id="w-node-_5eb63cd6-7a5a-d031-e524-17bf1b83033c-fe48c5ce" className="post-title-section">
            <h1>{att.title} <span className='banner-subtitle'>{slug ? pageSub() : null}</span></h1>
          </div>
        </div>
      </div>
    </>
  )
} 

export default PageBanner
