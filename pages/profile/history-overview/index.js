import Link from 'next/link'
import Layout from '../../../components/layout'
import PageHeader from '../../../components/PageHeader'
import PageBanner from '../../../components/PageBanner'
import PageContent from '../../../components/PageContent'
import AnchorLinks from '../../../components/AnchorLinks'
import { attributes, html } from '../../../content/pages/profile/history-overview/index.md'

const HistoryOverview = () => (
  <Layout>
  <PageHeader attributes={attributes} />
  <PageBanner att={attributes}/>
  <PageContent att={attributes} html={html}/>
  {/* {attributes.sections.map((section)=> (
            <>
            <section className="text-section-wrapper">
                {section.text_section ?  <>
                { section.text_section.map((section,index) => (
                      <div key={section.id} className="text-section-block">
                        {section.section_title ? <h2 className="text-section-title" id={section.section_id}><span className="header-hyphen"></span>{section.section_title}</h2> : "" }
                        {section.section_text ? <div dangerouslySetInnerHTML={{ __html: section.section_text }} /> :"" }
                        {section.section_button_label ? <a className="btn btn-outline slide-btn" target="_blank" href={section.section_button_link ? section.section_button_link : "#"}>{section.section_button_label}</a> :"" }
                      </div>
                ))}
                  </> : "" }
                </section>
            </>
          ))} */}
</Layout>
)

export default HistoryOverview
