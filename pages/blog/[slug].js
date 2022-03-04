import fs from 'fs'
import path from 'path'
import Layout from '../../components/layout'
import PageHeader from '../../components/PageHeader'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/PageContent'
import Breadcrumbs from '../../components/navigation/Breadcrumbs'

const Post = ({ blogpost }) => {
  if (!blogpost) return <div>not found</div>

  const { html, attributes } = blogpost

  return (
    <Layout>
    <PageHeader attributes={attributes} />
<PageBanner att={attributes}/>
<div className="content animate__animated animate__fadeInUp">

      <div className="w-layout-grid contain-block">
      <Breadcrumbs att={attributes}/>
        <div id="content-wrapper" className={attributes.sections ? `${getContainer() ? "has-anchors" : "full"}` : ""}>
    <article>
      <h1>{attributes.title}</h1>
      {/* <img src={"../../"+attributes.thumbnail} /> */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
    </div>
    </div>
    </div>
  </Layout>
  )
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), 'content/blogPosts'))
    .map((blogName) => {
      const trimmedName = blogName.substring(0, blogName.length - 3)
      return {
        params: { slug: trimmedName },
      }
    })

  return {
    paths,
    fallback: false, // constrols whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const blogpost = await import(`../../content/blogPosts/${slug}.md`).catch(
    () => null
  )

  return {
    props: {
      blogpost: blogpost.default,
    },
  }
}

export default Post
