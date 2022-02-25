import Link from 'next/link'
import Layout from '../../components/layout'
import PageHeader from '../../components/PageHeader'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/PageContent'
import { attributes, html } from '../../content/pages/mandatory-disclosures/index.md'

const importDocs = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../content/docs', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/docs/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const MandatoryDisclosures = (docList) =>{
  return (
  <Layout>
  <PageHeader attributes={attributes} />
  <PageBanner att={attributes}/>
  <PageContent att={attributes} html={html} docs={docList.docList}/>
</Layout>
)}

export async function getStaticProps() {
  const docList = await importDocs()
  return {
    props: {
      docList,
    }, // will be passed to the page component as props
  }
}


export default MandatoryDisclosures
