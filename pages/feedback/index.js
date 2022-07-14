import Link from 'next/link'
import Layout from '../../components/layout'
import PageHeader from '../../components/PageHeader'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/PageContent'
import { attributes, html } from '../../content/pages/feedback/index.md'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Feedback = () => {
  const router = useRouter();
  
  useEffect(() => {
    if(document.querySelector("#zf_div_r6LPLwaeViZz2coWAbcw-VL4zeh66gQ2XJHjnfprDYc > iframe")) {
      console.log("exists")
    } else {
      console.log("doesn't exist")
      router.reload();
    }
  }, []);
  return (
  <Layout>
  <PageHeader attributes={attributes} />
  <PageBanner att={attributes}/>
  <PageContent att={attributes} html={html}/>
</Layout>
)}

export default Feedback
