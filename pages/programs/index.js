import Link from 'next/link'
import Layout from '../../components/layout'
import PageHeader from '../../components/PageHeader'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/PageContent'
import TextSection from '../../components/TextSection'
import AnchorLinks from '../../components/AnchorLinks'
import { attributes, html } from '../../content/pages/programs/index.md'

const importPrograms = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../content/programs', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/programs/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const Programs = ({ programList }) => (
  <Layout>
    <PageHeader attributes={attributes} />
    <PageBanner att={attributes}/>
    <PageContent att={attributes} html={html}/>
    {/* <div className="content animate__animated animate__fadeInUp">
  
        <div className="w-layout-grid contain-block"> */}
          
    {/* {attributes.links ? <AnchorLinks att={attributes} /> : ""} */}
    {/* <TextSection att={attributes.text_section}/> */}
    
    {programList.map((post) => (
      <div key={post.slug} className="post">

            <img src={post.attributes.thumbnail} />
            <h2>{post.attributes.title}</h2>
            <Link href="/programs/post/[slug]" as={`/programs/post/${post.slug}`}>
          <a>
          </a>
        </Link>
      </div>
    ))}

    {/* </div>
    </div> */}
    
    <style jsx>{`
      .post {
        text-align: center;
      }
      img {
        max-width: 100%;
        max-height: 300px;
      }
    `}</style>
  </Layout>
)

export async function getStaticProps() {
  const programList = await importPrograms()

  return {
    props: {
      programList,
    }, // will be passed to the page component as props
  }
}

export default Programs
