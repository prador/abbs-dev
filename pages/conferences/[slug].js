import fs from 'fs'
import path from 'path'
import Layout from '../../components/layout'

import PageHeader from '../../components/PageHeader'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/PageContent'
import Breadcrumbs from '../../components/navigation/Breadcrumbs'

const Post = ({ conferencepost }) => {
  if (!conferencepost) return <div>not found</div>

  const { html, attributes } = conferencepost;

  return (
    <Layout layoutClass="conference-layout">
      <PageHeader attributes={attributes} />
      <PageBanner att={attributes}/>
      <PageContent att={attributes} html={html}/>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), 'content/conferences'))
    .map((conferenceName) => {
      const trimmedName = conferenceName.substring(0, conferenceName.length - 3)
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

  const conferencepost = await import(`../../content/conferences/${slug}.md`).catch(
    () => null
  )

  return {
    props: {
      conferencepost: conferencepost.default,
    },
  }
}

export default Post
