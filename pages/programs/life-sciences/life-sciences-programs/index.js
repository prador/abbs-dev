import Link from 'next/link'
import Layout from '../../../../components/layout'
import PageHeader from '../../../../components/PageHeader'
import PageBanner from '../../../../components/PageBanner'
import PageContent from '../../../../components/PageContent'
import { attributes, html } from '../../../../content/pages/programs/life-sciences/life-sciences-programs/index.md'

const LifeSciencesPrograms = (props) => {
  // console.log(props)
  return(
  <Layout>
  <PageHeader attributes={attributes} />
  <PageBanner att={attributes}/>
  <PageContent att={attributes} html={html}/>
</Layout>
)}

// export const getServerSideProps = async (ctx) => {

//   const {data,error,count} = await fetch("https://github.com/prador/abbs-dev/blob/main/content/pages/faqs/index.md")
//   const allData = JSON.stringify(data)
//     return {
//       props: {
//         allData
//       }
//   }
// }
export default LifeSciencesPrograms
