import Link from 'next/link'
import Layout from '../../../../components/layout'
import PageHeader from '../../../../components/PageHeader'
import PageBanner from '../../../../components/PageBanner'
import PageContent from '../../../../components/PageContent'
import { attributes, html } from '../../../../content/pages/programs/liberal-arts/ba-psychology/index.md'

const importTestimonials = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../../../content/testimonials', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../../../content/testimonials/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const BAPsychology = (testimonials) => {
  let programType = attributes.sections.find( ({ type }) => type === 'testimonials_section');
  let filterTestimonials = testimonials.testimonials.filter((obj) => obj.attributes.program === programType.program).splice(0, programType.limit);
  return (
  <Layout>
  <PageHeader attributes={attributes} />
  <PageBanner att={attributes}/>
  <PageContent att={attributes} html={html} testimonials={filterTestimonials}/>
</Layout>
)}

export async function getStaticProps() {
  const testimonials = await importTestimonials()

  return {
    props: {
      testimonials,
    }, // will be passed to the page component as props
  }
}

export default BAPsychology
