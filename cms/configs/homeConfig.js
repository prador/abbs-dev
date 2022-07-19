import contentSections from "./contentSections"
import sliderSection from "../sections/sliderSection"
import programSelectorSection from "../sections/programSelectorSection"
import newsEventsSection from "../sections/newsEventsSection"
import programAccordionSection from "../sections/programAccordionSection"
import recognitionAccreditationSection from "../sections/recognitionAccreditationSection"
import faqSection from "../sections/faqSection"
import textSection from "../sections/textSection"
import logoSection from "../sections/logoSection"
import anchorSection from "../sections/anchorSection"
import accordionSection from "../sections/accordionSection"
import gallerySection from "../sections/gallerySection"
import imageSection from "../sections/imageSection"
import embedSection from "../sections/embedSection"
import programDetailsSection from "../sections/programDetailsSection"
import programBriefSection from "../sections/programBriefSection"
import personSection from "../sections/personSection"
import testimonialsSection from "../sections/testimonialsSection"
import tableSection from "../sections/tableSection"
import collectionSection from "../sections/collectionSection"

const homeConfig = {
    name: "homepage",
    label: "Homepage",
    create: false,
    delete: false,
    format: "frontmatter",
    folder: "content/home/",
    slug: "{{slug}}",
    fields: [{
        label: "Title",
        name: "title",
        widget: "string",
        required: true
      },
      {
        label: "SEO Title",
        name: "seo_title",
        widget: "string",
        // required: true
      },
      {
        label: "SEO Description",
        name: "seo_description",
        widget: "string",
        // required: true
      },
      {
        label: "SEO Keywords",
        name: "seo_keywords",
        widget: "string"
      },        
      
      {
        label: "Publish Date",
        name: "date",
        widget: "datetime",
        required: true
      },
      {
        label: 'Content Sections',
        hint: "Adding one of multiple extra fields for the page, based on the need",
        name: 'sections',
        required: false,
        widget: "list",
        types: [
          sliderSection,
          programSelectorSection,
          newsEventsSection,
          programAccordionSection,
          recognitionAccreditationSection,
          faqSection,
          textSection,
          logoSection,
          anchorSection,
          accordionSection,
          gallerySection,
          imageSection,
          embedSection,
          programDetailsSection,
          programBriefSection,
          personSection,
          testimonialsSection,
          tableSection,
          collectionSection
        ]
      },
      {
        label: "Header Scripts",
        name: "header_scripts",
        widget: "text",
        required: false,
        hint: "Add content or scripts here to be added on all pages, in the header"
      },
      {
        label: "Body Scripts",
        name: "body_scripts",
        widget: "text",
        required: false,
        hint: "Add content or scripts here to be added on all pages, in the body"
      }
    ]
  }

export default homeConfig