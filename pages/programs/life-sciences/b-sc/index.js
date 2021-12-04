import Link from 'next/link'
import Layout from '../../../../components/layout'
import PageHeader from '../../../../components/PageHeader'
import PageBanner from '../../../../components/PageBanner'
import PageContent from '../../../../components/PageContent'
import { attributes, html } from '../../../../content/pages/programs/life-sciences/b-sc/index.md'

const BSc = () => (
  <Layout>
  <PageHeader attributes={attributes} />
  <PageBanner att={attributes}/>
  <PageContent att={attributes} html={html}/>
</Layout>
)

export default BSc
