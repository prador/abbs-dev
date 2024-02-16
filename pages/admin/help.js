// pages/404.js
import { attributes, html } from '../../content/help/index.md'
import PageContent from '../../components/PageContent'
export default function Custom404() {
  // console.log(attributes.program_accordion)
    return (
        <div className="content home-faq-wrapper">
      <h2 className='home-section-title'>This is a help guide for the admin backend</h2> 
      <PageContent att={attributes} html={html}/>
    </div>
    )
  }
  