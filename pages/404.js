// pages/404.js
import Layout from '../components/layout'
import ProgramAccordion from '../components/home/ProgramAccordion'
import { attributes, html } from '../content/home/home.md'

export default function Custom404() {
  // console.log(attributes.program_accordion)
    return (
    <Layout>
        <div className="content home-faq-wrapper">
      <h2 className='home-section-title'>Looks like this page was not found</h2> 
      <h4><a href="/" class="btn btn-black">Back to our home page</a></h4>
      {/* <h4>Learn more about any of our programs</h4> */}
      <ProgramAccordion programs={attributes.program_accordion}/> 
    </div></Layout>
    )
  }
  