import Link from 'next/link'
import Layout from '../../../components/layout'
import PageHeader from '../../../components/PageHeader'
import PageBanner from '../../../components/PageBanner'
import PageContent from '../../../components/PageContent'
import { attributes, html } from '../../../content/pages/profile/advisory-council/index.md'

const importTeam = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../../content/team', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../../content/team/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const AdvisoryCouncil = ({ teamList }) => (
  <Layout>
  <PageHeader attributes={attributes} />
  <PageBanner att={attributes}/>
  <PageContent att={attributes} html={html} list={teamList.sort((a,b)=>(a.attributes.order>b.attributes.order ? 1 : -1))}/>
</Layout>
)

export async function getStaticProps() {
  const teamList = await importTeam()
  return {
    props: {
      teamList,
    }, // will be passed to the page component as props
  }
}

export default AdvisoryCouncil
